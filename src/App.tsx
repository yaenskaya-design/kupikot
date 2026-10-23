import { useState, useEffect, useRef, useCallback } from 'react';
import { cats, Cat } from './data/cats';

type Screen = 'start' | 'game' | 'result';

interface RoundResult {
  cat: Cat;
  userGuess: number;
  correctPrice: number;
  diff: number;
  points: number;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getPoints(diff: number, price: number): number {
  const ratio = diff / price;
  if (ratio <= 0.05) return 100;
  if (ratio <= 0.10) return 80;
  if (ratio <= 0.15) return 60;
  if (ratio <= 0.25) return 40;
  if (ratio <= 0.40) return 20;
  if (ratio <= 0.60) return 10;
  return 5;
}

function getCategory(totalPoints: number): { title: string; emoji: string; description: string } {
  if (totalPoints >= 900) return { title: "Кошачий Магнат", emoji: "👑", description: "Вы знаете цену пушистому счастью лучше самих заводчиков!" };
  if (totalPoints >= 750) return { title: "Опытный Фелинолог", emoji: "🏆", description: "Вы отлично разбираетесь в кошачьем рынке. Котята вас уважают!" };
  if (totalPoints >= 600) return { title: "Кото-Эксперт", emoji: "🎓", description: "Хорошее чутьё! Вы почти не ошибаетесь в ценах на мурлык." };
  if (totalPoints >= 450) return { title: "Любитель Котиков", emoji: "😺", description: "Вы неплохо ориентируетесь, но есть куда расти!" };
  if (totalPoints >= 300) return { title: "Начинающий Котовладелец", emoji: "🐱", description: "Вы пока не уверены в ценах, но ваш путь к мастерству начат!" };
  if (totalPoints >= 150) return { title: "Котопутник", emoji: "🐾", description: "Вы только знакомитесь с миром породистых котят. Вперёд!" };
  return { title: "Дворовый Кот", emoji: "😸", description: "Вы пока не очень представляете цены, но каждый котик прекрасен!" };
}

function formatPrice(price: number): string {
  return price.toLocaleString('ru-RU') + ' ₽';
}

// Cat ears SVG component
function CatEars() {
  return (
    <div className="flex justify-center -mt-1">
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
        <path d="M15 40 L5 5 L25 25 Z" fill="#cc8a60" />
        <path d="M65 40 L75 5 L55 25 Z" fill="#cc8a60" />
        <path d="M17 35 L10 12 L24 27 Z" fill="#f5d5c0" />
        <path d="M63 35 L70 12 L56 27 Z" fill="#f5d5c0" />
      </svg>
    </div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
      <div
        className="h-2 rounded-full transition-all duration-300"
        style={{ width: `${(current / total) * 100}%`, backgroundColor: '#cc8a60' }}
      />
    </div>
  );
}

function StartScreen({ onStart }: { onStart: () => void }) {
  const galleryCats = shuffleArray(cats).slice(0, 6);
  
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-6 bg-gradient-to-b from-amber-50 to-white">
      <CatEars />
      <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-sm mt-2">
        <h1 className="text-3xl font-bold text-center mb-2" style={{ color: '#cc8a60' }}>
          🐱 Купикот
        </h1>
        <p className="text-center text-gray-600 text-sm mb-4">
          Угадай цену породистого котёнка! Сможешь ли ты определить стоимость пушистого счастья по фото?
        </p>
        
        {/* Gallery */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {galleryCats.map((cat) => (
            <div key={cat.id} className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={cat.photo}
                alt={cat.breed}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Sample description */}
        <div className="bg-amber-50 rounded-xl p-3 mb-4">
          <p className="text-xs text-gray-500 mb-1">Пример:</p>
          <p className="text-sm font-medium" style={{ color: '#cc8a60' }}>{galleryCats[0]?.breed}</p>
          <p className="text-xs text-gray-600 mt-1">{galleryCats[0]?.description}</p>
        </div>

        <p className="text-center text-gray-500 text-xs mb-4">
          10 раундов • Бегунок цены • Система баллов
        </p>

        <button
          onClick={onStart}
          className="w-full py-4 rounded-2xl text-white font-bold text-lg shadow-md active:scale-95 transition-transform"
          style={{ backgroundColor: '#cc8a60' }}
        >
          🎮 Запустить игру
        </button>
      </div>

      <footer className="mt-auto pt-6 text-center text-xs text-gray-400">
        <p>Купикот © 2026 • Симулятор торгов</p>
      </footer>
    </div>
  );
}

function GameScreen({ 
  roundCats, 
  onFinish 
}: { 
  roundCats: Cat[]; 
  onFinish: (results: RoundResult[]) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState(10000);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [animateSlider, setAnimateSlider] = useState(true);
  const sliderRef = useRef<HTMLInputElement>(null);
  
  const currentCat = roundCats[currentIndex];
  const maxPrice = 200000;

  useEffect(() => {
    if (animateSlider) {
      // Animate slider hint: briefly move to middle then back
      setGuess(100000);
      const timer = setTimeout(() => {
        setGuess(10000);
        setAnimateSlider(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, animateSlider]);

  const handleAnswer = useCallback(() => {
    setAnswered(true);
    const diff = Math.abs(guess - currentCat.price);
    const points = getPoints(diff, currentCat.price);
    const newResult: RoundResult = {
      cat: currentCat,
      userGuess: guess,
      correctPrice: currentCat.price,
      diff,
      points,
    };
    setResults(prev => [...prev, newResult]);
  }, [guess, currentCat]);

  const handleNext = useCallback(() => {
    if (currentIndex < roundCats.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setAnswered(false);
      setGuess(5000);
      setAnimateSlider(true);
    } else {
      onFinish([...results]);
    }
  }, [currentIndex, roundCats.length, results, onFinish]);

  const getResultMessage = (diff: number, userGuess: number, correctPrice: number): string => {
    if (diff === 0) return "🎯 Идеально! Точно в цель!";
    if (userGuess >= correctPrice * 3) {
      return `🏠 Вы можете купить семейство из ${Math.floor(userGuess / correctPrice)} котят!`;
    }
    if (userGuess > correctPrice) {
      return `💰 Вы назвали больше на ${formatPrice(diff)}. Можно было сэкономить!`;
    } else {
      return `😿 Вам не хватает ${formatPrice(diff)} на этого пушистика`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-4 py-4 bg-gradient-to-b from-amber-50 to-white">
      <CatEars />
      
      {/* Progress */}
      <div className="w-full max-w-sm mx-auto mt-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-500">Раунд {currentIndex + 1} из {roundCats.length}</span>
          <span className="text-xs font-medium" style={{ color: '#cc8a60' }}>
            {results.reduce((sum, r) => sum + r.points, 0)} очков
          </span>
        </div>
        <ProgressBar current={currentIndex + 1} total={roundCats.length} />
      </div>

      {/* Card */}
      <div className="flex-1 flex flex-col items-center w-full max-w-sm mx-auto">
        <div className="bg-white rounded-3xl shadow-lg w-full overflow-hidden">
          {/* Photo */}
          <div className="aspect-[4/3] bg-gray-100 relative">
            <img
              src={currentCat.photo}
              alt={currentCat.breed}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-xs font-medium" style={{ color: '#cc8a60' }}>
                {currentCat.breed}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="p-4">
            <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
              {currentCat.description}
            </p>
          </div>

          {/* Slider */}
          <div className="px-4 pb-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">0 ₽</span>
              <span className="text-lg font-bold" style={{ color: '#cc8a60' }}>
                {formatPrice(guess)}
              </span>
              <span className="text-xs text-gray-400">200 000 ₽</span>
            </div>
            <input
              ref={sliderRef}
              type="range"
              min="0"
              max={maxPrice}
              step="1000"
              value={guess}
              onChange={(e) => setGuess(Number(e.target.value))}
              disabled={answered}
              className="w-full h-2 rounded-full appearance-none cursor-pointer disabled:opacity-50"
              style={{
                background: `linear-gradient(to right, #cc8a60 0%, #cc8a60 ${(guess / maxPrice) * 100}%, #e5e7eb ${(guess / maxPrice) * 100}%, #e5e7eb 100%)`,
                transition: animateSlider ? 'all 0.5s ease' : 'none'
              }}
            />
            {animateSlider && (
              <p className="text-center text-xs text-gray-400 mt-1 animate-pulse-soft">
                ← Потяни бегунок →
              </p>
            )}
          </div>

          {/* Answer section */}
          <div className="px-4 pb-4">
            {!answered ? (
              <button
                onClick={handleAnswer}
                className="w-full py-3 rounded-2xl text-white font-bold shadow-md active:scale-95 transition-transform"
                style={{ backgroundColor: '#cc8a60' }}
              >
                Оценить 🐾
              </button>
            ) : (
              <div className="space-y-3">
                {/* Result message */}
                <div className="bg-amber-50 rounded-xl p-3 text-center">
                  <p className="text-sm font-medium text-gray-800">
                    {getResultMessage(
                      Math.abs(guess - currentCat.price),
                      guess,
                      currentCat.price
                    )}
                  </p>
                </div>

                {/* Correct answer */}
                <div className="flex items-center justify-between bg-green-50 rounded-xl p-3">
                  <div>
                    <p className="text-xs text-gray-500">Правильная цена:</p>
                    <p className="text-lg font-bold text-green-700">{formatPrice(currentCat.price)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Баллы:</p>
                    <p className="text-lg font-bold" style={{ color: '#cc8a60' }}>
                      +{results[results.length - 1]?.points || 0}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full py-3 rounded-2xl text-white font-bold shadow-md active:scale-95 transition-transform"
                  style={{ backgroundColor: '#cc8a60' }}
                >
                  {currentIndex < roundCats.length - 1 ? 'Далее →' : 'Результат 🏆'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-4 text-center text-xs text-gray-400">
        <p>Купикот © 2026</p>
      </footer>
    </div>
  );
}

function ResultScreen({ results, onRestart }: { results: RoundResult[]; onRestart: () => void }) {
  const totalPoints = results.reduce((sum, r) => sum + r.points, 0);
  const category = getCategory(totalPoints);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-6 bg-gradient-to-b from-amber-50 to-white">
      <CatEars />
      
      <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-sm mt-2">
        <div className="text-center mb-4">
          <div className="text-5xl mb-2">{category.emoji}</div>
          <h2 className="text-2xl font-bold" style={{ color: '#cc8a60' }}>
            {category.title}
          </h2>
          <p className="text-sm text-gray-600 mt-2">{category.description}</p>
        </div>

        {/* Score */}
        <div className="bg-amber-50 rounded-2xl p-4 text-center mb-4">
          <p className="text-sm text-gray-500">Итого баллов</p>
          <p className="text-4xl font-bold" style={{ color: '#cc8a60' }}>{totalPoints}</p>
          <p className="text-xs text-gray-400">из 1000 возможных</p>
        </div>

        {/* Round details */}
        <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
          {results.map((r, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
              <img
                src={r.cat.photo}
                alt=""
                className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-800 truncate">{r.cat.breed}</p>
                <p className="text-xs text-gray-500">
                  {formatPrice(r.userGuess)} → {formatPrice(r.correctPrice)}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-xs font-bold" style={{ color: '#cc8a60' }}>
                  +{r.points}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onRestart}
          className="w-full py-4 rounded-2xl text-white font-bold text-lg shadow-md active:scale-95 transition-transform"
          style={{ backgroundColor: '#cc8a60' }}
        >
          🔄 Играть снова
        </button>
      </div>

      <footer className="mt-auto pt-6 text-center text-xs text-gray-400">
        <p>Купикот © 2026 • Симулятор торгов</p>
      </footer>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [roundCats, setRoundCats] = useState<Cat[]>([]);
  const [results, setResults] = useState<RoundResult[]>([]);

  const startGame = useCallback(() => {
    const selected = shuffleArray(cats).slice(0, 10);
    setRoundCats(selected);
    setResults([]);
    setScreen('game');
  }, []);

  const finishGame = useCallback((gameResults: RoundResult[]) => {
    setResults(gameResults);
    setScreen('result');
  }, []);

  const restart = useCallback(() => {
    setScreen('start');
    setResults([]);
  }, []);

  return (
    <div className="font-sans">
      {screen === 'start' && <StartScreen onStart={startGame} />}
      {screen === 'game' && <GameScreen roundCats={roundCats} onFinish={finishGame} />}
      {screen === 'result' && <ResultScreen results={results} onRestart={restart} />}
    </div>
  );
}
