import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/users/Home";
import { Login } from "./screens/admin/Login";
import QrScanner from "./screens/users/qrScanner/QrScanner";

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{
                    title: "",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "#F2F2F2",
                    }
                }}
            />
            <Stack.Screen name="qrScanner" component={QrScanner} />
            <Stack.Screen
                name="adminLogin"
                component={Login}
                options={{
                    title: "",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "#F2F2F2"
                    }
                }}
            />
        </Stack.Navigator>
    )
}