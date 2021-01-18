import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Home screen</Text>
      <Button title="Ir a about" onPress={() => navigation.navigate('about')} />
      <Button
        title="Ir a contact"
        onPress={() => navigation.navigate('contact')}
      />
      <Button
        title="Ir a courses"
        onPress={() => navigation.navigate('contact', {screen: 'courses'})}
      />
    </View>
  );
}
