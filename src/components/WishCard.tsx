import { useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

const wishes = [
  { icon: Heart, text: "May your heart overflow with love and happiness! 💕", color: "text-primary" },
  { icon: Star, text: "Wishing you a year full of dreams coming true! ✨", color: "text-gold" },
  { icon: Sparkles, text: "May every day sparkle with joy and wonder! 🌟", color: "text-lavender" },
  { icon: Heart, text: "Here's to new adventures and beautiful memories! 🎊", color: "text-peach" },
  { icon: Star, text: "May 2026 bring you prosperity and success! 🌈", color: "text-mint" },
];

export const WishCard = () => {
  const [currentWish, setCurrentWish] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);

  const revealNextWish = () => {
    setIsRevealing(true);
    setTimeout(() => {
      setCurrentWish((prev) => (prev + 1) % wishes.length);
      setIsRevealing(false);
    }, 300);
  };

  const wish = wishes[currentWish];
  const IconComponent = wish.icon;

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className={`card-cute transition-all duration-300 ${
          isRevealing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`${wish.color} animate-bounce-gentle`}>
            <IconComponent size={48} strokeWidth={1.5} />
          </div>
          <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
            {wish.text}
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button onClick={revealNextWish} className="btn-cute group">
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
            Get Another Wish
            <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
          </span>
        </button>
      </div>
    </div>
  );
};
