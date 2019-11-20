import { SET_USER } from '_/constants';

export * from './clusters';
export * from './triggers';
export * from './modals';

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const initData = () => (
  async (dispatch) => {
    try {
      const user = await window.insights.chrome.auth.getUser();
      if (user) {
        dispatch(setUser(user));
      }
    } catch (e) {
      window.console.log(e);
    }
  }
);
