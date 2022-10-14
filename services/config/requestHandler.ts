/* success handler */
export const onSuccess = (response: any) => {
  return response.data;
};

/* error handler */
export const onError = async (error: any) => {
  if (!error?.response) {
    throw new Error(`${error.response?.status} - error - please check internet and try again :(`);
  }
  switch (error.response?.status) {
    case 401:
    case 403:
      return Promise.reject(error.response?.data?.error ? error.response?.data?.error : error.response?.data);
    case 502:
      throw new Error(`${error.response?.status} - ${error.response?.data.error}`);
    default:
      return Promise.reject(error.response?.data?.error);
  }
};
