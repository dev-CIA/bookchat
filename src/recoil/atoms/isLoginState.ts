import { AtomEffect, atom } from 'recoil';
import { RECOIL_KEY } from '../../constants';

interface IsLogin {
  [key: string]: boolean;
}

const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ onSet }) => {
    onSet(isLogin => {
      localStorage.setItem(key, JSON.stringify(isLogin));
    });
  };

const isLoginState = atom({
  key: RECOIL_KEY.IS_LOGIN_STATE,
  default: JSON.parse(localStorage.getItem(RECOIL_KEY.IS_LOGIN_STATE) || 'false'),
  effects: [localStorageEffect<IsLogin>(RECOIL_KEY.IS_LOGIN_STATE)],
});

export default isLoginState;
