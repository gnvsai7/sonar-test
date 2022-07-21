package com.greencommute.userservice.controller;

import com.greencommute.userservice.dto.UserDto;
import com.greencommute.userservice.error.NotFoundException;
import com.greencommute.userservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;
import java.io.IOException;

import java.util.Optional;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {

    @Autowired
    private RestTemplate restTemplate;


    @Autowired
    private UserService userService;


    //
    // @GetMapping("")
    // public String getAllUser() {
    // var testMsg = restTemplate.getForObject("http://localhost:3004/job",
    // String.class);
    // return "user detail" + testMsg;
    // }
    //
    //
    //
    // @GetMapping("")
    // public String getUserDetail() {
    // var testMsg =
    // restTemplate.getForObject("http://localhost:3004/job",String.class);
    // return "user detail" + testMsg;
    // }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") int id) {
        try {
            var result = userService.findById(id);

            return ResponseEntity.of(Optional.of(result));
        } catch (NotFoundException exception) {
            return new ResponseEntity(exception.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception exception) {
            return new ResponseEntity(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/create-user")
    public ResponseEntity<UserDto> saveUser(@Valid @RequestBody UserDto user) {

        try {
            var result = userService.save(user);
            return ResponseEntity.of(Optional.of(result));
        } catch (NotFoundException exception) {
            return new ResponseEntity(exception.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception exception) {
            return new ResponseEntity(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/savejob/{id}")
    public ResponseEntity<String> saveJob(@PathVariable("id") Integer id) throws Exception {
        var result = userService.saveJob(id);
        if (Boolean.TRUE.equals(result)) {

            return ResponseEntity.of(Optional.of("saved successfully"));

        } else
            return new ResponseEntity("internal server error", HttpStatus.INTERNAL_SERVER_ERROR);

    }


}
