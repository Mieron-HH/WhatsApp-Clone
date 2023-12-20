import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	Platform,
	TouchableOpacity,
	useColorScheme,
	Image,
} from "react-native";
import { Link, Stack } from "expo-router";
import {
	EvilIcons,
	Fontisto,
	Entypo,
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

// CONSTANTS
import defaultStyle from "@/constants/Styles";

// LIBS
import { useTheme } from "@/libs/ThemeProvider";
import { useEffect, useRef } from "react";

const Page = () => {
	const colorScheme = useColorScheme();
	const { theme } = useTheme();
	const innerScrollRef = useRef<ScrollView>(null);

	useEffect(() => {
		setTimeout(() => {
			innerScrollRef.current?.scrollTo({ x: 0, y: 50, animated: false });
		}, 10);
	}, []);

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
					{
						backgroundColor: theme?.colors.background,
						paddingBottom: 0,
					},
				]}
				showsVerticalScrollIndicator={false}
			>
				<Text style={[defaultStyle.pageTitle, { color: theme?.colors.text }]}>
					Settings
				</Text>

				<ScrollView
					ref={innerScrollRef}
					contentContainerStyle={{ paddingBottom: 170 }}
					showsVerticalScrollIndicator={false}
				>
					<View
						style={[
							defaultStyle.searchContainer,
							{ backgroundColor: theme?.colors.inputContainer },
						]}
					>
						<EvilIcons
							name="search"
							size={Platform.OS === "ios" ? 22 : 26}
							color={"#888"}
						/>

						<TextInput
							style={[
								defaultStyle.searchInputField,
								{ color: theme?.colors.text },
							]}
							placeholder="Search"
							placeholderTextColor={"#888"}
						/>
					</View>

					<View
						style={[
							styles.cluster,
							{
								backgroundColor: colorScheme === "light" ? "#fff" : "#161717",
								marginTop: 17,
							},
						]}
					>
						<View
							style={[styles.user, { borderBottomColor: theme?.colors.border }]}
						>
							<Link href={"/settings/profile"} asChild>
								<TouchableOpacity style={styles.userLeft}>
									<Image
										source={require("@/assets/images/user-icon.png")}
										style={styles.avatar}
									/>

									<View style={styles.userInfo}>
										<Text
											style={{
												color: theme?.colors.text,
												fontSize: 23,
												fontFamily: "rob-r",
											}}
										>
											yor · ma · juh · stee
										</Text>

										<Text
											style={{
												color: theme?.colors.secondaryText,
												fontSize: 17,
												fontFamily: "rob-li",
											}}
										>
											"Royalty lies not in the bloodline, but...
										</Text>
									</View>
								</TouchableOpacity>
							</Link>

							<TouchableOpacity
								style={[
									styles.qrCodeContainer,
									{
										backgroundColor:
											colorScheme === "light" ? "#F6F5F4" : "#2D2E2E",
									},
								]}
							>
								<Ionicons
									name="qr-code-outline"
									size={18}
									color={theme?.colors.primary}
								/>
							</TouchableOpacity>
						</View>

						<TouchableOpacity style={styles.clusterItem}>
							<Fontisto name="smiley" size={22} color={theme?.colors.text} />

							<View style={[styles.clusterRight, { borderBottomWidth: 0 }]}>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Avatar
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>
					</View>

					<View
						style={[
							styles.cluster,
							{ backgroundColor: colorScheme === "light" ? "#fff" : "#161717" },
						]}
					>
						<TouchableOpacity style={styles.clusterItem}>
							<Ionicons
								name="megaphone-outline"
								size={22}
								color={theme?.colors.text}
							/>

							<View
								style={[
									styles.clusterRight,
									{ borderBottomColor: theme?.colors.border },
								]}
							>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Broadcast Lists
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.clusterItem}>
							<Entypo
								name="star-outlined"
								size={22}
								color={theme?.colors.text}
							/>

							<View
								style={[
									styles.clusterRight,
									{ borderBottomColor: theme?.colors.border },
								]}
							>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Starred Messages
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.clusterItem}>
							<MaterialIcons
								name="laptop"
								size={22}
								color={theme?.colors.text}
							/>

							<View style={[styles.clusterRight, { borderBottomWidth: 0 }]}>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Linked Devices
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>
					</View>

					<View
						style={[
							styles.cluster,
							{ backgroundColor: colorScheme === "light" ? "#fff" : "#161717" },
						]}
					>
						<TouchableOpacity style={styles.clusterItem}>
							<Ionicons
								name="key-outline"
								size={22}
								color={theme?.colors.text}
							/>

							<View
								style={[
									styles.clusterRight,
									{ borderBottomColor: theme?.colors.border },
								]}
							>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Account
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.clusterItem}>
							<Ionicons
								name="lock-closed-outline"
								size={22}
								color={theme?.colors.text}
							/>

							<View
								style={[
									styles.clusterRight,
									{ borderBottomColor: theme?.colors.border },
								]}
							>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Privacy
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.clusterItem}>
							<MaterialCommunityIcons
								name="chat-outline"
								size={22}
								color={theme?.colors.text}
							/>

							<View
								style={[
									styles.clusterRight,
									{ borderBottomColor: theme?.colors.border },
								]}
							>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Chats
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.clusterItem}>
							<Entypo
								name="notification"
								size={22}
								color={theme?.colors.text}
							/>

							<View
								style={[
									styles.clusterRight,
									{ borderBottomColor: theme?.colors.border },
								]}
							>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Notifications
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.clusterItem}>
							<MaterialCommunityIcons
								name="compare-vertical"
								size={22}
								color={theme?.colors.text}
							/>

							<View style={[styles.clusterRight, { borderBottomWidth: 0 }]}>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Storae and Data{" "}
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>
					</View>

					<View
						style={[
							styles.cluster,
							{ backgroundColor: colorScheme === "light" ? "#fff" : "#161717" },
						]}
					>
						<TouchableOpacity style={styles.clusterItem}>
							<Ionicons
								name="ios-information-circle-outline"
								size={22}
								color={theme?.colors.text}
							/>

							<View
								style={[
									styles.clusterRight,
									{ borderBottomColor: theme?.colors.border },
								]}
							>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Help
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.clusterItem}>
							<Ionicons
								name="heart-outline"
								size={22}
								color={theme?.colors.text}
							/>

							<View style={[styles.clusterRight, { borderBottomWidth: 0 }]}>
								<Text
									style={[styles.clusterText, { color: theme?.colors.text }]}
								>
									Tell a Friend
								</Text>

								<Entypo
									name="chevron-small-right"
									size={24}
									color={colorScheme === "light" ? "#C5C5C7" : "#57575A"}
								/>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</ScrollView>
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
	cluster: {
		flex: 1,
		marginTop: 35,
		marginHorizontal: 20,
		paddingLeft: 23,
		paddingRight: 10,
		borderRadius: 10,
	},
	user: {
		paddingVertical: 5,
		paddingRight: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	userLeft: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 10,
	},
	avatar: {
		width: 60,
		height: 60,
		backgroundColor: "#555",
		borderRadius: 60,
		resizeMode: "contain",
	},
	userInfo: {
		justifyContent: "center",
		alignItems: "flex-start",
		gap: 2,
	},
	qrCodeContainer: {
		width: 37,
		height: 37,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 37,
	},
	clusterItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 20,
	},
	clusterRight: {
		flex: 1,
		paddingVertical: 6,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	clusterText: {
		fontSize: 17,
		fontFamily: "rob-r",
	},
});
