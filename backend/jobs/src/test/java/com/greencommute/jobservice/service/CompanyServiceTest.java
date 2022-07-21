package com.greencommute.jobservice.service;

import com.greencommute.jobservice.dto.CompanyDetailsDto;

import com.greencommute.jobservice.entity.CompanyDetails;
import com.greencommute.jobservice.repository.CompanyDetailsRepository;
;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CompanyServiceTest {


    private CompanyDetails companyDetails;
    @Autowired
    private CompanyService companyService;

    @MockBean
    private CompanyDetailsRepository companyDetailsRepository;

    @BeforeEach
    void setUp() {
        companyDetails = new CompanyDetails();

        companyDetails.setId(1);
        companyDetails.setName("abc");


    }

    @Test
    void addCompanyDetails() {
        Mockito.when(companyDetailsRepository.save(Mockito.any(CompanyDetails.class))).thenReturn(companyDetails);
        CompanyDetailsDto companyDetailsDto = new CompanyDetailsDto();
        companyDetailsDto.setId(1);
        companyDetailsDto.setName("abc");
        assertEquals("abc", companyService.addCompanyDetails(companyDetailsDto).getName());
    }
}