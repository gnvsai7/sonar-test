package com.greencommute.userservice.service;

import com.greencommute.userservice.dto.UserDto;
import com.greencommute.userservice.entity.User;

import java.util.List;

public interface UserService {
    public List<User> findAll();

    public UserDto findById(int id);

    public UserDto save(UserDto object);

    public void deleteById(int id);

    boolean saveJob(Integer jobId) throws Exception;
}
