import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings85110Navigator from '../features/Settings85110/navigator';
import UserProfile85103Navigator from '../features/UserProfile85103/navigator';
import Settings85102Navigator from '../features/Settings85102/navigator';
import Settings85100Navigator from '../features/Settings85100/navigator';
import SignIn285098Navigator from '../features/SignIn285098/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings85110: { screen: Settings85110Navigator },
UserProfile85103: { screen: UserProfile85103Navigator },
Settings85102: { screen: Settings85102Navigator },
Settings85100: { screen: Settings85100Navigator },
SignIn285098: { screen: SignIn285098Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
