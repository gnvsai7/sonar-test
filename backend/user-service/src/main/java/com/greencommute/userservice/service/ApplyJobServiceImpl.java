package com.greencommute.userservice.service;


import com.greencommute.userservice.entity.ApplyJob;
import com.greencommute.userservice.entity.Job;
import com.greencommute.userservice.entity.JobIdUserIdKey;
import com.greencommute.userservice.entity.User;
import com.greencommute.userservice.mapper.UserMapper;
import com.greencommute.userservice.repository.ApplyJobRepository;
import com.greencommute.userservice.utils.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ApplyJobServiceImpl implements ApplyJobService{

    @Autowired
    private ApplyJobRepository applyJobRepository;

    @Autowired
    RestTemplate restTemplate;

    @Value("${jobservice.baseurl}")
    private String jobServiceBaseUrl;

    @Value("${jobservice.joburl}")
    private String jobControllerUrl;
    @Value("${spring.servlet.multipart.location}")
    private String location;
    @Autowired
    private UserService userService;

    @Autowired
    UserMapper userMapper;
    @Override
    public ApplyJob save(Integer id,MultipartFile multipartFile) throws IOException {
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        FileUploadUtil.saveFile(location,fileName, multipartFile);
        ApplyJob applyJob=new ApplyJob();
        Job job=restTemplate.getForObject(jobServiceBaseUrl + jobControllerUrl + "/" + id, Job.class);
        applyJob.setJob(job);
        User user=userMapper.userDTOtoUser(userService.findById(13));
        applyJob.setUser(user);
        applyJob.setResume(location+fileName);
        JobIdUserIdKey jobIdUserIdKey=new JobIdUserIdKey();
        jobIdUserIdKey.setJobId(job.getId());
        jobIdUserIdKey.setUserId(user.getId());
        applyJob.setKey(jobIdUserIdKey);
        ApplyJob appliedJob =applyJobRepository.save(applyJob);
        return appliedJob;
    }
}
