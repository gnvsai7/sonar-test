import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import {
  filterByLocation,
  filterRecordByTitle,
  getAllAvailableJobs,
  getAllSavedJobs,
} from '../../../services/services';
import { makeStyles } from '@mui/styles';
import JobCard, { CardProps } from '../../molecules/JobCard';
import { SearchContextValue } from '../../organisms/MainContent/index';
import { useLocation } from 'react-router-dom';
import { ApplyList } from '../Filter';
import { FilterContext } from '../MainContent';
import _ from 'lodash';
import { JobContext } from '../../utils/context';
export type JobListProp = {
  filterList?: ApplyList[];
};
const styles = makeStyles(() => ({
  saveJobTypo: {
    fontSize: '20px',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    lineHeight: '30px',
    marginBottom: '20px',
  },
}));
function helperMethodToConvertFieldName(name: string) {
  switch (name) {
    case 'Green Commute':
      return 'greenCommute';

    case 'Experience Level':
      return 'experienceLevel';
    case 'Job Type':
      return 'jobType';
    case 'Date Posted':
      return 'datePosted';
  }
  return 'greenCommute';
}

async function getFilteredData(filterList: ApplyList[]) {
  const allJobs: any = await getAllAvailableJobs();
  // console.log(allJobs);
  const newArray = [];
  if (allJobs.length > 0) {
    for (const f of filterList) {
      // console.log(filterList);
      for (const v of f.filterValues) {
        const testData: Array<any> = allJobs.filter(
          (a) => a[helperMethodToConvertFieldName(f.filterName)] === v
        );
        for (const t of testData) {
          newArray.push(t);
        }
      }
    }
  }
  // console.log('new Array', newArray);
  // console.log('filter results');
  // console.log(_.uniqBy(newArray), (j) => j.id);
  return _.uniqBy(newArray, (j) => j.id);
}
async function getData(
  path: string,
  jobContext: any,
  skillSearch: string,
  locationSearch: string,
  filterList?: ApplyList[]
) {
  if (path === '/savejobs') {
    return await getAllSavedJobs(1);
  }
  if (skillSearch !== '' || locationSearch !== '') {
    const d = await getSearchData(skillSearch, locationSearch);

    if (d.length > 0) {
      jobContext.setCardId(d[0].id);
    } else {
      // console.log('search results', d);
      jobContext.setCardId(-1);
    }
    return d;
  }
  if (filterList !== undefined && filterList.length > 0) {
    const d1 = await getFilteredData(filterList);
    if (d1.length > 0) {
      // console.log('filter ', d1);
      jobContext.setCardId(d1[0].id);
    } else {
      // console.log('search results', d);
      jobContext.setCardId(0);
    }
    return d1;
  }

  return await getAllAvailableJobs();
}
async function getSearchData(skillSearch: string, locationSearch: string) {
  let data2 = [];
  let data1 = [];
  if (skillSearch !== '') {
    data1 = await filterRecordByTitle(skillSearch);
  }
  if (locationSearch !== '') {
    data2 = await filterByLocation(locationSearch);
  }

  for (const d of data1) {
    data2.push(d);
  }
  // console.log('data 2', data2);
  return _.uniqBy(data2, (j) => j.id);
}
const JobList: React.FC<JobListProp> = (props) => {
  const classes = styles();
  const location = useLocation();
  const filterList = useContext(FilterContext);
  const searchContext = useContext(SearchContextValue);
  const jobContext = useContext(JobContext);
  // console.log('filters ', filterList.filterList);
  const { isLoading, data, isError, error } = useQuery(
    [
      'getJobList',
      filterList,
      searchContext.skillSearch,
      searchContext.locationSearch,
    ],
    () =>
      getData(
        location.pathname,
        jobContext,
        searchContext.skillSearch,
        searchContext.locationSearch,
        filterList.filterList
      ),
    {}
  );
  // console.log(data);
  if (isLoading) {
    return <h2 data-testid="loading">Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  let saveJobsText = <></>;
  if (location.pathname === '/savejobs') {
    saveJobsText = (
      <Typography className={classes.saveJobTypo}>Saved Jobs</Typography>
    );
  }

  return (
    <>
      <Box>
        {saveJobsText}
        <Grid container spacing={2} direction="column">
          {data?.length > 0 ? (
            data?.map((job: CardProps, index: number) => (
              <Grid item key={index} xs={4}>
                <JobCard {...job} />
              </Grid>
            ))
          ) : (
            <>
              <Typography variant="h3">No Jobs Found</Typography>
            </>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default JobList;
