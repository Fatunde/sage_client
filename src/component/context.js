import React, { useReducer, useContext, useEffect, useState } from "react";
import { fetch_people, fetch_character } from "../utilities";

const Context = React.createContext()


export function Contexts(){
    return useContext(Context)
}

export const ACTIONS = {
    SET_LOADING : "SET_LOADING",
    SET_SEARCH_TEXT : "SET_SEARCH_TEXT",
    SET_PEOPLE : "SET_PEOPLE",
    SET_HISTORY : "SET_HISTORY",
    SET_FAVOURITES : "SET_FAVOURITES",
    SET_CHARACTER : "SET_CHARACTER",
    SET_PEOPLE_MEMORY : "SET_PEOPLE_MEMORY"
}

const initialState = {
    search_text: "",
    character: {},
    favourites: [],
    history: [],
    people: [],
    people_memory: [],
    loading: false,
}
const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.SET_LOADING: {
        return {...state, loading: action.payload}
        }
        case ACTIONS.SET_PEOPLE: {
        return {...state, people: action.payload}
        }
        case ACTIONS.SET_PEOPLE_MEMORY: {
        return {...state, people_memory: action.payload}
        }
        case ACTIONS.SET_CHARACTER: {
        return {...state, character: action.payload}
        }
        case ACTIONS.SET_FAVOURITES: {
        return {...state, favourites: action.payload}
        }
        case ACTIONS.SET_SEARCH_TEXT: {
        return {...state, search_text: action.payload}
        }
        default: {
            return state
        }
    }
}



export function ContextProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState)
    const [loading, setLoading] = useState(true)



    const isLoading = (data) => {
        dispatch({type: ACTIONS.SET_LOADING, payload: data})
    }
  


    

    const getStarWars = async () => {
        isLoading(true)
        const people = await fetch_people()
        dispatch({type: ACTIONS.SET_PEOPLE, payload: people})
        dispatch({type: ACTIONS.SET_PEOPLE_MEMORY, payload: people})
        isLoading(false)

    }
    const getCharacter = async (id) => {
        isLoading(true)
        const people = await fetch_character(id)
        dispatch({type: ACTIONS.SET_CHARACTER, payload: people})
        isLoading(false)

    }
    
    const set_favourite = (data, type) => {
        const exist = state.favourites.filter(i => (i.name === data.name))
        const newArr = state.favourites.filter(i => (i.name !== data.name))
        if(type === "add"){
        if(exist.length){
            return
        }else{
            dispatch({type: ACTIONS.SET_FAVOURITES, payload: [data, ...state.favourites]})
        }}else{
            dispatch({type: ACTIONS.SET_FAVOURITES, payload: newArr})
        }
    }
    const search = (searchtext) => {
        if(searchtext){
            const filterData = state.people.filter(
                people => {
                    let peopleLowerCase = (
                        people.name + ' ' + people.mass + ' ' + people.skin_color).toLowerCase();
                        let findTermLowerCase = searchtext.toLowerCase();
                        return peopleLowerCase.indexOf(findTermLowerCase) > -1
                    })
                dispatch({type: ACTIONS.SET_PEOPLE, payload: filterData})
        }else{
            dispatch({type: ACTIONS.SET_PEOPLE, payload: state.people_memory})
        }
    }

    useEffect(() => {
       getStarWars()
       setLoading(false)
    }, [])

    const value = {
        state,
        set_favourite,
        getCharacter,
        isLoading,
        search
    }

    return (
        <Context.Provider value={value}>
            {!loading && children}
        </Context.Provider>
    )
}