import {SCREEN} from '../libs/ScreenConstant';
import {CONST_STRING} from '../libs/StringConstant';
import Home from '../views/Home';

const HomeViewModel = (props: any) => {
  const data: string[] = [
    CONST_STRING.BANNER,
    CONST_STRING.INTERTESTIAl,
    CONST_STRING.REWARD,
  ];

  const navigate = (Screen: string) => {
    props.navigation.navigate(Screen);
  };

  const handleNavigation = (index: number) => {
    switch (index) {
      case 0:
        return navigate(SCREEN.BANNER_SCREEN);
      case 1:
        return navigate(SCREEN.INTERTESTIAl);
      case 2:
        return navigate(SCREEN.REWARD);
      default:
        return null;
    }
  };

  return (
    <Home
      {...{
        data,
        handleNavigation
      }}
    />
  );
};

export default HomeViewModel;
