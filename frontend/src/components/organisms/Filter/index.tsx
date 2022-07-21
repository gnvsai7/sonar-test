import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  Typography,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useContext } from 'react';
import theme, { EXTRA_COLORS } from '../../../theme/theme';
import MuiChip from '../../atoms/Chip';
import FilterGroup from '../../molecules/FilterGroup/FilterGroup';
import FilterGroupRadio from '../../molecules/FilterGroupRadio';
import Search, { SearchProps } from '../../molecules/Search';
import FilterIcon from '../../../assets/icons/filter.png';
import * as _ from 'lodash';
import Button from '../../atoms/Button';
import { getAllFilters, updateFilter } from '../../../services/services';
import { useQuery, useQueryClient } from 'react-query';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';
import { FilterContext } from '../MainContent/index';
import { SearchContext } from '../../utils/context';
export type FilterProps = {
  searchProps: SearchProps;
};

export type ApplyList = {
  filterName: string;
  filterValues: Array<string>;
};

const styles = makeStyles(() => ({
  root: {
    padding: theme.spacing(2),
    backGround: EXTRA_COLORS.neutralShade['700'],
    boderRadius: '8px',
  },

  items: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  filterButton: {
    backgroundColor: `${EXTRA_COLORS.neutralShade['700']} !important`,
    borderRadius: '32px !important',
    height: '56px',
    width: '137px',
  },
  applyButton: {
    color: EXTRA_COLORS.neutralShade['700'],
    fontWeight: 'bold',
  },
  clearAllButton: {
    color: theme.palette.primary.light,
    fontWeight: 'bold',
  },
  clearAllText: {
    color: theme.palette.primary.light,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  chips: {
    backgroundColor: `${EXTRA_COLORS.neutralShade['700']} !important`,
    borderRadius: '8px !important',
    marginTop: '12px !important',
    marginRight: '20px !important',
    borderColor: `${EXTRA_COLORS.neutralShade['700']} !important`,
    Color: `${theme.palette.text.secondary} !important`,
  },
  jobList: {
    fontSize: '20px',
    lineHeight: '30px',
  },
  basedOnText: {
    color: theme.palette.text.secondary,
  },
  findJobtext: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '30px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
  filterText: {
    color: theme.palette.text.primary,
  },
  clearAllGrid: {
    marginTop: '10px',
  },
}));

async function getAllFiltersValue() {
  try {
    const values = await getAllFilters();
    // console.log(values);
    return values;
  } catch (err) {
    throw new Error('data not found');
  }
}

const Filter: React.FC<FilterProps> = (props) => {
  const { searchProps } = props;
  // const queryClient = useQueryClient();
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const [applyList, setApplyList] = useState<ApplyList[]>([]);
  const location = useLocation();
  const [search, setSearch] = React.useState(false);
  const filterContext = useContext(FilterContext);
  const { isLoading, data, isFetching, refetch } = useQuery(
    ['filters'],
    getAllFiltersValue,
    { enabled: false }
  );

  // const { mutateAsync: updateFilters } = useMutation(
  //   'updateFilters',
  //   updateFilter,
  //   {
  //     onSuccess: () => queryClient.invalidateQueries('filters'),
  //   }
  // );

  const handleClickOpen = () => {
    setOpen(true);
    refetch();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const radioButtonFilters = async (
    id: number,
    groupName: string,
    value: string
  ) => {
    for (const l of data) {
      if (l.name === groupName) {
        for (const v of l.values) {
          if (v.key === value) {
            v.checked = true;
          } else {
            v.checked = false;
          }
        }
      }
    }
  };
  const clearAll = async () => {
    for (const l of data) {
      for (const v of l.values) {
        if (v.checked === true) {
          v.checked = false;

          await updateFilter(data.filter((n) => n.id === l.id)[0]);
        }
      }
    }
    // await updateFilters(data[0]);

    filterContext.setFilterList([]);
    setApplyList([]);
    refetch();
  };

  const checkBoxFilters = async (
    id: number,
    groupName: string,
    value: string,
    setValue: boolean
  ) => {
    for (const f of data) {
      if (f.name !== groupName) {
        continue;
      }
      for (const v of f.values) {
        if (v.key === value) {
          v.checked = setValue;
          break;
        }
      }
      break;
    }
  };
  const handleChange = async (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>,
    groupName: string,
    radio: boolean
  ) => {
    if (radio) {
      await radioButtonFilters(id, groupName, e.target.value);
    } else {
      let flag = true;
      if (!e.target.checked) {
        flag = false;
      }

      await checkBoxFilters(id, groupName, e.target.value, flag);
    }
  };

  const applyFilter = async () => {
    const newList: ApplyList[] = [];
    for (const d of data) {
      const filtersValues: Array<string> = [];
      for (const v of d.values) {
        if (v.checked) {
          await updateFilter(data.filter((n) => n.id === d.id)[0]);
          filtersValues.push(v.key);
        }
      }
      if (filtersValues.length > 0) {
        newList.push({
          filterName: d.name,
          filterValues: filtersValues,
        });
      }
    }

    setApplyList(newList);

    filterContext.setFilterList(newList);
    setOpen(false);
  };

  if (isLoading || isFetching) {
    return <h2 data-testid="loading">Loading...</h2>;
  }

  let findJobsText = <></>;
  if (location.pathname === '/findjobs') {
    findJobsText = (
      <Typography className={classes.findJobtext} data-testid="find-jobs">
        Find Jobs
      </Typography>
    );
  }
  return (
    <>
      <Grid container spacing={2} direction="row">
        <Grid item className={classes.items}>
          {findJobsText}
          <SearchContext.Provider
            value={{ search: search, setSearch: setSearch }}
          >
            <Search {...searchProps} />
          </SearchContext.Provider>
        </Grid>
        <Grid item className={classes.items}>
          <Box
            sx={{
              marginTop: '35px',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1%',
            }}
          >
            <Button
              data-testid="filter-button"
              className={classes.filterButton}
              onClick={handleClickOpen}
              startIcon={<img src={FilterIcon} alt="" />}
            >
              <Typography variant="body2" className={classes.filterText}>
                {' '}
                Filter
              </Typography>
            </Button>
          </Box>

          <Dialog open={open} onClose={handleClose} className={classes.root}>
            <DialogContent>
              <Box
                sx={{
                  width: '100%',
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <CloseIcon data-testid="close-modal" onClick={handleClose} />
              </Box>

              <DialogContentText id="filter" component={'div'}>
                <Grid container spacing={4}>
                  {data?.length > 0
                    ? data?.map((value: any, index: number) => {
                        if (value?.radio) {
                          return (
                            <Grid item xs={4} key={index}>
                              <FilterGroupRadio
                                name={value.name}
                                values={value.values}
                                onChange={(e) => {
                                  handleChange(value.id, e, value.name, true);
                                }}
                              />
                            </Grid>
                          );
                        } else {
                          return (
                            <Grid item xs={4} key={index}>
                              <FilterGroup
                                name={value.name}
                                values={value.values}
                                onChange={(e) => {
                                  handleChange(value.id, e, value.name, false);
                                }}
                              />
                            </Grid>
                          );
                        }
                      })
                    : ''}
                </Grid>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={clearAll}
                data-testid="clearAll"
                className={classes.clearAllButton}
              >
                <Typography
                  variant="caption"
                  className={classes.clearAllButton}
                >
                  Clear All
                </Typography>
              </Button>
              <Button
                onClick={applyFilter}
                variant="contained"
                className={classes.applyButton}
                sx={{
                  width: '101px',
                  height: '32px',
                  padding: '8px 32px 8px 32px',
                  backgroundColor: theme.palette.primary.light,
                  hover: 'none',
                  borderRadius: '8px',
                }}
              >
                <Typography variant="caption" className={classes.applyButton}>
                  Apply
                </Typography>
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item xs={6} className={classes.items}>
          <Box sx={{ boxSizing: 'border-box', justifyContent: 'flex-start' }}>
            {search === true ? (
              <>
                <Box sx={{ width: '100%' }}>
                  <Typography variant="body2" className={classes.jobList}>
                    Job List
                  </Typography>
                  <Typography variant="body2" className={classes.basedOnText}>
                    Based on your search
                  </Typography>
                </Box>
              </>
            ) : (
              <Box sx={{ width: '100%' }}>
                <Typography variant="body2" className={classes.jobList}>
                  Recommented for you
                </Typography>
                <Typography variant="body2" className={classes.basedOnText}>
                  Based on your profile skills and search skills
                </Typography>
              </Box>
            )}

            <Grid container direction="row">
              <Grid item xs={8}>
                {applyList.length > 0
                  ? applyList.map((f: ApplyList) => {
                      return f.filterValues.length > 0
                        ? f.filterValues.map((chipLabel, index) => (
                            <MuiChip
                              data-testid="chip"
                              label={chipLabel}
                              variant="outlined"
                              key={index}
                              className={classes.chips}
                              onDelete={() => console.log('deleted')}
                            />
                          ))
                        : '';
                    })
                  : ''}
              </Grid>
              <Grid item xs={4} className={classes.clearAllGrid}>
                {applyList.length > 0 ? (
                  <Button
                    data-testid="clearAllChip"
                    className={classes.clearAllButton}
                    onClick={clearAll}
                    disableRipple={true}
                  >
                    <Typography
                      variant="caption"
                      className={classes.clearAllText}
                    >
                      Clear All
                    </Typography>
                  </Button>
                ) : (
                  ''
                )}
              </Grid>{' '}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;
