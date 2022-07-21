package com.greencommute.userservice.controller;


import com.greencommute.userservice.dto.UserDto;
import com.greencommute.userservice.entity.ApplyJob;
import com.greencommute.userservice.entity.Job;
import com.greencommute.userservice.service.ApplyJobService;
import com.greencommute.userservice.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.multipart.MultipartFile;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ApplyJobController.class)
public class ApplyJobControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ApplyJobService applyJobService;

    ApplyJob applyJob;

    @BeforeEach
    public void setup() {
        Job job=new Job();
        job.setId(Mockito.any(Integer.class));
        applyJob = ApplyJob.builder().job(job).build();
    }



    @Test
    void uploadResume() throws Exception {
        MultipartFile multipartFile = null;
        Mockito.when(applyJobService.save(Mockito.any(Integer.class),multipartFile)).thenReturn(applyJob);
        mockMvc.perform(post("/apply/upload/1").contentType(MediaType.APPLICATION_PDF)).andExpect(status().isOk());
    }

}
