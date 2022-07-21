package com.greencommute.jobservice.mapper;

import com.greencommute.jobservice.dto.JobTitleDto;
import com.greencommute.jobservice.entity.JobTitle;


import org.mapstruct.Mapper;

import org.mapstruct.Mapping;
import org.mapstruct.Mappings;


@Mapper(componentModel = "spring")
public interface JobTitleMapper {
    @Mappings({
            @Mapping(target = "id", source = "jobTitle.id"),
            @Mapping(target = "title", source = "jobTitle.title"),
            @Mapping(target = "createdAt", source = "jobTitle.createdAt")
    })
    JobTitleDto jobTitleToJobTitleDTO(JobTitle jobTitle);

    @Mappings({
            @Mapping(target = "id", source = "dto.id"),
            @Mapping(target = "title", source = "dto.title"),
            @Mapping(target = "createdAt", source = "dto.createdAt")
    })
    JobTitle JobTitleDTOtoJobTitle(JobTitleDto dto);
}
