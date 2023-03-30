package com.rohithraju.hikes.repository;

import com.rohithraju.hikes.domain.EventPlan;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the EventPlan entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EventPlanRepository extends JpaRepository<EventPlan, Long> {}
