import { useState, useEffect } from 'react'
import { Button, Modal } from 'antd'
import fetchData from '../api/ApiService'
import '../Sass/ModalInfos.sass'
import { apiUrl } from '../api/ApiService'

const ModalInfos = ({ record }) => {

const [isModalOpen, setIsModalOpen] = useState(false)
const [infoDataByUser, setInfoDataByUser] = useState(null)

const showModal = () => {
    setIsModalOpen(true)
}

const handleModalOk = () => {
    setIsModalOpen(false)
}

const handleCancelModal = () => {
    setIsModalOpen(false)
}

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
            <ul>
                <li><span>ID:</span> {infoDataByUser.id}</li>
                <li><span>Nome:</span> {infoDataByUser.name}</li>
                <li><span>Sobrenome:</span> {infoDataByUser.username}</li>
                <li><span>Idade:</span> {infoDataByUser.age}</li>
                <li><span>Email:</span> {infoDataByUser.email}</li>
                <li><span>Telefone:</span> {infoDataByUser.phone}</li>
                <li><span>Website:</span> {infoDataByUser.website}</li>
                <li><span>Empresa:</span> {`
                  ${infoDataByUser.company.name}, 
                  ${infoDataByUser.company.catchPhrase}, 
                  ${infoDataByUser.company.bs}, 
                `}</li>
                <li><span>Endereço:</span> {`
                    ${infoDataByUser.address.street}, 
                    ${infoDataByUser.address.suite}, 
                    ${infoDataByUser.address.city}, 
                    ${infoDataByUser.address.zipcode}`}
                </li>
                <li><span>Latitude:</span> {infoDataByUser.address.geo.lat}</li>
                <li><span>Longitude:</span> {infoDataByUser.address.geo.lng}</li>
            </ul>
        )}
    </Modal>
    </>
  )
}

export default ModalInfos