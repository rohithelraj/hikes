package com.rohithraju.hikes.domain;

import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A Trip.
 */
@Entity
@Table(name = "trip")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Trip implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "trip_name", nullable = false)
    private String tripName;

    @Lob
    @Column(name = "main_image")
    private byte[] mainImage;

    @Column(name = "main_image_content_type")
    private String mainImageContentType;

    @Lob
    @Column(name = "sub_image_1")
    private byte[] subImage1;

    @Column(name = "sub_image_1_content_type")
    private String subImage1ContentType;

    @Lob
    @Column(name = "sub_image_2")
    private byte[] subImage2;

    @Column(name = "sub_image_2_content_type")
    private String subImage2ContentType;

    @Lob
    @Column(name = "sub_image_3")
    private byte[] subImage3;

    @Column(name = "sub_image_3_content_type")
    private String subImage3ContentType;

    @Lob
    @Column(name = "sub_image_4")
    private byte[] subImage4;

    @Column(name = "sub_image_4_content_type")
    private String subImage4ContentType;

    @Lob
    @Column(name = "sub_image_5")
    private byte[] subImage5;

    @Column(name = "sub_image_5_content_type")
    private String subImage5ContentType;

    @Lob
    @Column(name = "sub_image_6")
    private byte[] subImage6;

    @Column(name = "sub_image_6_content_type")
    private String subImage6ContentType;

    @Lob
    @Column(name = "trip_description")
    private String tripDescription;

    @Column(name = "combined_map")
    private String combinedMap;

    @Column(name = "related_events")
    private String relatedEvents;

    @Lob
    @Column(name = "sub_image_1_description")
    private String subImage1Description;

    @Lob
    @Column(name = "sub_image_2_description")
    private String subImage2Description;

    @Lob
    @Column(name = "sub_image_3_description")
    private String subImage3Description;

    @Lob
    @Column(name = "sub_image_4_description")
    private String subImage4Description;

    @Lob
    @Column(name = "sub_image_5_description")
    private String subImage5Description;

    @Lob
    @Column(name = "sub_image_6_description")
    private String subImage6Description;

    @Column(name = "active_sub_images")
    private Integer activeSubImages;

    @Column(name = "active_related_events")
    private Integer activeRelatedEvents;

    @Lob
    @Column(name = "transportation_details")
    private String transportationDetails;

    @Lob
    @Column(name = "cost_details")
    private String costDetails;

    @Lob
    @Column(name = "accomodation_details")
    private String accomodationDetails;

    @Lob
    @Column(name = "related_links")
    private String relatedLinks;

    @NotNull
    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @NotNull
    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Trip id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTripName() {
        return this.tripName;
    }

    public Trip tripName(String tripName) {
        this.setTripName(tripName);
        return this;
    }

    public void setTripName(String tripName) {
        this.tripName = tripName;
    }

    public byte[] getMainImage() {
        return this.mainImage;
    }

    public Trip mainImage(byte[] mainImage) {
        this.setMainImage(mainImage);
        return this;
    }

    public void setMainImage(byte[] mainImage) {
        this.mainImage = mainImage;
    }

    public String getMainImageContentType() {
        return this.mainImageContentType;
    }

    public Trip mainImageContentType(String mainImageContentType) {
        this.mainImageContentType = mainImageContentType;
        return this;
    }

    public void setMainImageContentType(String mainImageContentType) {
        this.mainImageContentType = mainImageContentType;
    }

    public byte[] getSubImage1() {
        return this.subImage1;
    }

    public Trip subImage1(byte[] subImage1) {
        this.setSubImage1(subImage1);
        return this;
    }

    public void setSubImage1(byte[] subImage1) {
        this.subImage1 = subImage1;
    }

    public String getSubImage1ContentType() {
        return this.subImage1ContentType;
    }

    public Trip subImage1ContentType(String subImage1ContentType) {
        this.subImage1ContentType = subImage1ContentType;
        return this;
    }

    public void setSubImage1ContentType(String subImage1ContentType) {
        this.subImage1ContentType = subImage1ContentType;
    }

    public byte[] getSubImage2() {
        return this.subImage2;
    }

    public Trip subImage2(byte[] subImage2) {
        this.setSubImage2(subImage2);
        return this;
    }

    public void setSubImage2(byte[] subImage2) {
        this.subImage2 = subImage2;
    }

    public String getSubImage2ContentType() {
        return this.subImage2ContentType;
    }

    public Trip subImage2ContentType(String subImage2ContentType) {
        this.subImage2ContentType = subImage2ContentType;
        return this;
    }

    public void setSubImage2ContentType(String subImage2ContentType) {
        this.subImage2ContentType = subImage2ContentType;
    }

    public byte[] getSubImage3() {
        return this.subImage3;
    }

    public Trip subImage3(byte[] subImage3) {
        this.setSubImage3(subImage3);
        return this;
    }

    public void setSubImage3(byte[] subImage3) {
        this.subImage3 = subImage3;
    }

    public String getSubImage3ContentType() {
        return this.subImage3ContentType;
    }

    public Trip subImage3ContentType(String subImage3ContentType) {
        this.subImage3ContentType = subImage3ContentType;
        return this;
    }

    public void setSubImage3ContentType(String subImage3ContentType) {
        this.subImage3ContentType = subImage3ContentType;
    }

    public byte[] getSubImage4() {
        return this.subImage4;
    }

    public Trip subImage4(byte[] subImage4) {
        this.setSubImage4(subImage4);
        return this;
    }

    public void setSubImage4(byte[] subImage4) {
        this.subImage4 = subImage4;
    }

    public String getSubImage4ContentType() {
        return this.subImage4ContentType;
    }

    public Trip subImage4ContentType(String subImage4ContentType) {
        this.subImage4ContentType = subImage4ContentType;
        return this;
    }

    public void setSubImage4ContentType(String subImage4ContentType) {
        this.subImage4ContentType = subImage4ContentType;
    }

    public byte[] getSubImage5() {
        return this.subImage5;
    }

    public Trip subImage5(byte[] subImage5) {
        this.setSubImage5(subImage5);
        return this;
    }

    public void setSubImage5(byte[] subImage5) {
        this.subImage5 = subImage5;
    }

    public String getSubImage5ContentType() {
        return this.subImage5ContentType;
    }

    public Trip subImage5ContentType(String subImage5ContentType) {
        this.subImage5ContentType = subImage5ContentType;
        return this;
    }

    public void setSubImage5ContentType(String subImage5ContentType) {
        this.subImage5ContentType = subImage5ContentType;
    }

    public byte[] getSubImage6() {
        return this.subImage6;
    }

    public Trip subImage6(byte[] subImage6) {
        this.setSubImage6(subImage6);
        return this;
    }

    public void setSubImage6(byte[] subImage6) {
        this.subImage6 = subImage6;
    }

    public String getSubImage6ContentType() {
        return this.subImage6ContentType;
    }

    public Trip subImage6ContentType(String subImage6ContentType) {
        this.subImage6ContentType = subImage6ContentType;
        return this;
    }

    public void setSubImage6ContentType(String subImage6ContentType) {
        this.subImage6ContentType = subImage6ContentType;
    }

    public String getTripDescription() {
        return this.tripDescription;
    }

    public Trip tripDescription(String tripDescription) {
        this.setTripDescription(tripDescription);
        return this;
    }

    public void setTripDescription(String tripDescription) {
        this.tripDescription = tripDescription;
    }

    public String getCombinedMap() {
        return this.combinedMap;
    }

    public Trip combinedMap(String combinedMap) {
        this.setCombinedMap(combinedMap);
        return this;
    }

    public void setCombinedMap(String combinedMap) {
        this.combinedMap = combinedMap;
    }

    public String getRelatedEvents() {
        return this.relatedEvents;
    }

    public Trip relatedEvents(String relatedEvents) {
        this.setRelatedEvents(relatedEvents);
        return this;
    }

    public void setRelatedEvents(String relatedEvents) {
        this.relatedEvents = relatedEvents;
    }

    public String getSubImage1Description() {
        return this.subImage1Description;
    }

    public Trip subImage1Description(String subImage1Description) {
        this.setSubImage1Description(subImage1Description);
        return this;
    }

    public void setSubImage1Description(String subImage1Description) {
        this.subImage1Description = subImage1Description;
    }

    public String getSubImage2Description() {
        return this.subImage2Description;
    }

    public Trip subImage2Description(String subImage2Description) {
        this.setSubImage2Description(subImage2Description);
        return this;
    }

    public void setSubImage2Description(String subImage2Description) {
        this.subImage2Description = subImage2Description;
    }

    public String getSubImage3Description() {
        return this.subImage3Description;
    }

    public Trip subImage3Description(String subImage3Description) {
        this.setSubImage3Description(subImage3Description);
        return this;
    }

    public void setSubImage3Description(String subImage3Description) {
        this.subImage3Description = subImage3Description;
    }

    public String getSubImage4Description() {
        return this.subImage4Description;
    }

    public Trip subImage4Description(String subImage4Description) {
        this.setSubImage4Description(subImage4Description);
        return this;
    }

    public void setSubImage4Description(String subImage4Description) {
        this.subImage4Description = subImage4Description;
    }

    public String getSubImage5Description() {
        return this.subImage5Description;
    }

    public Trip subImage5Description(String subImage5Description) {
        this.setSubImage5Description(subImage5Description);
        return this;
    }

    public void setSubImage5Description(String subImage5Description) {
        this.subImage5Description = subImage5Description;
    }

    public String getSubImage6Description() {
        return this.subImage6Description;
    }

    public Trip subImage6Description(String subImage6Description) {
        this.setSubImage6Description(subImage6Description);
        return this;
    }

    public void setSubImage6Description(String subImage6Description) {
        this.subImage6Description = subImage6Description;
    }

    public Integer getActiveSubImages() {
        return this.activeSubImages;
    }

    public Trip activeSubImages(Integer activeSubImages) {
        this.setActiveSubImages(activeSubImages);
        return this;
    }

    public void setActiveSubImages(Integer activeSubImages) {
        this.activeSubImages = activeSubImages;
    }

    public Integer getActiveRelatedEvents() {
        return this.activeRelatedEvents;
    }

    public Trip activeRelatedEvents(Integer activeRelatedEvents) {
        this.setActiveRelatedEvents(activeRelatedEvents);
        return this;
    }

    public void setActiveRelatedEvents(Integer activeRelatedEvents) {
        this.activeRelatedEvents = activeRelatedEvents;
    }

    public String getTransportationDetails() {
        return this.transportationDetails;
    }

    public Trip transportationDetails(String transportationDetails) {
        this.setTransportationDetails(transportationDetails);
        return this;
    }

    public void setTransportationDetails(String transportationDetails) {
        this.transportationDetails = transportationDetails;
    }

    public String getCostDetails() {
        return this.costDetails;
    }

    public Trip costDetails(String costDetails) {
        this.setCostDetails(costDetails);
        return this;
    }

    public void setCostDetails(String costDetails) {
        this.costDetails = costDetails;
    }

    public String getAccomodationDetails() {
        return this.accomodationDetails;
    }

    public Trip accomodationDetails(String accomodationDetails) {
        this.setAccomodationDetails(accomodationDetails);
        return this;
    }

    public void setAccomodationDetails(String accomodationDetails) {
        this.accomodationDetails = accomodationDetails;
    }

    public String getRelatedLinks() {
        return this.relatedLinks;
    }

    public Trip relatedLinks(String relatedLinks) {
        this.setRelatedLinks(relatedLinks);
        return this;
    }

    public void setRelatedLinks(String relatedLinks) {
        this.relatedLinks = relatedLinks;
    }

    public LocalDate getStartDate() {
        return this.startDate;
    }

    public Trip startDate(LocalDate startDate) {
        this.setStartDate(startDate);
        return this;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return this.endDate;
    }

    public Trip endDate(LocalDate endDate) {
        this.setEndDate(endDate);
        return this;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Trip)) {
            return false;
        }
        return id != null && id.equals(((Trip) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Trip{" +
            "id=" + getId() +
            ", tripName='" + getTripName() + "'" +
            ", mainImage='" + getMainImage() + "'" +
            ", mainImageContentType='" + getMainImageContentType() + "'" +
            ", subImage1='" + getSubImage1() + "'" +
            ", subImage1ContentType='" + getSubImage1ContentType() + "'" +
            ", subImage2='" + getSubImage2() + "'" +
            ", subImage2ContentType='" + getSubImage2ContentType() + "'" +
            ", subImage3='" + getSubImage3() + "'" +
            ", subImage3ContentType='" + getSubImage3ContentType() + "'" +
            ", subImage4='" + getSubImage4() + "'" +
            ", subImage4ContentType='" + getSubImage4ContentType() + "'" +
            ", subImage5='" + getSubImage5() + "'" +
            ", subImage5ContentType='" + getSubImage5ContentType() + "'" +
            ", subImage6='" + getSubImage6() + "'" +
            ", subImage6ContentType='" + getSubImage6ContentType() + "'" +
            ", tripDescription='" + getTripDescription() + "'" +
            ", combinedMap='" + getCombinedMap() + "'" +
            ", relatedEvents='" + getRelatedEvents() + "'" +
            ", subImage1Description='" + getSubImage1Description() + "'" +
            ", subImage2Description='" + getSubImage2Description() + "'" +
            ", subImage3Description='" + getSubImage3Description() + "'" +
            ", subImage4Description='" + getSubImage4Description() + "'" +
            ", subImage5Description='" + getSubImage5Description() + "'" +
            ", subImage6Description='" + getSubImage6Description() + "'" +
            ", activeSubImages=" + getActiveSubImages() +
            ", activeRelatedEvents=" + getActiveRelatedEvents() +
            ", transportationDetails='" + getTransportationDetails() + "'" +
            ", costDetails='" + getCostDetails() + "'" +
            ", accomodationDetails='" + getAccomodationDetails() + "'" +
            ", relatedLinks='" + getRelatedLinks() + "'" +
            ", startDate='" + getStartDate() + "'" +
            ", endDate='" + getEndDate() + "'" +
            "}";
    }
}
