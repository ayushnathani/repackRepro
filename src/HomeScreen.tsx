import {toDateString} from './helpers/utils';
import React from 'react';
import {Button, Text, View} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {filterTypeOptions} from './common/utils';

const HomeScreen = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
      <Text>{toDateString(new Date())}</Text>
      <Text> {filterTypeOptions.toString()} </Text>
    </View>
  );
};

export default HomeScreen;
