import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../App'

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Home"
> 

interface Props {
	title: string
	screen: any
	color: string
	requiresPro?: boolean
	icon?: any
	vertical?: boolean
}

const ActionRow = ({ title, screen, color, requiresPro, icon, vertical }: Props) => {

	const navigation = useNavigation<NavigationProps>()

	return (
		<TouchableOpacity
			className={
				`flex flex-1 justify-center items-center py-6 rounded-lg m-2 Xspace-x-2
				${vertical ? "flex-col" : "flex-row"}`
			}
			style={{ backgroundColor: color }}
			onPress={() => navigation.navigate(screen)}
		>
			<Ionicons
				name={icon} 
				size={30}
				color="white" />

			<Text className='text-white font-bold text-lg'>{title}</Text>
		</TouchableOpacity>
	)
}

export default ActionRow