import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Login from "./screens/Login";
import Splash from "./screens/Splash";
import Cadastro from "./screens/Cadastro";
import Inicio from "./screens/Inicio";
import Reservas from "./screens/Reservas";
import Viagens from "./screens/Viagens";
import Sobre from "./screens/Sobre";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="sobre" screenOptions={{headerShown: false}}>
        <Stack.Screen name='splash' component={Splash}/>
        <Stack.Screen name='inicio' component={Inicio}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='cadastro' component={Cadastro}/>
        <Stack.Screen name='viagens' component={Viagens}/>
        <Stack.Screen name='reservas' component={Reservas}/>
        <Stack.Screen name='sobre' component={Sobre}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
