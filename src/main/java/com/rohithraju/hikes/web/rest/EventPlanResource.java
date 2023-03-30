package com.rohithraju.hikes.web.rest;

import com.rohithraju.hikes.repository.EventPlanRepository;
import com.rohithraju.hikes.service.EventPlanService;
import com.rohithraju.hikes.service.dto.EventPlanDTO;
import com.rohithraju.hikes.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.rohithraju.hikes.domain.EventPlan}.
 */
@RestController
@RequestMapping("/api")
public class EventPlanResource {

    private final Logger log = LoggerFactory.getLogger(EventPlanResource.class);

    private static final String ENTITY_NAME = "eventPlan";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final EventPlanService eventPlanService;

    private final EventPlanRepository eventPlanRepository;

    public EventPlanResource(EventPlanService eventPlanService, EventPlanRepository eventPlanRepository) {
        this.eventPlanService = eventPlanService;
        this.eventPlanRepository = eventPlanRepository;
    }

    /**
     * {@code POST  /event-plans} : Create a new eventPlan.
     *
     * @param eventPlanDTO the eventPlanDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new eventPlanDTO, or with status {@code 400 (Bad Request)} if the eventPlan has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/event-plans")
    public ResponseEntity<EventPlanDTO> createEventPlan(@Valid @RequestBody EventPlanDTO eventPlanDTO) throws URISyntaxException {
        log.debug("REST request to save EventPlan : {}", eventPlanDTO);
        if (eventPlanDTO.getId() != null) {
            throw new BadRequestAlertException("A new eventPlan cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EventPlanDTO result = eventPlanService.save(eventPlanDTO);
        return ResponseEntity
            .created(new URI("/api/event-plans/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /event-plans/:id} : Updates an existing eventPlan.
     *
     * @param id the id of the eventPlanDTO to save.
     * @param eventPlanDTO the eventPlanDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated eventPlanDTO,
     * or with status {@code 400 (Bad Request)} if the eventPlanDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the eventPlanDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/event-plans/{id}")
    public ResponseEntity<EventPlanDTO> updateEventPlan(
        @PathVariable(value = "id", required = false) final Long id,
        @Valid @RequestBody EventPlanDTO eventPlanDTO
    ) throws URISyntaxException {
        log.debug("REST request to update EventPlan : {}, {}", id, eventPlanDTO);
        if (eventPlanDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, eventPlanDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!eventPlanRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        EventPlanDTO result = eventPlanService.update(eventPlanDTO);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, eventPlanDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code PATCH  /event-plans/:id} : Partial updates given fields of an existing eventPlan, field will ignore if it is null
     *
     * @param id the id of the eventPlanDTO to save.
     * @param eventPlanDTO the eventPlanDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated eventPlanDTO,
     * or with status {@code 400 (Bad Request)} if the eventPlanDTO is not valid,
     * or with status {@code 404 (Not Found)} if the eventPlanDTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the eventPlanDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/event-plans/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<EventPlanDTO> partialUpdateEventPlan(
        @PathVariable(value = "id", required = false) final Long id,
        @NotNull @RequestBody EventPlanDTO eventPlanDTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update EventPlan partially : {}, {}", id, eventPlanDTO);
        if (eventPlanDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, eventPlanDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!eventPlanRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<EventPlanDTO> result = eventPlanService.partialUpdate(eventPlanDTO);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, eventPlanDTO.getId().toString())
        );
    }

    /**
     * {@code GET  /event-plans} : get all the eventPlans.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of eventPlans in body.
     */
    @GetMapping("/event-plans")
    public ResponseEntity<List<EventPlanDTO>> getAllEventPlans(@org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of EventPlans");
        Page<EventPlanDTO> page = eventPlanService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /event-plans/:id} : get the "id" eventPlan.
     *
     * @param id the id of the eventPlanDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the eventPlanDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/event-plans/{id}")
    public ResponseEntity<EventPlanDTO> getEventPlan(@PathVariable Long id) {
        log.debug("REST request to get EventPlan : {}", id);
        Optional<EventPlanDTO> eventPlanDTO = eventPlanService.findOne(id);
        return ResponseUtil.wrapOrNotFound(eventPlanDTO);
    }

    /**
     * {@code DELETE  /event-plans/:id} : delete the "id" eventPlan.
     *
     * @param id the id of the eventPlanDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/event-plans/{id}")
    public ResponseEntity<Void> deleteEventPlan(@PathVariable Long id) {
        log.debug("REST request to delete EventPlan : {}", id);
        eventPlanService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
