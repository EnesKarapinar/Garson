import { TextInput } from 'react-native';
import { Style } from "./Style";

export default function SearchBar() {
    return (
        <TextInput style={Style.input} placeholder="Arama..." placeholderTextColor="#949DA6" />
    )
}