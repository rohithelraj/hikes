package com.rohithraju.hikes.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.rohithraju.hikes.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class EventPlanTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EventPlan.class);
        EventPlan eventPlan1 = new EventPlan();
        eventPlan1.setId(1L);
        EventPlan eventPlan2 = new EventPlan();
        eventPlan2.setId(eventPlan1.getId());
        assertThat(eventPlan1).isEqualTo(eventPlan2);
        eventPlan2.setId(2L);
        assertThat(eventPlan1).isNotEqualTo(eventPlan2);
        eventPlan1.setId(null);
        assertThat(eventPlan1).isNotEqualTo(eventPlan2);
    }
}
