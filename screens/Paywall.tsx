import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { RootStackParamList } from '../App'

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Paywall"
>

const orange_600 = "#EA580C"

const Paywall = () => {
	const navigation = useNavigation<NavigationProps>()

	return (
		<ScrollView className='flex-1 bg-sky-950 '>
			<View className="m-10 space-y-2">
				<Text className='text-2xl text-center text-white font-bold'>UPGRADE</Text>
				<Text className='text-center text-white'>Upgrade your account to unlock all features</Text>
			</View>

			<TouchableOpacity
				className='absolute top-0 right-0 p-6' 
				onPress={() => navigation.goBack()}>
					<Ionicons name='md-close-circle-sharp' size={32} color={orange_600}/>
			</TouchableOpacity>

			<View className="items-center">
					<MaterialCommunityIcons name="trophy-award" size={150} color={orange_600} />
			</View>

			<View className='space-y-5 px-10 py-5'>
				<View className="flex-row space-x-10 items-center">
					<Ionicons name='md-key' size={32} color={orange_600}/>

					<View className="flex-1">
						<Text className="text-white font-bold text-lg">
							Access to all features
						</Text>

						<Text className="text-white text-sm font-extralight">
							Upgrade to premium version and enjoy all the exclusive features available for you
						</Text>
					</View>
				</View>
			
				<View className="flex-row space-x-10 items-center">
					<Ionicons name='md-person-add-outline' size={32} color={orange_600}/>

					<View className="flex-1">
						<Text className="text-white font-bold text-lg">
							Helpline 24/7 to Personal Trainers
						</Text>

						<Text className="text-white text-sm font-extralight">
							Get unlimited access to our fitness support team any day, any time
						</Text>
					</View>
				</View>

				<View className="flex-row space-x-10 items-center">
					<Ionicons name='md-star' size={32} color={orange_600}/>

					<View className="flex-1">
						<Text className="text-white font-bold text-lg">
							Unlock Limited Edition content
						</Text>

						<Text className="text-white text-sm font-extralight">
							Unlodk exclusive content you like special exclusive wokouts and routines
						</Text>
					</View>
				</View>
			</View>

			{/* montly  */}

			{/* Annual */}

			{/* Restore */}
		</ScrollView>
	)
}

export default Paywall