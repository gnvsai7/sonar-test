package com.greencommute.jobservice.repository;

import com.greencommute.jobservice.entity.Job;
import com.greencommute.jobservice.entity.JobTitle;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class JobRepositoryTest {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private TestEntityManager testEntityManager;

    @BeforeEach
    public void setUp() {

    }

    @Test
    void getDetailsById() {
        var job = Job.builder().open(true).build();
        var id = testEntityManager.persist(job).getId();

        assertEquals(true, jobRepository.getById(id).getOpen());
    }
}
