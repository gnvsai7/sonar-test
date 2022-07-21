package com.greencommute.jobservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity(name = "Aqi")
@Table(name = "aqi", schema = "public")
public class AQI {
    @Id
    @SequenceGenerator(name = "aqi_sequence", sequenceName = "aqi_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "aqi_sequence")
    private Integer id;
    private String cityName;
    private Integer value;
}
