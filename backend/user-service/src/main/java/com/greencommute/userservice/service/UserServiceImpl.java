package com.greencommute.userservice.service;

import com.greencommute.userservice.entity.Job;
import com.greencommute.userservice.entity.SavedJob;
import com.greencommute.userservice.entity.User;
import com.greencommute.userservice.error.NotFoundException;
import com.greencommute.userservice.repository.SavedJobRepository;
import com.greencommute.userservice.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.greencommute.userservice.dto.UserDto;

import com.greencommute.userservice.mapper.UserMapper;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class UserServiceImpl implements UserService {
    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SavedJobRepository savedJobRepository;
    @Value("${jobservice.baseurl}")
    private String jobServiceBaseUrl;

    @Value("${jobservice.joburl}")
    private String jobControllerUrl;

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public UserDto findById(int id) {
        Optional<User> result = userRepository.findById(id);
        User user = null;
        if (result.isPresent()) {
            user = result.get();
        } else {
            throw new NotFoundException("User with id : " + id + " not found.");
        }
        return userMapper.userToUserDTO(user);
    }

    @Override
    public UserDto save(UserDto userDto) {
        User user = userRepository.save(userMapper.userDTOtoUser(userDto));

        return userMapper.userToUserDTO(user);
    }

    @Override
    public void deleteById(int id) {

    }

    @Override
    public boolean saveJob(Integer jobId) throws Exception {
        var result = restTemplate.getForObject(jobServiceBaseUrl + jobControllerUrl + "/" + jobId, Job.class);
        if (result == null) {
            throw new NotFoundException("job id not found");
        }
        var user = userRepository.getById(1);
        if (user == null) {
            throw new NotFoundException("user is not present");
        }
        SavedJob savedJob = new SavedJob();
        savedJob.setJob(result);
        savedJob.setUser(user);
        var check = savedJobRepository.save(savedJob);
        if (check == null) {
            return false;
        }
        return true;

    }
}
