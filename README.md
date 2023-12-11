npm installs:

-npm i antd -D sass axios json-server

Para rodar o projeto que foi criado com o pacote vite:
-npm run dev

Para rodar a API no Json-Server:

Adicionar no arquivo 'package.json', ao diretório -> Debug (Ou Depurar) / scripts , a linha:
"backend": "json-server --watch src/api/db.json --port 5000"

Abrir um novo terminal e rodar:
-npm run backend

Instalando o Jest para rodar os testes:

-npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/preset-react @testing-library/react jest-environment-jsdom @testing-library/jest-dom react-test-renderer

Adicionar no arquivo 'package.json', ao diretório -> Debug (Ou Depurar) / scripts , a linha:
"test": "jest"

Adicionar no arquivo 'package.json' o objeto :
"jest": {
    "testEnvironment": "jsdom"
},

Para rodar o teste, abrir um novo terminal e rodar:
-npm test