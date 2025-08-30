import { useState } from "react"
import { AuthLayout } from "./auth-layout"
import IlustracaoLogin from "@/assets/images/ilustracaoLogin.svg"
import Button from "../button"
import Input from "../input"

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    if (email && password) {
      onSubmit({ email, password })
    }
  }

  return (
    <AuthLayout
      illustration={IlustracaoLogin}
      illustrationAlt="Ilustração Login"
      illustrationWidth={333.25}
      illustrationHeight={267}
      title="Login"
    >
      <div className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          id="login-email"
          autoComplete="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          id="login-password"
          autoComplete="current-password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-left mb-2">
          <Button
            variant="link"
            label="Esqueci a senha!"
            aria-label="Recuperar senha esquecida"
          />
        </div>
        <Button 
          label="Acessar" 
          onClick={handleSubmit} 
          centered 
          aria-label="Fazer login na conta"
        />
      </div>
    </AuthLayout>
  )
}
