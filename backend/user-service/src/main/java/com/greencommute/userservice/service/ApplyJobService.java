package com.greencommute.userservice.service;

import com.greencommute.userservice.entity.ApplyJob;
import com.greencommute.userservice.entity.Job;
import com.greencommute.userservice.entity.User;
import org.mapstruct.Mapper;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ApplyJobService {
    public ApplyJob save(Integer id,  MultipartFile multipartFile) throws IOException;
}
