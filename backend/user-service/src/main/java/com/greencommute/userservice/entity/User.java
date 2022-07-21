package com.greencommute.userservice.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Table(name = "user", schema = "public",uniqueConstraints = @UniqueConstraint(name="email_address_unique",columnNames = "email"))
public class User {

    @Id
    @SequenceGenerator(name="user_sequence",sequenceName = "user_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator ="user_sequence" )

    private Integer id;

    @Column(name = "email",nullable = false)
    private String email;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;
    @Column(name = "location")
    private String location;

    @Column(name = "created_at")
    private LocalDateTime createdAt;


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", location='" + location + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
