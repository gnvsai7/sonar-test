package com.greencommute.userservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Entity(name="job")
@Table(name="job",schema = "public")
@NoArgsConstructor
@Builder
public class Job {
    @Id
    @SequenceGenerator(name="job_sequence",sequenceName = "job_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator ="job_sequence" )
    private Integer id;
    @Column(name="create_at")
    private LocalDateTime createdAt;
    @Column(name="updated_at")
    private LocalDateTime updatedAt;
    @Column(name="open")
    private Boolean isOpen;

    @Column(name="job_type")
    private JobType jobType;

    @Column(name="experience_level")
    private ExperienceLevel experienceLevel;

    @Column(name="green_commute")
    private Boolean greenCommute;


    @JoinColumn(name = "job_title_id",referencedColumnName = "id")
    @OneToOne
    private JobTitle jobTitle;

    @JoinColumn(name = "company_id",referencedColumnName = "id")
    @OneToOne
    private CompanyDetails company;

}
