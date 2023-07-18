package com.rohithraju.hikes.service;

import com.rohithraju.hikes.domain.TravelReport;
import com.rohithraju.hikes.repository.TravelReportRepository;
import com.rohithraju.hikes.repository.TripRepository;
import com.rohithraju.hikes.service.dto.TravelReportDTO;
import com.rohithraju.hikes.service.mapper.TravelReportMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link TravelReport}.
 */
@Service
@Transactional
public class TravelReportService {

    private final Logger log = LoggerFactory.getLogger(TravelReportService.class);

    private final TravelReportRepository travelReportRepository;

    private final TravelReportMapper travelReportMapper;

    private final TripRepository tripRepository;

    public TravelReportService(
        TravelReportRepository travelReportRepository,
        TravelReportMapper travelReportMapper,
        TripRepository tripRepository
    ) {
        this.travelReportRepository = travelReportRepository;
        this.travelReportMapper = travelReportMapper;
        this.tripRepository = tripRepository;
    }

    /**
     * Save a travelReport.
     *
     * @param travelReportDTO the entity to save.
     * @return the persisted entity.
     */
    public TravelReportDTO save(TravelReportDTO travelReportDTO) {
        log.debug("Request to save TravelReport : {}", travelReportDTO);
        TravelReport travelReport = travelReportMapper.toEntity(travelReportDTO);
        Long tripId = travelReportDTO.getTrip().getId();
        tripRepository.findById(tripId).ifPresent(travelReport::trip);
        travelReport = travelReportRepository.save(travelReport);
        return travelReportMapper.toDto(travelReport);
    }

    /**
     * Update a travelReport.
     *
     * @param travelReportDTO the entity to save.
     * @return the persisted entity.
     */
    public TravelReportDTO update(TravelReportDTO travelReportDTO) {
        log.debug("Request to update TravelReport : {}", travelReportDTO);
        TravelReport travelReport = travelReportMapper.toEntity(travelReportDTO);
        Long tripId = travelReportDTO.getTrip().getId();
        tripRepository.findById(tripId).ifPresent(travelReport::trip);
        travelReport = travelReportRepository.save(travelReport);
        return travelReportMapper.toDto(travelReport);
    }

    /**
     * Partially update a travelReport.
     *
     * @param travelReportDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<TravelReportDTO> partialUpdate(TravelReportDTO travelReportDTO) {
        log.debug("Request to partially update TravelReport : {}", travelReportDTO);

        return travelReportRepository
            .findById(travelReportDTO.getId())
            .map(existingTravelReport -> {
                travelReportMapper.partialUpdate(existingTravelReport, travelReportDTO);

                return existingTravelReport;
            })
            .map(travelReportRepository::save)
            .map(travelReportMapper::toDto);
    }

    /**
     * Get all the travelReports.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<TravelReportDTO> findAll(Pageable pageable) {
        log.debug("Request to get all TravelReports");
        return travelReportRepository.findAll(pageable).map(travelReportMapper::toDto);
    }

    /**
     * Get one travelReport by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<TravelReportDTO> findOne(Long id) {
        log.debug("Request to get TravelReport : {}", id);
        return travelReportRepository.findById(id).map(travelReportMapper::toDto);
    }

    /**
     * Delete the travelReport by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete TravelReport : {}", id);
        travelReportRepository.deleteById(id);
    }
}
