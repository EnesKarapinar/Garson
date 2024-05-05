import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    nav: {
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#F2F2F2",
        width: "100%",
        padding: 30,
    },
    btn: {
        backgroundColor: "#0E0E0E",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,
        gap: 30
    },
    txt: {
        color: "#F2F2F2",
        fontSize: 16,
        fontWeight: "500"
    }
})