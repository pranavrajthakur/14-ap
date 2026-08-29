export interface MemoryCard {
  id: string;
  title: string;
  tag: string;
  hindiText: string;
  englishSub: string;
  accentColor: string;
  iconName: string;
}

export interface PhotoItem {
  id: string;
  emoji: string;
  badge: string;
  caption: string;
  aspect: "tall" | "wide" | "square";
  subCaption?: string;
  gradient: string;
  glowColor: string;
}

export const relationshipConfig = {
  from: "Aditya",
  to: "Shibya",

  tagline: "for the girl who still has my heart",

  heroText: "there's something I want to tell you",

  memories: [
    {
      id: "stupid-conversations",
      title: "OUR STUPID CONVERSATIONS",
      tag: "Memory #01",
      hindiText: "Woh random random baatein jo actually kisi kaam ki nahi hoti thi...",
      englishSub: "but phir bhi tumse baat karna achha lagta tha.",
      accentColor: "from-rose-500/20 to-pink-500/10",
      iconName: "MessageCircleHeart"
    },
    {
      id: "annoyed-face",
      title: "YOUR ANNOYED FACE",
      tag: "Memory #02",
      hindiText: "Haan haan... mujhe pata hai. Kabhi-kabhi meri wajah se jo expression aata hai tumhare face pe...",
      englishSub: "woh mujhe deserve bhi hota hai. 😭",
      accentColor: "from-amber-500/20 to-rose-500/10",
      iconName: "Smile"
    },
    {
      id: "little-fights",
      title: "OUR LITTLE FIGHTS",
      tag: "Memory #03",
      hindiText: "Choti si baat. Thodi si nok-jhok. Phir attitude.",
      englishSub: "Aur phir somehow... hum phir baat kar hi lete the.",
      accentColor: "from-purple-500/20 to-pink-500/10",
      iconName: "Flame"
    },
    {
      id: "name-on-phone",
      title: "YOUR NAME ON MY PHONE",
      tag: "Memory #04",
      hindiText: "Pata nahi kyun,",
      englishSub: "but tumhara naam screen pe dekh ke mood automatically thoda better ho jata tha.",
      accentColor: "from-rose-600/20 to-red-500/10",
      iconName: "Smartphone"
    },
    {
      id: "just-you",
      title: "JUST YOU",
      tag: "Memory #05",
      hindiText: "Tumhari presence. Bas.",
      englishSub: "Uske liye koi fancy explanation nahi hai.",
      accentColor: "from-pink-500/20 to-rose-400/10",
      iconName: "Sparkles"
    }
  ] as MemoryCard[],

  photos: [
    {
      id: "photo-1",
      emoji: "💖",
      badge: "FAVOURITE MEMORY",
      caption: "one of my favourite memories",
      subCaption: "A quiet moment I still hold close to my heart.",
      gradient: "from-[#3b0d1e] via-[#240815] to-[#12040c]",
      glowColor: "rgba(226, 125, 150, 0.35)",
      aspect: "tall"
    },
    {
      id: "photo-2",
      emoji: "✨",
      badge: "PURE JOY",
      caption: "this one still makes me smile",
      subCaption: "You, being effortlessly cute and radiant as always.",
      gradient: "from-[#2d1b08] via-[#1a0e05] to-[#0c0602]",
      glowColor: "rgba(237, 211, 190, 0.35)",
      aspect: "wide"
    },
    {
      id: "photo-3",
      emoji: "🫶",
      badge: "EFFORTLESS",
      caption: "I wish I could go back to this moment",
      subCaption: "When everything felt simple, warm and perfect.",
      gradient: "from-[#2a0a22] via-[#1b0616] to-[#0d030b]",
      glowColor: "rgba(212, 136, 156, 0.35)",
      aspect: "tall"
    },
    {
      id: "photo-4",
      emoji: "📸",
      badge: "UNFILTERED",
      caption: "just us.",
      subCaption: "No filter, no noise, just you and me.",
      gradient: "from-[#330811] via-[#1e040a] to-[#0d0205]",
      glowColor: "rgba(255, 182, 193, 0.35)",
      aspect: "square"
    },
    {
      id: "photo-5",
      emoji: "💫",
      badge: "LAUGHTER",
      caption: "the laughter we shared",
      subCaption: "That exact smile I miss every single day.",
      gradient: "from-[#1c0a2e] via-[#10051c] to-[#08020e]",
      glowColor: "rgba(192, 132, 252, 0.35)",
      aspect: "wide"
    },
    {
      id: "photo-6",
      emoji: "🌹",
      badge: "MAGIC",
      caption: "unfiltered magic",
      subCaption: "Proof that we belong together.",
      gradient: "from-[#360914] via-[#21050c] to-[#0e0205]",
      glowColor: "rgba(244, 63, 94, 0.35)",
      aspect: "tall"
    }
  ] as PhotoItem[],

  thingsIMiss: [
    "Talking to you for no reason.",
    "Sending you random things.",
    "Your random reactions.",
    "The stupid jokes.",
    "Getting annoyed at each other.",
    "Making up.",
    "Just knowing you're there."
  ],

  music: "/audio/our-song.mp3",

  secretNote: {
    ps: "P.S. You're still my favourite notification. ❤️",
    sub: "Don't tell anyone. 😭"
  }
};
