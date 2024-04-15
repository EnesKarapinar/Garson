import { View, Text, TouchableWithoutFeedback, TouchableOpacity, TextInput, Keyboard, CheckBox } from "react-native";
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Style } from "./Style";
// import Checkbox from 'expo-checkbox';

export const Login = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={Style.inclusive}>
                <Text style={[Style.hood]}>Giriş Yapın</Text>
                <View style={{ width: "100%" }}>
                    <TextInput placeholder="Müşteri Numarası" style={Style.input} placeholderTextColor={"#949DA6"} />
                    <TextInput placeholder="Parola" secureTextEntry={true} style={Style.input} placeholderTextColor={"#949DA6"} />
                    <View>
                    </View>
                    <TouchableOpacity style={[Style.btnsView]}>
                        <Text style={[Style.btnsTxt]}>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}