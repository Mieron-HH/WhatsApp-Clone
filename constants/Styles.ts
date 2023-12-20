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
		width: 29,
		height: 29,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 29,
	},
	outerContentContainerStyle: {
		flex: 1,
		paddingTop: 15,
		paddingBottom: 0,
	},
	pageTitle: {
		marginHorizontal: 20,
		fontSize: 36,
		fontFamily: "rob-b",
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
		fontSize: 21,
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
