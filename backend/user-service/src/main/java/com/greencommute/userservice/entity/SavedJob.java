package com.greencommute.userservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name="save_job")
@Table(name="save_job",schema = "public")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SavedJob {

    @EmbeddedId
    private JobIdUserIdKey key;
    @ManyToOne(cascade=CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name="user_id",referencedColumnName = "id")
    @MapsId("userId")
    private User user;
    @ManyToOne(cascade=CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name="job_id",referencedColumnName = "id")
    @MapsId("jobId")
    private Job job;

}
