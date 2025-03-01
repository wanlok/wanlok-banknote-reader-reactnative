import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import Home from './Pages/Home'
import Camera from './Pages/Camera'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Settings from './Pages/Settings'

export type RootStackParamList = {
  Home: undefined
  Camera: undefined
  Settings: undefined
}

// const Stack = createNativeStackNavigator<RootStackParamList>()

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Camera" component={Camera} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarIcon: ({ color, size }) => {
          //   let iconName

          //   if (route.name === 'Home') {
          //     iconName = 'home-outline'
          //   } else if (route.name === 'Profile') {
          //     iconName = 'person-outline'
          //   }

          //   return <Icon name={iconName} size={size} color={color} />
          // },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
        initialRouteName="Camera"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
