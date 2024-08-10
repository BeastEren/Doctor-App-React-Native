import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import AppNavigation from "@/components/navigations/AppNavigation";
import SearchBar from "@/components/SearchBar";
import { backgroundColorBottom, backgroundColorTop } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      {/* <AppNavigation /> */}
      <LinearGradient
        colors={[backgroundColorTop, backgroundColorBottom]}
        style={styles.topBar}
      >
        <NavBar />
      </LinearGradient>
      <LinearGradient
        colors={[backgroundColorBottom, backgroundColorTop]}
        style={styles.footBar}
      />

      <View style={styles.messageWrapper}>
        <Text style={styles.message}>
          WELCOME TO <Text style={{ color: '#1d95d2', fontWeight: 'bold' }}>IVF SOLUTION</Text>
        </Text>
      </View>

      <View style={{
        width: '65%',
        alignSelf: 'center'
      }}>
        <Button onPress={() => {
          router.push("/login")
        }} text="Login" />
      </View>

      <View style={{
        width: '65%',
        alignSelf: 'center'
      }}>
        <Button onPress={() => {
          router.push("/signup")
        }} text="Signup" />
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  topBar: {
    height: 350,
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 90,
    backgroundColor: '#abd8e8',
  },
  footBar: {
    position: 'absolute',
    marginTop: 500,
    width: '100%',
    height: 350,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 90,
  },
  messageWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 400,
  },
  message: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})