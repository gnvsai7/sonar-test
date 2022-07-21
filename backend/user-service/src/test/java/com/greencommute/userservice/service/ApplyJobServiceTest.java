package com.greencommute.userservice.service;


import com.greencommute.userservice.dto.UserDto;
import com.greencommute.userservice.entity.ApplyJob;
import com.greencommute.userservice.entity.Job;
import com.greencommute.userservice.entity.JobIdUserIdKey;
import com.greencommute.userservice.entity.User;
import com.greencommute.userservice.repository.ApplyJobRepository;
import com.greencommute.userservice.repository.SavedJobRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.web.multipart.MultipartFile;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class ApplyJobServiceTest {

    @MockBean
    private ApplyJobRepository applyJobRepository;

    @MockBean
    private ApplyJobService applyJobService;
    private ApplyJob applyJob;

    private Job job;

    private User user;
    private JobIdUserIdKey jobIdUserIdKey;

    @Autowired
    private UserService userService;

    @BeforeEach
    void setUp() {
        applyJob = new ApplyJob();
        job=new Job();
        job.setId(10);
        user=new User();
        user.setId(20);
        applyJob.setJob(job);
        applyJob.setUser(user);
        jobIdUserIdKey=new JobIdUserIdKey();
        jobIdUserIdKey.setJobId(10);
        jobIdUserIdKey.setUserId(20);
        applyJob.setKey(jobIdUserIdKey);
    }

    @Test
    void addUser() throws Exception {
        MultipartFile multipartFile=null;
        Mockito.when(applyJobRepository.save(applyJob)).thenReturn(applyJob);
        assertEquals(null, applyJobService.save(job.getId(),multipartFile));
    }
}
