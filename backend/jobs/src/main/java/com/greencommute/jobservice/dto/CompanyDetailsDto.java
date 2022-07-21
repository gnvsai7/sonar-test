package com.greencommute.jobservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CompanyDetailsDto {


    private Integer id;

    private String logo;


    private String name;


    private String location;

    private String about;

    private String description;
}
