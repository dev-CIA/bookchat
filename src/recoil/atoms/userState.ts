import { atom } from 'recoil';
import { RECOIL_KEY } from '../../constants';

const localStorageEffect = ({ onSet }: any) => {
  onSet((newUser: string) => {
    localStorage.setItem(RECOIL_KEY.USER_STATE, JSON.stringify(newUser));
  });
};

const userState = atom({
  key: RECOIL_KEY.USER_STATE,
  default: JSON.parse(localStorage.getItem(RECOIL_KEY.USER_STATE) || '{}'),
  effects: [localStorageEffect],
});

export default userState;
