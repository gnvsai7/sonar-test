package com.greencommute.userservice.mapper;

import com.greencommute.userservice.dto.CompanyDetailsDto;
import com.greencommute.userservice.entity.CompanyDetails;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface CompanyDetailMapper {

    CompanyDetailsDto companyDetailsToCompanyDetailsDTO(CompanyDetails companyDetails);


    CompanyDetails companyDetailsDTOToCompanyDetails(CompanyDetailsDto dto);
}
