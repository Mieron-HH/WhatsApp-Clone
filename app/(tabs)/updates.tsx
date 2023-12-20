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
import React, { useEffect, useRef } from "react";
import { Stack } from "expo-router";
import {
	SimpleLineIcons,
	EvilIcons,
	AntDesign,
	Feather,
	MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "@/libs/ThemeProvider";
import Animated, {
	SlideInDown,
	interpolate,
	useAnimatedRef,
	useAnimatedStyle,
	useScrollViewOffset,
} from "react-native-reanimated";

// CONSTANTS
import defaultStyle from "@/constants/Styles";

// DATA
import ChannelsList from "@/libs/data/Channels";

const Page = () => {
	const colorScheme = useColorScheme();
	const { theme } = useTheme();
	const innerScrollRef = useRef<ScrollView>(null);

	useEffect(() => {
		setTimeout(() => {
			innerScrollRef?.current?.scrollToEnd({ animated: false });
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
							<View style={defaultStyle.header}>
								<TouchableOpacity
									style={[
										defaultStyle.headerIconContainer,
										{ backgroundColor: theme?.colors.inputContainer },
									]}
								>
									<SimpleLineIcons
										name="options"
										size={15}
										color={theme?.colors.text}
									/>
								</TouchableOpacity>
							</View>
						</View>
					),
				}}
			/>

			<ScrollView
				contentContainerStyle={[
					defaultStyle.outerContentContainerStyle,
					{
						backgroundColor: theme?.colors.background,
					},
				]}
				showsVerticalScrollIndicator={false}
			>
				<Text style={[defaultStyle.pageTitle, { color: theme?.colors.text }]}>
					Updates
				</Text>

				<ScrollView
					ref={innerScrollRef}
					contentContainerStyle={{ paddingBottom: 185 }}
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
								<Feather name="plus" size={20} color={theme?.colors.text} />
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
									<Image
										source={require("@/assets/images/user-icon.png")}
										style={styles.avatar}
									/>

									<View
										style={[
											styles.avatarIcon,
											{
												backgroundColor:
													colorScheme === "light" ? "#fff" : "#000",
											},
										]}
									>
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
											fontSize: 14,
											fontFamily: "rob-r",
											color: theme?.colors.secondaryText,
											letterSpacing: 0.5,
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
								<Feather name="plus" size={20} color={theme?.colors.text} />
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
								Stay updated on topics that matter to you. Find channels to
								follow below.
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
												{
													backgroundColor:
														colorScheme === "light" ? "#D6EFE2" : "#103720",
												},
											]}
										>
											<Text
												style={{
													color: theme?.colors.primary,
													fontSize: 15,
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
										color: colorScheme === "light" ? "#fff" : "#000",
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
			</ScrollView>
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
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
	avatar: {
		width: 60,
		height: 60,
		backgroundColor: "#555",
		borderRadius: 60,
		resizeMode: "contain",
	},
	avatarIcon: {
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
