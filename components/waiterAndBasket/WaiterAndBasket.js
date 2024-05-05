import { View, Text, TouchableOpacity } from 'react-native';
import { Style } from "./Style";
import { FontAwesome6 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function WaiterAndBasket() {
    return (
        <View style={Style.nav}>
            <TouchableOpacity style={Style.waiter}>
                <FontAwesome6 name="bell-concierge" size={20} color="#F2F2F2" />
                <Text style={Style.txt}>Garson Çağır</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.basket}>
                <View style={Style.quant}>
                    <Text style={Style.quantTxt}>2</Text>
                </View>
                <SimpleLineIcons name="basket" size={24} color="#0E0E0E" />
            </TouchableOpacity>
        </View >
    )
}