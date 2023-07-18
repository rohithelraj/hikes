package com.rohithraju.hikes.service.criteria;

import java.io.Serializable;
import java.util.Objects;
import org.springdoc.api.annotations.ParameterObject;
import tech.jhipster.service.Criteria;
import tech.jhipster.service.filter.*;

/**
 * Criteria class for the {@link com.rohithraju.hikes.domain.Trip} entity. This class is used
 * in {@link com.rohithraju.hikes.web.rest.TripResource} to receive all the possible filtering options from
 * the Http GET request parameters.
 * For example the following could be a valid request:
 * {@code /trips?id.greaterThan=5&attr1.contains=something&attr2.specified=false}
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
@ParameterObject
@SuppressWarnings("common-java:DuplicatedBlocks")
public class TripCriteria implements Serializable, Criteria {

    private static final long serialVersionUID = 1L;

    private LongFilter id;

    private StringFilter tripName;

    private StringFilter combinedMap;

    private StringFilter relatedEvents;

    private IntegerFilter activeSubImages;

    private IntegerFilter activeRelatedEvents;

    private LocalDateFilter startDate;

    private LocalDateFilter endDate;

    private Boolean distinct;

    public TripCriteria() {}

    public TripCriteria(TripCriteria other) {
        this.id = other.id == null ? null : other.id.copy();
        this.tripName = other.tripName == null ? null : other.tripName.copy();
        this.combinedMap = other.combinedMap == null ? null : other.combinedMap.copy();
        this.relatedEvents = other.relatedEvents == null ? null : other.relatedEvents.copy();
        this.activeSubImages = other.activeSubImages == null ? null : other.activeSubImages.copy();
        this.activeRelatedEvents = other.activeRelatedEvents == null ? null : other.activeRelatedEvents.copy();
        this.startDate = other.startDate == null ? null : other.startDate.copy();
        this.endDate = other.endDate == null ? null : other.endDate.copy();
        this.distinct = other.distinct;
    }

    @Override
    public TripCriteria copy() {
        return new TripCriteria(this);
    }

    public LongFilter getId() {
        return id;
    }

    public LongFilter id() {
        if (id == null) {
            id = new LongFilter();
        }
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public StringFilter getTripName() {
        return tripName;
    }

    public StringFilter tripName() {
        if (tripName == null) {
            tripName = new StringFilter();
        }
        return tripName;
    }

    public void setTripName(StringFilter tripName) {
        this.tripName = tripName;
    }

    public StringFilter getCombinedMap() {
        return combinedMap;
    }

    public StringFilter combinedMap() {
        if (combinedMap == null) {
            combinedMap = new StringFilter();
        }
        return combinedMap;
    }

    public void setCombinedMap(StringFilter combinedMap) {
        this.combinedMap = combinedMap;
    }

    public StringFilter getRelatedEvents() {
        return relatedEvents;
    }

    public StringFilter relatedEvents() {
        if (relatedEvents == null) {
            relatedEvents = new StringFilter();
        }
        return relatedEvents;
    }

    public void setRelatedEvents(StringFilter relatedEvents) {
        this.relatedEvents = relatedEvents;
    }

    public IntegerFilter getActiveSubImages() {
        return activeSubImages;
    }

    public IntegerFilter activeSubImages() {
        if (activeSubImages == null) {
            activeSubImages = new IntegerFilter();
        }
        return activeSubImages;
    }

    public void setActiveSubImages(IntegerFilter activeSubImages) {
        this.activeSubImages = activeSubImages;
    }

    public IntegerFilter getActiveRelatedEvents() {
        return activeRelatedEvents;
    }

    public IntegerFilter activeRelatedEvents() {
        if (activeRelatedEvents == null) {
            activeRelatedEvents = new IntegerFilter();
        }
        return activeRelatedEvents;
    }

    public void setActiveRelatedEvents(IntegerFilter activeRelatedEvents) {
        this.activeRelatedEvents = activeRelatedEvents;
    }

    public LocalDateFilter getStartDate() {
        return startDate;
    }

    public LocalDateFilter startDate() {
        if (startDate == null) {
            startDate = new LocalDateFilter();
        }
        return startDate;
    }

    public void setStartDate(LocalDateFilter startDate) {
        this.startDate = startDate;
    }

    public LocalDateFilter getEndDate() {
        return endDate;
    }

    public LocalDateFilter endDate() {
        if (endDate == null) {
            endDate = new LocalDateFilter();
        }
        return endDate;
    }

    public void setEndDate(LocalDateFilter endDate) {
        this.endDate = endDate;
    }

    public Boolean getDistinct() {
        return distinct;
    }

    public void setDistinct(Boolean distinct) {
        this.distinct = distinct;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        final TripCriteria that = (TripCriteria) o;
        return (
            Objects.equals(id, that.id) &&
            Objects.equals(tripName, that.tripName) &&
            Objects.equals(combinedMap, that.combinedMap) &&
            Objects.equals(relatedEvents, that.relatedEvents) &&
            Objects.equals(activeSubImages, that.activeSubImages) &&
            Objects.equals(activeRelatedEvents, that.activeRelatedEvents) &&
            Objects.equals(startDate, that.startDate) &&
            Objects.equals(endDate, that.endDate) &&
            Objects.equals(distinct, that.distinct)
        );
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, tripName, combinedMap, relatedEvents, activeSubImages, activeRelatedEvents, startDate, endDate, distinct);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "TripCriteria{" +
            (id != null ? "id=" + id + ", " : "") +
            (tripName != null ? "tripName=" + tripName + ", " : "") +
            (combinedMap != null ? "combinedMap=" + combinedMap + ", " : "") +
            (relatedEvents != null ? "relatedEvents=" + relatedEvents + ", " : "") +
            (activeSubImages != null ? "activeSubImages=" + activeSubImages + ", " : "") +
            (activeRelatedEvents != null ? "activeRelatedEvents=" + activeRelatedEvents + ", " : "") +
            (startDate != null ? "startDate=" + startDate + ", " : "") +
            (endDate != null ? "endDate=" + endDate + ", " : "") +
            (distinct != null ? "distinct=" + distinct + ", " : "") +
            "}";
    }
}
