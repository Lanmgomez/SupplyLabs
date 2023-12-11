import '../Sass/ModalInfos.sass'

const CardsInfos_ByUserID = ({
    ID,
    Nome,
    Sobrenome,
    Idade,
    Email,
    Telefone,
    Website,
    Empresa,
    Endereço,
    Latitude,
    Longitude
}) => {
  return (
    <ul>
        <li><span>ID:</span> {ID}</li>
        <li><span>Nome:</span> {Nome}</li>
        <li><span>Sobrenome:</span> {Sobrenome}</li>
        <li><span>Idade:</span> {Idade}</li>
        <li><span>Email:</span> {Email}</li>
        <li><span>Telefone:</span> {Telefone}</li>
        <li><span>Website:</span> {Website}</li>
        <li><span>Empresa:</span> {Empresa}</li>
        <li><span>Endereço:</span> {Endereço}</li>
        <li><span>Latitude:</span> {Latitude}</li>
        <li><span>Longitude:</span> {Longitude}</li>
    </ul>
  )
}

export default CardsInfos_ByUserID