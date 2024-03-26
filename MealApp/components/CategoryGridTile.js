import React from "react";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
function CategoryGridTile({ title, color,onPressHandler }) {
  const navigation = useNavigation();
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
        android_ripple={{ color: "#ccc" }}
        onPress={onPressHandler}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: "white",
    overflow: Platform.OS === 'android' ? "hidden" : "visible",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CategoryGridTile;
