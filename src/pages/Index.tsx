import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-black tracking-tight">JAPANESE CUISINE</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#sushi" className="text-gray-600 hover:text-red-600 transition-colors">Суши</a>
                <a href="#rolls" className="text-gray-600 hover:text-red-600 transition-colors">Роллы</a>
                <a href="#pizza" className="text-gray-600 hover:text-red-600 transition-colors">Пицца</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <div className="w-8 h-8 bg-white grid grid-cols-3 gap-px">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={`w-full h-full ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`} />
                  ))}
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Заказать
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-wide">
            Аутентичная<br />
            <span className="font-normal text-red-600">Японская Кухня</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Традиционные рецепты, свежие ингредиенты, современная подача
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
              Забронировать стол
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-black mb-4">Наше меню</h3>
            <div className="w-16 h-px bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Суши */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon name="Fish" size={32} className="text-red-600" />
                </div>
                <CardTitle className="text-xl font-normal text-black">Суши</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <h4 className="font-medium text-black">Сяке</h4>
                    <p className="text-sm text-gray-600">Лосось, рис, нори</p>
                  </div>
                  <span className="text-red-600 font-medium">240₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <h4 className="font-medium text-black">Магуро</h4>
                    <p className="text-sm text-gray-600">Тунец, рис, васаби</p>
                  </div>
                  <span className="text-red-600 font-medium">280₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <h4 className="font-medium text-black">Эби</h4>
                    <p className="text-sm text-gray-600">Креветка, рис, нори</p>
                  </div>
                  <span className="text-red-600 font-medium">260₽</span>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-4">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            {/* Роллы */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon name="Layers" size={32} className="text-red-600" />
                </div>
                <CardTitle className="text-xl font-normal text-black">Роллы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <h4 className="font-medium text-black">Филадельфия</h4>
                    <p className="text-sm text-gray-600">Лосось, сыр, огурец</p>
                  </div>
                  <span className="text-red-600 font-medium">420₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <h4 className="font-medium text-black">Калифорния</h4>
                    <p className="text-sm text-gray-600">Краб, авокадо, икра</p>
                  </div>
                  <span className="text-red-600 font-medium">380₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <h4 className="font-medium text-black">Дракон</h4>
                    <p className="text-sm text-gray-600">Угорь, авокадо, соус</p>
                  </div>
                  <span className="text-red-600 font-medium">460₽</span>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-4">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            {/* Пицца */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon name="Cookie" size={32} className="text-red-600" />
                </div>
                <CardTitle className="text-xl font-normal text-black">Пицца</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <h4 className="font-medium text-black">Японская</h4>
                    <p className="text-sm text-gray-600">Лосось, нори, соус терияки</p>
                  </div>
                  <span className="text-red-600 font-medium">650₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <h4 className="font-medium text-black">Темпура</h4>
                    <p className="text-sm text-gray-600">Креветки в темпуре, соус</p>
                  </div>
                  <span className="text-red-600 font-medium">720₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div>
                    <h4 className="font-medium text-black">Унаги</h4>
                    <p className="text-sm text-gray-600">Угорь, авокадо, кунжут</p>
                  </div>
                  <span className="text-red-600 font-medium">780₽</span>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-4">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & QR */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-light text-black mb-8">Контакты и заказ</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div>
              <div className="w-32 h-32 bg-black mx-auto mb-4 flex items-center justify-center">
                <div className="w-24 h-24 bg-white grid grid-cols-6 gap-px">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className={`w-full h-full ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">Сканируйте для заказа</p>
            </div>
            <div className="text-left">
              <div className="space-y-2">
                <p className="flex items-center text-gray-700">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center text-gray-700">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  ул. Примерная, 123, Москва
                </p>
                <p className="flex items-center text-gray-700">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Ежедневно 11:00 - 23:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-lg font-light mb-2">JAPANESE CUISINE</h4>
          <p className="text-gray-400 text-sm">Аутентичная японская кухня в сердце города</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;