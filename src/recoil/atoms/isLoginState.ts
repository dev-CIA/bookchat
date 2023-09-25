import { atom } from 'recoil';
import { RECOIL_KEY } from '../../constants';

const localStorageEffect = ({ onSet }: any) => {
  onSet((isLogin: string) => {
    localStorage.setItem(RECOIL_KEY.IS_LOGIN_STATE, JSON.stringify(isLogin));
  });
};

const isLoginState = atom({
  key: RECOIL_KEY.IS_LOGIN_STATE,
  default: JSON.parse(localStorage.getItem(RECOIL_KEY.IS_LOGIN_STATE) || 'false'),
  effects: [localStorageEffect],
});

export default isLoginState;
