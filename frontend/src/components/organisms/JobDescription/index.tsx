import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import JobDescriptionCard, {
  JobDescriptionProps as JobDescriptionCardProps,
} from '../JobDescriptionCard/JobDescriptionCard';
import FindJobsList from '../FindJobsList';

import { makeStyles } from '@mui/styles';
import { getJobDetailById } from '../../../services/services';
import JobList from '../jobList';
import { JobContext } from '../../utils/context';
export type JobDescriptionProps = {};

const styles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    paddingLeft: '2%',
    paddingRight: '2%',
    display: 'flex',
  },
  item1: {
    height: '100%',
  },
  item2: {
    height: '100%',
  },
}));
const JobDescription: React.FC<JobDescriptionProps> = (props) => {
  const [cardId, setCardId] = useState<number>(-1);
  const [selectedCardData, setSelectedCardData] =
    useState<JobDescriptionCardProps>({});

  const classes = styles();

  function mapJobDescriptionCardData(data: any) {
    const mapData: JobDescriptionCardProps = {
      id: data.id,
      jobTitle: data.title,
      companyLogo: data.companyIcon,
      companyName: data.companyName,
      companyAddress: data.location,
      jobUploadedTime: data.time,
      jobDescription: data.description,
      aboutTheCompany: data.about,
    };
    // console.log(mapData);
    return mapData;
  }
  async function getData() {
    return await getJobDetailById(cardId);
  }

  useEffect(() => {
    if (cardId > 0) {
      getData()
        .then((data) => {
          setSelectedCardData(mapJobDescriptionCardData(data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cardId]);
  return (
    <>
      <JobContext.Provider value={{ cardId: cardId, setCardId: setCardId }}>
        {cardId > 0 ? (
          <>
            <Box className={classes.container}>
              <Box className={classes.item2}>
                <JobList />
              </Box>
              <Box sx={{ marginLeft: '16px', width: '404px' }}>
                <JobDescriptionCard {...selectedCardData} />
              </Box>
            </Box>
          </>
        ) : (
          <Grid container direction="column" className={classes.container}>
            <Grid item xs={12}>
              <FindJobsList search={false} />
            </Grid>
          </Grid>
        )}{' '}
      </JobContext.Provider>
    </>
  );
};

export default JobDescription;
