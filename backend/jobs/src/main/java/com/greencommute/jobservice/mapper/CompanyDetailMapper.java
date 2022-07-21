package com.greencommute.jobservice.mapper;

import com.greencommute.jobservice.dto.CompanyDetailsDto;
import com.greencommute.jobservice.entity.CompanyDetails;


import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface CompanyDetailMapper {

    CompanyDetailsDto companyDetailsToCompanyDetailsDTO(CompanyDetails companyDetails);


    CompanyDetails companyDetailsDTOToCompanyDetails(CompanyDetailsDto dto);
}
