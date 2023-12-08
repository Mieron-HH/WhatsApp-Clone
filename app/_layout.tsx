import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		"rob-t": require("../assets/fonts/Roboto-Thin.ttf"),
		"rob-ti": require("../assets/fonts/Roboto-ThinItalic.ttf"),
		"rob-l": require("../assets/fonts/Roboto-Light.ttf"),
		"rob-li": require("../assets/fonts/Roboto-LightItalic.ttf"),
		"rob-r": require("../assets/fonts/Roboto-Regular.ttf"),
		"rob-m": require("../assets/fonts/Roboto-Medium.ttf"),
		"rob-mi": require("../assets/fonts/Roboto-MediumItalic.ttf"),
		"rob-b": require("../assets/fonts/Roboto-Bold.ttf"),
		"rob-bi": require("../assets/fonts/Roboto-BoldItalic.ttf"),
		"rob-bl": require("../assets/fonts/Roboto-Black.ttf"),
		"rob-bli": require("../assets/fonts/Roboto-BlackItalic.ttf"),
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="modal" options={{ presentation: "modal" }} />
			</Stack>
		</ThemeProvider>
	);
}
