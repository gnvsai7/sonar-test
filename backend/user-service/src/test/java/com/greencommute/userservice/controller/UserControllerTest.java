package com.greencommute.userservice.controller;

import com.greencommute.userservice.service.UserService;
import com.greencommute.userservice.dto.UserDto;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private UserService userService;

    private UserDto userDto;
   @BeforeEach
   public void setup() {
       userDto = UserDto.builder().id(13).build();
   }

   @Test
   public void getUserByIdTest() throws Exception {
       Mockito.when(userService.findById(13)).thenReturn(userDto);
       mockMvc.perform(MockMvcRequestBuilders.get("/user/13"))
               .andExpect(MockMvcResultMatchers.status().isOk());
   }

    // @Test
    // public void getUserByIdTest() throws Exception {
    //     Mockito.when(userService.findById(13)).thenReturn(userDto);
    //     mockMvc.perform(MockMvcRequestBuilders.get("/user/13"))
    //             .andExpect(MockMvcResultMatchers.status().isOk());
    // }
    void saveJob() throws Exception {
        Mockito.when(userService.saveJob(Mockito.any(Integer.class))).thenReturn(true);

        mockMvc.perform(post("/user/savejob/1").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());

    }
}
