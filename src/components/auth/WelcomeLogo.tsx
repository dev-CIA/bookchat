import { Text, Image } from '@mantine/core';

import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { menuState } from '../../recoil/atoms';

const WelcomeLogo = () => {
  const setActiveMenu = useSetRecoilState(menuState);

  return (
    <>
      <Link
        to={'/'}
        onClick={() => {
          setActiveMenu('0');
        }}>
        <Image width={90} height={90} src="./logo/bookchatLogo.png" alt="logo" mx={'auto'} />
      </Link>
      <Text size="lg" weight={500} align="center">
        Book Chat에 오신 것을 환영합니다.
      </Text>
    </>
  );
};

export default WelcomeLogo;
