import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const giftCards = [
  { id: 1, value: 500, popular: false },
  { id: 2, value: 1000, popular: true },
  { id: 3, value: 2000, popular: false },
  { id: 4, value: 3000, popular: false },
  { id: 5, value: 5000, popular: true },
  { id: 6, value: 10000, popular: false }
];

const faqItems = [
  {
    question: "Как использовать подарочную карту Apple?",
    answer: "Введите код карты в App Store, iTunes Store или Apple Store онлайн. Средства будут добавлены на ваш Apple ID для покупок приложений, музыки, фильмов и устройств Apple."
  },
  {
    question: "Есть ли срок действия у карты?",
    answer: "Подарочные карты Apple не имеют срока действия. Вы можете использовать их в любое время после активации."
  },
  {
    question: "Можно ли использовать карту частями?",
    answer: "Да, вы можете использовать баланс карты постепенно. Остаток средств сохраняется на вашем Apple ID до полного использования."
  },
  {
    question: "В каких странах действуют карты?",
    answer: "Подарочные карты Apple действуют только в стране выпуска. Российские карты работают только в российских магазинах Apple."
  }
];

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" size={24} className="text-primary" />
              <span className="font-semibold text-xl">Apple Gift Card</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-primary transition-colors">Главная</a>
              <a href="#cards" className="text-gray-900 hover:text-primary transition-colors">Подарочные карты</a>
              <a href="#purchase" className="text-gray-900 hover:text-primary transition-colors">Покупка карт</a>
              <a href="#faq" className="text-gray-900 hover:text-primary transition-colors">Вопросы и ответы</a>
            </div>
            <Button size="sm" className="hidden md:block">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Подарочные карты
              <br />
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Apple
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Идеальный подарок для любого случая. Дарите возможность выбора из миллионов приложений, игр, музыки и многого другого.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 rounded-full">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Купить сейчас
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section id="cards" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Выберите номинал</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              От 500 до 10 000 рублей. Все карты доступны для мгновенной доставки на email.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <Card 
                key={card.id}
                className={`relative cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  selectedCard === card.id ? 'ring-2 ring-primary shadow-2xl' : ''
                } ${card.popular ? 'border-primary border-2' : 'border-gray-200'}`}
                onClick={() => setSelectedCard(card.id)}
              >
                {card.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярно
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-full h-48 mb-4 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center text-white">
                      <Icon name="Gift" size={48} className="mx-auto mb-4 opacity-90" />
                      <div className="text-2xl font-light">Apple</div>
                      <div className="text-sm opacity-90">Gift Card</div>
                    </div>
                    <div className="absolute top-4 right-4 text-white/80 text-lg font-medium">
                      ₽{card.value.toLocaleString()}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-semibold text-gray-900">
                    ₽{card.value.toLocaleString()}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Мгновенная доставка на email
                  </p>
                  <Button 
                    className="w-full rounded-full font-medium"
                    variant={selectedCard === card.id ? "default" : "outline"}
                  >
                    {selectedCard === card.id ? 'Выбрано' : 'Выбрать'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {selectedCard && (
            <div className="mt-12 text-center fade-in">
              <Card className="max-w-md mx-auto">
                <CardContent className="p-8">
                  <Icon name="CheckCircle" size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Карта выбрана!</h3>
                  <p className="text-gray-600 mb-6">
                    Номинал: ₽{giftCards.find(c => c.id === selectedCard)?.value.toLocaleString()}
                  </p>
                  <Button size="lg" className="w-full rounded-full">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Перейти к оплате
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light text-gray-900 mb-8">Как купить</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MousePointer" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Выберите номинал</h3>
              <p className="text-gray-600">Выберите подходящий номинал от 500 до 10 000 рублей</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CreditCard" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Оплатите</h3>
              <p className="text-gray-600">Безопасная оплата картой или другими способами</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Получите код</h3>
              <p className="text-gray-600">Код карты придет на email в течение нескольких минут</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Вопросы и ответы</h2>
            <p className="text-lg text-gray-600">
              Ответы на популярные вопросы о подарочных картах Apple
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-2xl px-6 py-2"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gift" size={24} className="text-primary" />
                <span className="font-semibold text-xl">Apple Gift Card</span>
              </div>
              <p className="text-gray-600">
                Подарочные карты Apple для покупки приложений, музыки, фильмов и устройств Apple.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Продукты</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-primary transition-colors">App Store</a>
                <a href="#" className="block text-gray-600 hover:text-primary transition-colors">iTunes Store</a>
                <a href="#" className="block text-gray-600 hover:text-primary transition-colors">Apple Music</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Поддержка</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-primary transition-colors">Помощь</a>
                <a href="#" className="block text-gray-600 hover:text-primary transition-colors">Контакты</a>
                <a href="#" className="block text-gray-600 hover:text-primary transition-colors">Статус заказа</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Icon name="Mail" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Icon name="Phone" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 Apple Gift Card. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;