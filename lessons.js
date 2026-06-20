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
  },
  {
    day: 2,
    phase: 1,
    title: "More Consonants & “X is Y”",
    focus: "Read 6 new consonants and say what something is with 이에요/예요.",
    hangul: {
      intro: "Today adds six common consonants. Combine them with the vowels from Day 1 to read new syllables. Remember the block pattern: consonant + vowel, with the vowel placed to the right (for ㅏㅓㅣ) or underneath (for ㅗㅜㅡ).",
      items: [
        { char: "ㄷ", sound: "d / t", note: "like ㄴ with an extra top stroke" },
        { char: "ㄹ", sound: "r / l", note: "a flap between R and L" },
        { char: "ㅂ", sound: "b / p", note: "shaped like a cup" },
        { char: "ㅅ", sound: "s (sh before i)", note: "like a tent" },
        { char: "ㅈ", sound: "j", note: "ㅅ with a top line" },
        { char: "ㅎ", sound: "h", note: "a hat over a circle" }
      ],
      reading: [
        { block: "다", breakdown: "ㄷ (d) + ㅏ (a) = da" },
        { block: "라", breakdown: "ㄹ (r) + ㅏ (a) = ra" },
        { block: "보", breakdown: "ㅂ (b) + ㅗ (o) = bo" },
        { block: "시", breakdown: "ㅅ (sh) + ㅣ (i) = shi" },
        { block: "주", breakdown: "ㅈ (j) + ㅜ (u) = ju" },
        { block: "하", breakdown: "ㅎ (h) + ㅏ (a) = ha" }
      ]
    },
    grammar: {
      point: "Noun + 이에요/예요 (to be: “is/am/are”)",
      explanation: "To say “(something) is (a noun)”, attach 이에요/예요 to the noun. Use 이에요 when the noun ends in a consonant, and 예요 when it ends in a vowel. This is the polite everyday form. Korean usually drops the subject when it’s obvious, so 학생이에요 alone can mean “(I/he/she) is a student.”",
      examples: [
        { ko: "학생이에요.", en: "(I) am a student. (학생 ends in consonant ㅇ→ㅇ sound, takes 이에요)" },
        { ko: "의자예요.", en: "It’s a chair. (의자 ends in a vowel, takes 예요)" },
        { ko: "한국 사람이에요.", en: "(I) am Korean. / a Korean person." },
        { ko: "사과예요.", en: "It’s an apple." }
      ]
    },
    vocab: [
      { ko: "학생", en: "student", note: "hak-saeng" },
      { ko: "사람", en: "person", note: "sa-ram" },
      { ko: "한국", en: "Korea", note: "han-guk" },
      { ko: "책", en: "book", note: "chaek" },
      { ko: "의자", en: "chair", note: "ui-ja" },
      { ko: "사과", en: "apple", note: "sa-gwa" },
      { ko: "친구", en: "friend", note: "chin-gu" }
    ],
    exercises: [
      { q: "Read aloud and romanize: 다리", a: "dari (da + ri) — means “bridge/leg”" },
      { q: "Read aloud and romanize: 하루", a: "haru (ha + ru) — means “one day”" },
      { q: "Choose the ending: 친구___ (friend, ends in vowel)", a: "친구예요 (예요 after a vowel)" },
      { q: "Choose the ending: 책___ (book, ends in consonant)", a: "책이에요 (이에요 after a consonant)" },
      { q: "Say “It’s an apple.”", a: "사과예요." }
    ],
    quiz: [
      { q: "How do you read 보?", options: ["ba", "bo", "po", "mo"], answer: 1, explain: "ㅂ (b) + ㅗ (o) = bo." },
      { q: "Which ending attaches to a noun ending in a VOWEL?", options: ["이에요", "예요", "합니다", "하세요"], answer: 1, explain: "예요 follows a vowel; 이에요 follows a consonant." },
      { q: "Pick the correct sentence for “It’s a chair.” (의자 ends in a vowel)", options: ["의자이에요", "의자예요", "의자입니까", "의자아니요"], answer: 1, explain: "의자 ends in the vowel ㅏ, so it takes 예요." },
      { q: "Which consonant makes an r/l sound?", options: ["ㄷ", "ㄹ", "ㅂ", "ㅎ"], answer: 1, explain: "ㄹ is the r/l flap." },
      { q: "What does 학생이에요 mean?", options: ["It’s a book.", "(I) am a student.", "(I) am a friend.", "It’s Korea."], answer: 1, explain: "학생 = student; 이에요 = is/am. Subject is dropped." }
    ]
  }
];
