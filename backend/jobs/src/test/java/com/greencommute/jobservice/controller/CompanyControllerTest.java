package com.greencommute.jobservice.controller;

import com.greencommute.jobservice.dto.CompanyDetailsDto;
import com.greencommute.jobservice.entity.CompanyDetails;
import com.greencommute.jobservice.service.CompanyService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(CompanyController.class)
class CompanyControllerTest {

        @Autowired
        private MockMvc mockMvc;
        @MockBean
        private CompanyService companyService;

        private CompanyDetailsDto companyDetailsDto;

        @BeforeEach
        public void setUp() {
                companyDetailsDto = CompanyDetailsDto.builder().name("abc").build();
        }

        @Test
        void saveJobTitle() throws Exception {
                Mockito.when(companyService.addCompanyDetails(Mockito.any(CompanyDetailsDto.class)))
                                .thenReturn(companyDetailsDto);
                mockMvc.perform(post("/company/add").contentType(MediaType.APPLICATION_JSON).content("{\n" +
                                "\"name\":\"abcd\"\n" +
                                "\n" +
                                "  }")).andExpect(status().isOk());

        }
}