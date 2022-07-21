package com.greencommute.userservice.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name="apply_job")
@Table(name="apply_job",schema = "public")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApplyJob {

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

    @Column(name = "resume")
    String resume;
    @Transient
    public String getResumeImagePath() {
        if (resume == null || user.getId() == null) return null;

        return "/user-resume/" + user.getId() + "/" + resume;
    }

    @Override
    public String toString() {
        return "ApplyJob{" +
                "key=" + key +
                ", user=" + user +
                ", job=" + job +
                ", resume='" + resume + '\'' +
                '}';
    }
}
