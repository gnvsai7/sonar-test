package com.greencommute.userservice.repository;

import com.greencommute.userservice.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TestEntityManager testEntityManager;

    @BeforeEach
    public void setUp() {

    }

    @Test
    void getDetailsById() {
        var user = User.builder().firstName("Amith").build();
        var id = testEntityManager.persist(user).getId();

        assertEquals("Amith", userRepository.getById(id).getFirstName());
    }
}
