package com.greencommute.jobservice.controller;

import com.greencommute.jobservice.dto.CompanyDetailsDto;
import com.greencommute.jobservice.service.CompanyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@Slf4j
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping("/add")
    public ResponseEntity<CompanyDetailsDto> saveJobTitle(@Valid @RequestBody CompanyDetailsDto companyDetailsDto) {
        try {
            log.info("inside company  controller");
            var result = companyService.addCompanyDetails(companyDetailsDto);

            return ResponseEntity.of(Optional.of(result));
        } catch (Exception exception) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }


    }


}
