import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Style } from "./Style";
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchBar() {
    return (
        <View style={Style.inclusive}>
            <TouchableOpacity>
                <LinearGradient colors={['rgba(242, 242, 242, 0.0)', 'rgba(242, 242, 242, 0.9)', 'rgba(242, 242, 242, 1.0)']} style={Style.gradient}>
                    <Text style={Style.txt}>Sicak</Text>
                </LinearGradient>
                <Image source={require('./../../img/coffee.jpg')} style={Style.img} />
            </TouchableOpacity>
        </View >
    )
}