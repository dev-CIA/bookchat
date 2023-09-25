import { AtomEffect, atom } from 'recoil';
import { RECOIL_KEY } from '../../constants';

interface Menu {
  [key: string]: number;
}

const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ onSet }) => {
    onSet(newState => {
      localStorage.setItem(key, JSON.stringify(newState));
    });
  };

const menuState = atom({
  key: RECOIL_KEY.MENU_STATE,
  default: JSON.parse(localStorage.getItem(RECOIL_KEY.MENU_STATE) || '0'),
  effects: [localStorageEffect<Menu>(RECOIL_KEY.MENU_STATE)],
});

export default menuState;
