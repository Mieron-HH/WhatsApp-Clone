import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	Platform,
	useColorScheme,
	TextInput,
	Image,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import {
	SimpleLineIcons,
	EvilIcons,
	AntDesign,
	Feather,
	MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "@/libs/ThemeProvider";

// CONSTANTS
import defaultStyle from "@/constants/Styles";

// DATA
import ChannelsList from "@/assets/data/Channels";

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
							<View style={[defaultStyle.header, styles.header]}>
								<TouchableOpacity
									style={[
										styles.headerLeftIconContainer,
										{ borderColor: theme?.colors.primary },
									]}
								>
									<SimpleLineIcons
										name="options"
										size={14}
										color={theme?.colors.primary}
									/>
								</TouchableOpacity>
							</View>
						</View>
					),
				}}
			/>

			<ScrollView
				contentContainerStyle={[
					defaultStyle.contentContainerStyle,
					{ backgroundColor: theme?.colors.background },
				]}
				showsVerticalScrollIndicator={false}
			>
				<Text style={[defaultStyle.pageTitle, { color: theme?.colors.text }]}>
					Updates
				</Text>
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

				<View style={defaultStyle.block}>
					<View style={defaultStyle.blockHeader}>
						<Text
							style={[
								defaultStyle.blockHeaderTitle,
								{ color: theme?.colors.text },
							]}
						>
							Status
						</Text>

						<TouchableOpacity
							style={[
								styles.iconContainer,
								{ backgroundColor: theme?.colors.inputContainer },
							]}
						>
							<Feather name="plus" size={20} color={theme?.colors.primary} />
						</TouchableOpacity>
					</View>

					<View
						style={[
							defaultStyle.blockBody,
							{ backgroundColor: theme?.colors.secondary },
						]}
					>
						<TouchableOpacity style={styles.statusContainer}>
							<View style={styles.avatarContainer}>
								<View style={styles.statusAvatar} />

								<View style={styles.statusAvatarIcon}>
									<AntDesign
										name="pluscircle"
										size={20}
										color={theme?.colors.primary}
									/>
								</View>
							</View>

							<View style={styles.statusTextContainer}>
								<Text
									style={{
										fontSize: 18,
										fontFamily: "rob-b",
										color: theme?.colors.text,
									}}
								>
									My Status
								</Text>

								<Text
									style={{
										fontSize: 13,
										fontFamily: "rob-m",
										color: colorScheme === "light" ? "#bbb" : "#777",
										letterSpacing: 1,
									}}
								>
									Add to my status
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>

				<View style={defaultStyle.block}>
					<View style={defaultStyle.blockHeader}>
						<Text
							style={[
								defaultStyle.blockHeaderTitle,
								{ color: theme?.colors.text },
							]}
						>
							Channels
						</Text>

						<TouchableOpacity
							style={[
								styles.iconContainer,
								{ backgroundColor: theme?.colors.inputContainer },
							]}
						>
							<Feather name="plus" size={20} color={theme?.colors.primary} />
						</TouchableOpacity>
					</View>

					<View
						style={[
							defaultStyle.blockBody,
							colorScheme === "light" && {
								backgroundColor: theme?.colors.secondary,
							},
							{ paddingVertical: 20 },
						]}
					>
						<Text
							style={{
								paddingHorizontal: 20,
								fontSize: 18,
								fontFamily: "rob-m",
								color: colorScheme === "light" ? "#bbb" : "#777",
								lineHeight: 25,
							}}
						>
							Stay updated on topics that matter to you. Find channels to follow
							below.
						</Text>

						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={styles.channelsContentContainerStyle}
						>
							{ChannelsList.map(({ name, uri }, index) => (
								<TouchableOpacity
									key={index}
									style={[
										styles.channelItem,
										{ borderColor: theme?.colors.border },
									]}
								>
									<View style={styles.avatarContainer}>
										<Image source={uri} style={styles.channelAvatar} />

										<View
											style={[
												styles.channelAvatarIcon,
												{ backgroundColor: theme?.colors.background },
											]}
										>
											<MaterialIcons
												name="verified"
												size={20}
												color="#25D366"
											/>
										</View>
									</View>

									<Text
										style={{
											color: theme?.colors.text,
											fontSize: 16,
											fontFamily: "rob-m",
										}}
									>
										{name}
									</Text>

									<View
										style={[
											styles.channelItemBtn,
											{ backgroundColor: theme?.colors.activeTab },
										]}
									>
										<Text
											style={{
												color: theme?.colors.activeTabTintColor,
												fontSize: 16,
												fontFamily: "rob-m",
												textDecorationLine: "underline",
											}}
										>
											Follow
										</Text>
									</View>
								</TouchableOpacity>
							))}
						</ScrollView>

						<TouchableOpacity
							style={[
								styles.exploreBtn,
								{ backgroundColor: theme?.colors.primary },
							]}
						>
							<Text
								style={{
									color: "#fff",
									fontSize: 18,
									fontFamily: "rob-m",
									textDecorationLine: "underline",
								}}
							>
								Explore more
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
	header: {
		justifyContent: "flex-end",
	},
	headerLeftIconContainer: {
		width: 23,
		height: 23,
		marginRight: 15,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		borderWidth: 1,
	},
	iconContainer: {
		width: 28,
		height: 28,
		borderRadius: 28,
		justifyContent: "center",
		alignItems: "center",
	},
	statusContainer: {
		flex: 1,
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 8,
	},
	avatarContainer: {
		position: "relative",
	},
	statusAvatar: {
		width: 60,
		height: 60,
		backgroundColor: "#555",
		borderRadius: 60,
		resizeMode: "contain",
	},
	statusAvatarIcon: {
		backgroundColor: "#fff",
		borderRadius: 100,
		position: "absolute",
		bottom: 1,
		right: 2,
	},
	statusTextContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start",
		gap: 2,
	},
	channelsContentContainerStyle: {
		marginTop: 20,
		paddingHorizontal: 20,
		gap: 8,
	},
	channelItem: {
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		borderWidth: 1,
		borderRadius: 15,
	},
	channelAvatar: {
		width: 70,
		height: 70,
		backgroundColor: "#555",
		borderRadius: 70,
		resizeMode: "cover",
	},
	channelAvatarIcon: {
		backgroundColor: "#fff",
		padding: 2,
		borderRadius: 100,
		position: "absolute",
		bottom: 0,
		right: 0,
	},
	channelItemBtn: {
		paddingVertical: 9,
		paddingHorizontal: 38,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	exploreBtn: {
		width: Platform.OS === "ios" ? 140 : 150,
		marginTop: 20,
		marginHorizontal: 20,
		paddingVertical: 8,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
});
