import React from 'react';
import {View, Text, Button} from 'react-native';

export default function About(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>about screen</Text>
      <Button title="Contact" onPress={() => navigation.navigate('contact')} />
    </View>
  );
}
