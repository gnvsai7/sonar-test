package com.greencommute.jobservice.repository;

import com.greencommute.jobservice.entity.JobTitle;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class JobTitleRepositoryTest {

    @Autowired
    private JobTitleRepository jobTitleRepository;

    @Autowired
    private TestEntityManager testEntityManager;

    @BeforeEach
    public void setUp() {

    }

    @Test
    void getDetailsById() {
        var jobTitle = JobTitle.builder().title("abc").build();
        var id = testEntityManager.persist(jobTitle).getId();

        assertEquals("abc", jobTitleRepository.getDetailsById(id).get().getTitle());
    }
}