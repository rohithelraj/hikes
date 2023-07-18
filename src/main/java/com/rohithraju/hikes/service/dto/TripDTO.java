package com.rohithraju.hikes.service.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;
import javax.persistence.Lob;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link com.rohithraju.hikes.domain.Trip} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class TripDTO implements Serializable {

    private Long id;

    @NotNull
    private String tripName;

    @Lob
    private byte[] mainImage;

    private String mainImageContentType;

    @Lob
    private byte[] subImage1;

    private String subImage1ContentType;

    @Lob
    private byte[] subImage2;

    private String subImage2ContentType;

    @Lob
    private byte[] subImage3;

    private String subImage3ContentType;

    @Lob
    private byte[] subImage4;

    private String subImage4ContentType;

    @Lob
    private byte[] subImage5;

    private String subImage5ContentType;

    @Lob
    private byte[] subImage6;

    private String subImage6ContentType;

    @Lob
    private String tripDescription;

    private String combinedMap;

    private String relatedEvents;

    @Lob
    private String subImage1Description;

    @Lob
    private String subImage2Description;

    @Lob
    private String subImage3Description;

    @Lob
    private String subImage4Description;

    @Lob
    private String subImage5Description;

    @Lob
    private String subImage6Description;

    private Integer activeSubImages;

    private Integer activeRelatedEvents;

    @Lob
    private String transportationDetails;

    @Lob
    private String costDetails;

    @Lob
    private String accomodationDetails;

    @Lob
    private String relatedLinks;

    @NotNull
    private LocalDate startDate;

    @NotNull
    private LocalDate endDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTripName() {
        return tripName;
    }

    public void setTripName(String tripName) {
        this.tripName = tripName;
    }

    public byte[] getMainImage() {
        return mainImage;
    }

    public void setMainImage(byte[] mainImage) {
        this.mainImage = mainImage;
    }

    public String getMainImageContentType() {
        return mainImageContentType;
    }

    public void setMainImageContentType(String mainImageContentType) {
        this.mainImageContentType = mainImageContentType;
    }

    public byte[] getSubImage1() {
        return subImage1;
    }

    public void setSubImage1(byte[] subImage1) {
        this.subImage1 = subImage1;
    }

    public String getSubImage1ContentType() {
        return subImage1ContentType;
    }

    public void setSubImage1ContentType(String subImage1ContentType) {
        this.subImage1ContentType = subImage1ContentType;
    }

    public byte[] getSubImage2() {
        return subImage2;
    }

    public void setSubImage2(byte[] subImage2) {
        this.subImage2 = subImage2;
    }

    public String getSubImage2ContentType() {
        return subImage2ContentType;
    }

    public void setSubImage2ContentType(String subImage2ContentType) {
        this.subImage2ContentType = subImage2ContentType;
    }

    public byte[] getSubImage3() {
        return subImage3;
    }

    public void setSubImage3(byte[] subImage3) {
        this.subImage3 = subImage3;
    }

    public String getSubImage3ContentType() {
        return subImage3ContentType;
    }

    public void setSubImage3ContentType(String subImage3ContentType) {
        this.subImage3ContentType = subImage3ContentType;
    }

    public byte[] getSubImage4() {
        return subImage4;
    }

    public void setSubImage4(byte[] subImage4) {
        this.subImage4 = subImage4;
    }

    public String getSubImage4ContentType() {
        return subImage4ContentType;
    }

    public void setSubImage4ContentType(String subImage4ContentType) {
        this.subImage4ContentType = subImage4ContentType;
    }

    public byte[] getSubImage5() {
        return subImage5;
    }

    public void setSubImage5(byte[] subImage5) {
        this.subImage5 = subImage5;
    }

    public String getSubImage5ContentType() {
        return subImage5ContentType;
    }

    public void setSubImage5ContentType(String subImage5ContentType) {
        this.subImage5ContentType = subImage5ContentType;
    }

    public byte[] getSubImage6() {
        return subImage6;
    }

    public void setSubImage6(byte[] subImage6) {
        this.subImage6 = subImage6;
    }

    public String getSubImage6ContentType() {
        return subImage6ContentType;
    }

    public void setSubImage6ContentType(String subImage6ContentType) {
        this.subImage6ContentType = subImage6ContentType;
    }

    public String getTripDescription() {
        return tripDescription;
    }

    public void setTripDescription(String tripDescription) {
        this.tripDescription = tripDescription;
    }

    public String getCombinedMap() {
        return combinedMap;
    }

    public void setCombinedMap(String combinedMap) {
        this.combinedMap = combinedMap;
    }

    public String getRelatedEvents() {
        return relatedEvents;
    }

    public void setRelatedEvents(String relatedEvents) {
        this.relatedEvents = relatedEvents;
    }

    public String getSubImage1Description() {
        return subImage1Description;
    }

    public void setSubImage1Description(String subImage1Description) {
        this.subImage1Description = subImage1Description;
    }

    public String getSubImage2Description() {
        return subImage2Description;
    }

    public void setSubImage2Description(String subImage2Description) {
        this.subImage2Description = subImage2Description;
    }

    public String getSubImage3Description() {
        return subImage3Description;
    }

    public void setSubImage3Description(String subImage3Description) {
        this.subImage3Description = subImage3Description;
    }

    public String getSubImage4Description() {
        return subImage4Description;
    }

    public void setSubImage4Description(String subImage4Description) {
        this.subImage4Description = subImage4Description;
    }

    public String getSubImage5Description() {
        return subImage5Description;
    }

    public void setSubImage5Description(String subImage5Description) {
        this.subImage5Description = subImage5Description;
    }

    public String getSubImage6Description() {
        return subImage6Description;
    }

    public void setSubImage6Description(String subImage6Description) {
        this.subImage6Description = subImage6Description;
    }

    public Integer getActiveSubImages() {
        return activeSubImages;
    }

    public void setActiveSubImages(Integer activeSubImages) {
        this.activeSubImages = activeSubImages;
    }

    public Integer getActiveRelatedEvents() {
        return activeRelatedEvents;
    }

    public void setActiveRelatedEvents(Integer activeRelatedEvents) {
        this.activeRelatedEvents = activeRelatedEvents;
    }

    public String getTransportationDetails() {
        return transportationDetails;
    }

    public void setTransportationDetails(String transportationDetails) {
        this.transportationDetails = transportationDetails;
    }

    public String getCostDetails() {
        return costDetails;
    }

    public void setCostDetails(String costDetails) {
        this.costDetails = costDetails;
    }

    public String getAccomodationDetails() {
        return accomodationDetails;
    }

    public void setAccomodationDetails(String accomodationDetails) {
        this.accomodationDetails = accomodationDetails;
    }

    public String getRelatedLinks() {
        return relatedLinks;
    }

    public void setRelatedLinks(String relatedLinks) {
        this.relatedLinks = relatedLinks;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TripDTO)) {
            return false;
        }

        TripDTO tripDTO = (TripDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, tripDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "TripDTO{" +
            "id=" + getId() +
            ", tripName='" + getTripName() + "'" +
            ", mainImage='" + getMainImage() + "'" +
            ", subImage1='" + getSubImage1() + "'" +
            ", subImage2='" + getSubImage2() + "'" +
            ", subImage3='" + getSubImage3() + "'" +
            ", subImage4='" + getSubImage4() + "'" +
            ", subImage5='" + getSubImage5() + "'" +
            ", subImage6='" + getSubImage6() + "'" +
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
