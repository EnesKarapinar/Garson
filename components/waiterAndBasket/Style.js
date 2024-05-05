import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    nav: {
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#F2F2F2",
        width: "100%",
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20
    },
    waiter: {
        backgroundColor: "#0E0E0E",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,
        gap: 30,
        width: "80%"
    },
    txt: {
        color: "#F2F2F2",
        fontSize: 16,
        fontWeight: "500"
    },
    basket: {
        padding: 10,
        borderColor: "#0E0E0E",
        borderWidth: 2,
        borderRadius: 5,
        position: "relative"
    },
    quant: {
        position: "absolute",
        top: -5,
        right: -5,
        backgroundColor: "#0E0E0E",
        borderRadius: 100,
        padding: 2,
        paddingHorizontal: 5
    },
    quantTxt: {
        fontSize: 9,
        color: "#F2F2F2"
    }
})