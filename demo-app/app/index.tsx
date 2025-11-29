
import { ScreenContainer } from 'common';
import React from 'react';
import { Text } from 'react-native';

export default function HomeScreen() {
  return (
     <ScreenContainer
      title="Home from common"
      subtitle="Subbbb"
      primaryLabel="Tap me"
      onPrimaryPress={() => console.log("pressed from demo-app")}
    >
      <Text>This is rendered via common package</Text>
    </ScreenContainer>
  );
}