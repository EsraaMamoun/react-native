import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RootStack from "../navigators/RootStack";

export default function Page() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync(); //
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <>
      <RootStack />
    </>
  );
}
