import React, { useEffect, useState } from 'react';

import {
  Box,
  Typography,
  Stack,
  Button,
  Dialog,
  DialogContent,
} from '@mui/material';
import theme from '../../../theme/theme';
import { makeStyles } from '@mui/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FileUpload from '../FileUpload';
import CloseIcon from '@mui/icons-material/Close';
import { getSaveJobById } from '../../../services/services';
import { saveJobService, uploadFile } from '../../../services/services';
import UploadSuccess from '../UploadSuccess';
export interface JobTitleProps {
  id: number;
  jobTitle: string;
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  jobUploadedTime: string;
}

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '25%',
  },
  jobTitleButton: {
    // width: '101px',
    // height: '32px',
    // padding: '8px 32px',
    // alignItems: 'center',
    // color: '#30A193',
    // borderRadius: '8px',
    height: '32px',
    width: '99px',
    borderRadius: '12px',
    padding: '8px 32px 8px 32px',
    border: `1px solid ${theme.palette.primary.light}`,
  },
  saveButton: {
    width: '92px',
    height: '32px',
    padding: '8px 32px',
    alignItems: 'center',
    color: '#30A193',
    borderRadius: '8px',
  },
  mainBox: {
    maxWidth: '70%',
    minWidth: '60%',
    paddingTop: '2%',
    justifyContent: 'center',
  },
  icon: {
    position: 'static',
    width: '45px',
    height: '45px',
  },

  iconBox: {
    maxWidth: '20%',
    height: '100%',
    paddingTop: '4%',
    paddingRight: '6%',
    paddingLeft: '5%',
  },
  applyTypo: {
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '700 !important',
    lineHeight: '16px',
    color: 'white',
  },
  saveTypo: {
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '700 !important',
    lineHeight: '16px',
    color: '#4ABAAD',
  },
}));

const JobTitleCard: React.FC<JobTitleProps> = ({
  id,
  jobTitle,
  companyLogo,
  companyName,
  companyAddress,
  jobUploadedTime,
}: JobTitleProps) => {
  const companyAndAddressStyle = {
    fontSize: '12px',
    lineHeight: '16px',
    marginTop: '4px',
    color: theme.palette.text.secondary,
  };

  const titleStyles = {
    fontSize: '20px',
    lineHeight: '30px',
    marginTop: '4px',
  };

  const applyButtonStyles = {
    color: theme.palette.success[500],
    padding: '3px 0',
    margin: '5px 0',
    backgroundColor: theme.palette.primary.light,
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: `${theme.palette.primary.light}`,
    },
  };

  const saveButtonStyles = {
    padding: '2px 0',
    width: '92px',
    marginTop: '20px',
    marginBottom: '5px',
  };

  const moreIconStyles = {
    minWidth: '5%',
    marginLeft: '5%',
  };

  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSuccessOpen = () => setSuccessOpen(true);
  const handleSuccessClose = () => setSuccessOpen(false);
  const [save, setSaveText] = useState('Save');
  const [fileName, setFileName] = useState('');
  const saveJob = (userId: number, jobId: number) => {
    saveJobService(userId, jobId)
      .then(() => {
        setSaveText('Saved');
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };
  const submitFile = async (e: any) => {
    let formData = new FormData();
    setFileName(e.target.files[0].name);
    await uploadFile(1, fileName).then((data) => {
      // console.log(data);
      setOpen(false);
      setSuccessOpen(true);
    });
  };
  async function saveUnsaveJob() {
    try {
      const data = await getSaveJobById(1, id);
      if (data !== null) {
        setSaveText('Saved');
      }
    } catch (error) {
      setSaveText('Save');
    }
  }
  useEffect(() => {
    saveUnsaveJob();
  }, [id, save]);
  return (
    <div data-testid="jobTitleCard">
      <Stack
        direction={'row'}
        sx={{
          marginTop: '8px',
        }}
      >
        <Box className={styles.iconBox}>
          <img className={styles.icon} src={companyLogo} alt={companyLogo} />
        </Box>

        {
          <Box className={styles.mainBox}>
            <Typography variant="body2" sx={titleStyles}>
              {jobTitle}
            </Typography>
            <Typography variant="subtitle2" sx={companyAndAddressStyle}>
              {' '}
              {companyName}
            </Typography>
            <Typography variant="subtitle2" sx={companyAndAddressStyle}>
              {companyAddress}
            </Typography>

            <Typography variant="caption" sx={{ marginTop: '4px' }}>
              {jobUploadedTime}
            </Typography>
            <Stack direction={'row'}>
              <Box sx={{ marginTop: '20px', marginBottom: '5px' }}>
                {save === 'Save' ? (
                  <Button
                    className={styles.jobTitleButton}
                    variant="outlined"
                    sx={saveButtonStyles}
                    onClick={() => saveJob(1, id)}
                  >
                    <Typography variant="caption" className={styles.saveTypo}>
                      {save}
                    </Typography>
                  </Button>
                ) : (
                  <Button
                    className={styles.jobTitleButton}
                    variant="outlined"
                    disabled={true}
                    sx={saveButtonStyles}
                    onClick={() => saveJob(1, id)}
                  >
                    <Typography variant="caption" className={styles.saveTypo}>
                      {save}
                    </Typography>
                  </Button>
                )}
              </Box>
              <Box minWidth="10px"></Box>
              <Box sx={{ marginTop: '35px', marginBottom: '5px' }}>
                <Button
                  className={styles.jobTitleButton}
                  variant="contained"
                  sx={applyButtonStyles}
                  onClick={handleOpen}
                >
                  <Typography variant="caption" className={styles.applyTypo}>
                    {'Apply '}
                  </Typography>
                </Button>
              </Box>
            </Stack>
          </Box>
        }

        <Box sx={moreIconStyles}>
          <MoreHorizIcon />
        </Box>
      </Stack>
      <Dialog
        fullWidth
        open={open}
        sx={{ margin: '20px', padding: '20px', overflow: 'hidden' }}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              // marginLeft: '20px',
              overflow: 'hidden',
            }}
          >
            <CloseIcon
              onClick={handleClose}
              sx={{ height: '12px', width: '12px' }}
            />
          </Box>
          {}
          <Box
            sx={{
              paddingBottom: '30px',
              paddingRight: '30px',
              paddingLeft: '30px',
            }}
          >
            <FileUpload onChange={submitFile} fileName={fileName} />
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        fullWidth
        open={successOpen}
        sx={{ margin: '20px', padding: '20px', width: '100%', height: '100%' }}
        onClose={handleSuccessClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{ width: '100%', height: '100%' }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <CloseIcon sx={{ height: '12px', width: '12px' }} />
          </Box>
          <Box onClick={handleSuccessClose}>
            <UploadSuccess name="abc" clickOk={handleSuccessClose} />
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default JobTitleCard;
