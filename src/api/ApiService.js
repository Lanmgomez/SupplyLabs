import axios from "axios"

export const apiUrl = "http://localhost:5000/users/"
export const api_Url_Ordened_ByID = "http://localhost:5000/users?_start=0&_end=20&_sort=id&_order=asc"

const fetchData = async (url) => {
  try {
    const response = await axios.get(url)
    return response
  } catch (error) {
    console.error("Erro na requisição:", error)
    throw error
  }
}

export default fetchData