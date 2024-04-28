import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    inclusive: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        padding: 50,
    },
    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 50,
    },
    hood: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#0E0E0E"
    },
    categories: {
        gap: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
    }
})