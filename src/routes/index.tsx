import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Interestial from '../viewModel/InterestialAd';
import {SCREEN} from '../libs/ScreenConstant';
import HomeViewModel from '../viewModel/Home';
import BannerViewModel from '../viewModel/BannerAd';
import RewardViewModel from '../viewModel/Reward';


const Routes = () => {
  const AD = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <AD.Navigator>
        <AD.Screen name={SCREEN.HOME} component={HomeViewModel} />
        <AD.Screen name={SCREEN.BANNER_SCREEN} component={BannerViewModel} />
        <AD.Screen name={SCREEN.INTERTESTIAl} component={Interestial} />
        <AD.Screen name={SCREEN.REWARD} component={RewardViewModel} />
      </AD.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
