import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  return (
    <View className="h-full w-full bg-white">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/background.png")}
      />
      {/* Lights */}
      <View className="flex-row w-full justify-around absolute">
        <Image
          className="h-[225] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Image
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* Title  */}
        <View className="flex items-center">
          <Text className="text-5xl font-bold text-white tracking-wider">
            Login
          </Text>
        </View>
        {/* Form */}
        <View className="flex items-center mx-4 space-y-4">
          <View className="flex bg-black/5 rounded-2xl w-full p-5">
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </View>
          <View className="flex bg-black/5 rounded-2xl w-full p-5">
            <TextInput placeholder="Password" placeholderTextColor={"gray"} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
