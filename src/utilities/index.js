import { get } from "axios"
const url = "https://swapi.dev/api/"



export const fetch_people = async () => {
 const response = await get(`${url}people`)
 return response.data.results
}

export const fetch_character = async (id) => {
 const response = await get(`${url}people/${id}`)
 return response.data
}