import axios from "axios"

export const apiUrl = "http://localhost:5000/users?_start=0&_end=5&_sort=age&_order=asc"

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