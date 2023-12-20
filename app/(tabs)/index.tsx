import { useEffect, useRef } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	useColorScheme,
	ScrollView,
	TextInput,
	Platform,
	Image,
	ImageSourcePropType,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import {
	SimpleLineIcons,
	Entypo,
	EvilIcons,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

// CONSTANTS
import defaultStyle from "@/constants/Styles";

// LIBS
import { useTheme } from "@/libs/ThemeProvider";
import conversations from "@/libs/data/conversations";

const Page = () => {
	const router = useRouter();
	const colorScheme = useColorScheme();
	const { theme } = useTheme();
	const innerScrollRef = useRef<ScrollView>(null);

	useEffect(() => {
		setTimeout(() => {
			innerScrollRef?.current?.scrollTo({ x: 0, y: 50, animated: false });
		}, 10);
	}, []);

	const truncate = (text: string) => {
		return text.length > 80 ? text.substring(0, 80) : text;
	};

	return (
		<View
			style={[
				defaultStyle.container,
				{
					backgroundColor:
						colorScheme === "light" ? "#fff" : theme?.colors.background,
				},
			]}
		>
			<Stack.Screen
				options={{
					header: () => (
						<View style={defaultStyle.headerContainer}>
							<View style={defaultStyle.header}>
								<View style={styles.headerInner}>
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

									<View style={styles.headerInnerRight}>
										<TouchableOpacity
											style={[
												defaultStyle.headerIconContainer,
												{ backgroundColor: theme?.colors.inputContainer },
											]}
										>
											<Entypo
												name="camera"
												size={18}
												color={theme?.colors.text}
											/>
										</TouchableOpacity>

										<TouchableOpacity
											style={[
												styles.headerRightIconContainer,
												{ backgroundColor: theme?.colors.primary },
											]}
										>
											<Entypo
												name="plus"
												size={21}
												color={colorScheme === "light" ? "#fff" : "#000"}
											/>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						</View>
					),
				}}
			/>

			<ScrollView
				contentContainerStyle={[
					defaultStyle.outerContentContainerStyle,
					{
						backgroundColor:
							colorScheme === "light" ? "#fff" : theme?.colors.background,
						paddingBottom: 0,
					},
				]}
				showsVerticalScrollIndicator={false}
			>
				<Text style={[defaultStyle.pageTitle, { color: theme?.colors.text }]}>
					Chats
				</Text>

				<ScrollView
					ref={innerScrollRef}
					contentContainerStyle={{ paddingBottom: 25 }}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.searchContainerOuter}>
						<View
							style={[
								defaultStyle.searchContainer,
								{
									backgroundColor:
										colorScheme === "light" ? "#F6F5F4" : "#222222",
									marginTop: 0,
									marginHorizontal: 0,
								},
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

						<TouchableOpacity>
							<Ionicons
								name="filter-sharp"
								size={18}
								color={theme?.colors.text}
							/>
						</TouchableOpacity>
					</View>

					<TouchableOpacity style={styles.archived}>
						<MaterialCommunityIcons
							name="archive"
							size={20}
							color={theme?.colors.secondaryText}
						/>

						<Text
							style={[
								styles.archivedText,
								{
									color: theme?.colors.text,
								},
							]}
						>
							Archived
						</Text>
					</TouchableOpacity>

					<View style={styles.chatsList}>
						{conversations.map((item, index) => (
							<TouchableOpacity
								key={item.id}
								style={[styles.chatItem, index === 0 && { marginTop: 0 }]}
								onPress={() => router.push(`/conversation/${item.id}`)}
							>
								<Image
									source={item.user_profile as ImageSourcePropType}
									style={styles.avatar}
								/>

								<View
									style={[
										styles.chatItemRight,
										index === 0 && styles.firstChatItem,
										{
											borderBottomColor: theme?.colors.border,
											borderTopColor: theme?.colors.border,
										},
									]}
								>
									<View style={styles.chatItemRightContent}>
										<Text
											style={{
												color: theme?.colors.text,
												fontSize: 17,
												fontFamily: "rob-m",
											}}
										>
											{item.user}
										</Text>

										<Text
											style={{
												color: theme?.colors.secondaryText,
												fontSize: 15,
												fontFamily: "rob-r",
											}}
										>
											<Ionicons
												name="checkmark-done-outline"
												size={19}
												color={theme?.colors.secondaryText}
											/>{" "}
											{truncate(item.content[item.content.length - 1].message)}
										</Text>
									</View>

									<Text
										style={{
											color: theme?.colors.secondaryText,
											fontSize: 15,
											fontFamily: "rob-r",
										}}
									>
										{item.last_conv}
									</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>

					<View style={styles.encryptionInfo}>
						<Ionicons
							name="ios-lock-closed"
							size={13}
							color={theme?.colors.secondaryText}
						/>

						<Text
							style={{
								color: theme?.colors.secondaryText,
								fontSize: 13,
								fontFamily: "rob-r",
							}}
						>
							Your personal messages are{" "}
							<Text style={{ color: theme?.colors.primary }}>
								end-to-end encrypted
							</Text>
						</Text>
					</View>
				</ScrollView>
			</ScrollView>
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
	headerInner: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerInnerRight: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 15,
	},
	headerRightIconContainer: {
		padding: 4,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
	searchContainerOuter: {
		flex: 1,
		marginTop: 10,
		marginHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		gap: 15,
	},
	archived: {
		flex: 1,
		marginTop: 25,
		marginHorizontal: 20,
		paddingBottom: 13,
		paddingLeft: 18,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 30,
	},
	archivedText: {
		fontSize: 17,
		fontFamily: "rob-m",
	},
	chatsList: {
		marginHorizontal: 20,
	},
	chatItem: {
		marginTop: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		gap: 15,
	},
	avatar: {
		width: 55,
		height: 55,
		backgroundColor: "#555",
		borderRadius: 55,
		resizeMode: "cover",
	},
	chatItemRight: {
		flex: 1,
		height: 65,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	firstChatItem: {
		paddingTop: 8,
		borderTopWidth: StyleSheet.hairlineWidth,
	},
	chatItemRightContent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	encryptionInfo: {
		flex: 1,
		marginTop: 15,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
});
