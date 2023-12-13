import { useMemo, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	useColorScheme,
	Image,
} from "react-native";
import { Stack } from "expo-router";
import { MaterialIcons, Feather, Ionicons, Zocial } from "@expo/vector-icons";

// LIBS
import { useTheme } from "@/libs/ThemeProvider";

// CONSTANTS
import defaultStyle from "@/constants/Styles";

const Page = () => {
	const colorScheme = useColorScheme();
	const { theme } = useTheme();
	const [callType, setCallType] = useState<"All" | "Missed">("All");

	const CallHistory = useMemo(
		() => [
			{
				person: "TDKMS",
				imageUri: require("@/assets/images/users/david-goggins.jpg"),
				type: "Incoming",
				textColor: theme?.colors.text,
				icon: () => (
					<MaterialIcons
						name="phone-callback"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "13:22",
			},
			{
				person: "Robert Kiyosaki",
				imageUri: require("@/assets/images/users/robert-kiyosaki.jpg"),
				type: "Missed",
				textColor: "#FF3B30",
				icon: () => (
					<MaterialIcons
						name="phone-callback"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "Yesterday",
			},
			{
				person: "Jordan Peterson",
				imageUri: require("@/assets/images/users/jordan-peterson.jpg"),
				type: "Incoming",
				textColor: theme?.colors.text,
				icon: () => (
					<Ionicons
						name="videocam"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "Tuesday",
			},
			{
				person: "TDKMS",
				imageUri: require("@/assets/images/users/david-goggins.jpg"),
				type: "Missed",
				textColor: "#FF3B30",
				icon: () => (
					<MaterialIcons
						name="phone-callback"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "Tuesday",
			},
			{
				person: "Curtis Jackson",
				imageUri: require("@/assets/images/users/curtis-jackson.png"),
				type: "Outgoing",
				textColor: theme?.colors.text,
				icon: () => (
					<Zocial name="call" size={14} color={theme?.colors.secondaryText} />
				),
				date: "Monday",
			},
			{
				person: "H.G. Bishop M.Emmanuel",
				imageUri: require("@/assets/images/users/bishop-emmanuel.jpg"),
				type: "Outgoing",
				textColor: theme?.colors.text,
				icon: () => (
					<Zocial name="call" size={14} color={theme?.colors.secondaryText} />
				),
				date: "Monday",
			},
			{
				person: "Andrew Huberman",
				imageUri: require("@/assets/images/users/andrew-huberman.jpg"),
				type: "Incoming",
				textColor: theme?.colors.text,
				icon: () => (
					<MaterialIcons
						name="phone-callback"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "Sunday",
			},
			{
				person: "Donald J. Trump",
				imageUri: require("@/assets/images/users/donald-trump.jpg"),
				type: "Incoming",
				textColor: theme?.colors.text,
				icon: () => (
					<MaterialIcons
						name="phone-callback"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "Sunday",
			},
			{
				person: "Elon Musk",
				imageUri: require("@/assets/images/user-icon.png"),
				type: "Incoming",
				textColor: theme?.colors.text,
				icon: () => (
					<MaterialIcons
						name="phone-callback"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "12/09/23",
			},
			{
				person: "Andrew Huberman",
				imageUri: require("@/assets/images/users/andrew-huberman.jpg"),
				type: "Outgoing",
				textColor: theme?.colors.text,
				icon: () => (
					<Zocial name="call" size={14} color={theme?.colors.secondaryText} />
				),
				date: "12/08/23",
			},
			{
				person: "Curtis Jackson",
				imageUri: require("@/assets/images/users/curtis-jackson.png"),
				type: "Incoming",
				textColor: theme?.colors.text,
				icon: () => (
					<Ionicons
						name="videocam"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "12/08/23",
			},
			{
				person: "Jordan Peterson",
				imageUri: require("@/assets/images/users/jordan-peterson.jpg"),
				type: "Missed",
				textColor: "#FF3B30",
				icon: () => (
					<MaterialIcons
						name="phone-callback"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "12/07/23",
			},
			{
				person: "H.G. Bishop M.Emmanuel",
				imageUri: require("@/assets/images/users/bishop-emmanuel.jpg"),
				type: "Outgoing",
				textColor: theme?.colors.text,
				icon: () => (
					<Zocial name="call" size={14} color={theme?.colors.secondaryText} />
				),
				date: "12/06/23",
			},
			{
				person: "Robert Kiyosaki",
				imageUri: require("@/assets/images/users/robert-kiyosaki.jpg"),
				type: "Incoming",
				textColor: theme?.colors.text,
				icon: () => (
					<MaterialIcons
						name="phone-callback"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "12/06/23",
			},
			{
				person: "Elon Musk",
				imageUri: require("@/assets/images/user-icon.png"),
				type: "Missed",
				textColor: "#FF3B30",
				icon: () => (
					<MaterialIcons
						name="phone-callback"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "12/05/23",
			},
			{
				person: "Donald J. Trump",
				imageUri: require("@/assets/images/users/donald-trump.jpg"),
				type: "Incoming",
				textColor: theme?.colors.text,
				icon: () => (
					<MaterialIcons
						name="phone-callback"
						size={14}
						color={theme?.colors.secondaryText}
					/>
				),
				date: "12/04/23",
			},
		],
		[]
	);

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
								<View style={styles.headerInner}>
									<TouchableOpacity>
										<Text
											style={{
												color: theme?.colors.primary,
												fontSize: 21,
												fontFamily: "rob-r",
												textDecorationLine: "underline",
											}}
										>
											Edit
										</Text>
									</TouchableOpacity>

									<View
										style={[
											styles.callTypeToggler,
											{ backgroundColor: theme?.colors.inputContainer },
										]}
									>
										<TouchableOpacity
											style={styles.callType}
											onPress={() => setCallType(() => "All")}
										>
											<Text
												style={[
													styles.callTypeText,
													{ color: theme?.colors.text },
												]}
											>
												All
											</Text>
										</TouchableOpacity>

										<TouchableOpacity
											style={styles.callType}
											onPress={() => setCallType(() => "Missed")}
										>
											<Text
												style={[
													styles.callTypeText,
													{ color: theme?.colors.text },
												]}
											>
												Missed
											</Text>
										</TouchableOpacity>

										<View
											style={[
												styles.callTypeIndicator,
												callType === "All"
													? styles.callTypeAll
													: styles.callTypeMissed,
												{
													backgroundColor:
														colorScheme === "light" ? "#fff" : "#5B5B60",
												},
											]}
										>
											<Text
												style={[
													styles.callTypeText,
													{ color: theme?.colors.text },
												]}
											>
												{callType}
											</Text>
										</View>
									</View>

									<TouchableOpacity>
										<MaterialIcons
											name="add-ic-call"
											size={24}
											color={theme?.colors.primary}
										/>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					),
				}}
			/>

			<ScrollView
				contentContainerStyle={[
					defaultStyle.contentContainerStyle,
					{ backgroundColor: theme?.colors.background, paddingBottom: 20 },
				]}
				showsVerticalScrollIndicator={false}
			>
				<Text style={[defaultStyle.pageTitle, { color: theme?.colors.text }]}>
					Calls
				</Text>

				<View
					style={[
						defaultStyle.blockBody,
						styles.blockBody,
						{ backgroundColor: theme?.colors.secondary },
					]}
				>
					<View style={styles.createLinkContainer}>
						<View
							style={[
								styles.creatLinkIcon,
								{
									backgroundColor:
										colorScheme === "light" ? "#F2F2F7" : "#2C2C2D",
								},
							]}
						>
							<Feather name="link" size={16} color={theme?.colors.primary} />
						</View>

						<View style={styles.createLinkTextContainer}>
							<Text
								style={{
									color: theme?.colors.primary,
									fontSize: 17,
									fontFamily: "rob-r",
								}}
							>
								Create Call Link
							</Text>

							<Text
								style={{
									color: theme?.colors.secondaryText,
									fontSize: 14,
									fontFamily: "rob-r",
								}}
							>
								Share a link for your WhatsApp call
							</Text>
						</View>
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
							Recent
						</Text>
					</View>

					<View
						style={[
							defaultStyle.blockBody,
							styles.blockBody,
							{
								marginTop: -3,
								backgroundColor: theme?.colors.secondary,
								paddingHorizontal: 0,
								paddingVertical: 0,
							},
						]}
					>
						<ScrollView
							contentContainerStyle={styles.callsContentContainerStyle}
							showsVerticalScrollIndicator={false}
						>
							{CallHistory.filter(({ type }) =>
								callType === "Missed" ? type === "Missed" : true
							).map(
								({ imageUri, person, type, textColor, icon, date }, index) => (
									<TouchableOpacity key={index} style={[styles.callItem]}>
										<Image
											source={imageUri}
											style={[
												styles.callAvatar,
												{ borderColor: theme?.colors.border },
											]}
										/>

										<View
											style={[
												styles.callItemInfo,
												{ borderBottomColor: theme?.colors.border },
												index === CallHistory.length - 1 && {
													borderBottomWidth: 0,
												},
											]}
										>
											<View style={styles.callItemInfoLeft}>
												<Text
													style={{
														color: textColor,
														fontSize: 19,
														fontFamily: "rob-r",
													}}
												>
													{person}
												</Text>

												<View style={styles.callItemType}>
													{icon()}

													<Text
														style={{
															color: theme?.colors.secondaryText,
															fontSize: 14,
															fontFamily: "rob-r",
														}}
													>
														{type}
													</Text>
												</View>
											</View>

											<View style={styles.callItemInfoRight}>
												<Text
													style={{
														color: theme?.colors.secondaryText,
														fontSize: 15,
														fontFamily: "rob-r",
													}}
												>
													{date}
												</Text>

												<Ionicons
													name="ios-information-circle-outline"
													size={24}
													color={theme?.colors.primary}
												/>
											</View>
										</View>
									</TouchableOpacity>
								)
							)}
						</ScrollView>
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
							Your personal calls are{" "}
							<Text style={{ color: theme?.colors.primary }}>
								end-to-end encrypted
							</Text>
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Page;

const styles = StyleSheet.create({
	headerInner: {
		flex: 1,
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	callTypeToggler: {
		width: 175,
		height: 33,
		padding: 2,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 8,
		position: "relative",
	},
	callType: {
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	callTypeText: {
		fontSize: 17,
		fontFamily: "rob-r",
	},
	callTypeIndicator: {
		width: "50%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		position: "absolute",
	},
	callTypeAll: {
		left: 2,
	},
	callTypeMissed: {
		right: 2,
	},
	blockBody: {
		marginTop: 15,
		marginHorizontal: 20,
		paddingHorizontal: 15,
		paddingVertical: 7,
		borderRadius: 10,
	},
	createLinkContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 8,
	},
	creatLinkIcon: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 40,
	},
	createLinkTextContainer: {
		justifyContent: "center",
		alignItems: "flex-start",
	},
	callsContentContainerStyle: {
		flex: 1,
		paddingLeft: 20,
	},
	callItem: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 10,
	},
	callAvatar: {
		width: 42,
		height: 42,
		backgroundColor: "#555",
		borderRadius: 42,
		borderWidth: StyleSheet.hairlineWidth,
		resizeMode: "cover",
	},
	callItemInfo: {
		flex: 1,
		paddingTop: 8,
		paddingVertical: 13,
		paddingRight: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	callItemInfoLeft: {
		justifyContent: "center",
		alignItems: "flex-start",
		gap: 5,
	},
	callItemInfoRight: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 7,
	},
	callItemType: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 4,
	},
	encryptionInfo: {
		flex: 1,
		marginTop: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
});
