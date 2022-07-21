package com.greencommute.userservice.repository;

import com.greencommute.userservice.entity.ApplyJob;
import com.greencommute.userservice.entity.Job;
import com.greencommute.userservice.entity.JobIdUserIdKey;
import com.greencommute.userservice.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.junit.jupiter.api.Assertions.assertEquals;


@DataJpaTest
public class ApplyJobRepositoryTest {

    @Autowired
    private ApplyJobRepository applyJobRepository;

    @Autowired
    private TestEntityManager testEntityManager;

    @BeforeEach
    public void setUp() {

    }

    @Test
    void getDetailsById() {
        JobIdUserIdKey jobIdUserIdKey=new JobIdUserIdKey();
        jobIdUserIdKey.setJobId(10);
        jobIdUserIdKey.setUserId(20);
        Job job=new Job();
        job.setId(10);
        User user=new User();
        user.setId(20);
        var applyJob = ApplyJob.builder().key(jobIdUserIdKey).user(user).job(job).build();
        assertEquals(jobIdUserIdKey, applyJobRepository.save(applyJob).getKey());
    }
}
