import React from "react";
import { View, Text } from 'react-native'

import { TodoItem } from "./models/TodoItem";

export const TodoList: React.FC<{ item: TodoItem }> = (props) => (
  <View style={{ borderWidth: 1, padding: 8 }}>
    <Text style={{ fontWeight: "900" }}>Todo# {props.item.id}</Text>
    <Text>{props.item.content}</Text>
  </View>
);
