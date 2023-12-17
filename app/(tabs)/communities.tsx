import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Dimensions,
	Image,
	TouchableOpacity,
	useColorScheme,
} from "react-native";
import { Link, Stack } from "expo-router";
import { Entypo, Ionicons } from "@expo/vector-icons";

// LIBS
import { useTheme } from "@/libs/ThemeProvider";

// CONSTANTS
import defaultStyle from "@/constants/Styles";

const { width } = Dimensions.get("window");

const Page = () => {
	const colorScheme = useColorScheme();
	const { theme } = useTheme();

	return (
		<View
			style={[
				defaultStyle.container,
				{ backgroundColor: theme?.colors.background },
			]}
		>
			<Stack.Screen
				options={{
					header: () => (
						<View style={defaultStyle.headerContainer}>
							<View style={defaultStyle.header} />
						</View>
					),
				}}
			/>

			<ScrollView
				contentContainerStyle={[
					defaultStyle.outerContentContainerStyle,
					{ backgroundColor: theme?.colors.background },
				]}
				showsVerticalScrollIndicator={false}
			>
				<Text style={[defaultStyle.pageTitle, { color: theme?.colors.text }]}>
					Communities
				</Text>

				<View style={styles.contentBody}>
					<Image
						source={require("@/assets/images/communities-image.png")}
						style={styles.communityImage}
					/>

					<Text
						style={{
							marginTop: 35,
							color: theme?.colors.text,
							fontSize: 23,
							fontFamily: "rob-r",
						}}
					>
						Stay connected with a community
					</Text>

					<Text
						style={{
							marginTop: 10,
							color: theme?.colors.secondaryText,
							fontSize: 17,
							fontFamily: "rob-r",
						}}
					>
						Communities bring members together in topic-based groups. Any
						community you're added to will appear here.
					</Text>

					<TouchableOpacity style={styles.exampleLink}>
						<Text
							style={{
								color: theme?.colors.primary,
								fontSize: 16,
								fontFamily: "rob-r",
								textDecorationLine: "underline",
							}}
						>
							See example communities
						</Text>

						<Ionicons
							name="ios-chevron-forward"
							size={21}
							color={theme?.colors.primary}
						/>
					</TouchableOpacity>

					<Link
						href={"/(modals)/communities"}
						asChild
						style={styles.newCommunityBtn}
					>
						<TouchableOpacity
							style={{ backgroundColor: theme?.colors.primary }}
						>
							<Entypo
								name="plus"
								size={22}
								color={colorScheme === "light" ? "#fff" : "#000"}
							/>

							<Text
								style={{
									color: colorScheme === "light" ? "#fff" : "#000",
									fontSize: 18,
									fontFamily: "rob-m",
									textDecorationLine: "underline",
								}}
							>
								New Community
							</Text>
						</TouchableOpacity>
					</Link>
				</View>
			</ScrollView>
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
	contentBody: {
		flex: 1,
		width: width * 0.9,
		maxWidth: 480,
		marginTop: 30,
		alignItems: "flex-start",
		alignSelf: "center",
	},
	communityImage: {
		width: "100%",
		height: 160,
		resizeMode: "contain",
	},
	exampleLink: {
		width: "100%",
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: -3,
	},
	newCommunityBtn: {
		width: "96%",
		marginTop: 30,
		paddingVertical: 11,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		gap: 5,
		borderRadius: 17,
	},
});
