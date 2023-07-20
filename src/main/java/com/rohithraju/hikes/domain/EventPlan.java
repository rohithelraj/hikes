package com.rohithraju.hikes.domain;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A EventPlan.
 */
@Entity
@Table(name = "event_plan")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class EventPlan implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "event_date", nullable = false)
    private LocalDate eventDate;

    @Column(name = "event_start_time")
    private ZonedDateTime eventStartTime;

    @Column(name = "event_end_time")
    private ZonedDateTime eventEndTime;

    @NotNull
    @Column(name = "komoot_map", nullable = false)
    private String komootMap;

    @NotNull
    @Column(name = "event_n_ame", nullable = false)
    private String eventNAme;

    @Lob
    @Column(name = "hike_main_image")
    private byte[] hikeMainImage;

    @Column(name = "hike_main_image_content_type")
    private String hikeMainImageContentType;

    @Lob
    @Column(name = "hike_highlight_image_1")
    private byte[] hikeHighlightImage1;

    @Column(name = "hike_highlight_image_1_content_type")
    private String hikeHighlightImage1ContentType;

    @Lob
    @Column(name = "hike_highlight_image_2")
    private byte[] hikeHighlightImage2;

    @Column(name = "hike_highlight_image_2_content_type")
    private String hikeHighlightImage2ContentType;

    @Lob
    @Column(name = "event_description")
    private String eventDescription;

    @Lob
    @Column(name = "event_travel_schedule")
    private String eventTravelSchedule;

    @Lob
    @Column(name = "hiking_highlight_image_1_description")
    private String hikingHighlightImage1Description;

    @Lob
    @Column(name = "hiking_highlight_image_2_description")
    private String hikingHighlightImage2Description;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public EventPlan id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getEventDate() {
        return this.eventDate;
    }

    public EventPlan eventDate(LocalDate eventDate) {
        this.setEventDate(eventDate);
        return this;
    }

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

    public ZonedDateTime getEventStartTime() {
        return this.eventStartTime;
    }

    public EventPlan eventStartTime(ZonedDateTime eventStartTime) {
        this.setEventStartTime(eventStartTime);
        return this;
    }

    public void setEventStartTime(ZonedDateTime eventStartTime) {
        this.eventStartTime = eventStartTime;
    }

    public ZonedDateTime getEventEndTime() {
        return this.eventEndTime;
    }

    public EventPlan eventEndTime(ZonedDateTime eventEndTime) {
        this.setEventEndTime(eventEndTime);
        return this;
    }

    public void setEventEndTime(ZonedDateTime eventEndTime) {
        this.eventEndTime = eventEndTime;
    }

    public String getKomootMap() {
        return this.komootMap;
    }

    public EventPlan komootMap(String komootMap) {
        this.setKomootMap(komootMap);
        return this;
    }

    public void setKomootMap(String komootMap) {
        this.komootMap = komootMap;
    }

    public String getEventNAme() {
        return this.eventNAme;
    }

    public EventPlan eventNAme(String eventNAme) {
        this.setEventNAme(eventNAme);
        return this;
    }

    public void setEventNAme(String eventNAme) {
        this.eventNAme = eventNAme;
    }

    public byte[] getHikeMainImage() {
        return this.hikeMainImage;
    }

    public EventPlan hikeMainImage(byte[] hikeMainImage) {
        this.setHikeMainImage(hikeMainImage);
        return this;
    }

    public void setHikeMainImage(byte[] hikeMainImage) {
        this.hikeMainImage = hikeMainImage;
    }

    public String getHikeMainImageContentType() {
        return this.hikeMainImageContentType;
    }

    public EventPlan hikeMainImageContentType(String hikeMainImageContentType) {
        this.hikeMainImageContentType = hikeMainImageContentType;
        return this;
    }

    public void setHikeMainImageContentType(String hikeMainImageContentType) {
        this.hikeMainImageContentType = hikeMainImageContentType;
    }

    public byte[] getHikeHighlightImage1() {
        return this.hikeHighlightImage1;
    }

    public EventPlan hikeHighlightImage1(byte[] hikeHighlightImage1) {
        this.setHikeHighlightImage1(hikeHighlightImage1);
        return this;
    }

    public void setHikeHighlightImage1(byte[] hikeHighlightImage1) {
        this.hikeHighlightImage1 = hikeHighlightImage1;
    }

    public String getHikeHighlightImage1ContentType() {
        return this.hikeHighlightImage1ContentType;
    }

    public EventPlan hikeHighlightImage1ContentType(String hikeHighlightImage1ContentType) {
        this.hikeHighlightImage1ContentType = hikeHighlightImage1ContentType;
        return this;
    }

    public void setHikeHighlightImage1ContentType(String hikeHighlightImage1ContentType) {
        this.hikeHighlightImage1ContentType = hikeHighlightImage1ContentType;
    }

    public byte[] getHikeHighlightImage2() {
        return this.hikeHighlightImage2;
    }

    public EventPlan hikeHighlightImage2(byte[] hikeHighlightImage2) {
        this.setHikeHighlightImage2(hikeHighlightImage2);
        return this;
    }

    public void setHikeHighlightImage2(byte[] hikeHighlightImage2) {
        this.hikeHighlightImage2 = hikeHighlightImage2;
    }

    public String getHikeHighlightImage2ContentType() {
        return this.hikeHighlightImage2ContentType;
    }

    public EventPlan hikeHighlightImage2ContentType(String hikeHighlightImage2ContentType) {
        this.hikeHighlightImage2ContentType = hikeHighlightImage2ContentType;
        return this;
    }

    public void setHikeHighlightImage2ContentType(String hikeHighlightImage2ContentType) {
        this.hikeHighlightImage2ContentType = hikeHighlightImage2ContentType;
    }

    public String getEventDescription() {
        return this.eventDescription;
    }

    public EventPlan eventDescription(String eventDescription) {
        this.setEventDescription(eventDescription);
        return this;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    public String getEventTravelSchedule() {
        return this.eventTravelSchedule;
    }

    public EventPlan eventTravelSchedule(String eventTravelSchedule) {
        this.setEventTravelSchedule(eventTravelSchedule);
        return this;
    }

    public void setEventTravelSchedule(String eventTravelSchedule) {
        this.eventTravelSchedule = eventTravelSchedule;
    }

    public String getHikingHighlightImage1Description() {
        return this.hikingHighlightImage1Description;
    }

    public EventPlan hikingHighlightImage1Description(String hikingHighlightImage1Description) {
        this.setHikingHighlightImage1Description(hikingHighlightImage1Description);
        return this;
    }

    public void setHikingHighlightImage1Description(String hikingHighlightImage1Description) {
        this.hikingHighlightImage1Description = hikingHighlightImage1Description;
    }

    public String getHikingHighlightImage2Description() {
        return this.hikingHighlightImage2Description;
    }

    public EventPlan hikingHighlightImage2Description(String hikingHighlightImage2Description) {
        this.setHikingHighlightImage2Description(hikingHighlightImage2Description);
        return this;
    }

    public void setHikingHighlightImage2Description(String hikingHighlightImage2Description) {
        this.hikingHighlightImage2Description = hikingHighlightImage2Description;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EventPlan)) {
            return false;
        }
        return id != null && id.equals(((EventPlan) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EventPlan{" +
            "id=" + getId() +
            ", eventDate='" + getEventDate() + "'" +
            ", eventStartTime='" + getEventStartTime() + "'" +
            ", eventEndTime='" + getEventEndTime() + "'" +
            ", komootMap='" + getKomootMap() + "'" +
            ", eventNAme='" + getEventNAme() + "'" +
            ", hikeMainImage='" + getHikeMainImage() + "'" +
            ", hikeMainImageContentType='" + getHikeMainImageContentType() + "'" +
            ", hikeHighlightImage1='" + getHikeHighlightImage1() + "'" +
            ", hikeHighlightImage1ContentType='" + getHikeHighlightImage1ContentType() + "'" +
            ", hikeHighlightImage2='" + getHikeHighlightImage2() + "'" +
            ", hikeHighlightImage2ContentType='" + getHikeHighlightImage2ContentType() + "'" +
            ", eventDescription='" + getEventDescription() + "'" +
            ", eventTravelSchedule='" + getEventTravelSchedule() + "'" +
            ", hikingHighlightImage1Description='" + getHikingHighlightImage1Description() + "'" +
            ", hikingHighlightImage2Description='" + getHikingHighlightImage2Description() + "'" +
            "}";
    }
}
