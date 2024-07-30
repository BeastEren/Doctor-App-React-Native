import Button from "@/components/Button";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Button text={"Press"} onPress={() => {
        router.push('/(tabs)/search');
      }} />
      <Button text={"Login"} onPress={() => {
        router.push('/login');
      }} />
      <Button text={"signup"} onPress={() => {
        router.push('/signup');
      }} />
    </View>
  );
}
