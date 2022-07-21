import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { SearchProps } from '../../molecules/Search';
import { EXTRA_COLORS } from '../../../theme/theme';
import Filter, { ApplyList } from '../Filter';
import { makeStyles } from '@mui/styles';
import JobDescription from '../JobDescription';
import { LOCATION, SEARCH_SKILLS } from '../../utils/constant';

export const FilterContext = React.createContext<any>({
  filterList: [],

  setFilterList: (list: ApplyList[]) => {},
});

export const SearchContextValue = React.createContext<any>({
  skillSearch: '',
  setSkillSearch: (search: string) => {},
  locationSearch: '',
  setLocationSearch: (location: string) => {},
});

const searchProps: SearchProps = {
  placeholder1: SEARCH_SKILLS,

  placeholder2: LOCATION,
};

const styles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgba(229, 229, 229, 0.1)',
    border: 'none',
    height: '100%',
    width: '100%',
  },
  item1: {
    width: '100%',
    margin: '1%',
    padding: '1%',
  },
  item2: {
    width: '100%',
    height: '100%',
  },
}));

const MainContent: React.FC = () => {
  const classes = styles();
  const [filterList, setFilterList] = React.useState<ApplyList[]>([]);
  const [skillSearch, setSkillSearch] = React.useState('');
  const [locationSearch, setLocationSearch] = useState('');
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item className={classes.item1} xs={12}>
          <FilterContext.Provider
            value={{ filterList: [], setFilterList: setFilterList }}
          >
            <SearchContextValue.Provider
              value={{
                skillSearch: skillSearch,
                setSkillSearch: setSkillSearch,
                locationSearch: locationSearch,
                setLocationSearch: setLocationSearch,
              }}
            >
              <Filter searchProps={searchProps} />
            </SearchContextValue.Provider>
          </FilterContext.Provider>
        </Grid>
        <Grid item className={classes.item2} xs={12}>
          <FilterContext.Provider
            value={{ filterList: filterList, setFilterList: setFilterList }}
          >
            <SearchContextValue.Provider
              value={{
                skillSearch: skillSearch,
                setSkillSearch: setSkillSearch,
                locationSearch: locationSearch,
                setLocationSearch: setLocationSearch,
              }}
            >
              <JobDescription />
            </SearchContextValue.Provider>
          </FilterContext.Provider>
        </Grid>
      </Grid>
    </>
  );
};

export default MainContent;
