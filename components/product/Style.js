import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    inclusive: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#0E0E0E",
        display: "flex",
        flexDirection: "row",
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        height: 80,
        marginBottom: 30
    },
    left: {
        flexDirection: "row",
        alignItems: "center"
    },
    img: {
        width: "50%",
        height: "undefined",
        aspectRatio: 1 / 1,

    },
    txt: {
        fontSize: 16,
        marginLeft: 20
    },
    right: {
        justifyContent: "center",
        flexDirection: "row",
        height: "100%",
        alignItems: "center"
    },
    line: {
        width: 1,
        height: "90%",
        backgroundColor: "#626973"
    },
    price: {
        margin: 20
    }
})