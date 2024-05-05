import { View, Text, TouchableOpacity } from 'react-native';
import { Style } from "./Style";
import { FontAwesome6 } from '@expo/vector-icons';

export default function WaiterFoot() {
    return (
        <View style={Style.nav}>
            <TouchableOpacity style={Style.btn}>
                <FontAwesome6 name="bell-concierge" size={20} color="#F2F2F2" />
                <Text style={Style.txt}>Garson Çağır</Text>
            </TouchableOpacity>
        </View >
    )
}