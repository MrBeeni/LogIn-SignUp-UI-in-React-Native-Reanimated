import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signup" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

export default App;
