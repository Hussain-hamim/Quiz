import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import QuizScreen from "./src/app/QuizScreen";
import QuizProvider from "./src/providers/QuizProvider";
import CustomButton from "./src/components/CustomButton";
import { Text, View } from "react-native";

export default function App() {
  const [start, setstart] = useState(true);

  return (
    <>
      <QuizProvider>
        {start ? (
          <View
            style={{
              flex: 1,
              paddingTop: 50,
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "lightblue",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 30, color: "#289" }}>
                Quiz
              </Text>
              <Text style={{ fontSize: 20, color: "gray" }}>
                Test your IQ here
              </Text>
            </View>
            <CustomButton
              title="Start the game"
              onPress={() => setstart(false)}
            />
            <Text style={{ color: "gray" }}>
              @Copyright 2025 - Hussain-Hamim
            </Text>
          </View>
        ) : (
          <QuizScreen />
        )}
      </QuizProvider>

      <StatusBar style="auto" />
    </>
  );
}
