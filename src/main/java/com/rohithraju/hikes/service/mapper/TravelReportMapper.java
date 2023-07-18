package com.rohithraju.hikes.service.mapper;

import com.rohithraju.hikes.domain.TravelReport;
import com.rohithraju.hikes.domain.Trip;
import com.rohithraju.hikes.service.dto.TravelReportDTO;
import com.rohithraju.hikes.service.dto.TripDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link TravelReport} and its DTO {@link TravelReportDTO}.
 */
@Mapper(componentModel = "spring")
public interface TravelReportMapper extends EntityMapper<TravelReportDTO, TravelReport> {
    @Mapping(target = "trip", source = "trip", qualifiedByName = "tripId")
    TravelReportDTO toDto(TravelReport s);

    @Named("tripId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    TripDTO toDtoTripId(Trip trip);
}
