import { AtomEffect, atom } from 'recoil';
import { RECOIL_KEY } from '../../constants';

interface User {
  [key: string]: string;
}

const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ onSet }) => {
    onSet(newUser => {
      localStorage.setItem(key, JSON.stringify(newUser));
    });
  };

const userState = atom({
  key: RECOIL_KEY.USER_STATE,
  default: JSON.parse(localStorage.getItem(RECOIL_KEY.USER_STATE) || '{}'),
  effects: [localStorageEffect<User>(RECOIL_KEY.USER_STATE)],
});

export default userState;
