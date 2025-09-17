import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, TrendingUp, Shield, ArrowRight, Utensils, Newspaper, Globe, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/auth-context';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleMonitorClick = () => {
    navigate('/monitor');
  };

  const handleDietaClick = () => {
    navigate('/dieta');
  };

  return (
    <div
      className="min-h-screen bg-medical-bg pt-0"
      style={{
        // Override verdes por azul marinho apenas nesta página
        // Usamos valores HSL, conforme o design system
        // Accent controla partes que antes eram verdes (cards, ícones, gradientes)
        // Success também era verde em alguns ícones
        // Ex.: navy ~ hsl(220 60% 20%)
        // Mantemos o foreground branco para contraste
        // @ts-ignore: CSS custom properties
        '--accent': '220 60% 20%',
        // @ts-ignore: CSS custom properties
        '--accent-foreground': '0 0% 100%',
        // @ts-ignore: CSS custom properties
        '--success': '220 60% 20%',
        // @ts-ignore: CSS custom properties
        '--success-foreground': '0 0% 100%'
      } as React.CSSProperties}
    >
      {/* User Info Section - Canto Superior Direito */}
      {user && (
        <div className="absolute top-6 right-6 z-10 flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
          <img 
            src="/usuario.png" 
            alt="Foto do usuário" 
            className="w-8 h-8 rounded-full object-cover border-2 border-[#044cac]"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">
              Olá, {user.name}!
            </span>
            <span className="text-xs text-gray-500 capitalize">
              Plano {user.plan}
            </span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center">
                <img 
                  src="/glia_logo.png" 
                  alt="GLIA - o futuro da saúde começa com PRECISÃO e excelência" 
                  className="h-72 md:h-[28rem] w-auto"
                  style={{
                    background: 'transparent',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card 
                onClick={handleMonitorClick}
                className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-200 cursor-pointer hover:scale-105 transform"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-[#CAE5F2] rounded-2xl">
                      <Activity className="h-8 w-8 text-[#3B5675]" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-[#3B5675] mb-2">
                    Monitor de Glicose
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Acompanhe seus níveis de glicose em tempo real com monitoramento contínuo e alertas inteligentes.
                  </p>
                  <div className="flex items-center justify-center text-[#3B5675] font-medium">
                    Acessar Monitor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>

              <Card 
                onClick={handleDietaClick}
                className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-all duration-200 cursor-pointer hover:scale-105 transform"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-[#CAE5F2] rounded-2xl">
                      <Utensils className="h-8 w-8 text-[#3B5675]" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-[#3B5675] mb-2">
                    Dieta Personalizada
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Receba recomendações nutricionais personalizadas baseadas no seu perfil glicêmico.
                  </p>
                  <div className="flex items-center justify-center text-[#3B5675] font-medium">
                    Acessar Dieta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-[#3B5675]">
            Recursos Avançados
          </h2>
          <p className="text-lg text-muted-foreground">
            Tecnologia de ponta para o cuidado da sua saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#CAE5F2] rounded-lg">
                  <Activity className="h-6 w-6 text-[#3B5675]" />
                </div>
                <CardTitle className="text-xl">Monitoramento em Tempo Real</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Acompanhe seus níveis de glicose continuamente com atualizações em tempo real e alertas inteligentes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#CAE5F2] rounded-lg">
                  <TrendingUp className="h-6 w-6 text-[#3B5675]" />
                </div>
                <CardTitle className="text-xl">Previsões Inteligentes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                IA avançada prevê seus níveis glicêmicos com 98,5% de precisão para os próximos 60 minutos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#CAE5F2] rounded-lg">
                  <Shield className="h-6 w-6 text-[#3B5675]" />
                </div>
                <CardTitle className="text-xl">Segurança Garantida</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Seus dados são protegidos com criptografia de nível bancário e nunca são compartilhados.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* News Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-[#3B5675]">
            Notícias sobre Diabetes
          </h2>
          <p className="text-lg text-muted-foreground">
            Fique por dentro das últimas descobertas e avanços no tratamento do diabetes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#CAE5F2] rounded-lg">
                  <Newspaper className="h-6 w-6 text-[#3B5675]" />
                </div>
                <CardTitle className="text-xl">Novo Tratamento</CardTitle>
              </div>
              <div className="text-sm text-muted-foreground">
                15 de Janeiro, 2024
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Pesquisadores desenvolvem nova terapia com células-tronco que pode revolucionar o tratamento do diabetes tipo 1.
              </p>
              <div className="text-xs text-[#3B5675] font-medium">
                Leia mais →
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#CAE5F2] rounded-lg">
                  <Globe className="h-6 w-6 text-[#3B5675]" />
                </div>
                <CardTitle className="text-xl">Prevalência Global</CardTitle>
              </div>
              <div className="text-sm text-muted-foreground">
                12 de Janeiro, 2024
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                OMS relata aumento de 15% nos casos de diabetes no mundo em 2023, com foco especial na prevenção.
              </p>
              <div className="text-xs text-[#3B5675] font-medium">
                Leia mais →
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-lg border-0 hover:shadow-xl transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#CAE5F2] rounded-lg">
                  <Users className="h-6 w-6 text-[#3B5675]" />
                </div>
                <CardTitle className="text-xl">Tecnologia Avançada</CardTitle>
              </div>
              <div className="text-sm text-muted-foreground">
                10 de Janeiro, 2024
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Novo sistema de monitoramento contínuo de glicose promete melhorar qualidade de vida de pacientes.
              </p>
              <div className="text-xs text-[#3B5675] font-medium">
                Leia mais →
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default Home;
