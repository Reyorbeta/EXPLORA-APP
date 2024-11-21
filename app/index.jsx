import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledImagebackground = styled(ImageBackground)

export default function App() {
  return (
    <StyledImagebackground
      source={require('../assets/images/EXPLORA.jpg')}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      <Text className="text-3xl font-rblack text-cyan-900">E X P L O R A</Text>
      <Text className="text-xl text-cyan-900 mb-60">- if not now, when? -</Text>
      <Link href="/sign-in" className="text-xl text-white bg-slate-500 px-24 py-3 mb-5 rounded-xl">
        Sign In
      </Link>
      <Link href="/registration" className="text-xl text-white bg-slate-500 px-24 py-3 rounded-xl">
        Sign up
      </Link>

      <StatusBar style="auto" />
    </StyledImagebackground>
  );
}


