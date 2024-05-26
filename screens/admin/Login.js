import { View, Text, TouchableWithoutFeedback, TouchableOpacity, TextInput, Keyboard, CheckBox } from "react-native";
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Style } from "./Style";
import { signIn } from "../../firebase";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {

    const navigation = useNavigation();

    const [mail, setMail] = useState("");
    const [password, setPass] = useState("");
    const [error, setError] = useState('');

    const kontrol = async () => {
        try {
            await signIn(mail, password);
            navigation.navigate("adminHome");
        } catch (error) {
            setError(error.message);
            alert('Giriş hatası:', error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={Style.inclusive}>
                <Text style={[Style.hood]}>Giriş Yapın</Text>
                <View style={{ width: "100%" }}>
                    <TextInput placeholder="Müşteri Numarası" onChangeText={setMail} value={mail} style={Style.input} placeholderTextColor={"#949DA6"} />
                    <TextInput placeholder="Parola" onChangeText={setPass} value={password} secureTextEntry={true} style={Style.input} placeholderTextColor={"#949DA6"} />
                    <View>
                    </View>
                    <TouchableOpacity style={[Style.btnsView]} onPress={() => kontrol(mail, password)}>
                        <Text style={[Style.btnsTxt]}>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}