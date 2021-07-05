const INITAL_STATE = {
  covidData: [],
};
export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "updatecoviddata":
      return {
        ...state,
        covidData: action.Data,
      };
    default:
      return state;
  }
};
