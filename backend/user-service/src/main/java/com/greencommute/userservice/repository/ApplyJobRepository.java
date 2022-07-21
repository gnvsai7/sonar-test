package com.greencommute.userservice.repository;

import com.greencommute.userservice.entity.ApplyJob;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplyJobRepository extends JpaRepository<ApplyJob, Integer> {
}