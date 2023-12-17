import {
	StyleSheet,
	Text,
	View,
	Platform,
	TouchableOpacity,
	useColorScheme,
	Dimensions,
	Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons, Fontisto } from "@expo/vector-icons";

// LIBS
import { useTheme } from "@/libs/ThemeProvider";

// CONSTANTS
import defaultStyle from "@/constants/Styles";

const { width } = Dimensions.get("window");

const Communities = () => {
	const router = useRouter();
	const colorScheme = useColorScheme();
	const { theme } = useTheme();

	return (
		<View
			style={[
				defaultStyle.container,
				{
					backgroundColor: theme?.colors.modal,
					paddingTop: Platform.OS === "ios" ? 55 : 80,
				},
			]}
		>
			<Stack.Screen
				options={{
					title: "",
					headerLeft: () =>
						Platform.OS === "android" && (
							<Ionicons
								name="arrow-back-outline"
								size={30}
								color={theme?.colors.text}
								onPress={() => router.back()}
							/>
						),
					headerRight: () =>
						Platform.OS === "ios" && (
							<TouchableOpacity
								style={[
									styles.headerRight,
									{
										backgroundColor:
											colorScheme === "light" ? "#DEDFE0" : "#4F4F51",
									},
								]}
								onPress={() => router.back()}
							>
								<Fontisto
									name="close-a"
									size={13}
									color={theme?.colors.text}
									style={{ opacity: 0.7 }}
								/>
							</TouchableOpacity>
						),
				}}
			/>

			<View style={styles.contentBody}>
				<Image
					source={require("@/assets/images/communities-create-image.png")}
					style={styles.communityImage}
				/>

				<Text
					style={[
						defaultStyle.pageTitle,
						{ color: theme?.colors.text, marginTop: 40 },
					]}
				>
					Create a new
				</Text>

				<Text style={[defaultStyle.pageTitle, { color: theme?.colors.text }]}>
					community
				</Text>

				<Text
					style={{
						width: "85%",
						marginTop: 30,
						color: theme?.colors.text,
						textAlign: "center",
						fontSize: 16,
						fontFamily: "rob-r",
					}}
				>
					Bring together a neighborhood, school or more. Create topic-based
					groups for members, and easily send them admin announcements.
				</Text>

				<TouchableOpacity style={styles.exampleLink}>
					<Text
						style={{
							color: theme?.colors.primary,
							fontSize: 16,
							fontFamily: "rob-r",
						}}
					>
						See example communities
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.newCommunityBtn,
						{ backgroundColor: theme?.colors.primary },
					]}
				>
					<Text
						style={{
							color: colorScheme === "light" ? "#fff" : "#000",
							fontSize: 18,
							fontFamily: "rob-m",
							textDecorationLine: "underline",
						}}
					>
						Get Started
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Communities;

const styles = StyleSheet.create({
	headerRight: {
		padding: 8,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
	},
	contentBody: {
		flex: 1,
		width: width,
		maxWidth: 480,
		alignItems: "center",
		alignSelf: "center",
		position: "relative",
	},
	communityImage: {
		width: "100%",
		height: 160,
		resizeMode: "contain",
	},
	exampleLink: {
		width: "100%",
		marginTop: 15,
		justifyContent: "center",
		alignItems: "center",
		gap: -3,
	},
	newCommunityBtn: {
		width: "92%",
		paddingVertical: 11,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		gap: 5,
		borderRadius: 17,
		position: "absolute",
		bottom: 70,
	},
});
