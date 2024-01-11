import HomeScreen from "../screens/HomeScreen";
import MoneyListScreen from "../screens/MoneyListScreen";
import GraphScreen from "../screens/GraphScreen";
import BudgetingScreen from "../screens/BudgetingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgetScreen from "../screens/ForgetScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tabs = () => {
const Stack = createNativeStackNavigator();
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteNam='Login'>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="GraphScreen" component={GraphScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="MoneyListScreen" component={MoneyListScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="BudgetingScreen" component={BudgetingScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ForgetScreen" component={ForgetScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Tabs;
