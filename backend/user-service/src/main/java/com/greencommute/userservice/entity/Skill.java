package com.greencommute.userservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name="skill")
@Table(name="skill",schema = "public")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Skill {
    @Id
    @SequenceGenerator(name="skill_sequence",sequenceName = "skill_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator ="skill_sequence" )
    private Integer id;
    @Column(name="name")
    private String skillName;
}
