import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    inclusive: {
        borderColor: "#0E0E0E",
        borderWidth: 1,
        width: "44%",
        aspectRatio: 1 / 1,
        borderRadius: 5,
        overflow: "hidden",
    },
    img: {
        width: "100%",
        height: "100%"
    },
    gradient: {
        position: "absolute",
        width: "100%",
        height: "50%",
        bottom: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: 1,
        padding: 10
    },
    txt: {
        fontSize: 16,
        color: "#0E0E0E"
    }
})