import { Box, Divider, InputBase, Autocomplete } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import theme, { EXTRA_COLORS } from '../../../theme/theme';
import SearchSkillIcon from '../../../assets/icons/searchSkill.png';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { SearchContext } from '../../utils/context';
import { SearchContextValue } from '../../organisms/MainContent/index';

import { makeStyles } from '@mui/styles';
import _ from 'lodash';
import { getAllLocations, getAllSkills } from '../../../services/services';
export type SearchProps = {
  placeholder1: string;

  placeholder2: string;
};
const innerImage = {
  padding: '10px',
};
const styles = makeStyles(() => ({
  outerBox: {
    marginTop: '8px',
    borderTopLeftRadius: '100px',
    borderTopRightRadius: '100px',
    borderBottomLeftRadius: '100px',
    borderBottomRightRadius: '100px',
    border: `1px solid ${theme.palette.grey['100']}`,
    display: 'flex',
    flexDirection: 'row',

    width: '843px',
    height: '56px',
    justifyContent: 'center',
    alignItems: 'center',
    background: EXTRA_COLORS.neutralShade['700'],
    boxSizing: 'border-box',
  },
  searchBox: {
    width: '50%',

    height: '50%',

    display: 'flex',
  },
  searchIcon: {
    backgroundColor: EXTRA_COLORS.primary['400'],
    color: EXTRA_COLORS.neutralShade['700'],
    width: '44px !important',
    height: '44px !important',
    borderRadius: '50%',
    padding: '4px',
    border: `2px solid ${EXTRA_COLORS.neutralShade['700']}`,
  },
  paper: {
    marginLeft: '50px',
    marginTop: '0px',
  },
  inputBase: {
    width: '100%',
    padding: '6px',
  },
}));
async function mockSearchResult(searchTerm: string, location: boolean) {
  let result = [];
  if (location) {
    result = await getAllLocations();
  } else {
    result = await getAllSkills();
  }
  result = result.map((f) => f.name);

  return result.filter((a) => a.includes(searchTerm));
}
const Search: React.FC<SearchProps> = (props) => {
  const classes = styles();
  const search = useContext(SearchContext);
  const [searchTermOne, setSearchTermOne] = useState('');
  const [searchTermTwo, setSearchTermTwo] = useState('');
  const [options1, setOptions1] = useState<string[]>([]);
  const [options2, setOptions2] = useState<string[]>([]);
  const { placeholder1, placeholder2 } = props;
  const [open1, setOpen1] = useState(false);
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [open2, setOpen2] = useState(false);
  const searchTermContext = useContext(SearchContextValue);

  const handleChangeOne = (e) => {
    console.log(e.target.value);
    setSearchTermOne(e.target.value);
  };
  const newHandleChange = _.debounce(
    async (e) => {
      handleChangeOne(e);
      if (searchTermOne === '') {
        setOpen1(false);

        setOptions1(_.cloneDeep([]));
        return;
      }
      const result = await mockSearchResult(searchTermOne, false);

      setOptions1(_.cloneDeep(result));
    },
    [200]
  );
  const newHandleChange2 = _.debounce(
    async (e) => {
      handleChangeTwo(e);
      if (searchTermTwo === '') {
        setOptions2(_.cloneDeep([]));
        return;
      }
      const result = await mockSearchResult(searchTermOne, true);

      setOptions2(_.cloneDeep(result));
    },
    [200]
  );
  const handleChangeTwo = (e) => {
    setSearchTermTwo(e.target.value);
  };

  return (
    <>
      <Box className={classes.outerBox}>
        <Autocomplete
          data-testid="autocomplete"
          multiple={false}
          id="combo-box-demo"
          classes={{ paper: classes.paper, root: classes.searchBox }}
          options={options1}
          disablePortal
          filterSelectedOptions
          open={open1}
          onClose={() => setOpen1(false)}
          onOpen={() => {
            if (focus1 && searchTermOne !== '') {
              setOpen1(true);
            } else {
              setOpen1(false);
            }
          }}
          onFocus={() => {
            search.setSearch(true);
            setFocus1(true);
            setOptions1([]);
          }}
          onChange={(e, v) => {
            if (v !== null) {
              searchTermContext.setSkillSearch(_.cloneDeep(v));
            }
          }}
          onInputChange={(e) => newHandleChange(e)}
          renderInput={(params: any) => (
            <InputBase
              placeholder={placeholder1}
              className={classes.inputBase}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              startAdornment={
                <Box sx={{ padding: '20px' }}>
                  <img src={SearchSkillIcon} alt="" />
                </Box>
              }
              endAdornment={<Divider orientation="vertical" />}
            />
          )}
        />
        <Autocomplete
          data-testid="autocomplete2"
          id="location"
          options={options2}
          disablePortal
          filterSelectedOptions
          onChange={(e, v) => {
            if (v !== null) {
              searchTermContext.setLocationSearch(_.cloneDeep(v));
            }
          }}
          open={open2}
          onClose={() => setOpen2(false)}
          onOpen={() => {
            if (focus2 && searchTermTwo !== '') {
              setOpen2(true);
            } else {
              setOpen2(false);
            }
          }}
          onFocus={() => {
            search.setSearch(true);
            setFocus2(true);
            setOptions2([]);
          }}
          onBlur={() => {
            search.setSearch(true);
          }}
          onInputChange={(e) => newHandleChange2(e)}
          classes={{ paper: classes.paper, root: classes.searchBox }}
          renderInput={(params: any) => (
            <InputBase
              className={classes.inputBase}
              ref={params.InputProps.ref}
              placeholder={placeholder2}
              inputProps={params.inputProps}
              startAdornment={
                <Box sx={{ padding: '8px' }}>
                  <LocationOnOutlinedIcon />
                </Box>
              }
              endAdornment={<SearchIcon className={classes.searchIcon} />}
            />
          )}
        />
      </Box>
    </>
  );
};

export default Search;
