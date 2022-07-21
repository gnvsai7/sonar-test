package com.greencommute.userservice.mapper;

import com.greencommute.userservice.dto.JobTitleDto;
import com.greencommute.userservice.entity.JobTitle;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;


@Mapper(componentModel = "spring")
public interface JobTitleMapper {

    JobTitleDto jobTitleToJobTitleDTO(JobTitle jobTitle);


    JobTitle JobTitleDTOtoJobTitle(JobTitleDto dto);
}
