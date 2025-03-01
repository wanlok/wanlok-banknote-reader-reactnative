import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import DPage from '../../Components/DPage'
import { Text } from 'react-native'

export default ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  return (
    <DPage>
      <Text>Application</Text>
    </DPage>
  )
}
