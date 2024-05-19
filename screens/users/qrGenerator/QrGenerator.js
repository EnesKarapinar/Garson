import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QrGenerator() {
    const [input, setInput] = useState('');
    const [qrValue, setQrValue] = useState('');

    return (
        <View>
            <QRCode value={qrValue ? qrValue : 'NA'} size={290} color='white' backgroundColor='black'></QRCode>
            <TextInput onChangeText={text => { setInput(text); }}></TextInput>
            <TouchableOpacity onPress={() => { setQrValue(input) }}>
                <Text>Generate QR Code</Text>
            </TouchableOpacity>
        </View>
    );
};