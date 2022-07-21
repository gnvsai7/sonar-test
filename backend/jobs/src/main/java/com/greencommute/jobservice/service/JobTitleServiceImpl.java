package com.greencommute.jobservice.service;

import com.greencommute.jobservice.dto.JobTitleDto;
import com.greencommute.jobservice.entity.JobTitle;
import com.greencommute.jobservice.mapper.JobTitleMapper;
import com.greencommute.jobservice.repository.JobTitleRepository;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@NoArgsConstructor
public class JobTitleServiceImpl implements JobTitleService {

    @Autowired
    private JobTitleMapper jobTitleMapper;
    @Autowired
    private JobTitleRepository jobTitleRepository;

    @Override
    public JobTitleDto createJobTitle(String title) {
        log.info("inside create job service");
        JobTitle jobTitle = new JobTitle();
        jobTitle.setTitle(title);
        var result = jobTitleRepository.save(jobTitle);

        return jobTitleMapper.jobTitleToJobTitleDTO(result);

    }
}
