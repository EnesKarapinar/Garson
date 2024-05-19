import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Home } from './screens/users/Home';
import { Login } from './screens/admin/Login';
import { Navigator } from './Navigator';
import { NavigationContainer } from '@react-navigation/native';
import CategoryPage from './screens/users/category/CategoryPage'
import ProductsPage from './screens/users/products/ProductsPage';
import QrGenerator from './screens/users/qrGenerator/QrGenerator';
import QrScanner from './screens/users/qrScanner/QrScanner'


export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.box}> */}
      <StatusBar style="auto" />
      <Navigator />
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <CategoryPage /> */}
      {/* <ProductsPage /> */}
      {/* <QrGenerator /> */}
      {/* <QrScanner /> */}
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F2F2F2",
    // fontFamily: "Poppins"
  },
});
