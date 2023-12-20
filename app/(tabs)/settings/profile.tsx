import { useRef } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	useColorScheme,
	Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Feather, Entypo } from "@expo/vector-icons";

// CONSTANTS
import defaultStyle from "@/constants/Styles";

// LIBS
import { useTheme } from "@/libs/ThemeProvider";

const Page = () => {
	const router = useRouter();
	const colorScheme = useColorScheme();
	const { theme } = useTheme();
	const innerScrollRef = useRef<ScrollView>(null);

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
							<View style={[defaultStyle.header, { paddingHorizontal: 0 }]}>
								<View style={styles.innerHeader}>
									<TouchableOpacity
										style={styles.returnIcon}
										onPress={() => router.back()}
									>
										<Feather
											name="chevron-left"
											size={33}
											color={theme?.colors.text}
										/>
									</TouchableOpacity>

									<Text
										style={{
											color: theme?.colors.text,
											fontSize: 20,
											fontFamily: "rob-m",
										}}
									>
										Edit Profile
									</Text>
								</View>
							</View>
						</View>
					),
				}}
			/>

			<ScrollView
				ref={innerScrollRef}
				contentContainerStyle={[
					defaultStyle.outerContentContainerStyle,
					{ paddingTop: 13 },
				]}
				showsVerticalScrollIndicator={false}
			>
				<View
					style={[
						styles.cluster,
						{
							backgroundColor: colorScheme === "light" ? "#fff" : "#161717",
							paddingTop: 18,
						},
					]}
				>
					<View
						style={[
							styles.avatarEditor,
							{ borderBottomColor: theme?.colors.border },
						]}
					>
						<Image
							source={require("@/assets/images/user-icon.png")}
							style={styles.avatar}
						/>

						<Text
							style={{
								width: "60%",
								color: theme?.colors.secondaryText,
								fontSize: 15,
								fontFamily: "rob-r",
							}}
						>
							Enter your name and add an optional profile picture
						</Text>
					</View>

					<View
						style={[
							styles.clusterItem,
							{
								borderBottomWidth: StyleSheet.hairlineWidth,
								borderBottomColor: theme?.colors.border,
								marginBottom: 14,
							},
						]}
					>
						<Text
							style={{
								color: theme?.colors.text,
								fontSize: 18,
								fontFamily: "rob-r",
							}}
						>
							yor · ma · juh · stee
						</Text>
					</View>
				</View>

				<Text
					style={[styles.clusterTitle, { color: theme?.colors.secondaryText }]}
				>
					Phone Number
				</Text>

				<View
					style={[
						styles.cluster,
						{
							backgroundColor: colorScheme === "light" ? "#fff" : "#161717",
							marginTop: 7,
						},
					]}
				>
					<View style={styles.clusterItem}>
						<Text
							style={{
								color: theme?.colors.text,
								fontSize: 17,
								fontFamily: "rob-r",
							}}
						>
							+1 (987) 654-3210
						</Text>
					</View>
				</View>

				<Text
					style={[styles.clusterTitle, { color: theme?.colors.secondaryText }]}
				>
					About
				</Text>

				<View
					style={[
						styles.cluster,
						{
							backgroundColor: colorScheme === "light" ? "#fff" : "#161717",
							marginTop: 7,
						},
					]}
				>
					<View style={styles.clusterItem}>
						<Text
							style={{
								color: theme?.colors.text,
								fontSize: 17,
								fontFamily: "rob-r",
							}}
						>
							"Royalty lies not in the bloodline, but in the charac..."
						</Text>

						<Entypo
							name="chevron-small-right"
							size={24}
							color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
	innerHeader: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
	returnIcon: {
		position: "absolute",
		left: 3,
		zIndex: 10,
	},
	clusterTitle: {
		marginTop: 28,
		marginLeft: 40,
		fontSize: 15,
		fontFamily: "rob-r",
		textTransform: "uppercase",
	},
	cluster: {
		marginHorizontal: 20,
		paddingVertical: 2,
		paddingLeft: 23,
		paddingRight: 10,
		borderRadius: 10,
	},
	avatarEditor: {
		paddingBottom: 35,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 20,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	avatar: {
		width: 60,
		height: 60,
		backgroundColor: "#555",
		borderRadius: 60,
		resizeMode: "contain",
	},
	clusterItem: {
		height: 40,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
