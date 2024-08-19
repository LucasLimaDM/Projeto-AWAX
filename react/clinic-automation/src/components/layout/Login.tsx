export default function Login() {
  return (
    <div className="w-96 h-96 flex flex-col gap-12">
      <h2 className="text-3xl">Acesse sua conta</h2>

      <form action="#" className="flex flex-col gap-8">

        <div className="flex flex-col">
          <label htmlFor="login-email">Email:</label>
          <input 
          type="text" 
          placeholder="Digite seu email"
          id="login-email"
          className="border rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="login-password">Senha:</label>
          <input 
          type="password" 
          placeholder="Digite sua senha"
          id="login-password"
          className="border rounded-md"
          />
          <p className="text-gray-500">Esqueceu a senha? <a href="#" className="font-semibold text-gray-600">Recupere aqui</a></p>
        </div>

        <input 
        type="submit" 
        value="Entrar" 
        className="bg-teal-500 hover:bg-[#0cb09c]  text-white rounded-md font-semibold"
        style={{transition: 'background-color 0.5s'}}
        />
      </form>
    </div>
  )
}
