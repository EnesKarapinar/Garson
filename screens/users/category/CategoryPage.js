import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { Style } from "./Style";
import SearchBar from './../../../components/searchBar/SearchBar'
import Category from './../../../components/category/Category'
import { AntDesign } from '@expo/vector-icons';

export default function CategoryPage() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={Style.inclusive}>
                <View style={Style.top}>
                    <Text style={Style.hood}>Fırat Cafe / Masa 6</Text>
                    <TouchableOpacity>
                        <AntDesign name="setting" style={Style.icon} size={30} color="#0E0E0E" />
                    </TouchableOpacity>
                </View>
                <SearchBar />
                <View style={Style.categories}>
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}