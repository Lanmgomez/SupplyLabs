import { useState, useEffect } from 'react'
import { Button, Modal } from 'antd'
import fetchData from '../api/ApiService'
import { apiUrl } from '../api/ApiService'
import GoogleMaps from './GoogleMaps'
import CardsInfos_ByUserID from './CardsInfos_ByUserID'

const MoreInformationBtn = ({ record }) => {

const [isModalOpen, setIsModalOpen] = useState(false)
const [infoDataByUser, setInfoDataByUser] = useState(null)

const showModal = () => { setIsModalOpen(true) }
const handleModalOk = () => { setIsModalOpen(false) }
const handleCancelModal = () => { setIsModalOpen(false) }

const fetchInfoDataByID = async (id) => {
  try {
    const response = await fetchData(`${apiUrl}${id}`)
    setInfoDataByUser(response.data)

  } catch (error) {
    console.error('Erro na requisição:', error)
  }
}

useEffect(() => {
  if (isModalOpen && record) {
    fetchInfoDataByID(record.id)
  }
}, [isModalOpen, record])

  return (
  <>
    <Button onClick={showModal}>
      Mais Informações
    </Button>
    <Modal 
      title="Informações" 
      open={isModalOpen} 
      onOk={handleModalOk} 
      onCancel={handleCancelModal}
    >
    {infoDataByUser && (
      <>
        <CardsInfos_ByUserID 
          ID={infoDataByUser.id}
          Nome={infoDataByUser.name}
          Sobrenome={infoDataByUser.username}
          Idade={infoDataByUser.age}
          Email={infoDataByUser.email}
          Telefone={infoDataByUser.phone}
          Website={infoDataByUser.website}
          Empresa={`
            ${infoDataByUser.company.name}, 
            ${infoDataByUser.company.catchPhrase}, 
            ${infoDataByUser.company.bs}, 
          `}
          Endereço={`
            ${infoDataByUser.address.street}, 
            ${infoDataByUser.address.suite}, 
            ${infoDataByUser.address.city}, 
            ${infoDataByUser.address.zipcode}
          `}
          Latitude={infoDataByUser.address.geo.lat}
          Longitude={infoDataByUser.address.geo.lng}
        />
        <GoogleMaps 
          latitude={infoDataByUser.address.geo.lat} 
          longitude={infoDataByUser.address.geo.lng}
        />
      </>
    )}
    </Modal>
  </>
  )
}

export default MoreInformationBtn