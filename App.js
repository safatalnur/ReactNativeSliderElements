import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from 'react-native-elements'

export default function App() {

  const [sliderValue, setSliderValue] = useState (15)

  const valueOfSlider = (value) => {
    setSliderValue(value)
  }

  return (
    <View style={styles.container}>
      <Text>This is the slider example with react-native-elements</Text>
      <Text style={styles.text}>The Slider Value is: {sliderValue}</Text>
      <Slider 
        style={styles.slider}
        maximumValue={100}
        minimumValue={1}
        step={1}
        value={sliderValue}
        onValueChange={valueOfSlider}
        thumbTintColor={'#000'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
  slider: {
    width: 300,
    backgroundColor: '#ddd',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 10,
    marginTop: 50,


  }
});
