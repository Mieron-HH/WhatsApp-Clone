import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
	Dimensions,
	Image,
	ImageBackground,
	ImageSourcePropType,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	useColorScheme,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
	AntDesign,
	Feather,
	Ionicons,
	Octicons,
	SimpleLineIcons,
} from "@expo/vector-icons";

// CONSTANTS
import defaultStyle from "@/constants/Styles";
import { Conversation, Agent } from "@/constants/Interfaces";

// LIBS
import { useTheme } from "@/libs/ThemeProvider";
import conversations from "@/libs/data/conversations";
import { useKeyboard } from "@react-native-community/hooks";

const { width, height } = Dimensions.get("window");

const Page = () => {
	const { id } = useLocalSearchParams<{ id: string }>();
	const router = useRouter();
	const colorScheme = useColorScheme();
	const { theme } = useTheme();
	const [conversation, setConversation] = useState<Conversation | null>(null);
	const scrollRef = useRef<ScrollView>(null);
	const keyboard = useKeyboard();
	const backgroundImage =
		colorScheme === "light"
			? require("@/assets/images/chat-light-wallpaper.jpeg")
			: require("@/assets/images/chat-dark-wallpaper.png");

	useLayoutEffect(() => {
		const data = conversations.filter((item) => id === item.id);

		if (!data) router.back();
		else setConversation(data[0]);
	}, [id]);

	useEffect(() => {
		setTimeout(() => {
			scrollRef?.current?.scrollToEnd({ animated: false });
		}, 10);
	}, []);

	useEffect(() => {
		if (keyboard.keyboardShown)
			scrollRef?.current?.scrollToEnd({ animated: true });
	}, [keyboard.keyboardShown]);

	function incrementTime(minute: number) {
		const currentDateTime = new Date();

		currentDateTime.setMinutes(currentDateTime.getMinutes() + minute);

		const updatedTime = currentDateTime.toISOString().slice(11, 16);

		return updatedTime;
	}

	return (
		<ImageBackground
			source={backgroundImage}
			resizeMode="cover"
			style={[
				defaultStyle.container,
				{
					position: "relative",
					paddingTop: height * 0.1,
					backgroundColor: theme?.colors.background,
				},
			]}
		>
			<Stack.Screen
				options={{
					header: () => (
						<View style={defaultStyle.headerContainer}>
							<View
								style={[
									defaultStyle.header,
									{
										height: height * 0.1,
										paddingHorizontal: 0,
										paddingBottom: 5,
										backgroundColor: theme?.colors.background,
									},
								]}
							>
								<View style={styles.headerInner}>
									<View style={styles.headerLeft}>
										<TouchableOpacity onPress={() => router.back()}>
											<Feather
												name="chevron-left"
												size={33}
												color={theme?.colors.text}
											/>
										</TouchableOpacity>

										<View style={styles.avatarContainer}>
											<Image
												source={
													conversation?.user_profile as ImageSourcePropType
												}
												style={[
													styles.avatar,
													{ borderColor: theme?.colors.border },
												]}
											/>

											<Text
												style={[styles.userName, { color: theme?.colors.text }]}
											>
												{conversation?.user}
											</Text>
										</View>
									</View>

									<View style={styles.headerRight}>
										<TouchableOpacity>
											<Ionicons
												name="videocam-outline"
												size={28}
												color={theme?.colors.text}
											/>
										</TouchableOpacity>

										<TouchableOpacity>
											<Ionicons
												name="md-call-outline"
												size={25}
												color={theme?.colors.text}
											/>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						</View>
					),
				}}
			/>

			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<ScrollView
					ref={scrollRef}
					style={defaultStyle.outerContentContainerStyle}
					showsVerticalScrollIndicator={false}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={[styles.conversations, { paddingBottom: 22 }]}>
							{conversation?.content.map((item, index) => (
								<View
									key={index}
									style={[
										styles.agent,
										item.agent === Agent.Agent1
											? styles.agent_1
											: styles.agent_2,
										{
											backgroundColor:
												item.agent === Agent.Agent1
													? theme?.colors.agent_1
													: theme?.colors.agent_2,
										},
									]}
								>
									<Text
										style={{
											color: colorScheme === "light" ? "#000" : "#fff",
											fontSize: 17,
											fontFamily: "rob-r",
										}}
									>
										{item.message}
									</Text>

									<Text
										style={[
											styles.chatMeta,
											{
												color: colorScheme === "light" ? "#657B64" : "#8BA69B",
											},
										]}
									>
										{incrementTime(index)}{" "}
										<Ionicons
											name="checkmark-done-outline"
											size={16}
											color={theme?.colors.secondaryText}
										/>
									</Text>
								</View>
							))}
						</View>
					</TouchableWithoutFeedback>
				</ScrollView>

				<View
					style={[
						styles.controls,
						{
							backgroundColor: colorScheme === "light" ? "#F4F4F4" : "#242626",
							height: keyboard.keyboardShown ? 45 : 75,
						},
					]}
				>
					<View style={styles.controlsInner}>
						<View style={styles.controlsInnerLeft}>
							<TouchableOpacity>
								<AntDesign name="plus" size={28} color={theme?.colors.text} />
							</TouchableOpacity>

							<View
								style={[
									styles.textInputContainer,
									{
										backgroundColor:
											colorScheme === "light" ? "#fff" : "#3A3B3B",
									},
								]}
							>
								<TextInput
									multiline={true}
									style={[styles.textInput, { color: theme?.colors.text }]}
								/>

								<TouchableOpacity>
									<Octicons name="file" size={20} color={theme?.colors.text} />
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.controlsInnerRight}>
							<TouchableOpacity>
								<SimpleLineIcons
									name="camera"
									size={24}
									color={theme?.colors.text}
								/>
							</TouchableOpacity>

							<TouchableOpacity>
								<Feather name="mic" size={24} color={theme?.colors.text} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
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
	headerLeft: {
		paddingLeft: 3,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	headerRight: {
		marginRight: 27,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
	},
	avatarContainer: {
		marginLeft: 25,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	avatar: {
		width: 40,
		height: 40,
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 40,
		resizeMode: "cover",
	},
	userName: {
		fontSize: 20,
		fontFamily: "rob-m",
	},
	conversations: {
		paddingHorizontal: 8,
	},
	agent: {
		maxWidth: width * 0.6,
		marginTop: 10,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 10,
		position: "relative",
	},
	agent_1: {
		alignSelf: "flex-end",
	},
	agent_2: {
		alignSelf: "flex-start",
	},
	chatMeta: {
		textAlign: "right",
		fontSize: 11,
		fontFamily: "rob-r",
	},
	controls: {
		width,
		height: 75,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	controlsInner: {
		width: "97%",
		marginTop: 8,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		gap: 15,
	},
	controlsInnerLeft: {
		width: width * 0.75,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 10,
	},
	controlsInnerRight: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: 20,
	},
	textInputContainer: {
		flex: 1,
		paddingRight: 10,
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 50,
		gap: 8,
	},
	textInput: {
		flex: 1,
		paddingVertical: 8,
		paddingLeft: 8,
		fontSize: 17,
		fontFamily: "rob-r",
	},
});
