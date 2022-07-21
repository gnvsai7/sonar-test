import { FilterGroupProps, Pair } from '../molecules/FilterGroup/FilterGroup';

export const DASHBOARD = 'Dashboard';
export const FIND_JOBS = 'Find Jobs';
export const SAVED_JOBS = 'Saved Jobs';
export const PRACTICE_TEST = 'Practice Test';
export const NEWS_EVENTS = 'News & Events';
export const NEED_HELP = 'Need Help ?';
export const CONTACT_US = 'Contact Us';
export const SETTINGS = 'Settings';
export const SEARCH_SKILLS = 'Search Skills';
export const LOCATION = 'Location';
export const FILTER = 'Filter';
export const DISTANCE = 'Distance';
export const DATE_POSTED = 'Date Posted';
export const GREEN_COMMUTE = 'Green Commute';
export const JOB_TYPE = 'Job Type';
export const EXPERIENCE_LEVEL = 'Experience Level';
export const TRANSPORT = 'Transport';
export const COMMON_ROUTES = 'Common Routes';
export const UPLOAD_BUTTON_TEXT = 'Click Here To Upload Files';
export const UPLOAD_SUCCESS_TEXT = 'Your Resume Uploaded Successfully';
export const OKAY = 'Okay';
export const HI = 'Hi';
export const DISTANCE_FILTERS: Pair[] = [
  { key: '0-10 Kms', checked: true },
  { key: '11-20 Kms', checked: false },
  { key: '21-30 Kms', checked: false },
  { key: '31-40 Kms', checked: false },
];
export const DATE_FILTERS: Pair[] = [
  { key: 'Past 24 hours', checked: false },
  { key: 'Past week', checked: false },
  { key: 'Past month', checked: false },
  { key: 'Anytime', checked: false },
];
export const GREEN_COMMUTE_FILTERS: Pair[] = [
  { key: 'Yes', checked: true },
  { key: 'No', checked: false },
];

export const JOB_TYPE_FILTERS: Pair[] = [
  { key: 'Full Time', checked: false },
  { key: 'Internship', checked: false },
  { key: 'Contract', checked: false },
  { key: 'Remote', checked: false },
];
export const EXPERIENCE_LEVEL_FILTERS: Pair[] = [
  { key: 'Fresher', checked: false },
  { key: 'Mid-level', checked: false },
  { key: 'Director', checked: false },
  { key: 'Executive', checked: false },
];
export const TRANSPORT_FILTERS: Pair[] = [
  { key: 'Metro', checked: false },
  { key: 'Bus', checked: false },
  { key: 'Car Pooling', checked: false },
  { key: 'Motor Cycle', checked: false },
];
export const ArrayOFilters: Array<FilterGroupProps> = [
  {
    name: DISTANCE,
    values: DISTANCE_FILTERS,
    onChange: (e) => {
      console.log('Filters changed');
    },
  },
  {
    name: DATE_POSTED,
    values: DATE_FILTERS,
    onChange: (e) => {
      console.log('Filters changed');
    },
  },
  {
    name: GREEN_COMMUTE,
    values: GREEN_COMMUTE_FILTERS,
    radio: true,
    onChange: (e) => {
      console.log('Filters changed');
    },
  },
  {
    name: JOB_TYPE,
    values: JOB_TYPE_FILTERS,
    onChange: (e) => {
      console.log('Filters changed');
    },
  },
  {
    name: EXPERIENCE_LEVEL,
    values: EXPERIENCE_LEVEL_FILTERS,
    onChange: (e) => {
      console.log('Filters changed');
    },
  },
  {
    name: TRANSPORT,
    values: TRANSPORT_FILTERS,
    onChange: (e) => {
      console.log('Filters changed');
    },
  },
];
