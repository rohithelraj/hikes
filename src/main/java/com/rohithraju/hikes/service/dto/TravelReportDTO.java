package com.rohithraju.hikes.service.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;
import javax.persistence.Lob;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link com.rohithraju.hikes.domain.TravelReport} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class TravelReportDTO implements Serializable {

    private Long id;

    @NotNull
    private String reportName;

    @NotNull
    private LocalDate reportDate;

    private String reportEventIds;

    @Lob
    private String reportDescription;

    @Lob
    private byte[] reportMainImage;

    private String reportMainImageContentType;

    @Lob
    private byte[] reportSubImage1;

    private String reportSubImage1ContentType;
    private String reportSubImageName;

    @Lob
    private String reportSubImage1Description;

    @Lob
    private byte[] reportSubImage2;

    private String reportSubImage2ContentType;
    private String reportSubImage2Name;

    @Lob
    private String reportSubImage2Description;

    @Lob
    private byte[] reportSubImage3;

    private String reportSubImage3ContentType;
    private String reportSubImage3Name;

    @Lob
    private String reportSubImage3Description;

    @Lob
    private byte[] reportSubImage4;

    private String reportSubImage4ContentType;
    private String reportSubImage4Name;

    @Lob
    private String reportSubImage4Description;

    @Lob
    private byte[] reportSubImage5;

    private String reportSubImage5ContentType;
    private String reportSubImage5Name;

    @Lob
    private String reportSubImage5Description;

    @Lob
    private byte[] reportSubImage6;

    private String reportSubImage6ContentType;
    private String reportSubImage6Name;

    @Lob
    private String reportSubImage6Description;

    private TripDTO trip;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReportName() {
        return reportName;
    }

    public void setReportName(String reportName) {
        this.reportName = reportName;
    }

    public LocalDate getReportDate() {
        return reportDate;
    }

    public void setReportDate(LocalDate reportDate) {
        this.reportDate = reportDate;
    }

    public String getReportEventIds() {
        return reportEventIds;
    }

    public void setReportEventIds(String reportEventIds) {
        this.reportEventIds = reportEventIds;
    }

    public String getReportDescription() {
        return reportDescription;
    }

    public void setReportDescription(String reportDescription) {
        this.reportDescription = reportDescription;
    }

    public byte[] getReportMainImage() {
        return reportMainImage;
    }

    public void setReportMainImage(byte[] reportMainImage) {
        this.reportMainImage = reportMainImage;
    }

    public String getReportMainImageContentType() {
        return reportMainImageContentType;
    }

    public void setReportMainImageContentType(String reportMainImageContentType) {
        this.reportMainImageContentType = reportMainImageContentType;
    }

    public byte[] getReportSubImage1() {
        return reportSubImage1;
    }

    public void setReportSubImage1(byte[] reportSubImage1) {
        this.reportSubImage1 = reportSubImage1;
    }

    public String getReportSubImage1ContentType() {
        return reportSubImage1ContentType;
    }

    public void setReportSubImage1ContentType(String reportSubImage1ContentType) {
        this.reportSubImage1ContentType = reportSubImage1ContentType;
    }

    public String getReportSubImageName() {
        return reportSubImageName;
    }

    public void setReportSubImageName(String reportSubImageName) {
        this.reportSubImageName = reportSubImageName;
    }

    public String getReportSubImage1Description() {
        return reportSubImage1Description;
    }

    public void setReportSubImage1Description(String reportSubImage1Description) {
        this.reportSubImage1Description = reportSubImage1Description;
    }

    public byte[] getReportSubImage2() {
        return reportSubImage2;
    }

    public void setReportSubImage2(byte[] reportSubImage2) {
        this.reportSubImage2 = reportSubImage2;
    }

    public String getReportSubImage2ContentType() {
        return reportSubImage2ContentType;
    }

    public void setReportSubImage2ContentType(String reportSubImage2ContentType) {
        this.reportSubImage2ContentType = reportSubImage2ContentType;
    }

    public String getReportSubImage2Name() {
        return reportSubImage2Name;
    }

    public void setReportSubImage2Name(String reportSubImage2Name) {
        this.reportSubImage2Name = reportSubImage2Name;
    }

    public String getReportSubImage2Description() {
        return reportSubImage2Description;
    }

    public void setReportSubImage2Description(String reportSubImage2Description) {
        this.reportSubImage2Description = reportSubImage2Description;
    }

    public byte[] getReportSubImage3() {
        return reportSubImage3;
    }

    public void setReportSubImage3(byte[] reportSubImage3) {
        this.reportSubImage3 = reportSubImage3;
    }

    public String getReportSubImage3ContentType() {
        return reportSubImage3ContentType;
    }

    public void setReportSubImage3ContentType(String reportSubImage3ContentType) {
        this.reportSubImage3ContentType = reportSubImage3ContentType;
    }

    public String getReportSubImage3Name() {
        return reportSubImage3Name;
    }

    public void setReportSubImage3Name(String reportSubImage3Name) {
        this.reportSubImage3Name = reportSubImage3Name;
    }

    public String getReportSubImage3Description() {
        return reportSubImage3Description;
    }

    public void setReportSubImage3Description(String reportSubImage3Description) {
        this.reportSubImage3Description = reportSubImage3Description;
    }

    public byte[] getReportSubImage4() {
        return reportSubImage4;
    }

    public void setReportSubImage4(byte[] reportSubImage4) {
        this.reportSubImage4 = reportSubImage4;
    }

    public String getReportSubImage4ContentType() {
        return reportSubImage4ContentType;
    }

    public void setReportSubImage4ContentType(String reportSubImage4ContentType) {
        this.reportSubImage4ContentType = reportSubImage4ContentType;
    }

    public String getReportSubImage4Name() {
        return reportSubImage4Name;
    }

    public void setReportSubImage4Name(String reportSubImage4Name) {
        this.reportSubImage4Name = reportSubImage4Name;
    }

    public String getReportSubImage4Description() {
        return reportSubImage4Description;
    }

    public void setReportSubImage4Description(String reportSubImage4Description) {
        this.reportSubImage4Description = reportSubImage4Description;
    }

    public byte[] getReportSubImage5() {
        return reportSubImage5;
    }

    public void setReportSubImage5(byte[] reportSubImage5) {
        this.reportSubImage5 = reportSubImage5;
    }

    public String getReportSubImage5ContentType() {
        return reportSubImage5ContentType;
    }

    public void setReportSubImage5ContentType(String reportSubImage5ContentType) {
        this.reportSubImage5ContentType = reportSubImage5ContentType;
    }

    public String getReportSubImage5Name() {
        return reportSubImage5Name;
    }

    public void setReportSubImage5Name(String reportSubImage5Name) {
        this.reportSubImage5Name = reportSubImage5Name;
    }

    public String getReportSubImage5Description() {
        return reportSubImage5Description;
    }

    public void setReportSubImage5Description(String reportSubImage5Description) {
        this.reportSubImage5Description = reportSubImage5Description;
    }

    public byte[] getReportSubImage6() {
        return reportSubImage6;
    }

    public void setReportSubImage6(byte[] reportSubImage6) {
        this.reportSubImage6 = reportSubImage6;
    }

    public String getReportSubImage6ContentType() {
        return reportSubImage6ContentType;
    }

    public void setReportSubImage6ContentType(String reportSubImage6ContentType) {
        this.reportSubImage6ContentType = reportSubImage6ContentType;
    }

    public String getReportSubImage6Name() {
        return reportSubImage6Name;
    }

    public void setReportSubImage6Name(String reportSubImage6Name) {
        this.reportSubImage6Name = reportSubImage6Name;
    }

    public String getReportSubImage6Description() {
        return reportSubImage6Description;
    }

    public void setReportSubImage6Description(String reportSubImage6Description) {
        this.reportSubImage6Description = reportSubImage6Description;
    }

    public TripDTO getTrip() {
        return trip;
    }

    public void setTrip(TripDTO trip) {
        this.trip = trip;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TravelReportDTO)) {
            return false;
        }

        TravelReportDTO travelReportDTO = (TravelReportDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, travelReportDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "TravelReportDTO{" +
            "id=" + getId() +
            ", reportName='" + getReportName() + "'" +
            ", reportDate='" + getReportDate() + "'" +
            ", reportEventIds='" + getReportEventIds() + "'" +
            ", reportDescription='" + getReportDescription() + "'" +
            ", reportMainImage='" + getReportMainImage() + "'" +
            ", reportSubImage1='" + getReportSubImage1() + "'" +
            ", reportSubImageName='" + getReportSubImageName() + "'" +
            ", reportSubImage1Description='" + getReportSubImage1Description() + "'" +
            ", reportSubImage2='" + getReportSubImage2() + "'" +
            ", reportSubImage2Name='" + getReportSubImage2Name() + "'" +
            ", reportSubImage2Description='" + getReportSubImage2Description() + "'" +
            ", reportSubImage3='" + getReportSubImage3() + "'" +
            ", reportSubImage3Name='" + getReportSubImage3Name() + "'" +
            ", reportSubImage3Description='" + getReportSubImage3Description() + "'" +
            ", reportSubImage4='" + getReportSubImage4() + "'" +
            ", reportSubImage4Name='" + getReportSubImage4Name() + "'" +
            ", reportSubImage4Description='" + getReportSubImage4Description() + "'" +
            ", reportSubImage5='" + getReportSubImage5() + "'" +
            ", reportSubImage5Name='" + getReportSubImage5Name() + "'" +
            ", reportSubImage5Description='" + getReportSubImage5Description() + "'" +
            ", reportSubImage6='" + getReportSubImage6() + "'" +
            ", reportSubImage6Name='" + getReportSubImage6Name() + "'" +
            ", reportSubImage6Description='" + getReportSubImage6Description() + "'" +
            ", trip=" + getTrip() +
            "}";
    }
}
