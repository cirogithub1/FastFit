import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../App'

import ActionRow from '../components/ActionRow'
// @ts-ignore
import logo from "../assets/workout_pngtree.png"
import useRevenueCat from '../hooks/useRevenueCat'

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Home"
> 

const orange_600 = "#EA580C"
const blue_400 = "#60A5FA"
const lime_400 = "#a3e635"
const rose_500 = "#f43f5e"
const amber_300 = "#fcd34d"
const teal_600 = "#0d9488"

const HomeScreen = () => {
	const navigation = useNavigation<NavigationProps>()
	const { currentOffering, customerInfo, isProMember } = useRevenueCat()
	console.log('DEBUG', currentOffering)
	
		return (
		<SafeAreaView className='flex-1 bg-gray-100 relative'>
			<ScrollView>
				<TouchableOpacity 
					className='absolute z-10 top-5 right-6 items-center'
					onPress={() => navigation.navigate("Paywall")} >
						<Ionicons name="person-circle" size={30} color={orange_600} />
						
						<Text className='text-center text-orange-600'>UPGRADE ME</Text>
				</TouchableOpacity>

				<View className='w-full h-60 mt-8 justify-center items-center'>
					<Image 
						className='Xw-full Xh-52'
						style={{resizeMode: "cover", height: 200, width: 200}}
						// source={{uri: "https://i.imgur.com/e14NE49.png"}} 
						source={logo} 
						/>
				</View>

				<View>
					<View className='flex-row justify-between items-center'>
						<ActionRow 
							title="Track Workout"
							screen="Demo"
							color={orange_600}
							icon="fitness"
							vertical />

						<ActionRow 
							title="All Workouts"
							screen="Demo"
							color={blue_400}
							icon="library"
							vertical />
					</View>

					<ActionRow 
						title="Connect with Friends"
						screen="Demo"
						color={rose_500}
						icon="share-social" />

					<ActionRow 
						title="Add an Exercise"
						screen="Demo"
						color={lime_400}
						icon="add-circle"
						requiresPro />

					<ActionRow 
						title="Create a Rutine"
						screen="Demo"
						color={amber_300}
						icon="md-time"
						requiresPro />

					<ActionRow 
						title="join Challenges"
						screen="Demo"
						color={teal_600}
						icon="trophy"
						requiresPro />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen