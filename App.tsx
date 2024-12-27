import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import QuizScreen from "./src/app/QuizScreen";
import QuizProvider from "./src/providers/QuizProvider";
import CustomButton from "./src/components/CustomButton";
import { ImageBackground, View } from "react-native";

export default function App() {
  const [start, setstart] = useState(true);

  return (
    <>
      <QuizProvider>
        {start ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "lightblue",
            }}
          >
            {/* <ImageBackground source={require("./assets/background.jpg")}> */}
            <CustomButton
              title="Start the game"
              onPress={() => setstart(false)}
            />
            {/* </ImageBackground> */}
          </View>
        ) : (
          <QuizScreen />
        )}
      </QuizProvider>

      <StatusBar style="auto" />
    </>
  );
}
