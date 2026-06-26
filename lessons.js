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
}
];
