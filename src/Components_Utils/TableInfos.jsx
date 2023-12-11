import MoreInformationBtn from './MoreInformationBtn'

export const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Nome', dataIndex: 'name', key: 'name' },
  { title: 'Sobrenome', dataIndex: 'username', key: 'username' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Idade', dataIndex: 'age', key: 'age' },
  {
    title: 'Ações',
    key: 'action',
    render: (record) => <MoreInformationBtn record={record} />,
  },
]