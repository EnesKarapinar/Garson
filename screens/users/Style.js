import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    inclusive: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 70,
    },
    hood: {
        fontSize: 40,
        color: "#0E0E0E",
        textAlign: "center",
        fontWeight: 400,
        marginBottom: 100,
    },
    btnsView: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0E0E0E",
        padding: 10,
        borderRadius: 5,
        gap: 30
    },
    btnsTxt: {
        fontSize: 16,
        color: "#F2F2F2",
        fontWeight: 600,
    },
    touchable: {
        marginBottom: 20
    }
})