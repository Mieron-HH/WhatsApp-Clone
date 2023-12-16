import { StyleSheet } from "react-native";

const defaultStyle = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 85,
	},
	headerContainer: {
		flex: 1,
	},
	header: {
		height: 85,
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	headerIconContainer: {
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
	outerContentContainerStyle: {
		flex: 1,
		paddingTop: 20,
		paddingBottom: 70,
	},
	pageTitle: {
		marginHorizontal: 20,
		fontSize: 36,
		fontFamily: "rob-b",
	},
	innerContentContainerStyle: {
		paddingBottom: 30,
	},
	searchContainer: {
		flex: 1,
		marginTop: 10,
		marginHorizontal: 20,
		paddingHorizontal: 3,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#888",
		borderRadius: 10,
	},
	searchInputField: {
		flex: 1,
		paddingVertical: 6,
		paddingLeft: 5,
		fontSize: 19,
		fontFamily: "rob-r",
	},
	block: {
		width: "100%",
		marginTop: 30,
		gap: 12,
	},
	blockHeader: {
		flex: 1,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	blockHeaderTitle: {
		fontSize: 23,
		fontFamily: "rob-m",
	},
	blockBody: {
		flex: 1,
		paddingVertical: 8,
	},
});

export default defaultStyle;
