import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_COMPLETED } from "../actions/actionTypes";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Pray",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Bath",
      isCompleted: false,
    },
  ],
  isEdit: false,
  editTodoId: ""
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        const { id, title } = action.payload;
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: id,
              title: title,
              isCompleted: false,
            },
          ],
          isEdit: action.isEdit,
        };
      case DELETE_TODO:
        const newTodoList = state.todos.filter((item) => item.id != action.id);
        return {
          ...state,
          todos: newTodoList,
        };
      case EDIT_TODO:
        const editTodo = action.payload;
        let newEditTodo = state?.todos?.find(
          (item) => item?.id === editTodo?.id
        );
        return {
          ...state,
          isEdit: action.isEdit,
          editTodo: newEditTodo,
        };
      case MARK_COMPLETED:
        const { selectedTodoId } = action.payload;
        let allTodos = [];

        selectedTodoId.forEach((id) => {
          allTodos = state.todos.filter((todo) => {
            return todo.id !== id;
          });

          const selectedTodo = state.todos.find((todo) => todo?.id === id);
          selectedTodo.title = selectedTodo?.title;
          selectedTodo.description = selectedTodo?.description;
          selectedTodo.isCompleted = true;
          selectedTodo.isPending = selectedTodo?.isPending;
          allTodos.push(selectedTodo);
        });
         return {
           ...state,
           todos: [...allTodos],
           isEdit: false,
         };
        default:
            return state;
    }
};
