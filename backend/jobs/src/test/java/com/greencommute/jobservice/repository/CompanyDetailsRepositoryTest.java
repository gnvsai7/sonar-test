package com.greencommute.jobservice.repository;

import com.greencommute.jobservice.entity.CompanyDetails;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class CompanyDetailsRepositoryTest {

    @Autowired
    private CompanyDetailsRepository companyDetailsRepository;

    @Autowired
    private TestEntityManager testEntityManager;

    @BeforeEach
    public void setUp() {

    }

    @Test
    void getDetailsById() {
        CompanyDetails companyDetails = CompanyDetails.builder().name("abc").build();
        var id = testEntityManager.persist(companyDetails).getId();
        assertEquals("abc", companyDetailsRepository.getDetailsById(id).get().getName());
    }

}