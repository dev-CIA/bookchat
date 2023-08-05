import { atom } from 'recoil';

const KEY = 'userState';

const localStorageEffect = ({ onSet }: any) => {
  onSet((newUser: string) => {
    localStorage.setItem(KEY, JSON.stringify(newUser));
  });
};

const userState = atom({
  key: KEY,
  default: JSON.parse(localStorage.getItem(KEY) || '{}'),
  effects: [localStorageEffect],
});

export default userState;
