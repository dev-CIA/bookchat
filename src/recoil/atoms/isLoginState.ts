import { atom } from 'recoil';

const KEY = 'isLoginState';

const localStorageEffect = ({ onSet }: any) => {
  onSet((isLogin: string) => {
    localStorage.setItem(KEY, JSON.stringify(isLogin));
  });
};

const isLoginState = atom({
  key: KEY,
  default: JSON.parse(localStorage.getItem(KEY) || 'false'),
  effects: [localStorageEffect],
});

export default isLoginState;
