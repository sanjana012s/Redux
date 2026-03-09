import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false
      };
      state.todos.push(newTodo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    }

  }
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;