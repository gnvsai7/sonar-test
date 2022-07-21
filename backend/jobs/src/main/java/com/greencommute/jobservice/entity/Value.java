package com.greencommute.jobservice.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "value")
@Table(name = "value", schema = "public")
public class Value {

    @Id
    private Integer id;

    private String name;
    @Column(name = "checked", columnDefinition = "boolean default true")
    private boolean checked;
}
