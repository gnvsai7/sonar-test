package com.greencommute.userservice.mapper;


import com.greencommute.userservice.dto.JobDto;
import com.greencommute.userservice.entity.Job;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring", uses = {CompanyDetailMapper.class})
public interface JobMapper {

    JobDto jobToJobDTO(Job job);


    Job jobDTOtoJob(JobDto dto);
}
