import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Demo"
> 

const orange_600 = "#EA580C"
const green_500 = "#84cc16"

const DemoScreen = () => {
	const navigation = useNavigation<NavigationProps>()

	return (
		<SafeAreaView className='flex-1 bg-orange-600'>
			<TouchableOpacity 
				className='flex-row items-center p-5 mt-6'
				onPress={() => navigation.navigate("Home")}>
					<Ionicons name='arrow-back' size={40} color='white' />

				<Text className='text-white'>Go back</Text>
			</TouchableOpacity>
			
			<View className='flex-1 items-center justify-center px-10'>
				<Text className="text-white text-2xl font-extrabold">What ever</Text>

				<Text className="text-white text-2xl font-extrabold mb-20">You r authorized</Text>

				<Ionicons name='build-outline' size={200} color="white"/>

				<View className='-mt-16 -ml-8'>
					<Ionicons name='checkmark-circle-sharp' size={60} color={green_500} />
				</View>

				<Text className="text-white mt-10 flex-1 font-bold text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum exercitationem eaque animi, iusto velit quo iste beatae ab ipsa provident cum laudantium ipsum 
					for the next page: navigarion.navigate("Home")
				</Text>
			</View>
			
		</SafeAreaView>
	)
}

export default DemoScreen