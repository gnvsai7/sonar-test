package com.greencommute.jobservice.repository;

import com.greencommute.jobservice.entity.FilterUserKey;
import com.greencommute.jobservice.entity.FilterUserMapping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilterUserMappingRepository extends JpaRepository<FilterUserMapping, FilterUserKey> {
}