import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesSceen from "./screens/CategoriesSceen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import Details from "./screens/Details";
import { Provider } from "react-redux";
import {store} from './store/redux/store'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#111" },
              headerTintColor: "#eee",
              contentStyle: { backgroundColor: "#000" },
            }}
          >
            <Stack.Screen
              name="MealCategories"
              component={CategoriesSceen}
              options={{
                title: "All Categories",
              }}
            />
            <Stack.Screen name="MealOverView" component={MealsOverViewScreen} />
            <Stack.Screen name="details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
