package com.greencommute.jobservice.service;

import com.greencommute.jobservice.dto.CreateJobDto;

import com.greencommute.jobservice.entity.*;
import com.greencommute.jobservice.repository.CompanyDetailsRepository;
import com.greencommute.jobservice.repository.JobRepository;
import com.greencommute.jobservice.repository.JobTitleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class JobServiceTest {


    @MockBean
    private JobRepository jobRepository;
    @Autowired
    private JobService jobService;

    private CompanyDetails companyDetails;
    private JobTitle jobTitle;
    private CreateJobDto createJobDto;
    private Job job;

    @MockBean
    private JobTitleRepository jobTitleRepository;

    @MockBean
    private CompanyDetailsRepository companyDetailsRepository;

    @BeforeEach
    void setUp() {
        job = new Job();
        companyDetails = new CompanyDetails();
        jobTitle = new JobTitle();
        companyDetails.setId(1);
        jobTitle.setId(1);
        createJobDto = new CreateJobDto();
        createJobDto.setJobType(JobType.CONTRACT);
        createJobDto.setJobTitleId(1);
        createJobDto.setCompanyId(1);
        createJobDto.setExperienceLevel(ExperienceLevel.MIDLEVEL);
        createJobDto.setGreenCommute(true);
        job.setCompanyDetails(companyDetails);
        job.setJobTitle(jobTitle);
        job.setJobType(JobType.CONTRACT);
        job.setGreenCommute(true);
        job.setExperienceLevel(ExperienceLevel.MIDLEVEL);

    }

    @Test
    void addJob() throws Exception {
        Mockito.when(jobTitleRepository.getDetailsById(Mockito.any(Integer.class))).thenReturn(Optional.of(jobTitle));
        Mockito.when(companyDetailsRepository.getDetailsById(Mockito.any(Integer.class))).thenReturn(Optional.of(companyDetails));
        Mockito.when(jobRepository.save(Mockito.any(Job.class))).thenReturn(job);
        assertEquals(1, jobService.addJob(createJobDto).getJobTitle().getId());
        assertEquals(JobType.CONTRACT, jobService.addJob(createJobDto).getJobType());
        assertEquals(ExperienceLevel.MIDLEVEL, jobService.addJob(createJobDto).getExperienceLevel());
        assertEquals(1, jobService.addJob(createJobDto).getCompanyDetails().getId());
    }
}