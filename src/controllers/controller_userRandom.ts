import {fetchData} from '../services/base_services';

export const fetchUserRandom = async () => {
  const res = await fetchData('api/users/random_user?size=10');

  return res;
};
