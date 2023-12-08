import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, Platform } from "react-native";
import {
	Feather,
	Ionicons,
	MaterialIcons,
	AntDesign,
} from "@expo/vector-icons";

// COSNTANTS
import Colors from "../../constants/Colors";

export const unstable_settings = {
	initialRouteName: "index",
};

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.tint,
				headerTitle: "",
				tabBarActiveBackgroundColor: Colors.tabBarSelected,
				tabBarStyle: {
					height: Platform.OS === "ios" ? 85 : 65,
					paddingBottom: Platform.OS === "ios" ? 30 : 8,
				},
				tabBarItemStyle: { padding: 5, gap: 5, borderRadius: 5 },
				tabBarLabelStyle: {
					fontSize: 12,
					fontFamily: "rob-m",
				},
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
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="groups" size={37} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="index"
				options={{
					title: "Chats",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="md-chatbubbles-outline" size={size} color={color} />
					),
					headerRight: () => (
						<Link href="/modal" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="info-circle"
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
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
