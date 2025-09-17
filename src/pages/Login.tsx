import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/auth-context";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";

// Ícones SVG para login social
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();
  
  // Estados do formulário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Validação de email
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handler para mudança do email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  // Handler para quando o usuário sair do campo de email
  const handleEmailBlur = () => {
    if (email && !isValidEmail(email)) {
      setEmailError("Por favor, insira um email válido");
    } else {
      setEmailError("");
    }
  };

  // Handler do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Limpar erro de email
    setEmailError("");
    
    // Validações
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Por favor, insira um email válido");
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simular login (substituir por lógica real)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Extrair nome do email (parte antes do @)
      const name = email.split('@')[0];
      
      // Fazer login usando o contexto de autenticação
      login(name, "grátis"); // Plano padrão
      
      toast({
        title: "Login realizado!",
        description: "Bem-vindo de volta!",
      });

      // Navegar para a página principal (Home)
      navigate("/");
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Verifique suas credenciais e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handler para login social
  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    toast({
      title: `Login com ${provider === 'google' ? 'Google' : 'Facebook'}`,
      description: "Funcionalidade em desenvolvimento.",
    });
  };

  // Handler para esqueci a senha
  const handleForgotPassword = () => {
    toast({
      title: "Recuperar senha",
      description: "Funcionalidade em desenvolvimento.",
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#044cac]/5 to-[#044cac]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#044cac]/5 to-[#044cac]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#044cac]/3 to-[#044cac]/3 rounded-full blur-3xl"></div>
      </div>

      {/* Botão voltar */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-10 bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-white/90 transition-smooth shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </Link>

      <div className="w-full max-w-md relative z-10">
        {/* Card principal */}
        <Card className="bg-white/90 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
          <CardHeader className="text-center space-y-2 pb-8">
            <div className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-2xl flex items-center justify-center shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Bem-vindo de volta
            </CardTitle>
            <CardDescription className="text-gray-600">
              Faça login para acessar sua conta
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Formulário de login */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 text-sm font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    className={`bg-gray-50 border pl-10 h-12 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#044cac]/20 transition-smooth ${
                      emailError 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-[#044cac]'
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {emailError && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {emailError}
                  </p>
                )}
              </div>

              {/* Campo Senha */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 text-sm font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-200 pl-10 pr-10 h-12 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-[#044cac] focus:ring-2 focus:ring-[#044cac]/20 transition-smooth"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-smooth"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Lembrar de mim e Esqueci a senha */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-gray-300 data-[state=checked]:bg-[#044cac] data-[state=checked]:border-[#044cac]"
                    disabled={isLoading}
                  />
                  <Label htmlFor="remember" className="text-gray-600 text-sm">
                    Lembrar de mim
                  </Label>
                </div>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[#044cac] hover:text-[#033a8a] text-sm transition-smooth"
                  disabled={isLoading}
                >
                  Esqueci a senha
                </button>
              </div>

              {/* Botão de login */}
              <Button
                type="submit"
                className="w-full h-12 gradient-hero hover:shadow-glass-hover text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Entrando...
                  </div>
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>

            {/* Separador */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continue com</span>
              </div>
            </div>

            {/* Login Social */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="default"
                onClick={() => handleSocialLogin('google')}
                className="h-12 text-white bg-[#044cac] hover:bg-[#033a8a] border-[#044cac] hover:border-[#033a8a] transition-smooth"
                disabled={isLoading}
              >
                <GoogleIcon />
                <span className="ml-2">Google</span>
              </Button>
              <Button
                type="button"
                variant="default"
                onClick={() => handleSocialLogin('facebook')}
                className="h-12 text-white bg-[#044cac] hover:bg-[#033a8a] border-[#044cac] hover:border-[#033a8a] transition-smooth"
                disabled={isLoading}
              >
                <FacebookIcon />
                <span className="ml-2">Facebook</span>
              </Button>
            </div>

            {/* Link para cadastro */}
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Não tem uma conta?{" "}
                <button
                  type="button"
                  className="text-[#044cac] hover:text-[#033a8a] font-medium transition-smooth"
                  onClick={() => toast({
                    title: "Cadastro",
                    description: "Funcionalidade em desenvolvimento.",
                  })}
                >
                  Cadastre-se
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
