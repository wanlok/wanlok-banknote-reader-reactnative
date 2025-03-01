import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import Home from './Pages/Home'
import Application from './Pages/Application'

export type RootStackParamList = {
  Home: undefined
  Application: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  console.log('Hello World')

  console.log(NavigationContainer)
  console.log(createNativeStackNavigator)
  console.log(Text)

  console.log('Hello World')

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Application" component={Application} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
