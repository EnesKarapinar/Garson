import React, { useState, useEffect } from 'react';
import { Text, View, Button } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Style } from './Style';

export default function QrScanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted')
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happenes when we scan the bar code
    const handleBarCodeScanner = ({ type, data }) => {
        setScanned(true);
        setText(data);
        console.log("Type: " + type + "\nData: " + data)
    }

    // Check perissions and return the screens
    if (hasPermission === null) {
        return (
            <View style={Style.container}>
                <Text>Requesting for camera Permission</Text>
            </View>
        )
    }

    if (hasPermission === false) {
        return (
            <View style={Style.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={"Allow Camera"} onPress={() => askForCameraPermission()} />
            </View>
        )
    }


    // Retun the view
    return (
        <View style={Style.container}>
            <View style={Style.barcodeBox}>
                <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanner} style={{ height: 400, width: 400 }} />
            </View>
            <Text style={Style.mainText}>{text}</Text>

            {scanned && <Button title={"Scan again"} onPress={() => setScanned(false)} color="tomato" />}
        </View>
    );
}