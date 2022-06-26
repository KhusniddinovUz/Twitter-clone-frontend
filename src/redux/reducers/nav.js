import { CHANGE_NAV } from "../action/types";
const initialState = {
  activeNav: "Home",
};

const nav = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAV:
      return {
        ...state,
        activeNav: action.payload,
      };
    default:
      return state;
  }
};

export default nav;
