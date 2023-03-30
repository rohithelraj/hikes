package com.rohithraju.hikes.web.rest;

import static com.rohithraju.hikes.web.rest.TestUtil.sameInstant;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.rohithraju.hikes.IntegrationTest;
import com.rohithraju.hikes.domain.EventPlan;
import com.rohithraju.hikes.repository.EventPlanRepository;
import com.rohithraju.hikes.service.dto.EventPlanDTO;
import com.rohithraju.hikes.service.mapper.EventPlanMapper;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import javax.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Base64Utils;

/**
 * Integration tests for the {@link EventPlanResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class EventPlanResourceIT {

    private static final LocalDate DEFAULT_EVENT_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_EVENT_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final ZonedDateTime DEFAULT_EVENT_START_TIME = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_EVENT_START_TIME = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final ZonedDateTime DEFAULT_EVENT_END_TIME = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_EVENT_END_TIME = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final String DEFAULT_KOMOOT_MAP = "AAAAAAAAAA";
    private static final String UPDATED_KOMOOT_MAP = "BBBBBBBBBB";

    private static final String DEFAULT_EVENT_N_AME = "AAAAAAAAAA";
    private static final String UPDATED_EVENT_N_AME = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final String DEFAULT_TRAVEL_SCHEDULE = "AAAAAAAAAA";
    private static final String UPDATED_TRAVEL_SCHEDULE = "BBBBBBBBBB";

    private static final byte[] DEFAULT_HIKE_MAIN_IMAGE = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_HIKE_MAIN_IMAGE = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_HIKE_MAIN_IMAGE_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_HIKE_MAIN_IMAGE_CONTENT_TYPE = "image/png";

    private static final byte[] DEFAULT_HIKE_HIGHLIGHT_IMAGE_1 = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_HIKE_HIGHLIGHT_IMAGE_1 = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION = "BBBBBBBBBB";

    private static final byte[] DEFAULT_HIKE_HIGHLIGHT_IMAGE_2 = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_HIKE_HIGHLIGHT_IMAGE_2 = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE = "image/png";

    private static final String DEFAULT_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/event-plans";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private EventPlanRepository eventPlanRepository;

    @Autowired
    private EventPlanMapper eventPlanMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restEventPlanMockMvc;

    private EventPlan eventPlan;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EventPlan createEntity(EntityManager em) {
        EventPlan eventPlan = new EventPlan()
            .eventDate(DEFAULT_EVENT_DATE)
            .eventStartTime(DEFAULT_EVENT_START_TIME)
            .eventEndTime(DEFAULT_EVENT_END_TIME)
            .komootMap(DEFAULT_KOMOOT_MAP)
            .eventNAme(DEFAULT_EVENT_N_AME)
            .description(DEFAULT_DESCRIPTION)
            .travelSchedule(DEFAULT_TRAVEL_SCHEDULE)
            .hikeMainImage(DEFAULT_HIKE_MAIN_IMAGE)
            .hikeMainImageContentType(DEFAULT_HIKE_MAIN_IMAGE_CONTENT_TYPE)
            .hikeHighlightImage1(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1)
            .hikeHighlightImage1ContentType(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE)
            .hikeHighlightImage1Description(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION)
            .hikeHighlightImage2(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2)
            .hikeHighlightImage2ContentType(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE)
            .hikeHighlightImage2Description(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION);
        return eventPlan;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EventPlan createUpdatedEntity(EntityManager em) {
        EventPlan eventPlan = new EventPlan()
            .eventDate(UPDATED_EVENT_DATE)
            .eventStartTime(UPDATED_EVENT_START_TIME)
            .eventEndTime(UPDATED_EVENT_END_TIME)
            .komootMap(UPDATED_KOMOOT_MAP)
            .eventNAme(UPDATED_EVENT_N_AME)
            .description(UPDATED_DESCRIPTION)
            .travelSchedule(UPDATED_TRAVEL_SCHEDULE)
            .hikeMainImage(UPDATED_HIKE_MAIN_IMAGE)
            .hikeMainImageContentType(UPDATED_HIKE_MAIN_IMAGE_CONTENT_TYPE)
            .hikeHighlightImage1(UPDATED_HIKE_HIGHLIGHT_IMAGE_1)
            .hikeHighlightImage1ContentType(UPDATED_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE)
            .hikeHighlightImage1Description(UPDATED_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION)
            .hikeHighlightImage2(UPDATED_HIKE_HIGHLIGHT_IMAGE_2)
            .hikeHighlightImage2ContentType(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE)
            .hikeHighlightImage2Description(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION);
        return eventPlan;
    }

    @BeforeEach
    public void initTest() {
        eventPlan = createEntity(em);
    }

    @Test
    @Transactional
    void createEventPlan() throws Exception {
        int databaseSizeBeforeCreate = eventPlanRepository.findAll().size();
        // Create the EventPlan
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);
        restEventPlanMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(eventPlanDTO)))
            .andExpect(status().isCreated());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeCreate + 1);
        EventPlan testEventPlan = eventPlanList.get(eventPlanList.size() - 1);
        assertThat(testEventPlan.getEventDate()).isEqualTo(DEFAULT_EVENT_DATE);
        assertThat(testEventPlan.getEventStartTime()).isEqualTo(DEFAULT_EVENT_START_TIME);
        assertThat(testEventPlan.getEventEndTime()).isEqualTo(DEFAULT_EVENT_END_TIME);
        assertThat(testEventPlan.getKomootMap()).isEqualTo(DEFAULT_KOMOOT_MAP);
        assertThat(testEventPlan.getEventNAme()).isEqualTo(DEFAULT_EVENT_N_AME);
        assertThat(testEventPlan.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testEventPlan.getTravelSchedule()).isEqualTo(DEFAULT_TRAVEL_SCHEDULE);
        assertThat(testEventPlan.getHikeMainImage()).isEqualTo(DEFAULT_HIKE_MAIN_IMAGE);
        assertThat(testEventPlan.getHikeMainImageContentType()).isEqualTo(DEFAULT_HIKE_MAIN_IMAGE_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage1()).isEqualTo(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1);
        assertThat(testEventPlan.getHikeHighlightImage1ContentType()).isEqualTo(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage1Description()).isEqualTo(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION);
        assertThat(testEventPlan.getHikeHighlightImage2()).isEqualTo(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2);
        assertThat(testEventPlan.getHikeHighlightImage2ContentType()).isEqualTo(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage2Description()).isEqualTo(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION);
    }

    @Test
    @Transactional
    void createEventPlanWithExistingId() throws Exception {
        // Create the EventPlan with an existing ID
        eventPlan.setId(1L);
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);

        int databaseSizeBeforeCreate = eventPlanRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restEventPlanMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(eventPlanDTO)))
            .andExpect(status().isBadRequest());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void checkEventDateIsRequired() throws Exception {
        int databaseSizeBeforeTest = eventPlanRepository.findAll().size();
        // set the field null
        eventPlan.setEventDate(null);

        // Create the EventPlan, which fails.
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);

        restEventPlanMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(eventPlanDTO)))
            .andExpect(status().isBadRequest());

        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkKomootMapIsRequired() throws Exception {
        int databaseSizeBeforeTest = eventPlanRepository.findAll().size();
        // set the field null
        eventPlan.setKomootMap(null);

        // Create the EventPlan, which fails.
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);

        restEventPlanMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(eventPlanDTO)))
            .andExpect(status().isBadRequest());

        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkEventNAmeIsRequired() throws Exception {
        int databaseSizeBeforeTest = eventPlanRepository.findAll().size();
        // set the field null
        eventPlan.setEventNAme(null);

        // Create the EventPlan, which fails.
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);

        restEventPlanMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(eventPlanDTO)))
            .andExpect(status().isBadRequest());

        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void getAllEventPlans() throws Exception {
        // Initialize the database
        eventPlanRepository.saveAndFlush(eventPlan);

        // Get all the eventPlanList
        restEventPlanMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(eventPlan.getId().intValue())))
            .andExpect(jsonPath("$.[*].eventDate").value(hasItem(DEFAULT_EVENT_DATE.toString())))
            .andExpect(jsonPath("$.[*].eventStartTime").value(hasItem(sameInstant(DEFAULT_EVENT_START_TIME))))
            .andExpect(jsonPath("$.[*].eventEndTime").value(hasItem(sameInstant(DEFAULT_EVENT_END_TIME))))
            .andExpect(jsonPath("$.[*].komootMap").value(hasItem(DEFAULT_KOMOOT_MAP)))
            .andExpect(jsonPath("$.[*].eventNAme").value(hasItem(DEFAULT_EVENT_N_AME)))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION)))
            .andExpect(jsonPath("$.[*].travelSchedule").value(hasItem(DEFAULT_TRAVEL_SCHEDULE)))
            .andExpect(jsonPath("$.[*].hikeMainImageContentType").value(hasItem(DEFAULT_HIKE_MAIN_IMAGE_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].hikeMainImage").value(hasItem(Base64Utils.encodeToString(DEFAULT_HIKE_MAIN_IMAGE))))
            .andExpect(jsonPath("$.[*].hikeHighlightImage1ContentType").value(hasItem(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].hikeHighlightImage1").value(hasItem(Base64Utils.encodeToString(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1))))
            .andExpect(jsonPath("$.[*].hikeHighlightImage1Description").value(hasItem(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION)))
            .andExpect(jsonPath("$.[*].hikeHighlightImage2ContentType").value(hasItem(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].hikeHighlightImage2").value(hasItem(Base64Utils.encodeToString(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2))))
            .andExpect(jsonPath("$.[*].hikeHighlightImage2Description").value(hasItem(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION)));
    }

    @Test
    @Transactional
    void getEventPlan() throws Exception {
        // Initialize the database
        eventPlanRepository.saveAndFlush(eventPlan);

        // Get the eventPlan
        restEventPlanMockMvc
            .perform(get(ENTITY_API_URL_ID, eventPlan.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(eventPlan.getId().intValue()))
            .andExpect(jsonPath("$.eventDate").value(DEFAULT_EVENT_DATE.toString()))
            .andExpect(jsonPath("$.eventStartTime").value(sameInstant(DEFAULT_EVENT_START_TIME)))
            .andExpect(jsonPath("$.eventEndTime").value(sameInstant(DEFAULT_EVENT_END_TIME)))
            .andExpect(jsonPath("$.komootMap").value(DEFAULT_KOMOOT_MAP))
            .andExpect(jsonPath("$.eventNAme").value(DEFAULT_EVENT_N_AME))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION))
            .andExpect(jsonPath("$.travelSchedule").value(DEFAULT_TRAVEL_SCHEDULE))
            .andExpect(jsonPath("$.hikeMainImageContentType").value(DEFAULT_HIKE_MAIN_IMAGE_CONTENT_TYPE))
            .andExpect(jsonPath("$.hikeMainImage").value(Base64Utils.encodeToString(DEFAULT_HIKE_MAIN_IMAGE)))
            .andExpect(jsonPath("$.hikeHighlightImage1ContentType").value(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE))
            .andExpect(jsonPath("$.hikeHighlightImage1").value(Base64Utils.encodeToString(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1)))
            .andExpect(jsonPath("$.hikeHighlightImage1Description").value(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION))
            .andExpect(jsonPath("$.hikeHighlightImage2ContentType").value(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE))
            .andExpect(jsonPath("$.hikeHighlightImage2").value(Base64Utils.encodeToString(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2)))
            .andExpect(jsonPath("$.hikeHighlightImage2Description").value(DEFAULT_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION));
    }

    @Test
    @Transactional
    void getNonExistingEventPlan() throws Exception {
        // Get the eventPlan
        restEventPlanMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingEventPlan() throws Exception {
        // Initialize the database
        eventPlanRepository.saveAndFlush(eventPlan);

        int databaseSizeBeforeUpdate = eventPlanRepository.findAll().size();

        // Update the eventPlan
        EventPlan updatedEventPlan = eventPlanRepository.findById(eventPlan.getId()).get();
        // Disconnect from session so that the updates on updatedEventPlan are not directly saved in db
        em.detach(updatedEventPlan);
        updatedEventPlan
            .eventDate(UPDATED_EVENT_DATE)
            .eventStartTime(UPDATED_EVENT_START_TIME)
            .eventEndTime(UPDATED_EVENT_END_TIME)
            .komootMap(UPDATED_KOMOOT_MAP)
            .eventNAme(UPDATED_EVENT_N_AME)
            .description(UPDATED_DESCRIPTION)
            .travelSchedule(UPDATED_TRAVEL_SCHEDULE)
            .hikeMainImage(UPDATED_HIKE_MAIN_IMAGE)
            .hikeMainImageContentType(UPDATED_HIKE_MAIN_IMAGE_CONTENT_TYPE)
            .hikeHighlightImage1(UPDATED_HIKE_HIGHLIGHT_IMAGE_1)
            .hikeHighlightImage1ContentType(UPDATED_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE)
            .hikeHighlightImage1Description(UPDATED_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION)
            .hikeHighlightImage2(UPDATED_HIKE_HIGHLIGHT_IMAGE_2)
            .hikeHighlightImage2ContentType(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE)
            .hikeHighlightImage2Description(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION);
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(updatedEventPlan);

        restEventPlanMockMvc
            .perform(
                put(ENTITY_API_URL_ID, eventPlanDTO.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(eventPlanDTO))
            )
            .andExpect(status().isOk());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeUpdate);
        EventPlan testEventPlan = eventPlanList.get(eventPlanList.size() - 1);
        assertThat(testEventPlan.getEventDate()).isEqualTo(UPDATED_EVENT_DATE);
        assertThat(testEventPlan.getEventStartTime()).isEqualTo(UPDATED_EVENT_START_TIME);
        assertThat(testEventPlan.getEventEndTime()).isEqualTo(UPDATED_EVENT_END_TIME);
        assertThat(testEventPlan.getKomootMap()).isEqualTo(UPDATED_KOMOOT_MAP);
        assertThat(testEventPlan.getEventNAme()).isEqualTo(UPDATED_EVENT_N_AME);
        assertThat(testEventPlan.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testEventPlan.getTravelSchedule()).isEqualTo(UPDATED_TRAVEL_SCHEDULE);
        assertThat(testEventPlan.getHikeMainImage()).isEqualTo(UPDATED_HIKE_MAIN_IMAGE);
        assertThat(testEventPlan.getHikeMainImageContentType()).isEqualTo(UPDATED_HIKE_MAIN_IMAGE_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage1()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_1);
        assertThat(testEventPlan.getHikeHighlightImage1ContentType()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage1Description()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION);
        assertThat(testEventPlan.getHikeHighlightImage2()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_2);
        assertThat(testEventPlan.getHikeHighlightImage2ContentType()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage2Description()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION);
    }

    @Test
    @Transactional
    void putNonExistingEventPlan() throws Exception {
        int databaseSizeBeforeUpdate = eventPlanRepository.findAll().size();
        eventPlan.setId(count.incrementAndGet());

        // Create the EventPlan
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEventPlanMockMvc
            .perform(
                put(ENTITY_API_URL_ID, eventPlanDTO.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(eventPlanDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchEventPlan() throws Exception {
        int databaseSizeBeforeUpdate = eventPlanRepository.findAll().size();
        eventPlan.setId(count.incrementAndGet());

        // Create the EventPlan
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restEventPlanMockMvc
            .perform(
                put(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(eventPlanDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamEventPlan() throws Exception {
        int databaseSizeBeforeUpdate = eventPlanRepository.findAll().size();
        eventPlan.setId(count.incrementAndGet());

        // Create the EventPlan
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restEventPlanMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(eventPlanDTO)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateEventPlanWithPatch() throws Exception {
        // Initialize the database
        eventPlanRepository.saveAndFlush(eventPlan);

        int databaseSizeBeforeUpdate = eventPlanRepository.findAll().size();

        // Update the eventPlan using partial update
        EventPlan partialUpdatedEventPlan = new EventPlan();
        partialUpdatedEventPlan.setId(eventPlan.getId());

        partialUpdatedEventPlan
            .eventDate(UPDATED_EVENT_DATE)
            .eventStartTime(UPDATED_EVENT_START_TIME)
            .eventEndTime(UPDATED_EVENT_END_TIME)
            .travelSchedule(UPDATED_TRAVEL_SCHEDULE)
            .hikeHighlightImage2(UPDATED_HIKE_HIGHLIGHT_IMAGE_2)
            .hikeHighlightImage2ContentType(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE)
            .hikeHighlightImage2Description(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION);

        restEventPlanMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedEventPlan.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedEventPlan))
            )
            .andExpect(status().isOk());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeUpdate);
        EventPlan testEventPlan = eventPlanList.get(eventPlanList.size() - 1);
        assertThat(testEventPlan.getEventDate()).isEqualTo(UPDATED_EVENT_DATE);
        assertThat(testEventPlan.getEventStartTime()).isEqualTo(UPDATED_EVENT_START_TIME);
        assertThat(testEventPlan.getEventEndTime()).isEqualTo(UPDATED_EVENT_END_TIME);
        assertThat(testEventPlan.getKomootMap()).isEqualTo(DEFAULT_KOMOOT_MAP);
        assertThat(testEventPlan.getEventNAme()).isEqualTo(DEFAULT_EVENT_N_AME);
        assertThat(testEventPlan.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testEventPlan.getTravelSchedule()).isEqualTo(UPDATED_TRAVEL_SCHEDULE);
        assertThat(testEventPlan.getHikeMainImage()).isEqualTo(DEFAULT_HIKE_MAIN_IMAGE);
        assertThat(testEventPlan.getHikeMainImageContentType()).isEqualTo(DEFAULT_HIKE_MAIN_IMAGE_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage1()).isEqualTo(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1);
        assertThat(testEventPlan.getHikeHighlightImage1ContentType()).isEqualTo(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage1Description()).isEqualTo(DEFAULT_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION);
        assertThat(testEventPlan.getHikeHighlightImage2()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_2);
        assertThat(testEventPlan.getHikeHighlightImage2ContentType()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage2Description()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION);
    }

    @Test
    @Transactional
    void fullUpdateEventPlanWithPatch() throws Exception {
        // Initialize the database
        eventPlanRepository.saveAndFlush(eventPlan);

        int databaseSizeBeforeUpdate = eventPlanRepository.findAll().size();

        // Update the eventPlan using partial update
        EventPlan partialUpdatedEventPlan = new EventPlan();
        partialUpdatedEventPlan.setId(eventPlan.getId());

        partialUpdatedEventPlan
            .eventDate(UPDATED_EVENT_DATE)
            .eventStartTime(UPDATED_EVENT_START_TIME)
            .eventEndTime(UPDATED_EVENT_END_TIME)
            .komootMap(UPDATED_KOMOOT_MAP)
            .eventNAme(UPDATED_EVENT_N_AME)
            .description(UPDATED_DESCRIPTION)
            .travelSchedule(UPDATED_TRAVEL_SCHEDULE)
            .hikeMainImage(UPDATED_HIKE_MAIN_IMAGE)
            .hikeMainImageContentType(UPDATED_HIKE_MAIN_IMAGE_CONTENT_TYPE)
            .hikeHighlightImage1(UPDATED_HIKE_HIGHLIGHT_IMAGE_1)
            .hikeHighlightImage1ContentType(UPDATED_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE)
            .hikeHighlightImage1Description(UPDATED_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION)
            .hikeHighlightImage2(UPDATED_HIKE_HIGHLIGHT_IMAGE_2)
            .hikeHighlightImage2ContentType(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE)
            .hikeHighlightImage2Description(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION);

        restEventPlanMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedEventPlan.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedEventPlan))
            )
            .andExpect(status().isOk());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeUpdate);
        EventPlan testEventPlan = eventPlanList.get(eventPlanList.size() - 1);
        assertThat(testEventPlan.getEventDate()).isEqualTo(UPDATED_EVENT_DATE);
        assertThat(testEventPlan.getEventStartTime()).isEqualTo(UPDATED_EVENT_START_TIME);
        assertThat(testEventPlan.getEventEndTime()).isEqualTo(UPDATED_EVENT_END_TIME);
        assertThat(testEventPlan.getKomootMap()).isEqualTo(UPDATED_KOMOOT_MAP);
        assertThat(testEventPlan.getEventNAme()).isEqualTo(UPDATED_EVENT_N_AME);
        assertThat(testEventPlan.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testEventPlan.getTravelSchedule()).isEqualTo(UPDATED_TRAVEL_SCHEDULE);
        assertThat(testEventPlan.getHikeMainImage()).isEqualTo(UPDATED_HIKE_MAIN_IMAGE);
        assertThat(testEventPlan.getHikeMainImageContentType()).isEqualTo(UPDATED_HIKE_MAIN_IMAGE_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage1()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_1);
        assertThat(testEventPlan.getHikeHighlightImage1ContentType()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_1_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage1Description()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_1_DESCRIPTION);
        assertThat(testEventPlan.getHikeHighlightImage2()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_2);
        assertThat(testEventPlan.getHikeHighlightImage2ContentType()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_CONTENT_TYPE);
        assertThat(testEventPlan.getHikeHighlightImage2Description()).isEqualTo(UPDATED_HIKE_HIGHLIGHT_IMAGE_2_DESCRIPTION);
    }

    @Test
    @Transactional
    void patchNonExistingEventPlan() throws Exception {
        int databaseSizeBeforeUpdate = eventPlanRepository.findAll().size();
        eventPlan.setId(count.incrementAndGet());

        // Create the EventPlan
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEventPlanMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, eventPlanDTO.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(eventPlanDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchEventPlan() throws Exception {
        int databaseSizeBeforeUpdate = eventPlanRepository.findAll().size();
        eventPlan.setId(count.incrementAndGet());

        // Create the EventPlan
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restEventPlanMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(eventPlanDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamEventPlan() throws Exception {
        int databaseSizeBeforeUpdate = eventPlanRepository.findAll().size();
        eventPlan.setId(count.incrementAndGet());

        // Create the EventPlan
        EventPlanDTO eventPlanDTO = eventPlanMapper.toDto(eventPlan);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restEventPlanMockMvc
            .perform(
                patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(TestUtil.convertObjectToJsonBytes(eventPlanDTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the EventPlan in the database
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteEventPlan() throws Exception {
        // Initialize the database
        eventPlanRepository.saveAndFlush(eventPlan);

        int databaseSizeBeforeDelete = eventPlanRepository.findAll().size();

        // Delete the eventPlan
        restEventPlanMockMvc
            .perform(delete(ENTITY_API_URL_ID, eventPlan.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<EventPlan> eventPlanList = eventPlanRepository.findAll();
        assertThat(eventPlanList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
