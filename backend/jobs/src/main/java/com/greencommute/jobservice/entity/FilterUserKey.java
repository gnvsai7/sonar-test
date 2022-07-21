package com.greencommute.jobservice.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FilterUserKey implements Serializable {
    private static final long serialVersionUID = -833556237091700376L;
    private Integer filterId;

    private Integer userId;
}
