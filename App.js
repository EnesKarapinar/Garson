import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Home } from './screens/users/Home';
import { Login } from './screens/admin/Login'

export default function App() {
  return (
    <View style={styles.box}>
      <StatusBar style="auto" />
      {/* <Home /> */}
      <Login />
    </View>
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
