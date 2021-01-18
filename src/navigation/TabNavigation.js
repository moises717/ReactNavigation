import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import Home from '../screens/home';
// import About from '../screens/About';
// import Contact from '../screens/Contact';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import ContactStack from './ContactStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />
      <Tab.Screen
        name="contact"
        component={ContactStack}
        options={{title: 'Contact'}}
      />
      <Tab.Screen
        name="about"
        component={AboutStack}
        options={{title: 'About'}}
      />
    </Tab.Navigator>
  );
}

/*export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen name="about" component={About} options={{title: 'About'}} />
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{title: 'Contact'}}
      />
    </Stack.Navigator>
  );
}*/
