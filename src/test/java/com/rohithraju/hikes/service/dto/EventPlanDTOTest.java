package com.rohithraju.hikes.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import com.rohithraju.hikes.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class EventPlanDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(EventPlanDTO.class);
        EventPlanDTO eventPlanDTO1 = new EventPlanDTO();
        eventPlanDTO1.setId(1L);
        EventPlanDTO eventPlanDTO2 = new EventPlanDTO();
        assertThat(eventPlanDTO1).isNotEqualTo(eventPlanDTO2);
        eventPlanDTO2.setId(eventPlanDTO1.getId());
        assertThat(eventPlanDTO1).isEqualTo(eventPlanDTO2);
        eventPlanDTO2.setId(2L);
        assertThat(eventPlanDTO1).isNotEqualTo(eventPlanDTO2);
        eventPlanDTO1.setId(null);
        assertThat(eventPlanDTO1).isNotEqualTo(eventPlanDTO2);
    }
}
