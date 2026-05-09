import { Link } from "expo-router";
import { Text, View } from "react-native";

const Subscriptions = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Subscriptions</Text>
      <Link href="/subscriptions/claude">Claude Subscription</Link>
    </View>
  );
};

export default Subscriptions;
