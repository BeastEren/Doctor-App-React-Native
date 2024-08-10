import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from "@expo/vector-icons"
import home from '@/app/(tabs)/home'
import search from '@/app/(tabs)/search'
import profile from '@/app/(tabs)/profile'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator

      drawerContent={
        (props: any) => {
          return (
            <SafeAreaView>
              <View style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'purple'
              }}>
                <Image
                  source={''}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50
                  }}
                />
                <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'black',
                }}>Isabella Joa</Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          )
        }
      }
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 250
        },
        headerStyle: {
          backgroundColor: 'white'
        },
        headerShown: false,
        headerTintColor: 'black',
        drawerLabelStyle: {
          color: 'black',
          fontSize: 14,
          marginLeft: -10
        },
      }
      }
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={COLORS.black} /
          )
        }}
        component={home}
      />
      <Drawer.Screen
        name="Search"
        options={{
          drawerLabel: "Search",
          title: "Search",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="search-outline" size={24} color={COLORS.black} /
          )
        }}
        component={search}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={COLORS.black} /
          )
        }}
        component={profile}
      />
    </Drawer.Navigator >
  )
}
export default DrawerNavigation