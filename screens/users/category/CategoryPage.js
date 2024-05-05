import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { Style } from "./Style";
import SearchBar from './../../../components/searchBar/SearchBar'
import Category from './../../../components/category/Category'
import WaiterFoot from '../../../components/waiterFoot/WaiterFoot';
import { AntDesign } from '@expo/vector-icons';

export default function CategoryPage() {
    return (
        // <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, width: "100%" }}>
                <View style={Style.inclusive}>
                    <View style={Style.top}>
                        <Text style={Style.hood}>Fırat Cafe / Masa 6</Text>
                        <TouchableOpacity>
                            <AntDesign name="setting" style={Style.icon} size={30} color="#0E0E0E" />
                        </TouchableOpacity>
                    </View>
                    <SearchBar />
                    <ScrollView style={Style.categories}>
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                    </ScrollView>
                </View>
                <WaiterFoot />
            </View>
        </TouchableWithoutFeedback >
        // </View >
    )
}