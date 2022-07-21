package com.greencommute.jobservice.service;

import com.greencommute.jobservice.dto.JobTitleDto;
import com.greencommute.jobservice.entity.JobTitle;
import com.greencommute.jobservice.mapper.JobTitleMapper;
import com.greencommute.jobservice.repository.JobTitleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.mockito.Mockito;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;


import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class JobTitleServiceTest {


    @MockBean
    private JobTitleRepository jobTitleRepository;
    @Autowired
    private JobTitleService jobTitleService;

    @Autowired
    private JobTitleMapper jobTitleMapper;
    @BeforeEach
    void setUp(){


    }

    @Test
    void createJobTitle() throws Exception {
        JobTitle jobTitle = JobTitle.builder().title("test").id(1).build();
        Mockito.when(jobTitleRepository.save(Mockito.any(JobTitle.class))).thenReturn(jobTitle);
        JobTitle testTitle = JobTitle.builder().title("test").id(1).build();
        JobTitleDto jobTitleDto=new JobTitleDto();
        jobTitleDto.setTitle("test");
        assertEquals("test", jobTitleService.createJobTitle(jobTitleDto.getTitle()).getTitle());
    }



}