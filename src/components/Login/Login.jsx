import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación, como una llamada a la API
    // En este ejemplo, solo simularemos un inicio de sesión exitoso si el usuario y la contraseña no están vacíos
    if (username.trim() !== "" && password.trim() !== "") {
      setLoggedIn(true);
    }
  };

  return (
    <div className="dark:bg-gray-950 dark:text-white">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">
        Iniciar Sesión Administrador
      </h1>
      {loggedIn ? (
        <div className="flex justify-center border border-sky-500 py-2 my-10 mx-10">
          ¡Inicio de sesión exitoso! Bienvenido, {username}!
        </div>
      ) : (
        <form onSubmit={handleLogin} className="my-10 mx-10">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Usuario Administrador
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
          >
            Iniciar Sesión
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
