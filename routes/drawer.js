import { createAppContainer, createSwitchNavigator } from "react-navigation";
import homeScreenStack from "./homeStack";
import loginStack from "./loginSignupStack";

const RootDrawerNavigator = createSwitchNavigator(
  {
    Login: {
      screen: loginStack,
    },
    Home: {
      screen: homeScreenStack,
    },
  },
  {
    backBehavior: "none",
  }
);

export default createAppContainer(RootDrawerNavigator);
