import {BASE_URL} from '../constant/variables';
import axios from 'axios';

const fetchData = async (endPoint: string) => {
  try {
    // const response = await fetch(
    //   'https://random-data-api.com/api/users/random_user?size=10',
    //   {
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   },
    // );

    const response = await axios({
      method: 'get',
      url: 'https://random-data-api.com/api/users/random_user?size=10',
    });

    console.log(response);

    // const data = await response.json();
    // return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {fetchData};
