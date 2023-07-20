package com.rohithraju.hikes.service.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.Objects;
import javax.persistence.Lob;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link com.rohithraju.hikes.domain.EventPlan} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class EventPlanDTO implements Serializable {

    private Long id;

    @NotNull
    private LocalDate eventDate;

    private ZonedDateTime eventStartTime;

    private ZonedDateTime eventEndTime;

    @NotNull
    private String komootMap;

    @NotNull
    private String eventNAme;

    @Lob
    private byte[] hikeMainImage;

    private String hikeMainImageContentType;

    @Lob
    private byte[] hikeHighlightImage1;

    private String hikeHighlightImage1ContentType;

    @Lob
    private byte[] hikeHighlightImage2;

    private String hikeHighlightImage2ContentType;

    @Lob
    private String eventDescription;

    @Lob
    private String eventTravelSchedule;

    @Lob
    private String hikingHighlightImage1Description;

    @Lob
    private String hikingHighlightImage2Description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

    public ZonedDateTime getEventStartTime() {
        return eventStartTime;
    }

    public void setEventStartTime(ZonedDateTime eventStartTime) {
        this.eventStartTime = eventStartTime;
    }

    public ZonedDateTime getEventEndTime() {
        return eventEndTime;
    }

    public void setEventEndTime(ZonedDateTime eventEndTime) {
        this.eventEndTime = eventEndTime;
    }

    public String getKomootMap() {
        return komootMap;
    }

    public void setKomootMap(String komootMap) {
        this.komootMap = komootMap;
    }

    public String getEventNAme() {
        return eventNAme;
    }

    public void setEventNAme(String eventNAme) {
        this.eventNAme = eventNAme;
    }

    public byte[] getHikeMainImage() {
        return hikeMainImage;
    }

    public void setHikeMainImage(byte[] hikeMainImage) {
        this.hikeMainImage = hikeMainImage;
    }

    public String getHikeMainImageContentType() {
        return hikeMainImageContentType;
    }

    public void setHikeMainImageContentType(String hikeMainImageContentType) {
        this.hikeMainImageContentType = hikeMainImageContentType;
    }

    public byte[] getHikeHighlightImage1() {
        return hikeHighlightImage1;
    }

    public void setHikeHighlightImage1(byte[] hikeHighlightImage1) {
        this.hikeHighlightImage1 = hikeHighlightImage1;
    }

    public String getHikeHighlightImage1ContentType() {
        return hikeHighlightImage1ContentType;
    }

    public void setHikeHighlightImage1ContentType(String hikeHighlightImage1ContentType) {
        this.hikeHighlightImage1ContentType = hikeHighlightImage1ContentType;
    }

    public byte[] getHikeHighlightImage2() {
        return hikeHighlightImage2;
    }

    public void setHikeHighlightImage2(byte[] hikeHighlightImage2) {
        this.hikeHighlightImage2 = hikeHighlightImage2;
    }

    public String getHikeHighlightImage2ContentType() {
        return hikeHighlightImage2ContentType;
    }

    public void setHikeHighlightImage2ContentType(String hikeHighlightImage2ContentType) {
        this.hikeHighlightImage2ContentType = hikeHighlightImage2ContentType;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    public String getEventTravelSchedule() {
        return eventTravelSchedule;
    }

    public void setEventTravelSchedule(String eventTravelSchedule) {
        this.eventTravelSchedule = eventTravelSchedule;
    }

    public String getHikingHighlightImage1Description() {
        return hikingHighlightImage1Description;
    }

    public void setHikingHighlightImage1Description(String hikingHighlightImage1Description) {
        this.hikingHighlightImage1Description = hikingHighlightImage1Description;
    }

    public String getHikingHighlightImage2Description() {
        return hikingHighlightImage2Description;
    }

    public void setHikingHighlightImage2Description(String hikingHighlightImage2Description) {
        this.hikingHighlightImage2Description = hikingHighlightImage2Description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EventPlanDTO)) {
            return false;
        }

        EventPlanDTO eventPlanDTO = (EventPlanDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, eventPlanDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EventPlanDTO{" +
            "id=" + getId() +
            ", eventDate='" + getEventDate() + "'" +
            ", eventStartTime='" + getEventStartTime() + "'" +
            ", eventEndTime='" + getEventEndTime() + "'" +
            ", komootMap='" + getKomootMap() + "'" +
            ", eventNAme='" + getEventNAme() + "'" +
            ", hikeMainImage='" + getHikeMainImage() + "'" +
            ", hikeHighlightImage1='" + getHikeHighlightImage1() + "'" +
            ", hikeHighlightImage2='" + getHikeHighlightImage2() + "'" +
            ", eventDescription='" + getEventDescription() + "'" +
            ", eventTravelSchedule='" + getEventTravelSchedule() + "'" +
            ", hikingHighlightImage1Description='" + getHikingHighlightImage1Description() + "'" +
            ", hikingHighlightImage2Description='" + getHikingHighlightImage2Description() + "'" +
            "}";
    }
}
