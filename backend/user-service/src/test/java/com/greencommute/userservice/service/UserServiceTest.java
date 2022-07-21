package com.greencommute.userservice.service;

import com.greencommute.userservice.dto.UserDto;
import com.greencommute.userservice.entity.Job;
import com.greencommute.userservice.entity.JobType;
import com.greencommute.userservice.entity.SavedJob;
import com.greencommute.userservice.entity.User;
import com.greencommute.userservice.repository.SavedJobRepository;
import com.greencommute.userservice.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.web.client.RestTemplate;


import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class UserServiceTest {

    @Value("${jobservice.baseurl}")
    private String jobServiceBaseUrl;

    @Value("${jobservice.joburl}")
    private String jobControllerUrl;
    @Autowired
    private UserService userService;
    private SavedJob savedJob;
    @MockBean
    private SavedJobRepository savedJobRepository;
    @MockBean
    private UserRepository userRepository;
    @MockBean
    private RestTemplate restTemplate;
    private Job job;
    private User user;

    private UserDto userDto;
    @BeforeEach
    void setUp() {
        user = new User();
        user.setFirstName("Amith Sai");
        user.setLastName("Appasu");
        user.setEmail("test@123");
        user.setLocation("Hyderabad");
        userDto=new UserDto();
        userDto.setFirstName("Viram");
        userDto.setLastName("Jain");
        userDto.setEmail("test@123");
        userDto.setLocation("Hyderabad");
    }

    @Test
    void addUser() throws Exception {
        Mockito.when(userRepository.save(Mockito.any(User.class))).thenReturn(user);
        assertEquals("Amith Sai", userService.save(userDto).getFirstName());
    }
    @Test
    void saveJob() throws Exception {
        savedJob = new SavedJob();
        job = new Job();
        job.setId(1);
        job.setJobType(JobType.CONTRACT);
        user = new User();
        user.setId(1);
        savedJob.setJob(job);
        savedJob.setUser(user);
        Mockito.when(userRepository.getById(Mockito.any(Integer.class))).thenReturn(user);
        Mockito.when(restTemplate.getForObject(
                        "http://localhost:3004/job/1", Job.class))
                .thenReturn(job);
        Mockito.when(savedJobRepository.save(Mockito.any(SavedJob.class))).thenReturn(savedJob);

        assertEquals(true, userService.saveJob(1));
    }
}



