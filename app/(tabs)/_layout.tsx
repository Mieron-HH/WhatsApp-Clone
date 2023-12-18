import { Tabs } from "expo-router";
import { Platform } from "react-native";
import {
	Ionicons,
	MaterialCommunityIcons,
	Fontisto,
	SimpleLineIcons,
} from "@expo/vector-icons";

// COSNTANTS
import { useTheme } from "@/libs/ThemeProvider";

export const unstable_settings = {
	initialRouteName: "index",
};

export default function TabLayout() {
	const { theme } = useTheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: theme?.colors.activeTabTintColor,
				headerTitle: "",
				tabBarActiveBackgroundColor: theme?.colors.activeTab,
				tabBarStyle: {
					height: Platform.OS === "ios" ? 80 : 65,
					paddingTop: 3,
					paddingBottom: Platform.OS === "ios" ? 35 : 12,
					backgroundColor: theme?.colors.background,
					borderTopWidth: 0,
				},
				tabBarItemStyle: {
					borderRadius: 5,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					fontFamily: "rob-m",
				},
				tabBarLabelPosition: "below-icon",
				headerTransparent: true,
			}}
		>
			<Tabs.Screen
				name="updates"
				options={{
					title: "Updates",
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<MaterialCommunityIcons
								name="message-badge"
								size={size}
								color={color}
							/>
						) : (
							<MaterialCommunityIcons
								name="message-badge-outline"
								size={size}
								color={color}
							/>
						),
				}}
			/>

			<Tabs.Screen
				name="calls"
				options={{
					title: "Calls",
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<Ionicons name="md-call" size={size} color={color} />
						) : (
							<Ionicons name="md-call-outline" size={size} color={color} />
						),
				}}
			/>

			<Tabs.Screen
				name="communities"
				options={{
					title: "Communities",
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<MaterialCommunityIcons
								name="account-group"
								size={size}
								color={color}
							/>
						) : (
							<MaterialCommunityIcons
								name="account-group-outline"
								size={size}
								color={color}
							/>
						),
				}}
			/>

			<Tabs.Screen
				name="index"
				options={{
					title: "Chats",
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<Ionicons name="md-chatbubbles" size={size} color={color} />
						) : (
							<Ionicons
								name="md-chatbubbles-outline"
								size={size * 1.05}
								color={color}
							/>
						),
				}}
			/>

			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<Fontisto name="player-settings" size={size} color={color} />
						) : (
							<SimpleLineIcons name="settings" size={size} color={color} />
						),
				}}
			/>
		</Tabs>
	);
}
