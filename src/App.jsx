import './Sass/App.sass'
import axios from "axios"
import { useState, useEffect } from 'react'

function App() {

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/users')
    .then(response => { setApiData(response.data), console.log(response.data) })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className='container'>
      {apiData.map((dataUsers) => (
        <div key={dataUsers.id}>
          <ul className='ul-cards-info'>
            <li>
              <span>Id:</span> 
              <li>{dataUsers.id}</li>
            </li>
            <li>
              <span>Nome:</span> 
              <li>{dataUsers.name}</li>
            </li>
            <li>
              <span>Sobrenome:</span> 
              <li>{dataUsers.username}</li>
            </li>
            <li>
              <span>Email:</span> 
              <li>{dataUsers.email}</li>
            </li>
            <li>
              <span>Idade:</span> 
              <li>{dataUsers.age}</li>
            </li>
            <li><button>Ações</button></li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default App
