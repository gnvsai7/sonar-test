package com.greencommute.jobservice.entity;

import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name = "job_title", schema = "public", uniqueConstraints = @UniqueConstraint(name = "job_title_unique", columnNames = "title"))
public class JobTitle {
    @Id
    @SequenceGenerator(name = "job_title_sequence", sequenceName = "job_title_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "job_title_sequence")
    private Integer id;


    @Size(min = 2, max = 100)
    @Length(min = 2, max = 100)
    @NotBlank(message = "title is required")
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
