package com.rohithraju.hikes.domain;

import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A TravelReport.
 */
@Entity
@Table(name = "travel_report")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class TravelReport implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "report_name", nullable = false)
    private String reportName;

    @NotNull
    @Column(name = "report_date", nullable = false)
    private LocalDate reportDate;

    @Column(name = "report_event_ids")
    private String reportEventIds;

    @Lob
    @Column(name = "report_description")
    private String reportDescription;

    @Lob
    @Column(name = "report_main_image")
    private byte[] reportMainImage;

    @Column(name = "report_main_image_content_type")
    private String reportMainImageContentType;

    @Lob
    @Column(name = "report_sub_image_1")
    private byte[] reportSubImage1;

    @Column(name = "report_sub_image_1_content_type")
    private String reportSubImage1ContentType;

    @Column(name = "report_sub_image_name")
    private String reportSubImageName;

    @Lob
    @Column(name = "report_sub_image_1_description")
    private String reportSubImage1Description;

    @Lob
    @Column(name = "report_sub_image_2")
    private byte[] reportSubImage2;

    @Column(name = "report_sub_image_2_content_type")
    private String reportSubImage2ContentType;

    @Column(name = "report_sub_image_2_name")
    private String reportSubImage2Name;

    @Lob
    @Column(name = "report_sub_image_2_description")
    private String reportSubImage2Description;

    @Lob
    @Column(name = "report_sub_image_3")
    private byte[] reportSubImage3;

    @Column(name = "report_sub_image_3_content_type")
    private String reportSubImage3ContentType;

    @Column(name = "report_sub_image_3_name")
    private String reportSubImage3Name;

    @Lob
    @Column(name = "report_sub_image_3_description")
    private String reportSubImage3Description;

    @Lob
    @Column(name = "report_sub_image_4")
    private byte[] reportSubImage4;

    @Column(name = "report_sub_image_4_content_type")
    private String reportSubImage4ContentType;

    @Column(name = "report_sub_image_4_name")
    private String reportSubImage4Name;

    @Lob
    @Column(name = "report_sub_image_4_description")
    private String reportSubImage4Description;

    @Lob
    @Column(name = "report_sub_image_5")
    private byte[] reportSubImage5;

    @Column(name = "report_sub_image_5_content_type")
    private String reportSubImage5ContentType;

    @Column(name = "report_sub_image_5_name")
    private String reportSubImage5Name;

    @Lob
    @Column(name = "report_sub_image_5_description")
    private String reportSubImage5Description;

    @Lob
    @Column(name = "report_sub_image_6")
    private byte[] reportSubImage6;

    @Column(name = "report_sub_image_6_content_type")
    private String reportSubImage6ContentType;

    @Column(name = "report_sub_image_6_name")
    private String reportSubImage6Name;

    @Lob
    @Column(name = "report_sub_image_6_description")
    private String reportSubImage6Description;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private Trip trip;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public TravelReport id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReportName() {
        return this.reportName;
    }

    public TravelReport reportName(String reportName) {
        this.setReportName(reportName);
        return this;
    }

    public void setReportName(String reportName) {
        this.reportName = reportName;
    }

    public LocalDate getReportDate() {
        return this.reportDate;
    }

    public TravelReport reportDate(LocalDate reportDate) {
        this.setReportDate(reportDate);
        return this;
    }

    public void setReportDate(LocalDate reportDate) {
        this.reportDate = reportDate;
    }

    public String getReportEventIds() {
        return this.reportEventIds;
    }

    public TravelReport reportEventIds(String reportEventIds) {
        this.setReportEventIds(reportEventIds);
        return this;
    }

    public void setReportEventIds(String reportEventIds) {
        this.reportEventIds = reportEventIds;
    }

    public String getReportDescription() {
        return this.reportDescription;
    }

    public TravelReport reportDescription(String reportDescription) {
        this.setReportDescription(reportDescription);
        return this;
    }

    public void setReportDescription(String reportDescription) {
        this.reportDescription = reportDescription;
    }

    public byte[] getReportMainImage() {
        return this.reportMainImage;
    }

    public TravelReport reportMainImage(byte[] reportMainImage) {
        this.setReportMainImage(reportMainImage);
        return this;
    }

    public void setReportMainImage(byte[] reportMainImage) {
        this.reportMainImage = reportMainImage;
    }

    public String getReportMainImageContentType() {
        return this.reportMainImageContentType;
    }

    public TravelReport reportMainImageContentType(String reportMainImageContentType) {
        this.reportMainImageContentType = reportMainImageContentType;
        return this;
    }

    public void setReportMainImageContentType(String reportMainImageContentType) {
        this.reportMainImageContentType = reportMainImageContentType;
    }

    public byte[] getReportSubImage1() {
        return this.reportSubImage1;
    }

    public TravelReport reportSubImage1(byte[] reportSubImage1) {
        this.setReportSubImage1(reportSubImage1);
        return this;
    }

    public void setReportSubImage1(byte[] reportSubImage1) {
        this.reportSubImage1 = reportSubImage1;
    }

    public String getReportSubImage1ContentType() {
        return this.reportSubImage1ContentType;
    }

    public TravelReport reportSubImage1ContentType(String reportSubImage1ContentType) {
        this.reportSubImage1ContentType = reportSubImage1ContentType;
        return this;
    }

    public void setReportSubImage1ContentType(String reportSubImage1ContentType) {
        this.reportSubImage1ContentType = reportSubImage1ContentType;
    }

    public String getReportSubImageName() {
        return this.reportSubImageName;
    }

    public TravelReport reportSubImageName(String reportSubImageName) {
        this.setReportSubImageName(reportSubImageName);
        return this;
    }

    public void setReportSubImageName(String reportSubImageName) {
        this.reportSubImageName = reportSubImageName;
    }

    public String getReportSubImage1Description() {
        return this.reportSubImage1Description;
    }

    public TravelReport reportSubImage1Description(String reportSubImage1Description) {
        this.setReportSubImage1Description(reportSubImage1Description);
        return this;
    }

    public void setReportSubImage1Description(String reportSubImage1Description) {
        this.reportSubImage1Description = reportSubImage1Description;
    }

    public byte[] getReportSubImage2() {
        return this.reportSubImage2;
    }

    public TravelReport reportSubImage2(byte[] reportSubImage2) {
        this.setReportSubImage2(reportSubImage2);
        return this;
    }

    public void setReportSubImage2(byte[] reportSubImage2) {
        this.reportSubImage2 = reportSubImage2;
    }

    public String getReportSubImage2ContentType() {
        return this.reportSubImage2ContentType;
    }

    public TravelReport reportSubImage2ContentType(String reportSubImage2ContentType) {
        this.reportSubImage2ContentType = reportSubImage2ContentType;
        return this;
    }

    public void setReportSubImage2ContentType(String reportSubImage2ContentType) {
        this.reportSubImage2ContentType = reportSubImage2ContentType;
    }

    public String getReportSubImage2Name() {
        return this.reportSubImage2Name;
    }

    public TravelReport reportSubImage2Name(String reportSubImage2Name) {
        this.setReportSubImage2Name(reportSubImage2Name);
        return this;
    }

    public void setReportSubImage2Name(String reportSubImage2Name) {
        this.reportSubImage2Name = reportSubImage2Name;
    }

    public String getReportSubImage2Description() {
        return this.reportSubImage2Description;
    }

    public TravelReport reportSubImage2Description(String reportSubImage2Description) {
        this.setReportSubImage2Description(reportSubImage2Description);
        return this;
    }

    public void setReportSubImage2Description(String reportSubImage2Description) {
        this.reportSubImage2Description = reportSubImage2Description;
    }

    public byte[] getReportSubImage3() {
        return this.reportSubImage3;
    }

    public TravelReport reportSubImage3(byte[] reportSubImage3) {
        this.setReportSubImage3(reportSubImage3);
        return this;
    }

    public void setReportSubImage3(byte[] reportSubImage3) {
        this.reportSubImage3 = reportSubImage3;
    }

    public String getReportSubImage3ContentType() {
        return this.reportSubImage3ContentType;
    }

    public TravelReport reportSubImage3ContentType(String reportSubImage3ContentType) {
        this.reportSubImage3ContentType = reportSubImage3ContentType;
        return this;
    }

    public void setReportSubImage3ContentType(String reportSubImage3ContentType) {
        this.reportSubImage3ContentType = reportSubImage3ContentType;
    }

    public String getReportSubImage3Name() {
        return this.reportSubImage3Name;
    }

    public TravelReport reportSubImage3Name(String reportSubImage3Name) {
        this.setReportSubImage3Name(reportSubImage3Name);
        return this;
    }

    public void setReportSubImage3Name(String reportSubImage3Name) {
        this.reportSubImage3Name = reportSubImage3Name;
    }

    public String getReportSubImage3Description() {
        return this.reportSubImage3Description;
    }

    public TravelReport reportSubImage3Description(String reportSubImage3Description) {
        this.setReportSubImage3Description(reportSubImage3Description);
        return this;
    }

    public void setReportSubImage3Description(String reportSubImage3Description) {
        this.reportSubImage3Description = reportSubImage3Description;
    }

    public byte[] getReportSubImage4() {
        return this.reportSubImage4;
    }

    public TravelReport reportSubImage4(byte[] reportSubImage4) {
        this.setReportSubImage4(reportSubImage4);
        return this;
    }

    public void setReportSubImage4(byte[] reportSubImage4) {
        this.reportSubImage4 = reportSubImage4;
    }

    public String getReportSubImage4ContentType() {
        return this.reportSubImage4ContentType;
    }

    public TravelReport reportSubImage4ContentType(String reportSubImage4ContentType) {
        this.reportSubImage4ContentType = reportSubImage4ContentType;
        return this;
    }

    public void setReportSubImage4ContentType(String reportSubImage4ContentType) {
        this.reportSubImage4ContentType = reportSubImage4ContentType;
    }

    public String getReportSubImage4Name() {
        return this.reportSubImage4Name;
    }

    public TravelReport reportSubImage4Name(String reportSubImage4Name) {
        this.setReportSubImage4Name(reportSubImage4Name);
        return this;
    }

    public void setReportSubImage4Name(String reportSubImage4Name) {
        this.reportSubImage4Name = reportSubImage4Name;
    }

    public String getReportSubImage4Description() {
        return this.reportSubImage4Description;
    }

    public TravelReport reportSubImage4Description(String reportSubImage4Description) {
        this.setReportSubImage4Description(reportSubImage4Description);
        return this;
    }

    public void setReportSubImage4Description(String reportSubImage4Description) {
        this.reportSubImage4Description = reportSubImage4Description;
    }

    public byte[] getReportSubImage5() {
        return this.reportSubImage5;
    }

    public TravelReport reportSubImage5(byte[] reportSubImage5) {
        this.setReportSubImage5(reportSubImage5);
        return this;
    }

    public void setReportSubImage5(byte[] reportSubImage5) {
        this.reportSubImage5 = reportSubImage5;
    }

    public String getReportSubImage5ContentType() {
        return this.reportSubImage5ContentType;
    }

    public TravelReport reportSubImage5ContentType(String reportSubImage5ContentType) {
        this.reportSubImage5ContentType = reportSubImage5ContentType;
        return this;
    }

    public void setReportSubImage5ContentType(String reportSubImage5ContentType) {
        this.reportSubImage5ContentType = reportSubImage5ContentType;
    }

    public String getReportSubImage5Name() {
        return this.reportSubImage5Name;
    }

    public TravelReport reportSubImage5Name(String reportSubImage5Name) {
        this.setReportSubImage5Name(reportSubImage5Name);
        return this;
    }

    public void setReportSubImage5Name(String reportSubImage5Name) {
        this.reportSubImage5Name = reportSubImage5Name;
    }

    public String getReportSubImage5Description() {
        return this.reportSubImage5Description;
    }

    public TravelReport reportSubImage5Description(String reportSubImage5Description) {
        this.setReportSubImage5Description(reportSubImage5Description);
        return this;
    }

    public void setReportSubImage5Description(String reportSubImage5Description) {
        this.reportSubImage5Description = reportSubImage5Description;
    }

    public byte[] getReportSubImage6() {
        return this.reportSubImage6;
    }

    public TravelReport reportSubImage6(byte[] reportSubImage6) {
        this.setReportSubImage6(reportSubImage6);
        return this;
    }

    public void setReportSubImage6(byte[] reportSubImage6) {
        this.reportSubImage6 = reportSubImage6;
    }

    public String getReportSubImage6ContentType() {
        return this.reportSubImage6ContentType;
    }

    public TravelReport reportSubImage6ContentType(String reportSubImage6ContentType) {
        this.reportSubImage6ContentType = reportSubImage6ContentType;
        return this;
    }

    public void setReportSubImage6ContentType(String reportSubImage6ContentType) {
        this.reportSubImage6ContentType = reportSubImage6ContentType;
    }

    public String getReportSubImage6Name() {
        return this.reportSubImage6Name;
    }

    public TravelReport reportSubImage6Name(String reportSubImage6Name) {
        this.setReportSubImage6Name(reportSubImage6Name);
        return this;
    }

    public void setReportSubImage6Name(String reportSubImage6Name) {
        this.reportSubImage6Name = reportSubImage6Name;
    }

    public String getReportSubImage6Description() {
        return this.reportSubImage6Description;
    }

    public TravelReport reportSubImage6Description(String reportSubImage6Description) {
        this.setReportSubImage6Description(reportSubImage6Description);
        return this;
    }

    public void setReportSubImage6Description(String reportSubImage6Description) {
        this.reportSubImage6Description = reportSubImage6Description;
    }

    public Trip getTrip() {
        return this.trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }

    public TravelReport trip(Trip trip) {
        this.setTrip(trip);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TravelReport)) {
            return false;
        }
        return id != null && id.equals(((TravelReport) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "TravelReport{" +
            "id=" + getId() +
            ", reportName='" + getReportName() + "'" +
            ", reportDate='" + getReportDate() + "'" +
            ", reportEventIds='" + getReportEventIds() + "'" +
            ", reportDescription='" + getReportDescription() + "'" +
            ", reportMainImage='" + getReportMainImage() + "'" +
            ", reportMainImageContentType='" + getReportMainImageContentType() + "'" +
            ", reportSubImage1='" + getReportSubImage1() + "'" +
            ", reportSubImage1ContentType='" + getReportSubImage1ContentType() + "'" +
            ", reportSubImageName='" + getReportSubImageName() + "'" +
            ", reportSubImage1Description='" + getReportSubImage1Description() + "'" +
            ", reportSubImage2='" + getReportSubImage2() + "'" +
            ", reportSubImage2ContentType='" + getReportSubImage2ContentType() + "'" +
            ", reportSubImage2Name='" + getReportSubImage2Name() + "'" +
            ", reportSubImage2Description='" + getReportSubImage2Description() + "'" +
            ", reportSubImage3='" + getReportSubImage3() + "'" +
            ", reportSubImage3ContentType='" + getReportSubImage3ContentType() + "'" +
            ", reportSubImage3Name='" + getReportSubImage3Name() + "'" +
            ", reportSubImage3Description='" + getReportSubImage3Description() + "'" +
            ", reportSubImage4='" + getReportSubImage4() + "'" +
            ", reportSubImage4ContentType='" + getReportSubImage4ContentType() + "'" +
            ", reportSubImage4Name='" + getReportSubImage4Name() + "'" +
            ", reportSubImage4Description='" + getReportSubImage4Description() + "'" +
            ", reportSubImage5='" + getReportSubImage5() + "'" +
            ", reportSubImage5ContentType='" + getReportSubImage5ContentType() + "'" +
            ", reportSubImage5Name='" + getReportSubImage5Name() + "'" +
            ", reportSubImage5Description='" + getReportSubImage5Description() + "'" +
            ", reportSubImage6='" + getReportSubImage6() + "'" +
            ", reportSubImage6ContentType='" + getReportSubImage6ContentType() + "'" +
            ", reportSubImage6Name='" + getReportSubImage6Name() + "'" +
            ", reportSubImage6Description='" + getReportSubImage6Description() + "'" +
            "}";
    }
}
