import './Sass/App.sass'
import { useState, useEffect } from 'react'
import fetchData from './api/ApiService'
import { api_Url_Ordened_ByID } from './api/ApiService'
import { Table } from 'antd'
import { columns } from './Components_Utils/TableInfos'

function App() {

  const [apiData, setApiData] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const response = await fetchData(api_Url_Ordened_ByID)
        setApiData(response.data)
        setTotalPages(response.data.length)
      } catch (error) {
        console.log(error)
      }
    }
  
    fetchDataAndSetState();
  }, [])

  return (
    <div className='container'>
      <h1>Teste SupplyLabs</h1>
      <Table
        columns={columns}
        dataSource={apiData}
        pagination={{
          pageSize: 5,
          total: totalPages,
        }}
      >
      </Table>
    </div>
  )
}

export default App

