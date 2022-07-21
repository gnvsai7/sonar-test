import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import theme, { EXTRA_COLORS } from '../../../theme/theme';
import Button from '../../atoms/Button';
import { UPLOAD_BUTTON_TEXT } from '../../utils/constant';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { AddBox } from '@mui/icons-material';
const styles = makeStyles(() => ({
  root: {
    border: `2px dashed ${EXTRA_COLORS.primary[400]}`,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '268px',
    minWidth: '100%',
    display: 'flex',
    backgroundColor: EXTRA_COLORS.neutralShade['100'],
    borderRadius: '12px',
    '& .MuiTypography-body1': {
      //styleName: gamma/Caption 1;
      // fontFamily: 'Montserrat',
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '16px',
    },
  },
  button: {
    color: EXTRA_COLORS.neutralShade['700'],
  },
  fileUploadTypo: {
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '30px',
    color: '#656E66',
  },
  uploadButtonTypo: {
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '16px',
    paddingRight: '44px',
    paddingLeft: '44px',
    paddingTop: '6px',
    paddingBottom: '6px',
    color: 'white',
  },
}));

export type FileUploadProps = {
  onChange: (e) => void;
  fileName: string;
};

const FileUpload: React.FC<FileUploadProps> = (props) => {
  const classes = styles();
  const fileName = props.fileName;
  useEffect(() => {}, [fileName]);
  return (
    <Box sx={{ gridRowGap: '16px' }}>
      <Box sx={{ marginBottom: '14px' }}>
        <Typography className={classes.fileUploadTypo}>File Upload</Typography>
      </Box>
      <Box className={classes.root}>
        <input
          type="file"
          hidden
          style={{ display: 'none' }}
          id="contained-button-file"
          onChange={(e) => props.onChange(e)}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            sx={{
              backgroundColor: `${theme.palette.primary.light}`,
              '&:hover': {
                boxShadow: 'none',
                backgroundColor: `${theme.palette.primary.light}`,
              },
              borderRadius: '8px',
            }}
            component={'span'}
          >
            <Typography className={classes.uploadButtonTypo}>
              {UPLOAD_BUTTON_TEXT}
            </Typography>
          </Button>
          {/* {fileName.length > 0 ? <>{fileName}</> : <>Select a file</>} */}
        </label>
      </Box>
    </Box>
  );
};

export default FileUpload;
