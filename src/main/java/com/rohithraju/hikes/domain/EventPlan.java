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

    @Column(name = "description")
    private String description;

    @Column(name = "travel_schedule")
    private String travelSchedule;

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

    @Column(name = "hike_highlight_image_1_description")
    private String hikeHighlightImage1Description;

    @Lob
    @Column(name = "hike_highlight_image_2")
    private byte[] hikeHighlightImage2;

    @Column(name = "hike_highlight_image_2_content_type")
    private String hikeHighlightImage2ContentType;

    @Column(name = "hike_highlight_image_2_description")
    private String hikeHighlightImage2Description;

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

    public String getDescription() {
        return this.description;
    }

    public EventPlan description(String description) {
        this.setDescription(description);
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTravelSchedule() {
        return this.travelSchedule;
    }

    public EventPlan travelSchedule(String travelSchedule) {
        this.setTravelSchedule(travelSchedule);
        return this;
    }

    public void setTravelSchedule(String travelSchedule) {
        this.travelSchedule = travelSchedule;
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

    public String getHikeHighlightImage1Description() {
        return this.hikeHighlightImage1Description;
    }

    public EventPlan hikeHighlightImage1Description(String hikeHighlightImage1Description) {
        this.setHikeHighlightImage1Description(hikeHighlightImage1Description);
        return this;
    }

    public void setHikeHighlightImage1Description(String hikeHighlightImage1Description) {
        this.hikeHighlightImage1Description = hikeHighlightImage1Description;
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

    public String getHikeHighlightImage2Description() {
        return this.hikeHighlightImage2Description;
    }

    public EventPlan hikeHighlightImage2Description(String hikeHighlightImage2Description) {
        this.setHikeHighlightImage2Description(hikeHighlightImage2Description);
        return this;
    }

    public void setHikeHighlightImage2Description(String hikeHighlightImage2Description) {
        this.hikeHighlightImage2Description = hikeHighlightImage2Description;
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
            ", description='" + getDescription() + "'" +
            ", travelSchedule='" + getTravelSchedule() + "'" +
            ", hikeMainImage='" + getHikeMainImage() + "'" +
            ", hikeMainImageContentType='" + getHikeMainImageContentType() + "'" +
            ", hikeHighlightImage1='" + getHikeHighlightImage1() + "'" +
            ", hikeHighlightImage1ContentType='" + getHikeHighlightImage1ContentType() + "'" +
            ", hikeHighlightImage1Description='" + getHikeHighlightImage1Description() + "'" +
            ", hikeHighlightImage2='" + getHikeHighlightImage2() + "'" +
            ", hikeHighlightImage2ContentType='" + getHikeHighlightImage2ContentType() + "'" +
            ", hikeHighlightImage2Description='" + getHikeHighlightImage2Description() + "'" +
            "}";
    }
}
