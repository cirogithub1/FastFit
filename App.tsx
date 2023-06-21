import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-blue-500'>
      <Text
        className='text-red-500'>
          Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}