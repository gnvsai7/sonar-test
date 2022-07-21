package com.greencommute.jobservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity(name = "company")
@Table(name = "company", schema = "public")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CompanyDetails {

    @Id
    @SequenceGenerator(name = "company_sequence", sequenceName = "company_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "company_sequence")
    private Integer id;
    @Column(name = "logo")
    private String logo;

    @Column(name = "name")
    private String name;

    @Column(name = "location")
    private String location;
    @Column(name = "about")
    private String about;
    @Column(name = "description")
    private String description;

}
