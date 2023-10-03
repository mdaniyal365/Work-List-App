import { createContext,useContext } from "react";
export const todoContext=createContext({
    todos:[
        {
            id:1,
            todo:"i have to go work",
            completed: false
        }
    ],
    AddTodo:(todo)=>{},
    RemoveTodo:(id)=>{},
    ToggleComplete: (id) => {},
    UpdateTodo:(id,todo)=>{}

    
})

export const useTodo =()=>{
    return useContext(todoContext)
    
}

export const TodoProvider = todoContext.Provider