package com.greencommute.jobservice.dto;

import com.greencommute.jobservice.entity.ExperienceLevel;
import com.greencommute.jobservice.entity.JobType;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateJobDto {

    private Integer jobTitleId;
    private Integer companyId;

    private ExperienceLevel experienceLevel;

    private JobType jobType;

    private boolean greenCommute;


    @Override
    public String toString() {
        return "CreateJobDto{" +"jobTitleId=" + jobTitleId +", companyId=" + companyId + ", experienceLevel=" + experienceLevel +", jobType=" + jobType +", greenCommute=" + greenCommute +"}";
    }
}
