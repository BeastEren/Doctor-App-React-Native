import React from 'react'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

type IconProps = {
    color: string;
    [key: string]: any;
};

// export type RouteName = 'home' | 'search' | 'dashboard';
export type RouteName = 'home' | 'search' | 'dashboard' | 'appointment' | 'profile';

export const iconList: Record<RouteName, (props: IconProps) => JSX.Element> = {
    home: (props: IconProps) => <MaterialIcons name="home" size={26}  {...props} />,
    search: (props: IconProps) => <Ionicons name="search-sharp" size={24} {...props} />,
    dashboard: (props: IconProps) => <FontAwesome name="calendar-plus-o" size={24} {...props} />,
    appointment: (props: IconProps) => <MaterialCommunityIcons name="calendar" size={28} {...props} />,
    profile: (props: IconProps) => <MaterialCommunityIcons name="face-man-profile" size={28} {...props} />,
};

