import React, { useLayoutEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFav, rmFav } from "../store/redux/favorites";
function Details({ route, navigation }) {
  const favMealIds = useSelector((state) => {
    state.favMealIds;
  });
  const dispatch = useDispatch();
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const [pressed, setPressed] = useState(false);
  const mealISFav = favMealIds.include(mealId);

  const onPress = () => {
    setPressed(!pressed);
    console.log("pressed");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFav}
            icon={mealISFav ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, pressed]);
  function changeFav() {
    if (mealISFav) {
      dispatch(rmFav({ id: mealId }));
    } else {
      dispatch(addFav({ id: mealId }));
    }
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        </View>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View style={styles.list}>
            {selectedMeal.ingredients.map((ing, index) => (
              <Text key={index} style={styles.listItem}>
                {ing}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Steps</Text>
          <View style={styles.list}>
            {selectedMeal.steps.map((step, index) => (
              <Text key={index} style={styles.listItem}>
                {`${index + 1}. ${step}`}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  section: {
    width: "90%",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },
  list: {
    width: "100%",
  },
  listItem: {
    fontSize: 18,
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#f9f9f9",
  },
});

export default Details;
