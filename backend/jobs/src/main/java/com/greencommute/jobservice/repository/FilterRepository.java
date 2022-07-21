package com.greencommute.jobservice.repository;

import com.greencommute.jobservice.entity.Filter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilterRepository extends JpaRepository<Filter, Integer> {
}