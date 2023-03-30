package com.rohithraju.hikes.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class EventPlanMapperTest {

    private EventPlanMapper eventPlanMapper;

    @BeforeEach
    public void setUp() {
        eventPlanMapper = new EventPlanMapperImpl();
    }
}
