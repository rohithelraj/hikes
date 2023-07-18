package com.rohithraju.hikes.service.criteria;

import java.io.Serializable;
import java.util.Objects;
import org.springdoc.api.annotations.ParameterObject;
import tech.jhipster.service.Criteria;
import tech.jhipster.service.filter.*;

/**
 * Criteria class for the {@link com.rohithraju.hikes.domain.TravelReport} entity. This class is used
 * in {@link com.rohithraju.hikes.web.rest.TravelReportResource} to receive all the possible filtering options from
 * the Http GET request parameters.
 * For example the following could be a valid request:
 * {@code /travel-reports?id.greaterThan=5&attr1.contains=something&attr2.specified=false}
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
@ParameterObject
@SuppressWarnings("common-java:DuplicatedBlocks")
public class TravelReportCriteria implements Serializable, Criteria {

    private static final long serialVersionUID = 1L;

    private LongFilter id;

    private StringFilter reportName;

    private LocalDateFilter reportDate;

    private StringFilter reportEventIds;

    private StringFilter reportSubImageName;

    private StringFilter reportSubImage2Name;

    private StringFilter reportSubImage3Name;

    private StringFilter reportSubImage4Name;

    private StringFilter reportSubImage5Name;

    private StringFilter reportSubImage6Name;

    private LongFilter tripId;

    private Boolean distinct;

    public TravelReportCriteria() {}

    public TravelReportCriteria(TravelReportCriteria other) {
        this.id = other.id == null ? null : other.id.copy();
        this.reportName = other.reportName == null ? null : other.reportName.copy();
        this.reportDate = other.reportDate == null ? null : other.reportDate.copy();
        this.reportEventIds = other.reportEventIds == null ? null : other.reportEventIds.copy();
        this.reportSubImageName = other.reportSubImageName == null ? null : other.reportSubImageName.copy();
        this.reportSubImage2Name = other.reportSubImage2Name == null ? null : other.reportSubImage2Name.copy();
        this.reportSubImage3Name = other.reportSubImage3Name == null ? null : other.reportSubImage3Name.copy();
        this.reportSubImage4Name = other.reportSubImage4Name == null ? null : other.reportSubImage4Name.copy();
        this.reportSubImage5Name = other.reportSubImage5Name == null ? null : other.reportSubImage5Name.copy();
        this.reportSubImage6Name = other.reportSubImage6Name == null ? null : other.reportSubImage6Name.copy();
        this.tripId = other.tripId == null ? null : other.tripId.copy();
        this.distinct = other.distinct;
    }

    @Override
    public TravelReportCriteria copy() {
        return new TravelReportCriteria(this);
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

    public StringFilter getReportName() {
        return reportName;
    }

    public StringFilter reportName() {
        if (reportName == null) {
            reportName = new StringFilter();
        }
        return reportName;
    }

    public void setReportName(StringFilter reportName) {
        this.reportName = reportName;
    }

    public LocalDateFilter getReportDate() {
        return reportDate;
    }

    public LocalDateFilter reportDate() {
        if (reportDate == null) {
            reportDate = new LocalDateFilter();
        }
        return reportDate;
    }

    public void setReportDate(LocalDateFilter reportDate) {
        this.reportDate = reportDate;
    }

    public StringFilter getReportEventIds() {
        return reportEventIds;
    }

    public StringFilter reportEventIds() {
        if (reportEventIds == null) {
            reportEventIds = new StringFilter();
        }
        return reportEventIds;
    }

    public void setReportEventIds(StringFilter reportEventIds) {
        this.reportEventIds = reportEventIds;
    }

    public StringFilter getReportSubImageName() {
        return reportSubImageName;
    }

    public StringFilter reportSubImageName() {
        if (reportSubImageName == null) {
            reportSubImageName = new StringFilter();
        }
        return reportSubImageName;
    }

    public void setReportSubImageName(StringFilter reportSubImageName) {
        this.reportSubImageName = reportSubImageName;
    }

    public StringFilter getReportSubImage2Name() {
        return reportSubImage2Name;
    }

    public StringFilter reportSubImage2Name() {
        if (reportSubImage2Name == null) {
            reportSubImage2Name = new StringFilter();
        }
        return reportSubImage2Name;
    }

    public void setReportSubImage2Name(StringFilter reportSubImage2Name) {
        this.reportSubImage2Name = reportSubImage2Name;
    }

    public StringFilter getReportSubImage3Name() {
        return reportSubImage3Name;
    }

    public StringFilter reportSubImage3Name() {
        if (reportSubImage3Name == null) {
            reportSubImage3Name = new StringFilter();
        }
        return reportSubImage3Name;
    }

    public void setReportSubImage3Name(StringFilter reportSubImage3Name) {
        this.reportSubImage3Name = reportSubImage3Name;
    }

    public StringFilter getReportSubImage4Name() {
        return reportSubImage4Name;
    }

    public StringFilter reportSubImage4Name() {
        if (reportSubImage4Name == null) {
            reportSubImage4Name = new StringFilter();
        }
        return reportSubImage4Name;
    }

    public void setReportSubImage4Name(StringFilter reportSubImage4Name) {
        this.reportSubImage4Name = reportSubImage4Name;
    }

    public StringFilter getReportSubImage5Name() {
        return reportSubImage5Name;
    }

    public StringFilter reportSubImage5Name() {
        if (reportSubImage5Name == null) {
            reportSubImage5Name = new StringFilter();
        }
        return reportSubImage5Name;
    }

    public void setReportSubImage5Name(StringFilter reportSubImage5Name) {
        this.reportSubImage5Name = reportSubImage5Name;
    }

    public StringFilter getReportSubImage6Name() {
        return reportSubImage6Name;
    }

    public StringFilter reportSubImage6Name() {
        if (reportSubImage6Name == null) {
            reportSubImage6Name = new StringFilter();
        }
        return reportSubImage6Name;
    }

    public void setReportSubImage6Name(StringFilter reportSubImage6Name) {
        this.reportSubImage6Name = reportSubImage6Name;
    }

    public LongFilter getTripId() {
        return tripId;
    }

    public LongFilter tripId() {
        if (tripId == null) {
            tripId = new LongFilter();
        }
        return tripId;
    }

    public void setTripId(LongFilter tripId) {
        this.tripId = tripId;
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
        final TravelReportCriteria that = (TravelReportCriteria) o;
        return (
            Objects.equals(id, that.id) &&
            Objects.equals(reportName, that.reportName) &&
            Objects.equals(reportDate, that.reportDate) &&
            Objects.equals(reportEventIds, that.reportEventIds) &&
            Objects.equals(reportSubImageName, that.reportSubImageName) &&
            Objects.equals(reportSubImage2Name, that.reportSubImage2Name) &&
            Objects.equals(reportSubImage3Name, that.reportSubImage3Name) &&
            Objects.equals(reportSubImage4Name, that.reportSubImage4Name) &&
            Objects.equals(reportSubImage5Name, that.reportSubImage5Name) &&
            Objects.equals(reportSubImage6Name, that.reportSubImage6Name) &&
            Objects.equals(tripId, that.tripId) &&
            Objects.equals(distinct, that.distinct)
        );
    }

    @Override
    public int hashCode() {
        return Objects.hash(
            id,
            reportName,
            reportDate,
            reportEventIds,
            reportSubImageName,
            reportSubImage2Name,
            reportSubImage3Name,
            reportSubImage4Name,
            reportSubImage5Name,
            reportSubImage6Name,
            tripId,
            distinct
        );
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "TravelReportCriteria{" +
            (id != null ? "id=" + id + ", " : "") +
            (reportName != null ? "reportName=" + reportName + ", " : "") +
            (reportDate != null ? "reportDate=" + reportDate + ", " : "") +
            (reportEventIds != null ? "reportEventIds=" + reportEventIds + ", " : "") +
            (reportSubImageName != null ? "reportSubImageName=" + reportSubImageName + ", " : "") +
            (reportSubImage2Name != null ? "reportSubImage2Name=" + reportSubImage2Name + ", " : "") +
            (reportSubImage3Name != null ? "reportSubImage3Name=" + reportSubImage3Name + ", " : "") +
            (reportSubImage4Name != null ? "reportSubImage4Name=" + reportSubImage4Name + ", " : "") +
            (reportSubImage5Name != null ? "reportSubImage5Name=" + reportSubImage5Name + ", " : "") +
            (reportSubImage6Name != null ? "reportSubImage6Name=" + reportSubImage6Name + ", " : "") +
            (tripId != null ? "tripId=" + tripId + ", " : "") +
            (distinct != null ? "distinct=" + distinct + ", " : "") +
            "}";
    }
}
