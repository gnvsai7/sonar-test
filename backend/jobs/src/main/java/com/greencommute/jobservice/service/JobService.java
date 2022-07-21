package com.greencommute.jobservice.service;

import com.greencommute.jobservice.dto.CreateJobDto;
import com.greencommute.jobservice.dto.JobDto;
import com.greencommute.jobservice.entity.Job;
import com.greencommute.jobservice.error.CompanyNotFoundException;
import com.greencommute.jobservice.error.JobTitleNotFoundException;

import java.util.List;

public interface JobService {
    public List<Job> findAll();

    public JobDto findById(int id);

    public void save(Job object);

    public void deleteById(int id);

    JobDto addJob(CreateJobDto jobDto) throws CompanyNotFoundException,JobTitleNotFoundException;
}
