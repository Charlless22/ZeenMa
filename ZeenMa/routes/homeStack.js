import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ParameterScreen from "../screens/ParameterScreen";
import BudgetingScreen from "../screens/CalculScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgetScreen from "../screens/ForgetScreen";
import ConversionScreen from "../screens/ConversionScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tabs = () => {
const Stack = createNativeStackNavigator();
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteNam='Login'>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ParameterScreen" component={ParameterScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="BudgetingScreen" component={BudgetingScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ForgetScreen" component={ForgetScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ConversionScreen" component={ConversionScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Tabs;
