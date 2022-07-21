import { Typography } from '@mui/material';
import Vector from '../../../assets/image/Vectorshape.png';
import React from 'react';
export interface AQIScoreProps {
  qualityIndex: number;
}
const AQIScore: React.FC<AQIScoreProps> = (props: AQIScoreProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${Vector})`,
        height: '174px',
        width: '174px',
        marginTop: '32px',
      }}
    >
      <Typography
        color={'#0B6D62'}
        sx={{
          fontWeight: '600 ',
          lineHeight: '48px',
          fontFamily: 'Montserrat',
          fontSize: '48px',
          textAlign: 'center',
          position: 'relative',
          top: '64px',
          bottom: '64px',
        }}
      >
        {props.qualityIndex}
      </Typography>
    </div>
  );
};
export default AQIScore;
