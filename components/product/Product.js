import { TouchableOpacity, View, Image, Text } from 'react-native';
import { Style } from "./Style";

export default function Product() {
    return (
        <TouchableOpacity>
            <View style={Style.inclusive}>
                <View style={Style.left}>
                    <Image source={require('./../../img/coffee.jpg')} style={Style.img} />
                    <Text style={Style.txt}>Cay</Text>
                </View>
                <View style={Style.right}>
                    <View style={Style.line}></View>
                    <Text style={Style.price}>10 TL</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}