package com.greencommute.jobservice.repository;

import com.greencommute.jobservice.entity.AQI;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AQIRepository extends JpaRepository<AQI, Integer> {
}