import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView>
      <View className="flex items-center justify-center h-full">
        <Text>SignIn</Text>
        <Link href={"/(auth)/sign-up"}>Create Account</Link>
        <Link href={"/"}>Home</Link>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
