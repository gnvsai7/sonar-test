package com.greencommute.jobservice.repository;

import com.greencommute.jobservice.entity.CompanyDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CompanyDetailsRepository extends JpaRepository<CompanyDetails, Integer> {
    @Query("select c from company c where c.id=:id")
    Optional<CompanyDetails> getDetailsById(@Param("id") Integer id);
}