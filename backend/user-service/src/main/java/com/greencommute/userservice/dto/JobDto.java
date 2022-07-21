package com.greencommute.userservice.dto;

import com.greencommute.userservice.entity.ExperienceLevel;
import com.greencommute.userservice.entity.JobType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JobDto {

    private Integer id;
    private LocalDateTime createdAt;

    private JobTitleDto jobTitle;

    private boolean isOpen;

    private ExperienceLevel experienceLevel;

    private JobType jobType;

    private boolean greenCommute;

    private CompanyDetailsDto companyDetails;


}
