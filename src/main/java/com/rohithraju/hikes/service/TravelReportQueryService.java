package com.rohithraju.hikes.service;

import com.rohithraju.hikes.domain.*; // for static metamodels
import com.rohithraju.hikes.domain.TravelReport;
import com.rohithraju.hikes.repository.TravelReportRepository;
import com.rohithraju.hikes.service.criteria.TravelReportCriteria;
import com.rohithraju.hikes.service.dto.TravelReportDTO;
import com.rohithraju.hikes.service.mapper.TravelReportMapper;
import java.util.List;
import javax.persistence.criteria.JoinType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tech.jhipster.service.QueryService;

/**
 * Service for executing complex queries for {@link TravelReport} entities in the database.
 * The main input is a {@link TravelReportCriteria} which gets converted to {@link Specification},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link TravelReportDTO} or a {@link Page} of {@link TravelReportDTO} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class TravelReportQueryService extends QueryService<TravelReport> {

    private final Logger log = LoggerFactory.getLogger(TravelReportQueryService.class);

    private final TravelReportRepository travelReportRepository;

    private final TravelReportMapper travelReportMapper;

    public TravelReportQueryService(TravelReportRepository travelReportRepository, TravelReportMapper travelReportMapper) {
        this.travelReportRepository = travelReportRepository;
        this.travelReportMapper = travelReportMapper;
    }

    /**
     * Return a {@link List} of {@link TravelReportDTO} which matches the criteria from the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<TravelReportDTO> findByCriteria(TravelReportCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specification<TravelReport> specification = createSpecification(criteria);
        return travelReportMapper.toDto(travelReportRepository.findAll(specification));
    }

    /**
     * Return a {@link Page} of {@link TravelReportDTO} which matches the criteria from the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<TravelReportDTO> findByCriteria(TravelReportCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specification<TravelReport> specification = createSpecification(criteria);
        return travelReportRepository.findAll(specification, page).map(travelReportMapper::toDto);
    }

    /**
     * Return the number of matching entities in the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the number of matching entities.
     */
    @Transactional(readOnly = true)
    public long countByCriteria(TravelReportCriteria criteria) {
        log.debug("count by criteria : {}", criteria);
        final Specification<TravelReport> specification = createSpecification(criteria);
        return travelReportRepository.count(specification);
    }

    /**
     * Function to convert {@link TravelReportCriteria} to a {@link Specification}
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching {@link Specification} of the entity.
     */
    protected Specification<TravelReport> createSpecification(TravelReportCriteria criteria) {
        Specification<TravelReport> specification = Specification.where(null);
        if (criteria != null) {
            // This has to be called first, because the distinct method returns null
            if (criteria.getDistinct() != null) {
                specification = specification.and(distinct(criteria.getDistinct()));
            }
            if (criteria.getId() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getId(), TravelReport_.id));
            }
            if (criteria.getReportName() != null) {
                specification = specification.and(buildStringSpecification(criteria.getReportName(), TravelReport_.reportName));
            }
            if (criteria.getReportDate() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getReportDate(), TravelReport_.reportDate));
            }
            if (criteria.getReportEventIds() != null) {
                specification = specification.and(buildStringSpecification(criteria.getReportEventIds(), TravelReport_.reportEventIds));
            }
            if (criteria.getReportSubImageName() != null) {
                specification =
                    specification.and(buildStringSpecification(criteria.getReportSubImageName(), TravelReport_.reportSubImageName));
            }
            if (criteria.getReportSubImage2Name() != null) {
                specification =
                    specification.and(buildStringSpecification(criteria.getReportSubImage2Name(), TravelReport_.reportSubImage2Name));
            }
            if (criteria.getReportSubImage3Name() != null) {
                specification =
                    specification.and(buildStringSpecification(criteria.getReportSubImage3Name(), TravelReport_.reportSubImage3Name));
            }
            if (criteria.getReportSubImage4Name() != null) {
                specification =
                    specification.and(buildStringSpecification(criteria.getReportSubImage4Name(), TravelReport_.reportSubImage4Name));
            }
            if (criteria.getReportSubImage5Name() != null) {
                specification =
                    specification.and(buildStringSpecification(criteria.getReportSubImage5Name(), TravelReport_.reportSubImage5Name));
            }
            if (criteria.getReportSubImage6Name() != null) {
                specification =
                    specification.and(buildStringSpecification(criteria.getReportSubImage6Name(), TravelReport_.reportSubImage6Name));
            }
            if (criteria.getTripId() != null) {
                specification =
                    specification.and(
                        buildSpecification(criteria.getTripId(), root -> root.join(TravelReport_.trip, JoinType.LEFT).get(Trip_.id))
                    );
            }
        }
        return specification;
    }
}
