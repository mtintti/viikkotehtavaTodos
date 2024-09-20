import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const Task = ({task, toggleTaskDone}) => {
    return (
        <Pressable onPress={() => toggleTaskDone(task.id)}>
            <Text style={[styles.text, task.isDone && styles.isDone]}>
            {task.text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    isDone: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: 'gray',
    },
  });
  
  export default Task;
