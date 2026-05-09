import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Link href="/onboarding" className="text-xl font-bold text-blue-500">
        Go to Onboarding
      </Link>

      <Link href="/(auth)/sign-in" className="text-xl font-bold text-blue-500">
        Go to Sign In
      </Link>

      <Link href="/(auth)/sign-up" className="text-xl font-bold text-blue-500">
        Go to Sign Up
      </Link>

      <Link
        href="/subscriptions/spotify"
        className="text-xl font-bold text-blue-500"
      >
        Spotify Subscription
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="text-xl font-bold text-blue-500"
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
