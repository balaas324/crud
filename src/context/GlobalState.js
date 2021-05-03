import React, { createContext, useReducer, useEffect } from 'react'

import appReducer from './AppReducer';


const initialState = {
    employees: localStorage.getItem('employees')
    ? JSON.parse(localStorage.getItem('employees'))
    : [
        {
            id: 1,
            name: "balazs",
            location: "bp",
            designation: "city"
        }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(state.employees))
    }, [state])


    function addEmployee(employee) {
        dispatch({
            type:"ADD_EMPLOYEE",
            payload: employee
        });
    }

    function editEmployee(employee) {
        dispatch({
            type: "EDIT_EMPLOYEE",
            payload: employee
        })
    }

    function removeEmployee(id) {
        dispatch({
            type: "REMOVE_EMPLOYEE",
            payload: id
        })
    }

    return(
        <GlobalContext.Provider
        value={{
            employees: state.employees,
            addEmployee,
            editEmployee,
            removeEmployee
        }}
        >
            {children}
        </GlobalContext.Provider>
    );
};