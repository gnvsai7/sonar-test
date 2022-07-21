package com.greencommute.userservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity(name="job_title")
@Table(name="job_title",schema = "public")
public class JobTitle {
    @Id
    @SequenceGenerator(name="job_title_sequence",sequenceName = "job_title_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator ="job_title_sequence" )
    private Integer id;

    private String title;
    @Column(name="created_at")
    private LocalDateTime createdAT;
}
