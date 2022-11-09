// 12.	Give an example of Reselect usage?

// example of to do list
import { createSelector } from "reselect";

const todosSelector = (state) => state.todos.todoList;

const getTodosWithLetter = createSelector(
  todosSelector,
  (state, Letter) => Letter,
  (toDos, Letter) => toDos.filter((todo) => todo.content.includes(Letter))
);
const a = getTodosWithLetter(state, "a"); //cache created
const e = getTodosWithLetter(state, "e"); //cache invalidated
