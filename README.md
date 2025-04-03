# 🏗️ Nest JS clean-arch Backend  

Backend desenvolvido com **NestJS**, **GraphQL** e **MongoDB**, seguindo os princípios da **Clean Architecture**.  

## 🚀 Como rodar o projeto  

### 📌 Pré-requisitos  
Antes de começar, certifique-se de ter instalado:  
- **Node.js** (v18+) → [Download Node.js](https://nodejs.org/)  
- **NestJS CLI** → Instale com:  
  ```sh
  npm install -g @nestjs/cli
  ```  
- **MongoDB** (local ou via Docker)  
  - Se usar Docker, execute:  
    ```sh
    docker run -d --name mongo -p 27017:27017 mongo
    ```  

### 📥 Clonar o repositório  
```sh
git clone https://github.com/Guilherme-devcode/nest-clean-arch-graphql.git
```  

### 📦 Instalar dependências  
```sh
npm install
```  

### ⚙️ Configurar variáveis de ambiente  
Crie um arquivo **.env** na raiz do projeto e adicione:  
```env
MONGO_URI=mongodb://localhost:27017/userdb
PORT=3000
```  

### ▶️ Rodar o projeto  
```sh
npm run start:dev
```  

### 📌 Acessar o GraphQL Playground  
Após iniciar o servidor, acesse:  
👉 [http://localhost:3000/graphql](http://localhost:3000/graphql)  

Se precisar de mais detalhes, me avise! 🚀
