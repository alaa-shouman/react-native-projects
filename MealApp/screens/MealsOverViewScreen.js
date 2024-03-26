import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useRoute } from "@react-navigation/native";

function MealsOverViewScreen({ route,navigation }) {
  const ID = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (meals) => meals.categoryIds.indexOf(ID) >= 0
  );
  const renderMealItem = (itemData) => {
    console.log(itemData.item.id)
    return (
      <MealItem title={itemData.item.title} url={itemData.item.imageUrl}
      affordability={itemData.item.affordability}
      complexity={itemData.item.complexity}
      duration={itemData.item.duration}
      id= {itemData.item.id}
      />
    );
  };
  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === ID).title;
    navigation.setOptions({ title: catTitle });
  },[ID,navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverViewScreen;
