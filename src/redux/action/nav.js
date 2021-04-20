import { CHANGE_NAV } from './types';

export const changeNav = (active) => {
  return {
    type: CHANGE_NAV,
    payload: active,
  };
};
