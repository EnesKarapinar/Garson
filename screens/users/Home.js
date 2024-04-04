import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Style } from "./Style"

export const Home = () => {
    return (
        <View style={Style.inclusive}>
            <Text style={[Style.hood]}>
                Garson'a{"\n"}
                <Text style={{ fontWeight: 600 }}>Hoşgeldiniz</Text>
            </Text>
            <View>
                <TouchableOpacity style={Style.touchable}>
                    <View style={Style.btnsView}>
                        <FontAwesome name="qrcode" size={20} color="#F2F2F2" />
                        <Text style={[Style.btnsTxt]}>QR Kodunu Okut</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[Style.btnsView, { backgroundColor: "transparent", borderWidth: 2, borderColor: "#0E0E0E" }]}>
                        <Feather name="shopping-bag" size={20} color="black" />
                        <Text style={[Style.btnsTxt, { color: "#0E0E0E" }]}>İşletme Sahibiyim</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}