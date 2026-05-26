# 💸 fintrack-api

> API REST para controle de transações financeiras pessoais.

---

## 📌 Sobre

A **fintrack-api** permite registrar e consultar transações financeiras de crédito e débito. Cada usuário é identificado automaticamente por um cookie de sessão, garantindo que cada um visualize apenas suas próprias transações.

Projeto desenvolvido com foco em boas práticas de desenvolvimento, validação de dados e segurança.

---

## ✅ Requisitos do projeto

### Funcionais

- [x] O usuário deve poder criar uma transação
- [x] O usuário deve poder obter um extrato da sua conta
- [x] O usuário deve poder listar todas as transações que já ocorreram
- [x] O usuário deve poder visualizar uma transação única

### Regras de Negócio

- [x] A transação pode ser do tipo crédito, que soma ao valor total, ou débito, que subtrai
- [x] Deve ser possível identificar o usuário entre as requisições
- [x] O usuário só pode visualizar transações que ele criou

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Knex.js](https://knexjs.org/)
- [SQLite3](https://www.sqlite.org/)
- [Zod](https://zod.dev/)

---

## 🛠️ Como rodar localmente

### Pré-requisitos

- Node.js >= 18
- npm

### Passo a passo

**1. Clone o repositório**

```bash
git clone https://github.com/barbosalukas/fintrack-api.git
cd fintrack-api
```

**2. Instale as dependências**

```bash
npm install
```

**3. Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

Edite o `.env`:

```env
NODE_ENV=development
DATABASE_URL=./db/app.db
PORT=3333
```

**4. Execute as migrations**

```bash
npm run knex -- migrate:latest
```

**5. Inicie o servidor**

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333`

---

## 📡 Rotas

### Transações

| Método | Rota                    | Descrição                   | Auth |
| ------ | ----------------------- | --------------------------- | ---- |
| `GET`  | `/transactions`         | Lista todas as transações   | ✅   |
| `GET`  | `/transactions/:id`     | Busca uma transação pelo ID | ✅   |
| `GET`  | `/transactions/summary` | Retorna o saldo total       | ✅   |
| `POST` | `/transactions`         | Cria uma nova transação     | ❌   |

> ✅ Requer cookie de sessão (`sessionId`)

### Exemplo — POST `/transactions`

**Request body:**

```json
{
  "title": "Salário",
  "amount": 5000,
  "type": "credit"
}
```

**Response:** `201 Created`

---

## 🗂️ Estrutura do projeto

```
fintrack-api/
├── db/
│   └── migration/          # Migrations do banco de dados
├── src/
│   ├── middlewares/        # Middlewares de autenticação
│   ├── routes/
│   │   └── transactions.ts # Rotas de transações
│   ├── @types/             # Type augmentation do Knex
│   ├── database.ts         # Configuração do Knex
│   ├── env.ts              # Validação de variáveis de ambiente
│   └── server.ts           # Inicialização do servidor
├── .env.example
├── knexfile.ts
├── package.json
└── tsconfig.json
```

---

## 👨‍💻 Autor

**Lukas Barbosa Oliveira**
