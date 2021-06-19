import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Main from "../screens/main";
const screens = {
  Main: {
    screen: Main,
  },
};

const homeStack = createDrawerNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(homeStack);
