package com.greencommute.userservice.controller;

import com.greencommute.userservice.entity.ApplyJob;
import com.greencommute.userservice.entity.Job;
import com.greencommute.userservice.entity.User;
import com.greencommute.userservice.mapper.UserMapper;
import com.greencommute.userservice.service.ApplyJobService;
import com.greencommute.userservice.service.UserService;
import com.greencommute.userservice.utils.FileUploadUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@RequestMapping("/apply")
@Slf4j
public class ApplyJobController {
    @Autowired
    private ApplyJobService applyJobService;

    @PostMapping("/upload/{id}")
    public void uploadResume(@PathVariable("id") Integer id, @RequestBody MultipartFile multipartFile) throws IOException {
        applyJobService.save(id,multipartFile);
    }
}
