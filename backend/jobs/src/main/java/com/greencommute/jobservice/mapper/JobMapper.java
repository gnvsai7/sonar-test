package com.greencommute.jobservice.mapper;


import com.greencommute.jobservice.dto.JobDto;

import com.greencommute.jobservice.entity.Job;


import org.mapstruct.Mapper;


@Mapper(componentModel = "spring", uses = {CompanyDetailMapper.class})
public interface JobMapper {

    JobDto jobToJobDTO(Job job);


    Job jobDTOtoJob(JobDto dto);
}
