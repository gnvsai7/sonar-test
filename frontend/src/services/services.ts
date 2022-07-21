import API from './API';

export const getAllAvailableJobs = async () => {
  const jobs = await API.get(`jobs`);
  return jobs.data;
};

export const getAllSavedJobs = async (userId: number) => {
  const jobs = await API.get(`savedJobs`, { params: { userId: userId } });
  return jobs.data;
};
export const getAQI = async (cityName: string) => {
  const value = await API.get('aqi', { params: { name: cityName } });
  return value.data;
};

export const getAllFilters = async () => {
  const value = await API.get('filters');
  return value.data;
};
export const getFilterValueByName = async (name: string) => {
  const value = await API.get('filters', { params: { name: name } });
  return value.data;
};
export const updateFilter = async (filters: any) => {
  const newValue = await API.put('filters/' + filters.id, filters);

  return newValue.data;
};
export const getJobDetailById = async (id: number) => {
  const data = await API.get('jobs/' + id);

  return data.data;
};

export const saveJobService = async (userId: number, jobId: number) => {
  const jobData: any = await getJobDetailById(jobId);
  // console.log(jobData);
  jobData.userId = userId;
  await API.post(`savedJobs`, jobData);
};

export const uploadFile = async (userId: number, data: any) => {
  const newData = {
    id: userId,
    first_name: 'Justina',
    last_name: 'Ginglell',
    email: 'jginglell0@networkadvertising.org',
    gender: 'Female',
    resume: data,
  };
  return await API.put(`users/` + userId, newData);
};
export const getAllSkills = async () => {
  const data = await API.get('skills');
  console.log(data.data);
  return data.data;
};
export const getAllLocations = async () => {
  const data = await API.get('locations');

  return data.data;
};

export const filterRecordByTitle = async (filterValue: string) => {
  const data = await API.get('jobs', { params: { title: filterValue } });
  return data.data;
};

export const filterByLocation = async (filterValue: string) => {
  const data = await API.get('jobs', { params: { location: filterValue } });
  return data.data;
};
export const getSaveJobById = async (userId: number, jobId: number) => {
  const data = await API.get('savedJobs/' + jobId, {
    params: { userId: userId },
  });
  return data.data;
};
