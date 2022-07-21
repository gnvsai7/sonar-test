package com.greencommute.jobservice.controller;

import com.greencommute.jobservice.dto.JobDto;
import com.greencommute.jobservice.service.JobService;

import com.greencommute.jobservice.service.JobTitleService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@WebMvcTest(JobController.class)
public class JobControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private JobTitleService jobTitle;
    JobDto jobDto;
    @MockBean
    private JobService jobService;

    @BeforeEach
    public void setup() {
        jobDto=JobDto.builder().id(10).build();
    }

    @Test
    public void getJobByIdTest() throws Exception {
        setup();
        Mockito.when(jobService.findById(Mockito.any(Integer.class))).thenReturn(jobDto);

        mockMvc.perform(MockMvcRequestBuilders.get("/job/10"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
