import React, {useState} from 'react'
import { StyleSheet,View,TextInput,Button,Modal,Image } from 'react-native';

function GoalInput(props) {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };    

  const addGoalHandler = () =>{
    props.onAddGoal(goal);
    setGoal("");
  }
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.images} source={require("../assets/Images/goal.png")}/>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            onChangeText={goalInputHandler}
            value={goal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
            </View>
            <View style={styles.button}>
              <Button title="cancel" color="#f31282" onPress={props.close} />
            </View>
          </View>
        </View>
      </Modal>
    );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    backgroundColor: "#311b6b",
  },
  images: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    width: "100%",
    padding: 8,
    marginRight: 8,
    color: "#120438",
    borderRadius:6,
    padding:16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
export default GoalInput
