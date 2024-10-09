import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TodoListModule = buildModule("TodoListModule", (m) => {
  const todolist = m.contract("TodoList");
 
    return { todolist };
  
});

export default TodoListModule;
