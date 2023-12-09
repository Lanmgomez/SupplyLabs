import './Sass/App.sass'
import { useState, useEffect } from 'react'
import fetchData from './api/ApiService'
import { apiUrl } from './api/ApiService'

function App() {

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetchData(apiUrl)
      .then(response => { setApiData(response.data) })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='container'>
      {apiData.map((dataUsers) => (
        <div key={dataUsers.id}>
          <ul className='ul-cards-info'>
            <li>
              <span>Id:</span> 
              <p>{dataUsers.id}</p>
            </li>
            <li>
              <span>Nome:</span> 
              <p>{dataUsers.name}</p>
            </li>
            <li>
              <span>Sobrenome:</span> 
              <p>{dataUsers.username}</p>
            </li>
            <li>
              <span>Email:</span> 
              <p>{dataUsers.email}</p>
            </li>
            <li>
              <span>Idade:</span> 
              <p>{dataUsers.age}</p>
            </li>
            <li><button>Ações</button></li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default App
