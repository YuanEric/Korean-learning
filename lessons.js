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
,
{
  "day": 5,
  "phase": 1,
  "title": "Y-Vowels (ㅑㅕㅛㅠ), ㅐ/ㅔ & the Topic Particle 은/는",
  "focus": "Read the iotized 'y' vowels and ㅐ/ㅔ, and introduce a topic with 은/는.",
  "hangul": {
    "intro": "You already know the 6 basic vowels. Now meet the 'y' (iotized) vowels: take a basic vowel and add a second short stroke to glide a 'y' sound in front of it. You will also learn ㅐ and ㅔ, two vowels that both sound like the 'e' in 'bed' (in modern speech they are nearly identical). Combine all of these with consonants to read new blocks.",
    "items": [
      {
        "char": "ㅑ",
        "sound": "ya",
        "note": "ㅏ with an extra stroke; 'ya' as in 'yard'"
      },
      {
        "char": "ㅕ",
        "sound": "yeo",
        "note": "ㅓ with an extra stroke; 'yuh', like 'young'"
      },
      {
        "char": "ㅛ",
        "sound": "yo",
        "note": "ㅗ with an extra stroke; 'yo' as in 'yoga'"
      },
      {
        "char": "ㅠ",
        "sound": "yu",
        "note": "ㅜ with an extra stroke; 'yu' as in 'you'"
      },
      {
        "char": "ㅐ",
        "sound": "ae",
        "note": "ㅏ + ㅣ; 'e' as in 'bed'"
      },
      {
        "char": "ㅔ",
        "sound": "e",
        "note": "ㅓ + ㅣ; 'e' as in 'bed' (nearly identical to ㅐ today)"
      }
    ],
    "reading": [
      {
        "block": "야",
        "breakdown": "ㅇ (silent) + ㅑ (ya) = ya"
      },
      {
        "block": "여",
        "breakdown": "ㅇ (silent) + ㅕ (yeo) = yeo"
      },
      {
        "block": "요",
        "breakdown": "ㅇ (silent) + ㅛ (yo) = yo"
      },
      {
        "block": "유",
        "breakdown": "ㅇ (silent) + ㅠ (yu) = yu"
      },
      {
        "block": "개",
        "breakdown": "ㄱ (g) + ㅐ (ae) = gae (dog)"
      },
      {
        "block": "네",
        "breakdown": "ㄴ (n) + ㅔ (e) = ne (yes)"
      }
    ]
  },
  "grammar": {
    "point": "Noun + 은/는 (topic particle: 'as for ___')",
    "explanation": "은/는 marks the TOPIC of a sentence — the thing you are talking about, often translatable as 'as for ___' or simply the subject in English. Use 은 after a noun ending in a consonant, and 는 after a noun ending in a vowel. It also adds a sense of contrast: 저는 학생이에요 ('As for me, I'm a student').",
    "examples": [
      {
        "ko": "저는 학생이에요.",
        "en": "As for me, I am a student."
      },
      {
        "ko": "이름은 민수예요.",
        "en": "(My) name is Minsu."
      },
      {
        "ko": "커피는 맛있어요.",
        "en": "Coffee is delicious."
      },
      {
        "ko": "오빠는 의사예요.",
        "en": "(My) older brother is a doctor."
      }
    ]
  },
  "vocab": [
    {
      "ko": "저",
      "en": "I / me (polite)",
      "note": "humble form of 나"
    },
    {
      "ko": "이름",
      "en": "name",
      "note": "ends in consonant → 이름은"
    },
    {
      "ko": "우유",
      "en": "milk",
      "note": "uses ㅠ: u-yu"
    },
    {
      "ko": "여자",
      "en": "woman",
      "note": "uses ㅕ: yeo-ja"
    },
    {
      "ko": "야구",
      "en": "baseball",
      "note": "uses ㅑ: ya-gu"
    },
    {
      "ko": "개",
      "en": "dog",
      "note": "uses ㅐ"
    },
    {
      "ko": "의사",
      "en": "doctor",
      "note": ""
    },
    {
      "ko": "맛있어요",
      "en": "is delicious / tasty",
      "note": "from 맛 (taste) + 있어요"
    }
  ],
  "exercises": [
    {
      "q": "Read this block aloud and give its sound: 유",
      "a": "yu (ㅇ silent + ㅠ)"
    },
    {
      "q": "Fill in the particle: 저__ 학생이에요. (I am a student)",
      "a": "는 → 저는 (저 ends in a vowel)"
    },
    {
      "q": "Fill in the particle: 이름__ 민수예요. (Name is Minsu)",
      "a": "은 → 이름은 (이름 ends in a consonant ㅁ)"
    },
    {
      "q": "Say 'Coffee is delicious' in Korean.",
      "a": "커피는 맛있어요."
    },
    {
      "q": "Which two vowels both sound like the 'e' in 'bed'?",
      "a": "ㅐ and ㅔ"
    }
  ],
  "quiz": [
    {
      "q": "Which vowel makes the sound 'yo' (as in yoga)?",
      "options": [
        "ㅛ",
        "ㅑ",
        "ㅠ",
        "ㅕ"
      ],
      "answer": 0,
      "explain": "ㅛ is ㅗ with an added stroke = 'yo'."
    },
    {
      "q": "Choose the correct particle: 오빠__ 의사예요.",
      "options": [
        "은",
        "는",
        "이",
        "가"
      ],
      "answer": 1,
      "explain": "오빠 ends in the vowel ㅏ, so it takes 는."
    },
    {
      "q": "Choose the correct particle: 이름__ 민수예요.",
      "options": [
        "는",
        "은",
        "가",
        "를"
      ],
      "answer": 1,
      "explain": "이름 ends in the consonant ㅁ, so it takes 은."
    },
    {
      "q": "What does 은/는 mark in a sentence?",
      "options": [
        "The object",
        "The topic",
        "The location",
        "Possession"
      ],
      "answer": 1,
      "explain": "은/는 is the topic particle — 'as for ___'."
    },
    {
      "q": "How do you read 여?",
      "options": [
        "ya",
        "yo",
        "yeo",
        "yu"
      ],
      "answer": 2,
      "explain": "ㅇ is silent + ㅕ (yeo) = yeo."
    }
  ]
},
{
  "day": 6,
  "phase": 1,
  "title": "W-Vowels (ㅘ ㅝ ㅚ ㅟ ㅙ ㅞ ㅢ) & the Subject Particle 이/가",
  "focus": "Read the 'w' compound vowels and mark the subject of a sentence with 이/가.",
  "hangul": {
    "intro": "The last set of vowels are the 'w' (labialized) vowels, formed by gluing two vowels together so a quick 'w' glides in front. ㅗ or ㅜ leads, then a second vowel follows: ㅗ+ㅏ=ㅘ (wa), ㅜ+ㅓ=ㅝ (wo), ㅗ+ㅐ=ㅙ (wae), ㅜ+ㅔ=ㅞ (we), ㅗ+ㅣ=ㅚ (oe~we), ㅜ+ㅣ=ㅟ (wi). One leftover, ㅢ (ㅡ+ㅣ = 'ui'), is technically not a 'w' vowel but completes the set. With these, you can now read every Korean vowel.",
    "items": [
      {
        "char": "ㅘ",
        "sound": "wa",
        "note": "ㅗ + ㅏ; 'wa' as in 'wand'"
      },
      {
        "char": "ㅝ",
        "sound": "wo",
        "note": "ㅜ + ㅓ; 'wo' as in 'won'"
      },
      {
        "char": "ㅙ",
        "sound": "wae",
        "note": "ㅗ + ㅐ; 'we' as in 'wet'"
      },
      {
        "char": "ㅞ",
        "sound": "we",
        "note": "ㅜ + ㅔ; 'we' (same sound as ㅙ today)"
      },
      {
        "char": "ㅚ",
        "sound": "oe",
        "note": "ㅗ + ㅣ; today pronounced like 'we'"
      },
      {
        "char": "ㅟ",
        "sound": "wi",
        "note": "ㅜ + ㅣ; 'wi' as in 'week'"
      },
      {
        "char": "ㅢ",
        "sound": "ui",
        "note": "ㅡ + ㅣ; glide 'eu' into 'i'"
      }
    ],
    "reading": [
      {
        "block": "와",
        "breakdown": "ㅇ (silent) + ㅘ (wa) = wa (and/with)"
      },
      {
        "block": "워",
        "breakdown": "ㅇ (silent) + ㅝ (wo) = wo"
      },
      {
        "block": "왜",
        "breakdown": "ㅇ (silent) + ㅙ (wae) = wae (why)"
      },
      {
        "block": "위",
        "breakdown": "ㅇ (silent) + ㅟ (wi) = wi (top/above)"
      },
      {
        "block": "의",
        "breakdown": "ㅇ (silent) + ㅢ (ui) = ui (of)"
      },
      {
        "block": "회",
        "breakdown": "ㅎ (h) + ㅚ (oe) = hoe (raw fish)"
      }
    ]
  },
  "grammar": {
    "point": "Noun + 이/가 (subject particle)",
    "explanation": "이/가 marks the SUBJECT — the noun that does the action or is being described, often introducing new information or answering 'who/what?'. Use 이 after a consonant and 가 after a vowel. Compare with 은/는: 은/는 sets the topic ('as for X'), while 이/가 points out the specific subject. A common pattern is 이/가 + 있어요/없어요 ('there is / isn't').",
    "examples": [
      {
        "ko": "고양이가 있어요.",
        "en": "There is a cat."
      },
      {
        "ko": "시간이 없어요.",
        "en": "There is no time."
      },
      {
        "ko": "날씨가 좋아요.",
        "en": "The weather is good."
      },
      {
        "ko": "친구가 와요.",
        "en": "A friend is coming."
      }
    ]
  },
  "vocab": [
    {
      "ko": "고양이",
      "en": "cat",
      "note": "go-yang-i"
    },
    {
      "ko": "시간",
      "en": "time",
      "note": "ends in consonant -> 시간이"
    },
    {
      "ko": "날씨",
      "en": "weather",
      "note": "nal-ssi"
    },
    {
      "ko": "친구",
      "en": "friend",
      "note": "ends in vowel -> 친구가"
    },
    {
      "ko": "왜",
      "en": "why",
      "note": "uses ㅙ"
    },
    {
      "ko": "위",
      "en": "top / above",
      "note": "uses ㅟ"
    },
    {
      "ko": "있어요",
      "en": "there is / to have",
      "note": "existence verb"
    },
    {
      "ko": "없어요",
      "en": "there is not / to not have",
      "note": "opposite of 있어요"
    },
    {
      "ko": "좋아요",
      "en": "is good / nice",
      "note": "from 좋다"
    }
  ],
  "exercises": [
    {
      "q": "Read this block aloud and give its sound: 와",
      "a": "wa (ㅇ silent + ㅘ)"
    },
    {
      "q": "Fill in the particle: 고양이__ 있어요. (There is a cat)",
      "a": "가 -> 고양이가 (고양이 ends in a vowel)"
    },
    {
      "q": "Fill in the particle: 시간__ 없어요. (There is no time)",
      "a": "이 -> 시간이 (시간 ends in the consonant ㄴ)"
    },
    {
      "q": "Say 'The weather is good' in Korean.",
      "a": "날씨가 좋아요."
    },
    {
      "q": "What sound does ㅟ make?",
      "a": "wi (as in 'week')"
    }
  ],
  "quiz": [
    {
      "q": "Which vowel makes the sound 'wa' (as in wand)?",
      "options": [
        "ㅝ",
        "ㅘ",
        "ㅟ",
        "ㅚ"
      ],
      "answer": 1,
      "explain": "ㅘ = ㅗ + ㅏ = 'wa'."
    },
    {
      "q": "Choose the correct particle: 친구__ 와요.",
      "options": [
        "이",
        "가",
        "은",
        "을"
      ],
      "answer": 1,
      "explain": "친구 ends in the vowel ㅜ, so it takes 가."
    },
    {
      "q": "Choose the correct particle: 시간__ 없어요.",
      "options": [
        "가",
        "이",
        "는",
        "를"
      ],
      "answer": 1,
      "explain": "시간 ends in the consonant ㄴ, so it takes 이."
    },
    {
      "q": "What does 이/가 mark in a sentence?",
      "options": [
        "The topic",
        "The subject",
        "The object",
        "The location"
      ],
      "answer": 1,
      "explain": "이/가 is the subject particle, pointing out who or what."
    },
    {
      "q": "How do you read 위?",
      "options": [
        "wa",
        "wo",
        "wi",
        "ui"
      ],
      "answer": 2,
      "explain": "ㅇ silent + ㅟ (wi) = wi."
    }
  ]
},
{
  "day": 7,
  "phase": 1,
  "title": "받침 (Final Consonants) & the Object Particle 을/를",
  "focus": "Read syllables with a bottom consonant (받침) and mark the object of a verb with 을/를.",
  "hangul": {
    "intro": "A 받침 (batchim) is a consonant written at the BOTTOM of a syllable block, e.g. ㅂ under 바 = 밥 (bap, 'rice'). Korean has many spellings but only 7 final SOUNDS. Every batchim collapses into one of these 7 when pronounced: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ. They are unreleased — you stop the air without a strong release. So 밥 ends in a held 'p', and 책 ends in a held 'k'.",
    "items": [
      {
        "char": "ㄱ받침 (악)",
        "sound": "k",
        "note": "ㄱ,ㅋ,ㄲ all become an unreleased 'k': 책 chaek"
      },
      {
        "char": "ㄴ받침 (안)",
        "sound": "n",
        "note": "like 'n' in 'on': 산 san ('mountain')"
      },
      {
        "char": "ㄷ받침 (앋)",
        "sound": "t",
        "note": "ㄷ,ㅌ,ㅅ,ㅈ,ㅊ,ㅎ become unreleased 't': 옷 ot ('clothes')"
      },
      {
        "char": "ㄹ받침 (알)",
        "sound": "l",
        "note": "a soft 'l': 물 mul ('water')"
      },
      {
        "char": "ㅁ받침 (암)",
        "sound": "m",
        "note": "like 'm' in 'ham': 밤 bam ('night')"
      },
      {
        "char": "ㅂ받침 (압)",
        "sound": "p",
        "note": "ㅂ,ㅍ become unreleased 'p': 밥 bap ('rice')"
      },
      {
        "char": "ㅇ받침 (앙)",
        "sound": "ng",
        "note": "like 'ng' in 'song': 강 gang ('river')"
      }
    ],
    "reading": [
      {
        "block": "한국",
        "breakdown": "한 (han: ㅎ+ㅏ+ㄴ) + 국 (guk: ㄱ+ㅜ+ㄱ) = han-guk, 'Korea'"
      },
      {
        "block": "사람",
        "breakdown": "사 (sa) + 람 (ram: ㄹ+ㅏ+ㅁ) = sa-ram, 'person'"
      },
      {
        "block": "읽다",
        "breakdown": "읽 (ik: double batchim ㄹㄱ, here read 'k') + 다 (da) = ik-da, 'to read'"
      }
    ]
  },
  "grammar": {
    "point": "Noun + 을/를 (object particle)",
    "explanation": "을/를 marks the OBJECT — the noun that the action is done TO. Use 을 after a consonant (받침) and 를 after a vowel. Pattern: SUBJECT + OBJECT을/를 + VERB. Korean word order is Subject–Object–Verb, so the verb comes last. In casual speech 을/를 is often dropped, but learn to use it correctly first.",
    "examples": [
      {
        "ko": "밥을 먹어요.",
        "en": "(I) eat rice."
      },
      {
        "ko": "물을 마셔요.",
        "en": "(I) drink water."
      },
      {
        "ko": "책을 읽어요.",
        "en": "(I) read a book."
      },
      {
        "ko": "친구를 만나요.",
        "en": "(I) meet a friend."
      }
    ]
  },
  "vocab": [
    {
      "ko": "밥",
      "en": "rice / meal",
      "note": "ㅂ batchim -> bap"
    },
    {
      "ko": "물",
      "en": "water",
      "note": "ㄹ batchim -> mul"
    },
    {
      "ko": "책",
      "en": "book",
      "note": "ㄱ batchim -> chaek"
    },
    {
      "ko": "사람",
      "en": "person",
      "note": "ㅁ batchim -> saram"
    },
    {
      "ko": "한국",
      "en": "Korea",
      "note": "han-guk"
    },
    {
      "ko": "먹어요",
      "en": "to eat",
      "note": "takes an object with 을/를"
    },
    {
      "ko": "마셔요",
      "en": "to drink",
      "note": "mashyeoyo"
    },
    {
      "ko": "읽어요",
      "en": "to read",
      "note": "ilgeoyo"
    },
    {
      "ko": "만나요",
      "en": "to meet",
      "note": "mannayo"
    }
  ],
  "exercises": [
    {
      "q": "What are the 7 possible final SOUNDS of a 받침?",
      "a": "ㄱ(k), ㄴ(n), ㄷ(t), ㄹ(l), ㅁ(m), ㅂ(p), ㅇ(ng)"
    },
    {
      "q": "Read aloud and give the sound: 밥",
      "a": "bap (ㅂ + ㅏ + ㅂ batchim, unreleased 'p')"
    },
    {
      "q": "Fill in the particle: 책__ 읽어요. (read a book)",
      "a": "을 -> 책을 (책 ends in the consonant ㄱ)"
    },
    {
      "q": "Fill in the particle: 친구__ 만나요. (meet a friend)",
      "a": "를 -> 친구를 (친구 ends in a vowel)"
    },
    {
      "q": "Say 'I drink water' in Korean.",
      "a": "물을 마셔요."
    },
    {
      "q": "What sound does the ㅅ batchim make in 옷?",
      "a": "'t' (unreleased) -> ot"
    }
  ],
  "quiz": [
    {
      "q": "How many distinct final SOUNDS can a 받침 have?",
      "options": [
        "5",
        "7",
        "9",
        "14"
      ],
      "answer": 1,
      "explain": "Many spellings collapse into just 7 final sounds: ㄱㄴㄷㄹㅁㅂㅇ."
    },
    {
      "q": "What is the final sound of 밥?",
      "options": [
        "m",
        "n",
        "p",
        "k"
      ],
      "answer": 2,
      "explain": "ㅂ as a batchim is an unreleased 'p'."
    },
    {
      "q": "Choose the correct particle: 물__ 마셔요.",
      "options": [
        "를",
        "을",
        "이",
        "는"
      ],
      "answer": 1,
      "explain": "물 ends in the consonant ㄹ, so it takes 을."
    },
    {
      "q": "Choose the correct particle: 친구__ 만나요.",
      "options": [
        "을",
        "를",
        "이",
        "은"
      ],
      "answer": 1,
      "explain": "친구 ends in a vowel, so it takes 를."
    },
    {
      "q": "What does 을/를 mark in a sentence?",
      "options": [
        "The subject",
        "The topic",
        "The object",
        "The location"
      ],
      "answer": 2,
      "explain": "을/를 is the object particle — the thing the action is done to."
    }
  ]
},
{
  "day": 8,
  "phase": 1,
  "title": "연음 (Liaison) & the Place/Time Particle 에 with 가다/오다",
  "focus": "Pronounce a 받침 that links to the next syllable, and say where/when you go using 에 + 가요/와요.",
  "hangul": {
    "intro": "You can read every Hangul block now — this lesson polishes pronunciation with 연음 (yeoneum, 'liaison'). When a syllable ends in a 받침 and the NEXT syllable begins with ㅇ (the silent placeholder), the final consonant slides over and is pronounced as that syllable's first sound. So 한국어 ('Korean language') is written han-guk-eo but pronounced han-gu-geo: the ㄱ of 국 moves into the empty ㅇ of 어. This makes speech flow smoothly and is essential for sounding natural.",
    "items": [
      {
        "char": "음악",
        "sound": "eu-mak → 으막",
        "note": "ㅁ of 음 slides into 악: pronounced eu-mak ('music')"
      },
      {
        "char": "한국어",
        "sound": "han-gu-geo",
        "note": "ㄱ of 국 slides into 어: 'Korean language'"
      },
      {
        "char": "있어요",
        "sound": "i-sseo-yo",
        "note": "ㅆ of 있 slides into 어: 'there is/have'"
      },
      {
        "char": "앉아요",
        "sound": "an-ja-yo",
        "note": "the second sound of the ㄵ batchim (ㅈ) slides into 아: 'sit'"
      }
    ],
    "reading": [
      {
        "block": "직업",
        "breakdown": "직 (jik) + 업 (eop) → liaison: ㄱ moves over → ji-geop ('job, occupation')"
      },
      {
        "block": "집에",
        "breakdown": "집 (jip) + 에 (e) → ji-be: 'at/to home' — the ㅂ links into 에"
      }
    ]
  },
  "grammar": {
    "point": "Place/Time particle 에 + 가다/오다 → 가요/와요",
    "explanation": "The particle 에 attaches to a noun to mark a DESTINATION ('to') or a TIME ('at/on'). It is added directly to the noun with no spelling change: 학교 + 에 = 학교에 ('to school'). The two core motion verbs are 가다 ('to go') and 오다 ('to come'). In casual-polite speech their dictionary endings (-다) are replaced: 가다 → 가요, 오다 → 와요. A full sentence follows the order [topic/subject] + [place]에 + [verb]: 저는 학교에 가요 ('I go to school'). For time, 에 marks when: 세 시에 ('at 3 o'clock'), 월요일에 ('on Monday'). Note: 오늘 ('today'), 어제 ('yesterday'), 내일 ('tomorrow') do NOT take 에.",
    "examples": [
      {
        "ko": "저는 학교에 가요.",
        "en": "I go to school."
      },
      {
        "ko": "친구가 집에 와요.",
        "en": "A friend comes to my house."
      },
      {
        "ko": "내일 한국에 가요.",
        "en": "I go to Korea tomorrow. (내일 takes no 에)"
      },
      {
        "ko": "세 시에 카페에 가요.",
        "en": "I go to the cafe at 3 o'clock."
      }
    ]
  },
  "vocab": [
    {
      "ko": "가다",
      "en": "to go",
      "note": "polite: 가요"
    },
    {
      "ko": "오다",
      "en": "to come",
      "note": "polite: 와요"
    },
    {
      "ko": "학교",
      "en": "school",
      "note": "hak-gyo"
    },
    {
      "ko": "집",
      "en": "house, home",
      "note": "with 에 → 집에 (ji-be)"
    },
    {
      "ko": "회사",
      "en": "company, workplace",
      "note": "hoe-sa"
    },
    {
      "ko": "카페",
      "en": "cafe",
      "note": "loanword: ka-pe"
    },
    {
      "ko": "내일",
      "en": "tomorrow",
      "note": "takes NO 에"
    },
    {
      "ko": "오늘",
      "en": "today",
      "note": "takes NO 에"
    },
    {
      "ko": "한국",
      "en": "Korea",
      "note": "han-guk"
    }
  ],
  "exercises": [
    {
      "q": "Add the right particle: '학교__ 가요' (I go to school).",
      "a": "학교에 가요 — 에 marks the destination."
    },
    {
      "q": "Conjugate 오다 into casual-polite form.",
      "a": "와요"
    },
    {
      "q": "Translate: 'A friend comes to the cafe.'",
      "a": "친구가 카페에 와요."
    },
    {
      "q": "Why is '내일에 가요' wrong?",
      "a": "내일 ('tomorrow') is a time word that does NOT take 에. Correct: 내일 가요."
    },
    {
      "q": "Read aloud with liaison: 집에. How is it pronounced?",
      "a": "ji-be (the ㅂ of 집 links into 에)."
    },
    {
      "q": "Translate: 'I go to the company at 9 o'clock.' (9 o'clock = 아홉 시)",
      "a": "저는 아홉 시에 회사에 가요."
    }
  ],
  "quiz": [
    {
      "q": "Which particle marks a destination, as in 'to school'?",
      "options": [
        "은/는",
        "을/를",
        "에",
        "이/가"
      ],
      "answer": 2,
      "explain": "에 marks destination (and time). 학교에 = 'to school'."
    },
    {
      "q": "What is the casual-polite form of 가다?",
      "options": [
        "가요",
        "와요",
        "가다요",
        "가어요"
      ],
      "answer": 0,
      "explain": "가다 → 가요. (오다 → 와요.)"
    },
    {
      "q": "How is 한국어 actually pronounced (liaison)?",
      "options": [
        "han-guk-eo",
        "han-gu-geo",
        "han-gug-o",
        "ha-nguk-eo"
      ],
      "answer": 1,
      "explain": "The ㄱ of 국 slides into the empty ㅇ of 어: han-gu-geo."
    },
    {
      "q": "Which sentence is correct?",
      "options": [
        "저는 집에 와요.",
        "저는 집을 가요.",
        "저는 집 가요에.",
        "저는 집은 가요에."
      ],
      "answer": 0,
      "explain": "Place + 에 + 가요/와요. 집에 와요 = 'come(s) home'."
    },
    {
      "q": "Which time word does NOT take 에?",
      "options": [
        "월요일 (Monday)",
        "세 시 (3 o'clock)",
        "내일 (tomorrow)",
        "아침 (morning)"
      ],
      "answer": 2,
      "explain": "내일/오늘/어제 never take 에; the others can."
    }
  ]
},
  {
    "day": 9,
    "phase": 1,
    "title": "Present-Tense Polite Conjugation: -아요 / -어요 / 해요",
    "focus": "Turn any dictionary verb (-다) into the everyday polite present tense and describe daily actions.",
    "hangul": {
      "intro": "One sound rule helps here: when a verb stem ending in the vowel ㅣ meets the -어요 ending, the two fuse into 여. So 마시다 ('drink') → 마시+어요 → 마셔요 (ma-syeo-yo). Likewise 보다 ('see') → 보+아요 → 봐요, because ㅗ+ㅏ fuse into ㅘ. These contractions keep speech smooth — listen for the glide.",
      "items": [
        {
          "char": "마셔요",
          "sound": "ma-syeo-yo",
          "note": "마시 + 어요: the ㅣ fuses with 어 into 여 ('drink')"
        },
        {
          "char": "봐요",
          "sound": "bwa-yo",
          "note": "보 + 아요: ㅗ+ㅏ fuse into ㅘ ('see, watch')"
        },
        {
          "char": "해요",
          "sound": "hae-yo",
          "note": "하 + 여요 → 해요, the irregular 하다 form ('do')"
        }
      ],
      "reading": [
        {
          "block": "먹어요",
          "breakdown": "먹 (meok) + 어요 → meo-geo-yo: liaison carries ㄱ into 어 ('eat')"
        },
        {
          "block": "좋아요",
          "breakdown": "좋 (jot) + 아요 → jo-a-yo: the ㅎ goes silent before a vowel ('is good / I like it')"
        }
      ]
    },
    "grammar": {
      "point": "The polite present tense: verb stem + 아요 / 어요 (and 하다 → 해요)",
      "explanation": "Every Korean verb listed in a dictionary ends in -다. To speak politely in the present tense, drop -다 to get the STEM, then add one of three endings based on the stem's LAST vowel. (1) If the last vowel is ㅏ or ㅗ, add -아요: 살다 → 살아요 ('live'), 좋다 → 좋아요 ('is good'). (2) For every other vowel, add -어요: 먹다 → 먹어요 ('eat'), 읽다 → 읽어요 ('read'). (3) Any verb ending in 하다 becomes 해요: 공부하다 → 공부해요 ('study'). When the stem ends in a vowel, the two vowels often contract: 가다 → 가요 (ㅏ+ㅏ merge), 보다 → 봐요 (ㅗ+ㅏ→ㅘ), 마시다 → 마셔요 (ㅣ+ㅓ→ㅕ), 오다 → 와요. This single ending also works as a QUESTION — just raise your intonation: 밥 먹어요? ('Are you eating?'). You already met 가요/와요; now you can conjugate hundreds of verbs the same way.",
      "examples": [
        {
          "ko": "저는 밥을 먹어요.",
          "en": "I eat (a meal / rice)."
        },
        {
          "ko": "친구가 커피를 마셔요.",
          "en": "My friend drinks coffee."
        },
        {
          "ko": "저는 한국어를 공부해요.",
          "en": "I study Korean."
        },
        {
          "ko": "오늘 영화를 봐요.",
          "en": "I watch a movie today."
        },
        {
          "ko": "이 책 좋아요?",
          "en": "Is this book good? (same form, rising tone = question)"
        }
      ]
    },
    "vocab": [
      {
        "ko": "먹다",
        "en": "to eat",
        "note": "polite: 먹어요"
      },
      {
        "ko": "마시다",
        "en": "to drink",
        "note": "polite: 마셔요 (contraction)"
      },
      {
        "ko": "읽다",
        "en": "to read",
        "note": "polite: 읽어요 (il-geo-yo)"
      },
      {
        "ko": "보다",
        "en": "to see, watch",
        "note": "polite: 봐요"
      },
      {
        "ko": "하다",
        "en": "to do",
        "note": "polite: 해요 (irregular)"
      },
      {
        "ko": "공부하다",
        "en": "to study",
        "note": "하다-verb: 공부해요"
      },
      {
        "ko": "좋다",
        "en": "to be good, to like",
        "note": "polite: 좋아요 (jo-a-yo)"
      },
      {
        "ko": "자다",
        "en": "to sleep",
        "note": "polite: 자요"
      },
      {
        "ko": "커피",
        "en": "coffee",
        "note": "loanword: keo-pi"
      },
      {
        "ko": "영화",
        "en": "movie",
        "note": "yeong-hwa"
      }
    ],
    "exercises": [
      {
        "q": "Conjugate 먹다 into polite present tense.",
        "a": "먹어요 (stem 먹 has vowel ㅓ → -어요)."
      },
      {
        "q": "Conjugate 좋다 into polite present tense.",
        "a": "좋아요 (stem vowel ㅗ → -아요)."
      },
      {
        "q": "Conjugate 공부하다 into polite present tense.",
        "a": "공부해요 (every 하다 verb → 해요)."
      },
      {
        "q": "Translate: 'My friend drinks coffee.'",
        "a": "친구가 커피를 마셔요."
      },
      {
        "q": "Why does 보다 become 봐요, not 보아요?",
        "a": "The stem vowel ㅗ contracts with the ㅏ of -아요 to form ㅘ → 봐요."
      },
      {
        "q": "Translate: 'I watch a movie today.'",
        "a": "저는 오늘 영화를 봐요. (오늘 takes no 에)"
      }
    ],
    "quiz": [
      {
        "q": "What is the polite present-tense form of 먹다?",
        "options": [
          "먹아요",
          "먹어요",
          "먹해요",
          "먹다요"
        ],
        "answer": 1,
        "explain": "Stem 먹 ends in vowel ㅓ (not ㅏ/ㅗ), so it takes -어요 → 먹어요."
      },
      {
        "q": "Which ending do you add when the stem's last vowel is ㅏ or ㅗ?",
        "options": [
          "-어요",
          "-아요",
          "-해요",
          "-여요"
        ],
        "answer": 1,
        "explain": "ㅏ/ㅗ stems take -아요; all other vowels take -어요."
      },
      {
        "q": "What is the polite present-tense form of 공부하다?",
        "options": [
          "공부하요",
          "공부아요",
          "공부해요",
          "공부어요"
        ],
        "answer": 2,
        "explain": "Any verb ending in 하다 becomes 해요: 공부하다 → 공부해요."
      },
      {
        "q": "Why is 마시다 conjugated as 마셔요?",
        "options": [
          "The ㅣ and ㅓ fuse into ㅕ",
          "It is irregular like 하다",
          "The ㅅ drops out",
          "ㅣ stems take -아요"
        ],
        "answer": 0,
        "explain": "마시 + 어요: the stem-final ㅣ contracts with ㅓ to form 셔 → 마셔요."
      },
      {
        "q": "Which sentence correctly means 'I drink coffee'?",
        "options": [
          "저는 커피를 마시다.",
          "저는 커피를 마셔요.",
          "저는 커피을 마셔요.",
          "저는 커피를 마시어요."
        ],
        "answer": 1,
        "explain": "커피 ends in a vowel → object particle 를, and 마시다 → 마셔요."
      }
    ]
  },
{
  "day": 10,
  "phase": 1,
  "title": "Past-Tense Polite Conjugation: -았어요 / -었어요 / 했어요",
  "focus": "Talk about what you did by turning any verb into the polite past tense.",
  "hangul": {
    "intro": "The past tense adds the marker ㅆ (a tense 'ss' sound) as a 받침 before -어요. When ㅆ sits at the bottom of a syllable and the next syllable starts with ㅇ, liaison carries the sound over: 먹었어요 reads meo-geo-sseo-yo. Listen for that crisp double-s — it signals the past.",
    "items": [
      {
        "char": "갔어요",
        "sound": "ga-sseo-yo",
        "note": "가다 ('go') → past: 가+았어요 contracts to 갔어요"
      },
      {
        "char": "먹었어요",
        "sound": "meo-geo-sseo-yo",
        "note": "먹다 ('eat') → past: 먹+었어요, ㅆ links forward"
      },
      {
        "char": "했어요",
        "sound": "hae-sseo-yo",
        "note": "하다 ('do') → past: the irregular 했어요"
      }
    ],
    "reading": [
      {
        "block": "왔어요",
        "breakdown": "오 (o) + 았어요 → 왔어요 (wa-sseo-yo): ㅗ+ㅏ fuse into ㅘ ('came')"
      },
      {
        "block": "마셨어요",
        "breakdown": "마시 (ma-si) + 었어요 → 마셨어요 (ma-syeo-sseo-yo): ㅣ+어 fuse into 여 ('drank')"
      }
    ]
  },
  "grammar": {
    "point": "The polite past tense: verb stem + 았어요 / 었어요 (and 하다 → 했어요)",
    "explanation": "Forming the past tense uses the SAME vowel rule you learned for the present, with ㅆ added before 어요. Drop -다 to get the stem. (1) If the stem's last vowel is ㅏ or ㅗ, add -았어요: 살다 → 살았어요 ('lived'), 좋다 → 좋았어요 ('was good'). (2) For any other vowel, add -었어요: 먹다 → 먹었어요 ('ate'), 읽다 → 읽었어요 ('read'). (3) 하다 verbs become 했어요: 공부하다 → 공부했어요 ('studied'). The same contractions apply: 가다 → 갔어요, 오다 → 왔어요, 보다 → 봤어요, 마시다 → 마셨어요. Notice the pattern is just present-tense -아요/-어요 with the 요 swapped for ㅆ어요.",
    "examples": [
      {
        "ko": "어제 학교에 갔어요.",
        "en": "I went to school yesterday."
      },
      {
        "ko": "아침을 먹었어요.",
        "en": "I ate breakfast."
      },
      {
        "ko": "친구를 만났어요.",
        "en": "I met a friend."
      },
      {
        "ko": "한국어를 공부했어요.",
        "en": "I studied Korean."
      }
    ]
  },
  "vocab": [
    {
      "ko": "어제",
      "en": "yesterday",
      "note": "common past-tense time word"
    },
    {
      "ko": "아침",
      "en": "morning; breakfast",
      "note": "context tells which meaning"
    },
    {
      "ko": "만나다",
      "en": "to meet",
      "note": "past: 만났어요 (만나+았어요)"
    },
    {
      "ko": "읽다",
      "en": "to read",
      "note": "past: 읽었어요"
    },
    {
      "ko": "보내다",
      "en": "to send; to spend (time)",
      "note": "past: 보냈어요"
    },
    {
      "ko": "끝나다",
      "en": "to end, finish",
      "note": "past: 끝났어요 ('it ended')"
    },
    {
      "ko": "주말",
      "en": "weekend",
      "note": "주(week) + 말(end)"
    },
    {
      "ko": "정말",
      "en": "really, truly",
      "note": "useful intensifier"
    }
  ],
  "exercises": [
    {
      "q": "Conjugate 가다 ('go') into the polite past tense.",
      "a": "갔어요"
    },
    {
      "q": "Conjugate 먹다 ('eat') into the polite past tense.",
      "a": "먹었어요"
    },
    {
      "q": "Conjugate 공부하다 ('study') into the polite past tense.",
      "a": "공부했어요"
    },
    {
      "q": "Say 'I read a book yesterday.' (book = 책)",
      "a": "어제 책을 읽었어요."
    },
    {
      "q": "Say 'The weekend ended.'",
      "a": "주말이 끝났어요."
    },
    {
      "q": "Conjugate 마시다 ('drink') into the polite past tense.",
      "a": "마셨어요"
    }
  ],
  "quiz": [
    {
      "q": "What is the past-tense polite form of 보다 ('see, watch')?",
      "options": [
        "보았어요",
        "봤어요",
        "보여요",
        "봐요"
      ],
      "answer": 1,
      "explain": "보+았어요 contracts (ㅗ+ㅏ→ㅘ) to 봤어요. 봐요 is present tense."
    },
    {
      "q": "Which ending attaches to a stem whose last vowel is ㅓ, like 먹-?",
      "options": [
        "-았어요",
        "-었어요",
        "-했어요",
        "-이에요"
      ],
      "answer": 1,
      "explain": "ㅓ is not ㅏ/ㅗ, so use -었어요: 먹었어요."
    },
    {
      "q": "What does 친구를 만났어요 mean?",
      "options": [
        "I will meet a friend",
        "I meet a friend",
        "I met a friend",
        "I don't meet a friend"
      ],
      "answer": 2,
      "explain": "만났어요 is past tense (만나+았어요), so 'I met a friend.'"
    },
    {
      "q": "Choose the correct past tense of 공부하다 ('study').",
      "options": [
        "공부해요",
        "공부하았어요",
        "공부했어요",
        "공부었어요"
      ],
      "answer": 2,
      "explain": "All 하다 verbs become 했어요 in the past: 공부했어요."
    },
    {
      "q": "In 먹었어요, why does it sound like 'meo-geo-sseo-yo'?",
      "options": [
        "The ㄱ is silent",
        "Liaison carries the ㄱ 받침 into the next syllable",
        "The ㅆ is silent",
        "There is no liaison"
      ],
      "answer": 1,
      "explain": "The ㄱ 받침 of 먹 links onto the following vowel, a regular 연음 (liaison) effect."
    }
  ]
},
{
  "day": 11,
  "phase": 1,
  "title": "Negation: 안 and 못 (don't / can't)",
  "focus": "Say what you don't do and what you can't do, in present and past tense.",
  "hangul": {
    "intro": "못 ('cannot') triggers pronunciation changes. Its ㅅ 받침 becomes a ㄷ-sound, and that ㄷ often tenses or nasalizes the next consonant. Listen for these shifts — they are regular and predictable once your ear knows them.",
    "items": [
      {
        "char": "안",
        "sound": "an",
        "note": "placed BEFORE the verb to mean 'not (do)'"
      },
      {
        "char": "못",
        "sound": "mot",
        "note": "placed before the verb for 'cannot'; final ㅅ → ㄷ sound"
      },
      {
        "char": "못 가요",
        "sound": "mot-ga-yo → [mot-kka-yo]",
        "note": "the ㄷ-sound tenses the following ㄱ to ㄲ"
      }
    ],
    "reading": [
      {
        "block": "안 먹어요",
        "breakdown": "안 (an) + 먹어요 → an-meo-geo-yo ('do not eat'); 안 stays separate"
      },
      {
        "block": "못 와요",
        "breakdown": "못 (mot) + 와요 → [mon-nwa-yo]: the ㄷ-sound before ㅇ/ㄴ nasalizes ('cannot come')"
      }
    ]
  },
  "grammar": {
    "point": "Two negations: 안 (simple 'not / don't') and 못 ('cannot, unable')",
    "explanation": "Korean has two everyday negators, both placed directly before the conjugated verb. (1) 안 expresses simple negation — choosing not to, or a plain 'not': 가요 → 안 가요 ('I don't go'), 먹었어요 → 안 먹었어요 ('I didn't eat'). (2) 못 expresses inability — you want to but can't: 가요 → 못 가요 ('I can't go'), 잤어요 → 못 잤어요 ('I couldn't sleep'). Tense is shown on the verb as usual; 안 and 못 themselves never change. One special case: 하다 verbs split, putting the negator before 하다 — 공부해요 → 공부 안 해요 / 공부 못 해요 ('don't study' / 'can't study'), NOT 안 공부해요. There is also a longer form -지 않아요 (앤=longer negation), but the short 안 form is the most common in speech.",
    "examples": [
      {
        "ko": "오늘은 학교에 안 가요.",
        "en": "I don't go to school today."
      },
      {
        "ko": "고기를 안 먹어요.",
        "en": "I don't eat meat."
      },
      {
        "ko": "너무 바빠서 못 갔어요.",
        "en": "I was too busy, so I couldn't go."
      },
      {
        "ko": "숙제를 아직 못 했어요.",
        "en": "I haven't been able to do the homework yet."
      }
    ]
  },
  "vocab": [
    {
      "ko": "안",
      "en": "not (don't)",
      "note": "simple negation, before the verb"
    },
    {
      "ko": "못",
      "en": "cannot",
      "note": "inability, before the verb"
    },
    {
      "ko": "오늘",
      "en": "today",
      "note": "often takes 은: 오늘은"
    },
    {
      "ko": "고기",
      "en": "meat",
      "note": "닭고기 = chicken, 소고기 = beef"
    },
    {
      "ko": "바쁘다",
      "en": "to be busy",
      "note": "present: 바빠요 (ㅡ drops)"
    },
    {
      "ko": "숙제",
      "en": "homework",
      "note": "숙제하다 = to do homework"
    },
    {
      "ko": "아직",
      "en": "(not) yet, still",
      "note": "pairs with 못/안: 아직 못 했어요"
    },
    {
      "ko": "술",
      "en": "alcohol",
      "note": "술을 못 마셔요 = I can't drink"
    }
  ],
  "exercises": [
    {
      "q": "Make 가요 ('go') mean 'don't go' using 안.",
      "a": "안 가요"
    },
    {
      "q": "Make 먹었어요 ('ate') mean 'didn't eat'.",
      "a": "안 먹었어요"
    },
    {
      "q": "Make 와요 ('come') mean 'cannot come' using 못.",
      "a": "못 와요"
    },
    {
      "q": "Negate 공부해요 ('study') to mean 'don't study'. (mind the 하다 rule)",
      "a": "공부 안 해요"
    },
    {
      "q": "Say 'I couldn't sleep yesterday.' (sleep = 자다 → 잤어요)",
      "a": "어제 못 잤어요."
    },
    {
      "q": "Say 'I can't drink alcohol.'",
      "a": "술을 못 마셔요."
    }
  ],
  "quiz": [
    {
      "q": "Where does 안 go relative to the verb?",
      "options": [
        "after the verb",
        "before the verb",
        "at the end of the sentence",
        "attached to the noun"
      ],
      "answer": 1,
      "explain": "Both 안 and 못 come directly before the conjugated verb."
    },
    {
      "q": "Which means 'I can't go' (unable)?",
      "options": [
        "안 가요",
        "못 가요",
        "가요",
        "갔어요"
      ],
      "answer": 1,
      "explain": "못 expresses inability: 못 가요 = 'can't go'. 안 가요 = 'don't go' (choice)."
    },
    {
      "q": "What is the correct negation of 공부해요 ('study') for 'don't study'?",
      "options": [
        "안 공부해요",
        "공부 안 해요",
        "공부해요 안",
        "못 공부"
      ],
      "answer": 1,
      "explain": "하다 verbs split: the negator goes before 해요 → 공부 안 해요."
    },
    {
      "q": "못 가요 is actually pronounced...",
      "options": [
        "mot-ga-yo",
        "mot-kka-yo",
        "mo-ga-yo",
        "mot-ha-yo"
      ],
      "answer": 1,
      "explain": "The ㅅ→ㄷ sound tenses the following ㄱ to ㄲ: [mot-kka-yo]."
    },
    {
      "q": "What does 너무 바빠서 못 갔어요 mean?",
      "options": [
        "I didn't want to go",
        "I was too busy, so I couldn't go",
        "I will be busy and won't go",
        "I am busy but I'll go"
      ],
      "answer": 1,
      "explain": "못 갔어요 is past inability ('couldn't go'); 바빠서 = 'because (I was) busy'."
    }
  ]
},
{
  "day": 12,
  "phase": 1,
  "title": "Expressing Desire: -고 싶어요 (want to) & ㅎ Aspiration",
  "focus": "Say what you want to do, and hear how ㅎ merges with neighboring consonants.",
  "hangul": {
    "intro": "ㅎ is a quiet, slippery sound. When it meets ㄱ/ㄷ/ㅂ/ㅈ, the two fuse into a single aspirated consonant (격음화): ㅎ+ㄱ→ㅋ, ㅎ+ㄷ→ㅌ, ㅎ+ㅂ→ㅍ, ㅎ+ㅈ→ㅊ. This works in either order. Train your ear: you will hear a puff of air, not a separate 'h'.",
    "items": [
      {
        "char": "좋다",
        "sound": "jot-da → [조타 jo-ta]",
        "note": "ㅎ받침 + ㄷ → ㅌ: 'to be good'"
      },
      {
        "char": "많다",
        "sound": "man-da → [만타 man-ta]",
        "note": "ㄶ받침: the ㅎ aspirates the ㄷ → ㅌ: 'to be many'"
      },
      {
        "char": "축하",
        "sound": "chuk-ha → [추카 chu-ka]",
        "note": "ㄱ + ㅎ → ㅋ: 'congratulation'"
      }
    ],
    "reading": [
      {
        "block": "좋아요",
        "breakdown": "좋 + 아요: here ㅎ sits before a vowel, so it goes SILENT and ㅈ liaises → [조아요 jo-a-yo] ('it's good'). Contrast with 좋다 → [조타]."
      },
      {
        "block": "백화점",
        "breakdown": "백 + 화점: ㄱ + ㅎ → ㅋ, giving [배콰점 bae-kwa-jeom] ('department store')."
      }
    ]
  },
  "grammar": {
    "point": "Verb stem + -고 싶어요 = 'want to (do)'",
    "explanation": "To say you want to DO something, take the verb's dictionary stem (drop -다) and add -고 싶어요. 가다 → 가고 싶어요 ('I want to go'); 먹다 → 먹고 싶어요 ('I want to eat'); 마시다 → 마시고 싶어요 ('I want to drink'). The -고 part never changes — all tense and politeness live on 싶다 at the end: past = -고 싶었어요 ('wanted to'), negative = -고 싶지 않아요 ('don't want to'). One important shift: with -고 싶어요, the object often takes 이/가 instead of 을/를 — 물이 마시고 싶어요 is as natural as 물을 마시고 싶어요. Note: -고 싶어요 is used for the speaker (I) or in questions to 'you'; to report a third person's desire Korean uses -고 싶어해요, which comes later.",
    "examples": [
      {
        "ko": "한국에 가고 싶어요.",
        "en": "I want to go to Korea."
      },
      {
        "ko": "뭐 먹고 싶어요?",
        "en": "What do you want to eat?"
      },
      {
        "ko": "물이 마시고 싶어요.",
        "en": "I want to drink water."
      },
      {
        "ko": "어제 자고 싶었어요.",
        "en": "I wanted to sleep yesterday."
      },
      {
        "ko": "오늘은 일하고 싶지 않아요.",
        "en": "I don't want to work today."
      }
    ]
  },
  "vocab": [
    {
      "ko": "-고 싶어요",
      "en": "want to (do)",
      "note": "attaches to a verb stem"
    },
    {
      "ko": "한국",
      "en": "Korea",
      "note": "한국에 가다 = go to Korea"
    },
    {
      "ko": "쉬다",
      "en": "to rest",
      "note": "쉬고 싶어요 = I want to rest"
    },
    {
      "ko": "여행",
      "en": "travel, trip",
      "note": "여행하다 = to travel"
    },
    {
      "ko": "배우다",
      "en": "to learn",
      "note": "한국어를 배우고 싶어요"
    },
    {
      "ko": "만나다",
      "en": "to meet",
      "note": "친구를 만나고 싶어요"
    },
    {
      "ko": "선물",
      "en": "gift, present",
      "note": "선물을 사고 싶어요"
    },
    {
      "ko": "백화점",
      "en": "department store",
      "note": "pronounced [배콰점]"
    },
    {
      "ko": "축하",
      "en": "congratulations",
      "note": "축하해요! = Congrats!; [추카]"
    }
  ],
  "exercises": [
    {
      "q": "Turn 보다 ('to see') into 'I want to see'.",
      "a": "보고 싶어요"
    },
    {
      "q": "Turn 배우다 ('to learn') into 'I want to learn'.",
      "a": "배우고 싶어요"
    },
    {
      "q": "Say 'I want to meet a friend.' (friend = 친구)",
      "a": "친구를 만나고 싶어요. (or 친구가 만나고 싶어요)"
    },
    {
      "q": "Say 'I wanted to rest.' (past tense)",
      "a": "쉬고 싶었어요."
    },
    {
      "q": "Say 'I don't want to eat today.'",
      "a": "오늘은 먹고 싶지 않아요."
    },
    {
      "q": "How is 좋다 actually pronounced, and why?",
      "a": "[조타] — the ㅎ받침 aspirates the following ㄷ into ㅌ."
    }
  ],
  "quiz": [
    {
      "q": "How do you say 'want to (do)' on a verb?",
      "options": [
        "stem + -고 싶어요",
        "stem + -아요",
        "안 + verb",
        "stem + -었어요"
      ],
      "answer": 0,
      "explain": "Verb stem + -고 싶어요 expresses desire to perform the action."
    },
    {
      "q": "Which means 'I want to go'?",
      "options": [
        "가요",
        "갔어요",
        "가고 싶어요",
        "안 가요"
      ],
      "answer": 2,
      "explain": "가다 → 가 + 고 싶어요 = 가고 싶어요."
    },
    {
      "q": "Where does tense (past) appear in '-고 싶어요'?",
      "options": [
        "on the -고 part",
        "on 싶다 at the end",
        "before the verb",
        "it can't be made past"
      ],
      "answer": 1,
      "explain": "Tense lives on 싶다: -고 싶었어요 = 'wanted to'."
    },
    {
      "q": "How is 좋다 pronounced?",
      "options": [
        "[조다]",
        "[조타]",
        "[졷다]",
        "[조하]"
      ],
      "answer": 1,
      "explain": "ㅎ받침 + ㄷ fuse into the aspirated ㅌ → [조타]."
    },
    {
      "q": "In 좋아요, what happens to the ㅎ?",
      "options": [
        "it becomes ㅋ",
        "it goes silent before the vowel",
        "it tenses the next sound",
        "it nasalizes"
      ],
      "answer": 1,
      "explain": "Before a vowel the ㅎ drops and ㅈ liaises: [조아요]."
    }
  ]
}
];
