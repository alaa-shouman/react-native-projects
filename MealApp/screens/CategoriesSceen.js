import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
function CategoriesSceen({navigation}) {
    const renderCategoryItem = (itemData) => {
      const pressHandler = () => {
        navigation.navigate("MealOverView",{
          categoryId:itemData.item.id,
        });
      }
        return (
            <CategoryGridTile
              title={itemData.item.title}
              color={itemData.item.color}
              onPressHandler={pressHandler}
            />
        );
    }
    
  return (
    <FlatList 
    data={CATEGORIES} 
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
    >

    </FlatList>
  );
}

export default CategoriesSceen;
