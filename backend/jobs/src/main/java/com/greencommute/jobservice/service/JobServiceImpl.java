package com.greencommute.jobservice.service;

import com.greencommute.jobservice.dto.CreateJobDto;
import com.greencommute.jobservice.dto.JobDto;
import com.greencommute.jobservice.entity.Job;
import com.greencommute.jobservice.entity.JobTitle;
import com.greencommute.jobservice.error.CompanyNotFoundException;
import com.greencommute.jobservice.error.JobTitleNotFoundException;
import com.greencommute.jobservice.error.NotFoundException;
import com.greencommute.jobservice.mapper.JobMapper;
import com.greencommute.jobservice.repository.CompanyDetailsRepository;
import com.greencommute.jobservice.repository.JobRepository;
import com.greencommute.jobservice.repository.JobTitleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private CompanyDetailsRepository companyDetailsRepository;
    @Autowired
    private JobTitleRepository jobTitleRepository;
    @Autowired
    private JobMapper jobMapper;

    @Override
    public JobDto addJob(CreateJobDto jobDto) throws CompanyNotFoundException, JobTitleNotFoundException {

        var company = companyDetailsRepository.getDetailsById(jobDto.getCompanyId());

        if (company.isEmpty()) {
            log.error("company id is invalid");
            throw new CompanyNotFoundException("company id is invalid");
        }

        Optional<JobTitle> jobTile = jobTitleRepository.getDetailsById(jobDto.getJobTitleId());

        if (jobTile.isEmpty()) {
            throw new JobTitleNotFoundException("job title not found check job title id once");
        }
        var newJob = new Job();
        newJob.setCompanyDetails(company.get());
        newJob.setJobTitle(jobTile.get());
        newJob.setJobType(jobDto.getJobType());
        newJob.setExperienceLevel(jobDto.getExperienceLevel());
        newJob.setGreenCommute(jobDto.isGreenCommute());

        var result = jobMapper.jobToJobDTO(jobRepository.save(newJob));
        return result;

    }

    @Override
    public List<Job> findAll() {
        return null;
    }

    @Override
    public JobDto findById(int id) {
        Optional<Job> result=jobRepository.findById(id);
        Job job=null;
        if(result.isPresent()) {
            job=result.get();
        }else{
            throw new NotFoundException("Job with id : "+id+" not found.");
        }
        return jobMapper.jobToJobDTO(job);
    }

    @Override
    public void save(Job object) {

    }

    @Override
    public void deleteById(int id) {

    }
}