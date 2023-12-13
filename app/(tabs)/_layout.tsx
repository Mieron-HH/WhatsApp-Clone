import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, Platform } from "react-native";
import {
	Feather,
	Ionicons,
	MaterialCommunityIcons,
	AntDesign,
} from "@expo/vector-icons";

// COSNTANTS
import Colors from "@/constants/Colors";
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
					borderTopColor: theme?.colors.border,
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
					tabBarIcon: ({ color, size }) => (
						<Feather name="message-circle" size={size} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="calls"
				options={{
					title: "Calls",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="md-call-outline" size={size} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="communities"
				options={{
					title: "Communities",
					tabBarIcon: ({ color, size }) => (
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
					tabBarIcon: ({ color, size }) => (
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
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="setting" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
