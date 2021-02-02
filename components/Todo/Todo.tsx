import React from "react";
import { View, Text, TextInput, FlatList, Button } from "react-native";

import { TodoList } from "./TodoList";
import { TodoProviderValue } from "./TodoProvider";

const Todo: React.FC<TodoProviderValue> = (props) => {
  const handleOnPress = () => props.addTodoItem(props.text);
  return (
    <View>
      <Text>Todo Web</Text>
      <View style={{}}>
        <TextInput
          placeholder="What to do?"
          autoFocus
          style={{ padding: 8, borderWidth: 1 }}
          value={props.text}
          onChangeText={props.setText}
        />
        <Button title="Add" onPress={handleOnPress} />
      </View>
      <FlatList
        data={props.todoList}
        renderItem={TodoList}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};


export default Todo;
