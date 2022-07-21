import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  getAllAvailableJobs,
  getAllSavedJobs,
} from '../../../services/services';
import JobCard, { CardProps } from '../../molecules/JobCard';
import FindJobsCard from '../../molecules/FindJobsCard';
import { makeStyles } from '@mui/styles';
import JobList from '../jobList';
export type JobListProp = {
  data?: CardProps[];
  search?: boolean;
  savedJobs?: boolean;
};

const styles = makeStyles((theme) => ({
  root1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  root2: {
    height: '157px',
    width: '571px',
    marginBottom: '16px',
  },
  root: {
    width: '100%',
  },
}));

function getData(search: boolean) {
  if (search) {
    return () => getAllSavedJobs(1);
  }
  return () => getAllAvailableJobs();
}

const FindJobsList: React.FC<JobListProp> = (props) => {
  const classes = styles();
  const { search = false, savedJobs = false } = props;

  const { isLoading, data } = useQuery('getJobList', getData(savedJobs));

  if (isLoading) {
    return <h2 data-testid="loading">Loading...</h2>;
  }
  return (
    <>
      {search === false ? (
        <Grid container spacing={2} className={classes.root}>
          {data.length > 0 ? (
            data.map((job: CardProps, index: number) => (
              <Grid item key={index} className={classes.root1}>
                <FindJobsCard {...job} />
              </Grid>
            ))
          ) : (
            <></>
          )}
        </Grid>
      ) : (
        <JobList />
      )}
    </>
  );
};

export default FindJobsList;
