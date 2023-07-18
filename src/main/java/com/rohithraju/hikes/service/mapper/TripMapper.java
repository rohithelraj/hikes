package com.rohithraju.hikes.service.mapper;

import com.rohithraju.hikes.domain.Trip;
import com.rohithraju.hikes.service.dto.TripDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Trip} and its DTO {@link TripDTO}.
 */
@Mapper(componentModel = "spring")
public interface TripMapper extends EntityMapper<TripDTO, Trip> {}
