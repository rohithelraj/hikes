package com.rohithraju.hikes.service.mapper;

import com.rohithraju.hikes.domain.EventPlan;
import com.rohithraju.hikes.service.dto.EventPlanDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link EventPlan} and its DTO {@link EventPlanDTO}.
 */
@Mapper(componentModel = "spring")
public interface EventPlanMapper extends EntityMapper<EventPlanDTO, EventPlan> {}
