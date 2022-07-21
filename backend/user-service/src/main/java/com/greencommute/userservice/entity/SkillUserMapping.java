package com.greencommute.userservice.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name="skill_user_mapping")
@Table(name="skill_user_mapping",schema = "public")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SkillUserMapping {

    @EmbeddedId
    private UserSkillKey id;


    @ManyToOne(cascade=CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name="skill_id",referencedColumnName = "id")
    @MapsId("skillId")
    private Skill skill;

    @MapsId("userId")
    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name="user_id",referencedColumnName = "id")
    private User user;
}
