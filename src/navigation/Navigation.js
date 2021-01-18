import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import Home from '../screens/home';
// import About from '../screens/About';
// import Contact from '../screens/Contact';
import HomeStack from './HomeStack';
// import AboutStack from './AboutStack';
import ContactStack from './ContactStack';
import Home from '../screens/Home';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();
export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        component={HomeStack}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="contact"
        component={ContactStack}
        options={{title: 'Contact'}}
      />
    </Drawer.Navigator>
  );
}

// export default function Navigation() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />
//       <Tab.Screen
//         name="contact"
//         component={ContactStack}
//         options={{title: 'Contact'}}
//       />
//       <Tab.Screen
//         name="about"
//         component={AboutStack}
//         options={{title: 'About'}}
//       />
//     </Tab.Navigator>
//   );
// }

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
