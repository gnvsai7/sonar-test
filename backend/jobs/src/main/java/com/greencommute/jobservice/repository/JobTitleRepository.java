package com.greencommute.jobservice.repository;

import com.greencommute.jobservice.entity.JobTitle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface JobTitleRepository extends JpaRepository<JobTitle, Integer> {
    @Query("select t from JobTitle t where t.id=:id")
    Optional<JobTitle> getDetailsById(@Param("id") Integer id);
}