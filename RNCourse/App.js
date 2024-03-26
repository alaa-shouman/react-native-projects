import { useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setcourseGoal] = useState([]);
  const [modelIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const addGoalHandler = (goal) => {
    setcourseGoal((prevGoals) => [
      ...prevGoals,
      { text: goal, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (key) => {
    setcourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key);
    });
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Click to open"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {modelIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modelIsVisible}
            close={endAddGoalHandler}
          />
        )}
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(item) => {
              return (
                <GoalItem
                  text={item.item.text}
                  id={item.item.key}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a',
  },

  goalContainer: {
    flex: 5,
  },
});
