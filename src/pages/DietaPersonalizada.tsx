import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Coffee, Utensils, Moon, Cookie } from "lucide-react";

export default function DietaPersonalizada() {
  const [consumedItems, setConsumedItems] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const toggleConsumed = (item: string) => {
    const newConsumed = new Set(consumedItems);
    if (newConsumed.has(item)) {
      newConsumed.delete(item);
    } else {
      newConsumed.add(item);
    }
    setConsumedItems(newConsumed);
  };

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('pt-BR', { month: 'long' });
  const currentDay = currentDate.getDate();
  const currentHour = currentDate.getHours();

  // Dados das refeições
  const refeicoes = [
    {
      id: 'cafe',
      nome: 'Café da Manhã',
      horario: '08:00',
      icone: Coffee,
      itens: [
        'Aveia com frutas',
        'Leite desnatado',
        'Banana',
        'Chia'
      ]
    },
    {
      id: 'almoco',
      nome: 'Almoço',
      horario: '12:00',
      icone: Utensils,
      itens: [
        'Frango grelhado',
        'Arroz integral',
        'Salada verde',
        'Brócolis'
      ]
    },
    {
      id: 'jantar',
      nome: 'Jantar',
      horario: '19:00',
      icone: Moon,
      itens: [
        'Peixe assado',
        'Batata doce',
        'Vegetais refogados',
        'Azeite de oliva'
      ]
    },
    {
      id: 'lanches',
      nome: 'Lanches',
      horario: '15:00',
      icone: Cookie,
      itens: [
        'Iogurte natural',
        'Nozes',
        'Maçã',
        'Chá verde'
      ]
    }
  ];

  // Gerar dias do mês para o calendário
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Dias vazios do início do mês
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  // Função para identificar a próxima refeição baseada na hora atual
  const getNextMeal = () => {
    const mealTimes = [
      { id: 'cafe', hour: 8, name: 'Café da Manhã', time: '08:00' },
      { id: 'almoco', hour: 12, name: 'Almoço', time: '12:00' },
      { id: 'lanches', hour: 15, name: 'Lanche da Tarde', time: '15:00' },
      { id: 'jantar', hour: 19, name: 'Jantar', time: '19:00' }
    ];

    // Se for antes das 8h, próxima refeição é café da manhã
    if (currentHour < 8) {
      return mealTimes[0];
    }
    
    // Se for entre 8h e 12h, próxima refeição é almoço
    if (currentHour >= 8 && currentHour < 12) {
      return mealTimes[1];
    }
    
    // Se for entre 12h e 15h, próxima refeição é lanche da tarde
    if (currentHour >= 12 && currentHour < 15) {
      return mealTimes[2];
    }
    
    // Se for entre 15h e 19h, próxima refeição é jantar
    if (currentHour >= 15 && currentHour < 19) {
      return mealTimes[3];
    }
    
    // Se for após 19h, próxima refeição é café da manhã do próximo dia
    return mealTimes[0];
  };

  const nextMeal = getNextMeal();

  return (
    <div className="min-h-screen bg-medical-bg">
      {/* Cabeçalho */}
      <div className="relative py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Título e Subtítulo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#3B5675] mb-2" style={{ fontSize: '36px' }}>
              Planejador de Dieta
            </h1>
            <p className="text-muted-foreground" style={{ fontSize: '16px' }}>
              Organize suas refeições e mantenha uma alimentação saudável
            </p>
          </div>

          {/* Ícone de Calendário - Canto Superior Direito */}
          <div className="absolute top-8 right-6">
            <div className="flex items-center gap-2 bg-gradient-card border-2 border-[#3B5675] rounded-lg px-3 py-2 shadow-lg">
              <Calendar className="w-6 h-6 text-[#3B5675]" />
              <div className="text-sm">
                <div className="font-medium text-[#3B5675] capitalize">{currentMonth}</div>
                <div className="text-[#3B5675] font-bold">{currentDay}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Corpo Principal - Esquerda */}
          <div className="lg:col-span-2 space-y-6">
            {/* Seção de Informações do Dia */}
            <div className="bg-gradient-card rounded-lg p-5 mb-8 shadow-lg border-0">
              {/* Média Glicêmica */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-[#3B5675] mb-3">Média Glicêmica</h3>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-300"
                    style={{ width: '100%', background: 'linear-gradient(135deg, #3B5675 0%, #CAE5F2 100%)' }}
                  ></div>
                </div>
                <p className="text-sm text-[#3B5675] mt-2">80 mg/dL</p>
              </div>

              {/* Refeições e Próxima Refeição */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Refeições */}
                <div>
                  <h3 className="text-lg font-medium text-[#3B5675] mb-3">Refeições</h3>
                  <div className="space-y-2">
                    {refeicoes.map((refeicao) => {
                      const IconComponent = refeicao.icone;
                      return (
                        <div key={refeicao.id} className="flex items-center gap-2">
                          <IconComponent className="w-5 h-5 text-[#3B5675]" />
                          <span className="text-[#3B5675] font-medium">{refeicao.nome}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Próxima Refeição */}
                <div className="text-center">
                  <h3 className="text-lg font-medium text-[#3B5675] mb-3">Próxima Refeição</h3>
                  <div className="bg-gradient-card rounded-lg p-4 border border-[#3B5675] shadow-lg">
                    <p className="text-2xl font-bold text-[#3B5675]">{nextMeal.time}</p>
                    <p className="text-[#3B5675] font-medium">{nextMeal.name}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plano de Refeições do Dia */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#3B5675]">Plano de Refeições do Dia</h2>
              
              {refeicoes.map((refeicao) => {
                const IconComponent = refeicao.icone;
                return (
                  <div key={refeicao.id} className="bg-gradient-card rounded-lg p-5 shadow-lg border-0">
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="w-6 h-6 text-[#3B5675]" />
                      <h3 className="text-xl font-bold text-[#3B5675]">{refeicao.nome}</h3>
                      <span className="text-[#CAE5F2] font-medium">({refeicao.horario})</span>
                    </div>
                    
                    <div className="space-y-3">
                      {refeicao.itens.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            id={`${refeicao.id}-${index}`}
                            checked={consumedItems.has(`${refeicao.id}-${index}`)}
                            onChange={() => toggleConsumed(`${refeicao.id}-${index}`)}
                            className="w-4 h-4 text-[#3B5675] bg-white border-2 border-[#3B5675] rounded focus:ring-[#3B5675] focus:ring-2"
                          />
                          <label 
                            htmlFor={`${refeicao.id}-${index}`}
                            className={`text-[#3B5675] cursor-pointer transition-colors ${
                              consumedItems.has(`${refeicao.id}-${index}`) 
                                ? 'line-through text-[#CAE5F2]' 
                                : ''
                            }`}
                            style={{ fontSize: '16px' }}
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Calendário - Direita */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-card rounded-lg p-5 sticky top-6 shadow-lg border-0">
              <h3 className="text-xl font-bold text-[#3B5675] mb-4 text-center">
                {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)} {currentDate.getFullYear()}
              </h3>
              
              {/* Cabeçalho dos dias da semana */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-[#3B5675] p-2">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Dias do calendário */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`text-center p-2 rounded-lg transition-colors ${
                      day === null
                        ? 'invisible'
                        : day === currentDay
                        ? 'text-white font-bold'
                        : 'text-[#3B5675] hover:bg-[#CAE5F2]/20 cursor-pointer'
                    }`}
                    style={{
                      minHeight: '40px',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: day === currentDay ? 'linear-gradient(135deg, #3B5675 0%, #CAE5F2 100%)' : 'transparent'
                    }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Voltar */}
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => navigate('/')}
            className="hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #3B5675 0%, #CAE5F2 100%)'
            }}
          >
            Retornar ao menu
          </Button>
        </div>
      </div>
    </div>
  );
}