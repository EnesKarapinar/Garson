import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Style } from "./Style";
import { AntDesign } from '@expo/vector-icons';
import Product from "./../../../components/product/Product";
import WaiterAndBasket from '../../../components/waiterAndBasket/WaiterAndBasket';

export default function ProductsPage() {
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <View style={Style.inclusive}>
                <View style={Style.top}>
                    <TouchableOpacity>
                        <AntDesign name="left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={Style.hood}>Fırat Cafe / Masa 6</Text>
                    <TouchableOpacity>
                        <AntDesign name="setting" style={Style.icon} size={30} color="#0E0E0E" />
                    </TouchableOpacity>
                </View>
                <ScrollView style={Style.products}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </ScrollView>
            </View>
            <WaiterAndBasket />
        </View>
    )
}