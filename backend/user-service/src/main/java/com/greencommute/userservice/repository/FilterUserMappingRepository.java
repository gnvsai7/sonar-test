package com.greencommute.userservice.repository;

import com.greencommute.userservice.entity.FilterUserMapping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilterUserMappingRepository extends JpaRepository<FilterUserMapping, Integer> {
}