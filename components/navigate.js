import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FullInfo from "./FullInfo";
import Main from "./Main";

const MainStack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Main",
            headerStyle: { backgroundColor: "red", height: 100 },
            headerTitleStyle: { fontWeight: "400" },
          }}
        />
        <MainStack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{ title: "Article" }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
