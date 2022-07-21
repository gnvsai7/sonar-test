package com.greencommute.jobservice.controller;


import com.greencommute.jobservice.dto.CreateJobDto;
import com.greencommute.jobservice.dto.JobDto;
import com.greencommute.jobservice.dto.JobTitleDto;
import com.greencommute.jobservice.entity.Job;
import com.greencommute.jobservice.error.CompanyNotFoundException;
import com.greencommute.jobservice.error.JobTitleNotFoundException;
import com.greencommute.jobservice.error.NotFoundException;
import com.greencommute.jobservice.service.JobService;

import com.greencommute.jobservice.service.JobTitleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/job")
@Slf4j
public class JobController {

    @Autowired
    private JobTitleService jobTitle;

    @Autowired
    private JobService jobService;


    @PostMapping("/save-title")
    public ResponseEntity<JobTitleDto> saveJobTitle(@Valid @RequestParam("title") String title) {
        try {
            log.info("inside save title");
            var result = jobTitle.createJobTitle(title);

            return ResponseEntity.of(Optional.of(result));
        } catch (Exception exception) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }

    @PostMapping("/create-job")
    public ResponseEntity<JobDto> saveJob(@Valid @RequestBody CreateJobDto job) {
        try {
            log.info("inside save title");
            var result = jobService.addJob(job);

            return ResponseEntity.of(Optional.of(result));
        } catch (CompanyNotFoundException | JobTitleNotFoundException exception) {
            return new ResponseEntity(exception.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception exception) {
            return new ResponseEntity(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobDto> getJobById(@PathVariable("id") Integer id) {

        try {
            var result = jobService.findById(id);
            return ResponseEntity.of(Optional.of(result));
        } catch (NotFoundException exception) {
            return new ResponseEntity(exception.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception exception) {
            return new ResponseEntity(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
