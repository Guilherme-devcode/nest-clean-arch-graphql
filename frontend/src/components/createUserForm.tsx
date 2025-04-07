import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($data: CreateUserDto!) {
    createUser(data: $data)
  }
`;

export function CreateUserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [createUser, { loading, error, data }] =
    useMutation(CREATE_USER_MUTATION);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser({ variables: { data: formData } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Usuário</h2>
      <input
        name="name"
        placeholder="Nome do usuário"
        value={formData.name}
        onChange={handleChange}
        type="text"
        required
      />
      <br />
      <input
        name="email"
        placeholder="Email do usuário"
        value={formData.email}
        onChange={handleChange}
        type="email"
        required
      />
      <br />
      <input
        name="password"
        placeholder="Senha do usuário"
        value={formData.password}
        onChange={handleChange}
        type="password"
        required
      />
      <br />
      <button disabled={loading} type="submit">
        {loading ? "Criando..." : "Criar"}
      </button>
      {data && <p>{data}</p>}
      {error && <p>{error.message}</p>}
    </form>
  );
}
