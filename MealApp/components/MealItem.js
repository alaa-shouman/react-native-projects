import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Pressable, StyleSheet, Image } from "react-native";

function MealItem({
  id,
  title,
  url,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed ? [styles.buttonPressed, styles.pressable] : styles.pressable
        }
        onPress={() =>
          navigation.navigate("details", { mealId: id})
        }
      >
        <View>
          <Image source={{ uri: url }} style={styles.img} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{duration}m</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    padding: 12,
    elevation: 5,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-around",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  pressable: {
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
