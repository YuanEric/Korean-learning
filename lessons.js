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
  },
{
 "day": 3,
 "phase": 1,
 "title": "Aspirated Consonants & “X is NOT Y”",
 "focus": "Read the four aspirated consonants and negate with 이/가 아니에요.",
 "hangul": {
  "intro": "Korean has plain consonants (Day 2) and their ASPIRATED partners, pronounced with a strong puff of air. Each aspirated letter looks like its plain partner plus an extra stroke. Combine them with the vowels you know to read new blocks.",
  "items": [
   {
    "char": "ㅊ",
    "sound": "ch",
    "note": "aspirated partner of ㅈ (j); a strong 'ch' with air"
   },
   {
    "char": "ㅋ",
    "sound": "k",
    "note": "aspirated partner of ㄱ (g); strong 'k' with air"
   },
   {
    "char": "ㅌ",
    "sound": "t",
    "note": "aspirated partner of ㄷ (d); strong 't' with air"
   },
   {
    "char": "ㅍ",
    "sound": "p",
    "note": "aspirated partner of ㅂ (b); strong 'p' with air"
   }
  ],
  "reading": [
   {
    "block": "차",
    "breakdown": "ㅊ (ch) + ㅏ (a) = cha"
   },
   {
    "block": "커",
    "breakdown": "ㅋ (k) + ㅓ (eo) = keo"
   },
   {
    "block": "타",
    "breakdown": "ㅌ (t) + ㅏ (a) = ta"
   },
   {
    "block": "포",
    "breakdown": "ㅍ (p) + ㅗ (o) = po"
   },
   {
    "block": "카",
    "breakdown": "ㅋ (k) + ㅏ (a) = ka"
   },
   {
    "block": "치",
    "breakdown": "ㅊ (ch) + ㅣ (i) = chi"
   }
  ]
 },
 "grammar": {
  "point": "Noun + 이/가 아니에요 (to NOT be: “is not”)",
  "explanation": "This is the negative of 이에요/예요 from Day 2. Attach the subject particle 이/가 to the noun (이 after a consonant, 가 after a vowel), then add 아니에요. So “(it) is not a student” = 학생이 아니에요, and “(it) is not a chair” = 의자가 아니에요.",
  "examples": [
   {
    "ko": "학생이 아니에요.",
    "en": "(I/he/she) is not a student. (학생 ends in a consonant → 이)"
   },
   {
    "ko": "의자가 아니에요.",
    "en": "It is not a chair. (의자 ends in a vowel → 가)"
   },
   {
    "ko": "한국 사람이 아니에요.",
    "en": "(I) am not Korean."
   },
   {
    "ko": "친구가 아니에요.",
    "en": "(He/she) is not a friend."
   }
  ]
 },
 "vocab": [
  {
   "ko": "차",
   "en": "car / tea",
   "note": "cha"
  },
  {
   "ko": "커피",
   "en": "coffee",
   "note": "keo-pi"
  },
  {
   "ko": "카메라",
   "en": "camera",
   "note": "ka-me-ra"
  },
  {
   "ko": "택시",
   "en": "taxi",
   "note": "taek-si"
  },
  {
   "ko": "치마",
   "en": "skirt",
   "note": "chi-ma"
  },
  {
   "ko": "포도",
   "en": "grape",
   "note": "po-do"
  },
  {
   "ko": "컴퓨터",
   "en": "computer",
   "note": "keom-pyu-teo"
  },
  {
   "ko": "책상",
   "en": "desk",
   "note": "chaek-sang"
  }
 ],
 "exercises": [
  {
   "q": "Read aloud and romanize: 커피",
   "a": "keo-pi (커 + 피) — means “coffee”"
  },
  {
   "q": "Read aloud and romanize: 포도",
   "a": "po-do (포 + 도) — means “grape”"
  },
  {
   "q": "Choose the particle: 친구___ 아니에요 (friend, ends in a vowel)",
   "a": "친구가 아니에요 (가 after a vowel)"
  },
  {
   "q": "Choose the particle: 학생___ 아니에요 (student, ends in a consonant)",
   "a": "학생이 아니에요 (이 after a consonant)"
  },
  {
   "q": "Say “It is not an apple.” (사과 ends in a vowel)",
   "a": "사과가 아니에요."
  }
 ],
 "quiz": [
  {
   "q": "How do you read 타?",
   "options": [
    "da",
    "ta",
    "na",
    "ka"
   ],
   "answer": 1,
   "explain": "ㅌ (t) + ㅏ (a) = ta."
  },
  {
   "q": "ㅋ is the aspirated partner of which plain consonant?",
   "options": [
    "ㄱ (g)",
    "ㄷ (d)",
    "ㅂ (b)",
    "ㅈ (j)"
   ],
   "answer": 0,
   "explain": "ㅋ (k) is the aspirated version of ㄱ (g)."
  },
  {
   "q": "Which particle attaches to a noun ending in a CONSONANT before 아니에요?",
   "options": [
    "가",
    "이",
    "예",
    "는"
   ],
   "answer": 1,
   "explain": "이 follows a consonant; 가 follows a vowel."
  },
  {
   "q": "Pick the correct sentence for “It is not a chair.” (의자 ends in a vowel)",
   "options": [
    "의자이 아니에요",
    "의자가 아니에요",
    "의자예요",
    "의자이에요"
   ],
   "answer": 1,
   "explain": "의자 ends in a vowel, so it takes 가 + 아니에요."
  },
  {
   "q": "What does 학생이 아니에요 mean?",
   "options": [
    "(I) am a student.",
    "(I) am not a student.",
    "(I) am a friend.",
    "It is a chair."
   ],
   "answer": 1,
   "explain": "이 아니에요 negates the noun: “is not a student.”"
  }
 ]
},
  {
    "day": 4,
    "phase": 1,
    "title": "Tense (Double) Consonants & 있어요/없어요",
    "focus": "Read the five tense consonants and say what there is / isn't with 있어요/없어요.",
    "hangul": {
      "intro": "Beyond plain (Day 2) and aspirated (Day 3) consonants, Korean has TENSE (double) consonants. They are written by doubling the plain letter and pronounced tightly and sharply, with a tense throat and NO puff of air. Combine them with your vowels to read new blocks.",
      "items": [
        {
          "char": "ㄲ",
          "sound": "kk",
          "note": "tense version of ㄱ; sharp 'g/k' with a tight throat, no air"
        },
        {
          "char": "ㄸ",
          "sound": "tt",
          "note": "tense version of ㄷ; sharp 'd/t', tight, no air"
        },
        {
          "char": "ㅃ",
          "sound": "pp",
          "note": "tense version of ㅂ; sharp 'b/p', tight, no air"
        },
        {
          "char": "ㅆ",
          "sound": "ss",
          "note": "tense version of ㅅ; strong, hissing 's'"
        },
        {
          "char": "ㅉ",
          "sound": "jj",
          "note": "tense version of ㅈ; sharp 'j', tight, no air"
        }
      ],
      "reading": [
        {
          "block": "까",
          "breakdown": "ㄲ (kk) + ㅏ (a) = kka"
        },
        {
          "block": "떠",
          "breakdown": "ㄸ (tt) + ㅓ (eo) = tteo"
        },
        {
          "block": "빠",
          "breakdown": "ㅃ (pp) + ㅏ (a) = ppa"
        },
        {
          "block": "써",
          "breakdown": "ㅆ (ss) + ㅓ (eo) = sseo"
        },
        {
          "block": "짜",
          "breakdown": "ㅉ (jj) + ㅏ (a) = jja"
        },
        {
          "block": "꼬",
          "breakdown": "ㄲ (kk) + ㅗ (o) = kko"
        }
      ]
    },
    "grammar": {
      "point": "있어요 / 없어요 (there is / have  vs.  there isn't / don't have)",
      "explanation": "있어요 means “there is / exists” or “(I) have.” Its opposite 없어요 means “there isn't / doesn't exist” or “(I) don't have.” The thing you are talking about usually takes the subject particle 이/가 (이 after a consonant, 가 after a vowel). Example: 시간이 있어요 = “(I) have time”; 시간이 없어요 = “(I) don't have time.”",
      "examples": [
        {
          "ko": "시간이 있어요.",
          "en": "(I) have time. / There is time."
        },
        {
          "ko": "시간이 없어요.",
          "en": "(I) don't have time. / There is no time."
        },
        {
          "ko": "친구가 있어요.",
          "en": "(I) have a friend. (친구 ends in a vowel → 가)"
        },
        {
          "ko": "돈이 없어요.",
          "en": "(I) don't have money. (돈 ends in a consonant → 이)"
        }
      ]
    },
    "vocab": [
      {
        "ko": "오빠",
        "en": "older brother (for a female speaker)",
        "note": "o-ppa"
      },
      {
        "ko": "아빠",
        "en": "dad",
        "note": "a-ppa"
      },
      {
        "ko": "꽃",
        "en": "flower",
        "note": "kkot"
      },
      {
        "ko": "빵",
        "en": "bread",
        "note": "ppang"
      },
      {
        "ko": "짜다",
        "en": "to be salty",
        "note": "jja-da"
      },
      {
        "ko": "시간",
        "en": "time",
        "note": "si-gan"
      },
      {
        "ko": "돈",
        "en": "money",
        "note": "don"
      },
      {
        "ko": "있어요",
        "en": "there is / (I) have",
        "note": "i-sseo-yo"
      },
      {
        "ko": "없어요",
        "en": "there isn't / (I) don't have",
        "note": "eop-seo-yo"
      }
    ],
    "exercises": [
      {
        "q": "Read aloud and romanize: 빠",
        "a": "ppa (ㅃ + ㅏ) — sharp, tense 'p', no air"
      },
      {
        "q": "Read aloud and romanize: 꼬",
        "a": "kko (ㄲ + ㅗ)"
      },
      {
        "q": "Choose the particle: 친구___ 있어요 (friend, ends in a vowel)",
        "a": "친구가 있어요 (가 after a vowel)"
      },
      {
        "q": "Choose the particle: 돈___ 없어요 (money, ends in a consonant)",
        "a": "돈이 없어요 (이 after a consonant)"
      },
      {
        "q": "Say “(I) have time.” (시간 ends in a consonant)",
        "a": "시간이 있어요."
      },
      {
        "q": "Say “There is no bread.” (빵 ends in a consonant)",
        "a": "빵이 없어요."
      }
    ],
    "quiz": [
      {
        "q": "How do you read 까?",
        "options": [
          "ka",
          "ga",
          "kka",
          "cha"
        ],
        "answer": 2,
        "explain": "ㄲ (kk) + ㅏ (a) = kka — tense, no puff of air."
      },
      {
        "q": "ㅆ is the tense version of which plain consonant?",
        "options": [
          "ㅅ (s)",
          "ㅈ (j)",
          "ㄷ (d)",
          "ㅂ (b)"
        ],
        "answer": 0,
        "explain": "ㅆ (ss) is the tense/double form of ㅅ (s)."
      },
      {
        "q": "Which word means “(I) don't have / there isn't”?",
        "options": [
          "있어요",
          "없어요",
          "아니에요",
          "이에요"
        ],
        "answer": 1,
        "explain": "없어요 = there isn't / don't have; 있어요 = there is / have."
      },
      {
        "q": "Pick the correct sentence for “(I) have a friend.” (친구 ends in a vowel)",
        "options": [
          "친구이 있어요",
          "친구가 있어요",
          "친구가 없어요",
          "친구예요"
        ],
        "answer": 1,
        "explain": "친구 ends in a vowel → 가, and 있어요 = have."
      },
      {
        "q": "What does 돈이 없어요 mean?",
        "options": [
          "(I) have money.",
          "(I) don't have money.",
          "It is money.",
          "Money is salty."
        ],
        "answer": 1,
        "explain": "없어요 negates existence/possession: “(I) don't have money.”"
      }
    ]
  }
];
