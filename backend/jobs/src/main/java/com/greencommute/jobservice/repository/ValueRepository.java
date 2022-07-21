package com.greencommute.jobservice.repository;

import com.greencommute.jobservice.entity.Value;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ValueRepository extends JpaRepository<Value, Integer> {
}