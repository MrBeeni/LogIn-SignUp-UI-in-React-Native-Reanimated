import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="h-full w-full bg-white">
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/background.png")}
      />
      {/* Lights */}
      <View className="flex-row w-full justify-around absolute">
        <Animated.Image
          entering={FadeIn.delay(200).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeIn.delay(400).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>
      <View className="h-full w-full flex justify-around pt-48 ">
        {/* Title  */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-5xl font-bold text-white tracking-wider"
          >
            SignUp
          </Animated.Text>
        </View>
        {/* Form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="flex bg-black/5 rounded-2xl w-full p-5"
          >
            <TextInput
              className="text-xl"
              placeholder="Username"
              placeholderTextColor={"gray"}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="flex bg-black/5 rounded-2xl w-full p-5"
          >
            <TextInput
              className="text-xl"
              placeholder="Email"
              placeholderTextColor={"gray"}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="flex bg-black/5 rounded-2xl w-full p-5"
          >
            <TextInput
              className="text-xl"
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="w-full"
          >
            <TouchableOpacity className="flex bg-sky-400 rounded-2xl w-full p-5">
              <Text className="text-white text-xl font-bold text-center">
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            className="flex-row items-center"
          >
            <Text className="text-gray-400">Already have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text className="text-sky-600">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
