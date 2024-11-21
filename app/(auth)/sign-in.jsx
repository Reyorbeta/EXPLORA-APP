import { Text, View, TextInput, Button } from 'react-native';
import { Link, useRouter } from 'expo-router'; // Import useRouter hook
import { StatusBar } from 'expo-status-bar';

export default function SignIn() {
  const router = useRouter(); // Initialize router for navigation

  const handleSignIn = () => {
    // Logic for sign-in, e.g., validating user credentials
    // For now, we just navigate to the home screen after clicking sign-in
    router.push('/home'); // Navigate to home screen
  };

  return (
    <View className="flex-1 justify-center items-center p-6">
      <Text className="text-3xl font-rblack text-cyan-900 mb-4">Sign In</Text>
      
      {/* Email Input */}
      <TextInput
        className="border-b-2 border-gray-300 p-2 mb-4 w-full"
        placeholder="Email"
        keyboardType="email-address"
      />
      
      {/* Password Input */}
      <TextInput
        className="border-b-2 border-gray-300 p-2 mb-4 w-full"
        placeholder="Password"
        secureTextEntry
      />
      
      {/* Sign-In Button */}
      <Button title="Sign In" onPress={handleSignIn} />

      {/* Link to Registration */}
      <Link href="/registration" className="text-blue-500 mt-4">
        Don't have an account? Sign Up
      </Link>
      
      <StatusBar style="auto" />
    </View>
  );
}
