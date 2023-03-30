package com.rohithraju.hikes.service;

import com.rohithraju.hikes.domain.EventPlan;
import com.rohithraju.hikes.repository.EventPlanRepository;
import com.rohithraju.hikes.service.dto.EventPlanDTO;
import com.rohithraju.hikes.service.mapper.EventPlanMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link EventPlan}.
 */
@Service
@Transactional
public class EventPlanService {

    private final Logger log = LoggerFactory.getLogger(EventPlanService.class);

    private final EventPlanRepository eventPlanRepository;

    private final EventPlanMapper eventPlanMapper;

    public EventPlanService(EventPlanRepository eventPlanRepository, EventPlanMapper eventPlanMapper) {
        this.eventPlanRepository = eventPlanRepository;
        this.eventPlanMapper = eventPlanMapper;
    }

    /**
     * Save a eventPlan.
     *
     * @param eventPlanDTO the entity to save.
     * @return the persisted entity.
     */
    public EventPlanDTO save(EventPlanDTO eventPlanDTO) {
        log.debug("Request to save EventPlan : {}", eventPlanDTO);
        EventPlan eventPlan = eventPlanMapper.toEntity(eventPlanDTO);
        eventPlan = eventPlanRepository.save(eventPlan);
        return eventPlanMapper.toDto(eventPlan);
    }

    /**
     * Update a eventPlan.
     *
     * @param eventPlanDTO the entity to save.
     * @return the persisted entity.
     */
    public EventPlanDTO update(EventPlanDTO eventPlanDTO) {
        log.debug("Request to update EventPlan : {}", eventPlanDTO);
        EventPlan eventPlan = eventPlanMapper.toEntity(eventPlanDTO);
        eventPlan = eventPlanRepository.save(eventPlan);
        return eventPlanMapper.toDto(eventPlan);
    }

    /**
     * Partially update a eventPlan.
     *
     * @param eventPlanDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<EventPlanDTO> partialUpdate(EventPlanDTO eventPlanDTO) {
        log.debug("Request to partially update EventPlan : {}", eventPlanDTO);

        return eventPlanRepository
            .findById(eventPlanDTO.getId())
            .map(existingEventPlan -> {
                eventPlanMapper.partialUpdate(existingEventPlan, eventPlanDTO);

                return existingEventPlan;
            })
            .map(eventPlanRepository::save)
            .map(eventPlanMapper::toDto);
    }

    /**
     * Get all the eventPlans.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<EventPlanDTO> findAll(Pageable pageable) {
        log.debug("Request to get all EventPlans");
        return eventPlanRepository.findAll(pageable).map(eventPlanMapper::toDto);
    }

    /**
     * Get one eventPlan by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<EventPlanDTO> findOne(Long id) {
        log.debug("Request to get EventPlan : {}", id);
        return eventPlanRepository.findById(id).map(eventPlanMapper::toDto);
    }

    /**
     * Delete the eventPlan by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete EventPlan : {}", id);
        eventPlanRepository.deleteById(id);
    }
}
