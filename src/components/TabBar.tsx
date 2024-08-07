import React, { useState } from 'react';
import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabBarButton from './TabBarButton';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {

    const [dimensions, setDimensions] = useState({ height: 20, width: 100 })

    const buttonWidth = dimensions.width / (state.routes.length - 2);

    const onTabbarLayout = (event: LayoutChangeEvent) => {
        setDimensions({
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width
        });
    }

    const tabPostitonX = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: tabPostitonX.value }]
        }
    })

    return (
        <View onLayout={onTabbarLayout} style={designs.tabbar}>
            <Animated.View style={[animatedStyle, {
                position: 'absolute',
                backgroundColor: '#e8def7',
                borderRadius: 20,
                height: dimensions.height - 10,
                width: buttonWidth,
                // padding: 10
            }]} />
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                if (['_sitemap', '+not-found'].includes(route.name)) {
                    return null;
                }

                const onPress = () => {
                    tabPostitonX.value = withSpring(buttonWidth * index, { duration: 1500 })
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabBarButton
                        key={route.name}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}
                        routeName={route.name}
                        color={isFocused ? '#673ab7' : '#222'}
                    />
                );
            })}
        </View>
    );
}

const designs = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        borderCurve: 'continuous',
        elevation: 8
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }
});
