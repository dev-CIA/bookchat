import { atom } from 'recoil';
import { RECOIL_KEY } from '../../constants';

const localStorageEffect = ({ onSet }: any) => {
  onSet((newState: string) => {
    localStorage.setItem(RECOIL_KEY.MENU_STATE, JSON.stringify(newState));
  });
};

const menuState = atom({
  key: RECOIL_KEY.MENU_STATE,
  default: JSON.parse(localStorage.getItem(RECOIL_KEY.MENU_STATE) || '0'),
  effects: [localStorageEffect],
});

export default menuState;
