package com.greencommute.userservice.dto;

import lombok.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
public class UserDto {

    private Integer id;

    private String email;

    private String firstName;

    private String lastName;

    private String location;

    private LocalDateTime createdAt;

   private String resume;
}
