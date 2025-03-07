import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import DPage from '../../Components/DPage'
import DButton from '../../Components/DButton'
import { Text } from 'react-native'

export default ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  return (
    <DPage>
      <Text>Home</Text>
    </DPage>
  )
}
