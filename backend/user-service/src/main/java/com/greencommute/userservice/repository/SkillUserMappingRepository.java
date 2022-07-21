package com.greencommute.userservice.repository;

import com.greencommute.userservice.entity.SkillUserMapping;
import com.greencommute.userservice.entity.UserSkillKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillUserMappingRepository extends JpaRepository<SkillUserMapping, UserSkillKey> {
}