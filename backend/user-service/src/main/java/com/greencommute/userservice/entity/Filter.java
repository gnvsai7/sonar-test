package com.greencommute.userservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name="filter")
@Table(name="filter",schema = "public")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Filter {

    @Id
    @SequenceGenerator(name="filter_sequence",sequenceName = "filter_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator ="filter_sequence" )
    private Integer id;

    @Column(name="name")
    private String filterName;

    @Column(name="type")
    private FilterType type;


}
