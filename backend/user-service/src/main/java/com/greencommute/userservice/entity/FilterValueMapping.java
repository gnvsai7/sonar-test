package com.greencommute.userservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name = "filterValue")
@Table(name = "filterValues", schema = "public")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FilterValueMapping {

    @EmbeddedId
    private FilterValueKey key;

    @ManyToOne(cascade= CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name="filter_id",referencedColumnName = "id")
    @MapsId("filterId")
    private Filter filter;

    @ManyToOne(cascade=CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name="value_id",referencedColumnName = "id")
    @MapsId("valueId")
    private Value value;
}
