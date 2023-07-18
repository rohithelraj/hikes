package com.rohithraju.hikes.repository;

import com.rohithraju.hikes.domain.TravelReport;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the TravelReport entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TravelReportRepository extends JpaRepository<TravelReport, Long>, JpaSpecificationExecutor<TravelReport> {}
