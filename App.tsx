import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';


export default function App() {
  return (
    <SafeAreaView 
      className='
        flex-1 items-center justify-center bg-red-300'
      style={
        tw`flex-1 items-center justify-center bg-red-300`}>
        <Text
          className=''>
            Open up App.tsx to start working on your app</Text>

        <StatusBar style="auto" />
    </SafeAreaView>
  )
}