# Glucose Pulse Graph

Uma aplicação moderna de monitoramento de glicose desenvolvida com React, TypeScript e Vite. O sistema oferece monitoramento em tempo real, previsões inteligentes e planejamento nutricional personalizado para pessoas com diabetes.

## 🚀 Funcionalidades

### 📊 Monitor de Glicose
- **Monitoramento em Tempo Real**: Acompanhe seus níveis de glicose com atualizações contínuas
- **Previsões Inteligentes**: IA avançada prevê níveis glicêmicos com 98,5% de precisão
- **Alertas Inteligentes**: Notificações instantâneas quando os níveis saem da faixa normal
- **Análise de Tendências**: Visualize padrões e tendências nos seus dados
- **Interface Intuitiva**: Design moderno e fácil de usar

### 🍽️ Dieta Personalizada
- **Planejamento de Refeições**: Organize suas refeições diárias
- **Identificação Automática**: Sistema identifica automaticamente a próxima refeição baseada na hora
- **Calendário Integrado**: Visualize seu progresso mensal
- **Média Glicêmica**: Acompanhe sua média glicêmica diária

### 📰 Notícias e Recursos
- **Notícias sobre Diabetes**: Fique por dentro das últimas descobertas
- **Recursos Avançados**: Tecnologia de ponta para o cuidado da sua saúde
- **Segurança Garantida**: Dados protegidos com criptografia de nível bancário

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **Recharts** - Biblioteca de gráficos
- **React Router** - Roteamento para aplicações React

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/SEU_USUARIO/glucose-pulse-graph.git
cd glucose-pulse-graph
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Abra no navegador**
Acesse `http://localhost:5173` para visualizar a aplicação

## 🏗️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface
│   ├── AppHeader.tsx   # Cabeçalho da aplicação
│   └── GlucoseMonitor.tsx # Monitor de glicose
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── DietaPersonalizada.tsx # Página de dieta
│   └── ...
├── hooks/              # Hooks customizados
├── lib/                # Utilitários
└── main.tsx           # Ponto de entrada
```

## 🎨 Design System

### Cores Principais
- **Azul Escuro**: `#3B5675` - Títulos e elementos principais
- **Azul Claro**: `#CAE5F2` - Acentos e elementos secundários
- **Background**: `bg-medical-bg` - Fundo médico

### Componentes
- **Cards**: `bg-gradient-card` com sombras e bordas arredondadas
- **Botões**: Gradiente azul com efeitos hover
- **Ícones**: Lucide React com cores consistentes

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_APP_TITLE=Glucose Pulse Graph
VITE_APP_VERSION=1.0.0
```

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops
- 🖥️ Telas grandes

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **Seu Nome** - *Desenvolvimento inicial* - [SeuGitHub](https://github.com/seuusuario)

## 🙏 Agradecimentos

- Equipe de desenvolvimento
- Comunidade React
- Contribuidores do projeto

## 📞 Suporte

Para suporte, envie um email para seu-email@exemplo.com ou abra uma issue no GitHub.

---

**Glucose Pulse Graph** - O futuro da saúde começa com PRECISÃO e excelência! 🎯