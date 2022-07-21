package com.greencommute.jobservice.service;

import com.greencommute.jobservice.dto.CompanyDetailsDto;
import com.greencommute.jobservice.mapper.CompanyDetailMapper;
import com.greencommute.jobservice.repository.CompanyDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyServiceImpl implements CompanyService {
  @Autowired
  private CompanyDetailsRepository companyDetailsRepository;

  @Autowired
  private CompanyDetailMapper companyDetailMapper;

  @Override
  public CompanyDetailsDto addCompanyDetails(CompanyDetailsDto companyDetailsDto) {

    var details = companyDetailMapper.companyDetailsDTOToCompanyDetails(companyDetailsDto);

    return companyDetailMapper.companyDetailsToCompanyDetailsDTO(companyDetailsRepository.save(details));

  }
}
