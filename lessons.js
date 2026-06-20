/* =========================================================================
   Korean Learning — curriculum data
   This file holds the roadmap + every lesson. The daily scheduled task
   appends a new object to LESSONS each day. index.html renders from here.
   ========================================================================= */

const CURRICULUM = {
  goal: "TOPIK 5+",
  phases: [
    {
      id: 1,
      name: "Phase 1 · Hangul & Foundations",
      target: "Read & write all Hangul, basic greetings, present tense",
      days: "Days 1–20",
      color: "#6366f1"
    },
    {
      id: 2,
      name: "Phase 2 · Beginner (TOPIK I, level 1)",
      target: "Particles, numbers, ~800 words, everyday conversation",
      days: "Days 21–60",
      color: "#0ea5e9"
    },
    {
      id: 3,
      name: "Phase 3 · Beginner+ (TOPIK I, level 2)",
      target: "Past/future tense, connectors, ~1,500 words",
      days: "Days 61–110",
      color: "#10b981"
    },
    {
      id: 4,
      name: "Phase 4 · Intermediate (TOPIK II, level 3)",
      target: "Honorifics, complex clauses, ~3,000 words, paragraphs",
      days: "Days 111–180",
      color: "#f59e0b"
    },
    {
      id: 5,
      name: "Phase 5 · Upper-Intermediate (TOPIK II, level 4)",
      target: "Idioms, news/essays, formal writing, ~5,000 words",
      days: "Days 181–260",
      color: "#ef4444"
    },
    {
      id: 6,
      name: "Phase 6 · Advanced (TOPIK II, level 5+)",
      target: "Abstract topics, nuanced grammar, exam practice, ~7,000+ words",
      days: "Days 261+",
      color: "#a855f7"
    }
  ]
};

/* Each lesson object:
   { day, phase, title, focus,
     hangul:   { intro, items:[{char, sound, note}], reading:[{block, breakdown}] },
     grammar:  { point, explanation, examples:[{ko, en}] },
     vocab:    [{ko, en, note}],
     exercises:[{q, a}],
     quiz:     [{q, options:[...], answer:index, explain}] }
*/

const LESSONS = [
  {
    day: 1,
    phase: 1,
    title: "Hangul Vowels & Your First Words",
    focus: "Read 6 basic vowels, 4 consonants, and say hello.",
    hangul: {
      intro: "Hangul is built from simple letters combined into syllable blocks. Today: 6 basic vowels and 4 easy consonants. Every Korean syllable starts with a consonant — when a syllable begins with a vowel sound, the silent placeholder ㅇ fills the consonant slot.",
      items: [
        { char: "ㅏ", sound: "a (as in 'father')", note: "vertical line + dash on the right" },
        { char: "ㅓ", sound: "eo (as in 'sun', British 'uh')", note: "dash on the left" },
        { char: "ㅗ", sound: "o (as in 'go')", note: "horizontal line + dash on top" },
        { char: "ㅜ", sound: "u (as in 'moon')", note: "dash on the bottom" },
        { char: "ㅡ", sound: "eu (flat, like 'good' without rounding)", note: "single horizontal line" },
        { char: "ㅣ", sound: "i (as in 'machine')", note: "single vertical line" },
        { char: "ㄱ", sound: "g / k", note: "consonant, shaped like a corner" },
        { char: "ㄴ", sound: "n", note: "consonant, shaped like an L" },
        { char: "ㅁ", sound: "m", note: "consonant, a square mouth" },
        { char: "ㅇ", sound: "silent (initial) / ng (final)", note: "the placeholder circle" }
      ],
      reading: [
        { block: "가", breakdown: "ㄱ (g) + ㅏ (a) = ga" },
        { block: "나", breakdown: "ㄴ (n) + ㅏ (a) = na" },
        { block: "고", breakdown: "ㄱ (g) + ㅗ (o) = go" },
        { block: "무", breakdown: "ㅁ (m) + ㅜ (u) = mu" },
        { block: "이", breakdown: "ㅇ (silent) + ㅣ (i) = i" },
        { block: "어", breakdown: "ㅇ (silent) + ㅓ (eo) = eo" }
      ]
    },
    grammar: {
      point: "Greetings: 안녕하세요 & 감사합니다",
      explanation: "Korean built-in politeness is huge. 안녕하세요 (annyeonghaseyo) is the standard polite 'hello' you can use almost anywhere. 감사합니다 (gamsahamnida) is a formal-polite 'thank you'. You don't conjugate these yet — memorize them as set phrases. Notice 하세요 and 합니다 endings: you'll meet these verb endings again very soon.",
      examples: [
        { ko: "안녕하세요!", en: "Hello! (polite)" },
        { ko: "감사합니다.", en: "Thank you. (formal polite)" },
        { ko: "안녕히 가세요.", en: "Goodbye. (to someone leaving)" },
        { ko: "안녕히 계세요.", en: "Goodbye. (said by the one leaving)" }
      ]
    },
    vocab: [
      { ko: "나", en: "I / me", note: "casual" },
      { ko: "물", en: "water", note: "물 = ㅁ+ㅜ+ㄹ" },
      { ko: "고기", en: "meat", note: "go-gi" },
      { ko: "가구", en: "furniture", note: "ga-gu" },
      { ko: "네", en: "yes", note: "ne" },
      { ko: "아니요", en: "no", note: "a-ni-yo" }
    ],
    exercises: [
      { q: "Read aloud and romanize: 가나", a: "gana (ga + na)" },
      { q: "Read aloud and romanize: 무고", a: "mugo (mu + go)" },
      { q: "Build the block for the sound 'no' (n + o):", a: "노 (ㄴ + ㅗ)" },
      { q: "Build the block for the sound 'gu' (g + u):", a: "구 (ㄱ + ㅜ)" }
    ],
    quiz: [
      { q: "Which vowel makes the 'o' sound as in 'go'?", options: ["ㅏ", "ㅗ", "ㅜ", "ㅓ"], answer: 1, explain: "ㅗ = o. The dash sits on top of the horizontal line." },
      { q: "What does ㅇ do at the START of a syllable?", options: ["Makes a 'k' sound", "Is silent (a placeholder)", "Makes 'ng'", "Makes 'm'"], answer: 1, explain: "Initial ㅇ is silent; it only sounds 'ng' as a final consonant." },
      { q: "How do you read 나?", options: ["ma", "na", "ga", "no"], answer: 1, explain: "ㄴ (n) + ㅏ (a) = na." },
      { q: "Which is the standard polite 'hello'?", options: ["감사합니다", "안녕히 가세요", "안녕하세요", "아니요"], answer: 2, explain: "안녕하세요 is the everyday polite greeting." }
    ]
  }
];
