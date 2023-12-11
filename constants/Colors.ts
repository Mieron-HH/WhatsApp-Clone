const tintColor = "#53A6FD";
const selectedTintColor = "rgba(47, 149, 220, 0.15)";

export default {
	tabBarSelected: selectedTintColor,
	tint: tintColor,
	tabIconDefault: "#ccc",
	tabIconSelected: tintColor,
	light: {
		text: "#000",
		background: "#fff",
	},
	dark: {
		text: "#fff",
		background: "#000",
	},
};

export const DarkTheme = {
	dark: true,
	colors: {
		primary: "rgb(52, 160, 255)",
		background: "rgb(1, 1, 1)",
		secondary: "rgb(28, 28, 30)",
		card: "rgb(18, 18, 18)",
		text: "rgb(229, 229, 231)",
		border: "rgb(39, 39, 41)",
		notification: "rgb(255, 69, 58)",
		tab: "rgba(1, 1, 1, 0.9)",
		activeTab: "rgb(13, 25, 38)",
		activeTabTintColor: "rgb(83, 166, 253)",
		inputContainer: "rgb(28, 28, 30)",
	},
};

export const DefaultTheme = {
	dark: false,
	colors: {
		primary: "rgb(0, 122, 255)",
		background: "rgb(242, 242, 242)",
		secondary: "rgb(255, 255, 255)",
		card: "rgb(255, 255, 255)",
		text: "rgb(28, 28, 30)",
		border: "rgb(216, 216, 216)",
		notification: "rgb(255, 59, 48)",
		tab: "rgba(242, 242, 242, 0.7)",
		activeTab: "rgb(217, 235, 254)",
		activeTabTintColor: "rgb(0, 123, 252)",
		inputContainer: "rgb(227, 227, 232)",
	},
};
