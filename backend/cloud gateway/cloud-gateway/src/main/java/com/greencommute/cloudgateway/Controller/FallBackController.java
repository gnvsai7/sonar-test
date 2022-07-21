package com.greencommute.cloudgateway.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class FallBackController {

    @GetMapping("/userServiceFallback")
    public String userServiceFallBackMethod() {
        return "user service is down";
    }

    @GetMapping("/jobServiceFallback")
    public String jobServiceFallBackMethod() {

        return "job service is down";


    }
}
