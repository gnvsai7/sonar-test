import Chip from '@mui/material/Chip';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import theme from '../../../theme/theme';
export type MuiChipProp = {
  onClick?: () => void;
  onDelete?: () => void;
  variant?: 'filled' | 'outlined';
  className?: string;
  size?: 'medium' | 'small';
  label: string;
};

const MuiChip: React.FC<MuiChipProp> = (props) => {
  const {
    onClick,
    onDelete,
    variant = 'filled',
    className,
    size = 'medium',
    label,
  } = props;
  return (
    <Chip
      data-testid="chip"
      style={{
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 500,
        color: theme.palette.text.primary,
        fontFamily: 'Montserrat',
        borderRadius: '8px',
      }}
      label={label}
      onClick={onClick}
      onDelete={onDelete}
      deleteIcon={<CloseIcon />}
      variant={variant}
      className={className}
      size={size}
    />
  );
};

export default MuiChip;
