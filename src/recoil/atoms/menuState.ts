import { atom } from 'recoil';
const KEY = 'menuState';

const localStorageEffect = ({ onSet }: any) => {
  onSet((newState: string) => {
    localStorage.setItem(KEY, JSON.stringify(newState));
  });
};

const menuState = atom({
  key: KEY,
  default: JSON.parse(localStorage.getItem(KEY) || '0'),
  effects: [localStorageEffect],
});

export default menuState;
