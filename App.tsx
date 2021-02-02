import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Todo from './components/Todo/Todo';
import { withTodoProvider } from './components/Todo/TodoProvider';

const TodoContainer = withTodoProvider(Todo)

export default function App() {
  return (
    <View style={styles.container}>
        <TodoContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
