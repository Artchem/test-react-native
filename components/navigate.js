import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./Contacts";
import Main from "./Main";

const MainStack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Main"
          component={Main}
          options={{ title: "Main" }}
        />
        <MainStack.Screen
          name="Contacts"
          component={Contacts}
          options={{ title: "Contacts" }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
