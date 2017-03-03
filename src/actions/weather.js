const mockAPIdata = [
  {
    cityid: 523323,
    clouds: 0.4,
    wind: 12
  },
  {
    cityid: 121212,
    clouds: 0.1,
    wind: 10
  },
  {
    cityid: 767676,
    clouds: 0.9,
    wind: 22
  }
];


export const getDataWeather = () => (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'FETCH_WEATHER_DATA_SUCCESS', payload: mockAPIdata})
  }, 2000)
};

  