import { atom } from 'recoil';

const menuState = atom({
  key: 'menuState',
  default: 0,
});

export default menuState;
