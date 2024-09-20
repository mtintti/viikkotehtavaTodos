import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskList from './components/TaskList';
import Add from './components/Add';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    tasksLoaded();
  }, []);

  const tasksLoaded = async () => {
   
    try {
      const saved = await AsyncStorage.getItem('tasks');
      if (saved !== null) {
        setTasks(JSON.parse(saved));
      } else {
        setTasks([]);
      }
    } catch (error) {
      console.error('Failed to get tasks', error);
      setTasks([]); 
    }
  };

  const save = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Cant save tasks', error);
    }
  };


  const add = (task) => {
    if (task.trim().length > 0) {
      const taskNew = [...tasks, { id: Date.now().toString(), text: task, isDone: false }];
      setTasks(taskNew);
      save(taskNew);
    }
  };

  const toggleTaskDone = (taskId) => {
    const taskNew = tasks.map(task =>
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(taskNew);
    save(taskNew);

  };

  return (
    <View style={styles.container}>
      <View style={{paddingVertical:50}}>
        <Text >Todo list</Text>
        </View>
        <Add add={add} />
        <TaskList tasks={tasks} toggleTaskDone={toggleTaskDone} />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column"
    
    
  },
});

export default App;