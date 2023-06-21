import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='text-red-500 text-3xl bg-blue-500'>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}