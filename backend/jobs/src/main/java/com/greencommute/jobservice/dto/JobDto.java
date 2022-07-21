package com.greencommute.jobservice.dto;

import com.greencommute.jobservice.entity.ExperienceLevel;
import com.greencommute.jobservice.entity.JobType;
import lombok.*;

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
