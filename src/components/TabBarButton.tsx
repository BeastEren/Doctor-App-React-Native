import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { RouteName, iconList } from '@/constants/iconList';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function TabBarButton({ onPress, onLongPress, isFocused, routeName, color }: {
    onPress: (event: GestureResponderEvent) => void,
    onLongPress: (event: GestureResponderEvent) => void,
    isFocused: boolean,
    routeName: String,
    color: string
}) {

    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, { duration: 350 })
    }, [scale, isFocused])

    const animatedStyles = useAnimatedStyle(() => {

        // const scaleValue = interpolate(scale.value, [0, 1], [1, 1.3]);
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
        // const top = interpolate(scale.value, [0, 1], [0, -9])

        return {
            transform: [{ scale: scaleValue }],
        };
    });

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={designs.tabbarItem}
        >
            <Animated.View style={animatedStyles}>
                {iconList[routeName as RouteName]({
                    color: isFocused ? '#0306ca' : '#0091FF'
                    // color: 'black'
                })}
            </Animated.View>
        </Pressable>
    )
}

const designs = StyleSheet.create({

    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }
});