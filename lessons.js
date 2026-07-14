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
,
{
  "day": 13,
  "phase": 1,
  "title": "Sino-Korean Numbers & ㄴ-Insertion",
  "focus": "Count with Sino-Korean numbers (일~백) for money, phone numbers, and dates; hear how ㄴ gets inserted between certain syllables.",
  "hangul": {
    "intro": "When a syllable ending in a consonant is followed by 이/야/여/요/유, Korean often inserts an extra ㄴ sound between them (ㄴ첨가). This new ㄴ can then trigger nasalization (비음화) on the batchim before it. The number 육 ('six') is the classic trigger — watch it change the sound of everything before it.",
    "items": [
      {
        "char": "육",
        "sound": "yuk (alone) → [-nyuk] after a batchim",
        "note": "'six'; when it follows a closed syllable, a ㄴ is inserted before it"
      },
      {
        "char": "공",
        "sound": "gong",
        "note": "'zero' — used only for phone numbers/serial digits, not 영 (the math 'zero')"
      },
      {
        "char": "백",
        "sound": "baek",
        "note": "'hundred'; its ㄱ받침 nasalizes to ㅇ when a ㄴ sound follows"
      }
    ],
    "reading": [
      {
        "block": "십육",
        "breakdown": "십(sip) + 육(yuk) → ㄴ is inserted before 육: 십+닉. Then 십's ㅂ받침 nasalizes to ㅁ before that ㄴ → [심뉵] (16, 'sixteen')."
      },
      {
        "block": "백육",
        "breakdown": "백(baek) + 육(yuk) → ㄴ inserted: 백+닉. Then 백's ㄱ받침 nasalizes to ㅇ before the ㄴ → [뱅뉵] (106)."
      }
    ]
  },
  "grammar": {
    "point": "Sino-Korean numbers 일(1)~백(100), used for money, phone numbers, dates, and minutes",
    "explanation": "Korean has two full number systems. Today's is Sino-Korean (from Chinese characters): 일 1, 이 2, 삼 3, 사 4, 오 5, 육 6, 칠 7, 팔 8, 구 9, 십 10. Teens just add onto 십: 십일 11, 십이 12, 십삼 13 ... 십구 19. Tens are digit+십: 이십 20, 삼십 30, 사십 40, 오십 50, 육십 60, 칠십 70, 팔십 80, 구십 90. 100 is simply 백. Build any number by chaining: 이십삼 (2-10-3) = 23, 백육 (100-6) = 106. Sino-Korean numbers are required for won amounts (원), phone numbers (read digit by digit, using 공 for zero), calendar dates (월 month + 일 day), and minutes (분). The other system, native Korean numbers (하나, 둘, 셋...), is used for counting objects, age, and o'clock hours — that comes in a later lesson, so for now assume any bare number is Sino-Korean.",
    "examples": [
      {
        "ko": "이거 백 원이에요.",
        "en": "This is 100 won."
      },
      {
        "ko": "전화번호가 공일공에 이삼사에 오육칠팔이에요.",
        "en": "The phone number is 010-234-5678."
      },
      {
        "ko": "오늘은 칠월 일 일이에요.",
        "en": "Today is July 1st."
      },
      {
        "ko": "지금 십 분이에요.",
        "en": "It's 10 minutes (past) right now."
      },
      {
        "ko": "저는 이 층에 있어요.",
        "en": "I'm on the 2nd floor."
      }
    ]
  },
  "vocab": [
    {
      "ko": "얼마",
      "en": "how much",
      "note": "이거 얼마예요? = How much is this?"
    },
    {
      "ko": "원",
      "en": "won (currency)",
      "note": "attaches directly after the number: 백 원"
    },
    {
      "ko": "전화번호",
      "en": "phone number",
      "note": "read digit-by-digit with Sino-Korean numbers"
    },
    {
      "ko": "공",
      "en": "zero",
      "note": "used in phone/serial numbers instead of 영"
    },
    {
      "ko": "월",
      "en": "month (calendar)",
      "note": "칠월 = July (literally '7-month')"
    },
    {
      "ko": "일",
      "en": "day (of month) / one",
      "note": "same syllable as the number 'one'; context tells them apart"
    },
    {
      "ko": "분",
      "en": "minute",
      "note": "십 분 = 10 minutes"
    },
    {
      "ko": "층",
      "en": "floor (of a building)",
      "note": "이 층 = 2nd floor"
    },
    {
      "ko": "번",
      "en": "number / counter for 'time(s)'",
      "note": "일 번 = number one"
    }
  ],
  "exercises": [
    {
      "q": "Say the number 23 in Sino-Korean.",
      "a": "이십삼"
    },
    {
      "q": "Say the number 106 in Sino-Korean.",
      "a": "백육"
    },
    {
      "q": "How is 십육 (16) actually pronounced?",
      "a": "[심뉵] — ㄴ-insertion before 육, then the ㅂ받침 nasalizes to ㅁ"
    },
    {
      "q": "Say 'This is 100 won.'",
      "a": "이거 백 원이에요."
    },
    {
      "q": "Say 'Today is July 1st.'",
      "a": "오늘은 칠월 일 일이에요."
    },
    {
      "q": "Why is 공 used instead of 영 in phone numbers?",
      "a": "공 is the conventional 'zero' for reading digit strings like phone numbers; 영 is used in math/general contexts."
    }
  ],
  "quiz": [
    {
      "q": "Which number system is used for won amounts, phone numbers, and dates?",
      "options": [
        "Native Korean (하나, 둘, 셋)",
        "Sino-Korean (일, 이, 삼)",
        "Either, interchangeably",
        "Neither — digits are read in English"
      ],
      "answer": 1,
      "explain": "Money, phone numbers, dates, and minutes all use Sino-Korean numbers."
    },
    {
      "q": "What is 백육 (106) pronounced as?",
      "options": [
        "[백육]",
        "[배귝]",
        "[뱅뉵]",
        "[배윤]"
      ],
      "answer": 2,
      "explain": "ㄴ-insertion adds ㄴ before 육, then 백's ㄱ받침 nasalizes to ㅇ before that ㄴ: [뱅뉵]."
    },
    {
      "q": "How do you say 23 in Sino-Korean?",
      "options": [
        "이십삼",
        "삼십이",
        "이백삼",
        "십이삼"
      ],
      "answer": 0,
      "explain": "20 (이십) + 3 (삼) = 이십삼."
    },
    {
      "q": "Which zero is used when reading a phone number?",
      "options": [
        "영",
        "공",
        "제로",
        "빵"
      ],
      "answer": 1,
      "explain": "공 is the conventional zero for digit-by-digit readings like phone numbers."
    },
    {
      "q": "Why does 십육 sound like [심뉵] rather than [십육]?",
      "options": [
        "육 always changes ㅅ to ㅁ",
        "A ㄴ is inserted before 육, which then nasalizes 십's ㅂ받침 to ㅁ",
        "Sino-Korean numbers ignore batchim entirely",
        "It is an irregular exception with no rule"
      ],
      "answer": 1,
      "explain": "This is regular ㄴ첨가 followed by 비음화 (ㅂ→ㅁ before ㄴ)."
    }
  ]
},
{
  "day": 14,
  "phase": 1,
  "title": "Native Korean Numbers: Counting Objects, Age & Time",
  "focus": "Count objects and people, state your age, and tell the hour using native Korean numbers (하나, 둘, 셋...) and their contracted counter forms.",
  "hangul": {
    "intro": "몇 ('how many/what') ends in ㅊ, but like all non-basic batchim it is pronounced with one of the 7 representative batchim sounds — here, a ㄷ-sound. That ㄷ-sound then tenses the very next consonant, the same pattern you saw with 못 in Day 11.",
    "items": [
      {
        "char": "몇",
        "sound": "myeot (ㅊ받침 → [ㄷ] sound)",
        "note": "'how many / what'; tenses the following consonant"
      },
      {
        "char": "몇 개",
        "sound": "myeot-gae → [멷깨 myeot-kkae]",
        "note": "'how many (items)'"
      },
      {
        "char": "살",
        "sound": "sal",
        "note": "age counter, follows a native Korean number"
      }
    ],
    "reading": [
      {
        "block": "몇 시예요?",
        "breakdown": "몇(ㄷ-sound batchim) + 시 → the ㄷ-sound tenses ㅅ to ㅆ: [멷씨예요] ('What time is it?')"
      },
      {
        "block": "스무 살",
        "breakdown": "스물 (20) drops ㄹ and shortens to 스무 before a counter like 살 — a special contracted form, not a regular sound rule"
      }
    ]
  },
  "grammar": {
    "point": "Native Korean numbers 하나~아흔아홉, used with counters for objects, people, age, and o'clock hours",
    "explanation": "Alongside Sino-Korean numbers (Day 13), Korean has a separate native counting system: 하나 1, 둘 2, 셋 3, 넷 4, 다섯 5, 여섯 6, 일곱 7, 여덟 8, 아홉 9, 열 10. Tens are their own words: 스물 20, 서른 30, 마흔 40, 쉰 50, 예순 60, 일흔 70, 여든 80, 아흔 90 (native numbers stop at 99 — 100 and above always switch to Sino-Korean 백). Native numbers are always followed by a counter word, and the first four numbers plus 20 change shape right before a counter: 하나→한, 둘→두, 셋→세, 넷→네, 스물→스무. Common counters: 개 (general objects), 명 (people), 마리 (animals), 살 (age), and 시 (the hour in clock time — paired with Sino-Korean 분 for minutes, as in 한 시 십 분 = 1:10). This is the system for 'how many/how old/what hour', while Sino-Korean stays for money, phone numbers, dates, and minutes.",
    "examples": [
      {
        "ko": "사과 세 개 주세요.",
        "en": "Please give me three apples."
      },
      {
        "ko": "저는 스무 살이에요.",
        "en": "I am 20 years old."
      },
      {
        "ko": "지금 몇 시예요?",
        "en": "What time is it now?"
      },
      {
        "ko": "한 시 십 분이에요.",
        "en": "It's 1:10."
      },
      {
        "ko": "친구가 두 명 있어요.",
        "en": "I have two friends."
      }
    ]
  },
  "vocab": [
    {
      "ko": "개",
      "en": "counter: general objects",
      "note": "사과 한 개 = one apple"
    },
    {
      "ko": "명",
      "en": "counter: people",
      "note": "학생 두 명 = two students"
    },
    {
      "ko": "마리",
      "en": "counter: animals",
      "note": "강아지 한 마리 = one puppy"
    },
    {
      "ko": "살",
      "en": "counter: age",
      "note": "몇 살이에요? = How old are you?"
    },
    {
      "ko": "시",
      "en": "o'clock (hour)",
      "note": "세 시 = 3 o'clock; pairs with Sino-Korean 분 for minutes"
    },
    {
      "ko": "몇",
      "en": "how many / what",
      "note": "always paired with a counter: 몇 개, 몇 시, 몇 살"
    },
    {
      "ko": "사과",
      "en": "apple",
      "note": ""
    },
    {
      "ko": "강아지",
      "en": "puppy, dog",
      "note": ""
    },
    {
      "ko": "지금",
      "en": "now",
      "note": "지금 몇 시예요? = What time is it now?"
    },
    {
      "ko": "스무",
      "en": "twenty (contracted)",
      "note": "스물 → 스무 right before a counter"
    }
  ],
  "exercises": [
    {
      "q": "Say 'Please give me three apples.'",
      "a": "사과 세 개 주세요."
    },
    {
      "q": "Say 'I am 20 years old.'",
      "a": "저는 스무 살이에요."
    },
    {
      "q": "Say 'What time is it now?'",
      "a": "지금 몇 시예요?"
    },
    {
      "q": "Say 'It's 2 o'clock.'",
      "a": "두 시예요."
    },
    {
      "q": "Give the contracted form of 넷 used right before a counter.",
      "a": "네"
    },
    {
      "q": "Say 'I have one dog.'",
      "a": "강아지 한 마리 있어요."
    }
  ],
  "quiz": [
    {
      "q": "Which number system is used for age, counting objects, and clock hours?",
      "options": [
        "Sino-Korean",
        "Native Korean",
        "Both equally",
        "Neither — English digits are used"
      ],
      "answer": 1,
      "explain": "Native Korean numbers (하나, 둘, 셋...) pair with counters like 개, 명, 살, and 시."
    },
    {
      "q": "What is the contracted form of 하나 used right before a counter?",
      "options": [
        "하나",
        "한",
        "하난",
        "하나개"
      ],
      "answer": 1,
      "explain": "하나 shortens to 한 immediately before a counter: 한 개, 한 명, 한 살."
    },
    {
      "q": "몇 시예요 is actually pronounced...",
      "options": [
        "myeot-si-yeyo",
        "myeot-ssi-yeyo",
        "myeon-si-yeyo",
        "myeot-hi-yeyo"
      ],
      "answer": 1,
      "explain": "몇's ㄷ-sound batchim tenses the following ㅅ into ㅆ: [멷씨예요]."
    },
    {
      "q": "Which counter is used for people?",
      "options": [
        "개",
        "명",
        "마리",
        "살"
      ],
      "answer": 1,
      "explain": "명 counts people; 개 is for general objects, 마리 for animals, 살 for age."
    },
    {
      "q": "How do you say '20 years old'?",
      "options": [
        "이십 살",
        "스무 살",
        "스물 살",
        "이십살이"
      ],
      "answer": 1,
      "explain": "스물 (20) contracts to 스무 right before the counter 살."
    }
  ]
},
  {
    "day": 15,
    "phase": 1,
    "title": "Telling Time: Hours & Minutes + 겹받침 (Double Batchim)",
    "focus": "Tell full clock time by combining native-Korean hours with Sino-Korean minutes, and learn to read double batchim (겹받침) syllables like 없다 and 읽다.",
    "hangul": {
      "intro": "Some syllables end in two consonants stacked in the batchim slot — called 겹받침 (double batchim), e.g. ㅄ in 없, or ㄺ in 읽. Only ONE of the two consonants is actually pronounced; Korean never pronounces both. Which one survives depends on the specific pair, so these are best learned syllable by syllable.",
      "items": [
        {
          "char": "없다",
          "sound": "eobs-da → [업따 eop-tta]",
          "note": "'to not have / not exist'; batchim ㅄ → only ㅂ is pronounced, and it tenses the following ㄷ"
        },
        {
          "char": "읽다",
          "sound": "ilg-da → [익따 ik-tta]",
          "note": "'to read'; batchim ㄺ → only ㄱ is pronounced here (before a consonant), and it tenses the following ㄷ"
        },
        {
          "char": "닭",
          "sound": "dalg → [닥 dak]",
          "note": "'chicken'; batchim ㄺ → only ㄱ survives at the end of a word (the opposite letter of the pair survives depending on the word, so these are memorized individually)"
        }
      ],
      "reading": [
        {
          "block": "돈이 없어요",
          "breakdown": "없 + 어요: the ㅄ batchim links to the empty ㅇ of 어, so it's pronounced [업써요 eop-sseo-yo] — 'There's no money / I don't have money'"
        },
        {
          "block": "책을 읽어요",
          "breakdown": "읽 + 어요: ㄺ links to 어, pronounced [일거요 il-geo-yo] — before a vowel, BOTH letters of some double batchim can surface via linking, unlike before a consonant. Compare to 읽다 → [익따] above."
        }
      ]
    },
    "grammar": {
      "point": "시 (hour, native numbers) + 분 (minute, Sino numbers) — telling exact time",
      "explanation": "Korean time uses two number systems in one phrase: the HOUR uses native Korean numbers (한 시, 두 시, 세 시... — note 하나/둘/셋 shorten to 한/두/세 before 시), while the MINUTE uses Sino-Korean numbers (일 분, 이 분, 삼십 분...). 반 ('half') can replace 삼십 분 for 'half past.' 정각 means 'exactly/on the dot.' Time of day is marked with 오전 (a.m.) or 오후 (p.m.) placed before the time.",
      "examples": [
        {
          "ko": "지금 몇 시예요?",
          "en": "What time is it now?"
        },
        {
          "ko": "아홉 시 십오 분이에요.",
          "en": "It's 9:15."
        },
        {
          "ko": "세 시 반에 만나요.",
          "en": "Let's meet at 3:30."
        },
        {
          "ko": "오후 여섯 시 정각이에요.",
          "en": "It's exactly 6:00 p.m."
        },
        {
          "ko": "저는 신문을 읽어요.",
          "en": "I read the newspaper."
        }
      ]
    },
    "vocab": [
      {
        "ko": "시",
        "en": "hour (o'clock)",
        "note": "native-Korean number + 시"
      },
      {
        "ko": "분",
        "en": "minute",
        "note": "Sino-Korean number + 분"
      },
      {
        "ko": "반",
        "en": "half (past)",
        "note": "replaces 삼십 분"
      },
      {
        "ko": "정각",
        "en": "exactly, on the dot",
        "note": ""
      },
      {
        "ko": "오전",
        "en": "a.m., morning",
        "note": ""
      },
      {
        "ko": "오후",
        "en": "p.m., afternoon",
        "note": ""
      },
      {
        "ko": "없다",
        "en": "to not have, to not exist",
        "note": "irregular-feeling but regular verb; opposite of 있다"
      },
      {
        "ko": "읽다",
        "en": "to read",
        "note": ""
      },
      {
        "ko": "책",
        "en": "book",
        "note": ""
      },
      {
        "ko": "신문",
        "en": "newspaper",
        "note": ""
      }
    ],
    "exercises": [
      {
        "q": "Say 'It's 7:20' in Korean.",
        "a": "일곱 시 이십 분이에요."
      },
      {
        "q": "Say 'Let's meet at 4:30' in Korean.",
        "a": "네 시 반에 만나요."
      },
      {
        "q": "Translate: 돈이 없어요.",
        "a": "I don't have money."
      },
      {
        "q": "Translate: 저는 책을 읽어요.",
        "a": "I read a book. / I'm reading a book."
      },
      {
        "q": "Fill in the hour word: 두 ___ 반이에요 (It's 2:30).",
        "a": "시"
      },
      {
        "q": "How is 읽다 pronounced?",
        "a": "[익따 ik-tta]"
      }
    ],
    "quiz": [
      {
        "q": "'3:30' in Korean is:",
        "options": [
          "삼 시 삼십 분",
          "세 시 반",
          "셋 시 삼십 분",
          "삼 시 반"
        ],
        "answer": 1,
        "explain": "The hour uses the native-Korean short form 세 (from 셋) + 시; 'half past' is 반, not 삼 시."
      },
      {
        "q": "Which number system is used for MINUTES?",
        "options": [
          "Native Korean (하나, 둘, 셋...)",
          "Sino-Korean (일, 이, 삼...)",
          "Either, freely mixed",
          "Neither — minutes use counters only"
        ],
        "answer": 1,
        "explain": "Minutes always use Sino-Korean numbers: 일 분, 이 분, 삼십 분, etc."
      },
      {
        "q": "없어요 (there isn't / don't have) is pronounced:",
        "options": [
          "[없어요, both consonants heard]",
          "[어벼요]",
          "[업써요]",
          "[어써요]"
        ],
        "answer": 2,
        "explain": "The ㅄ batchim links to the following vowel as ㅂ, and that ㅂ tenses the ㅅ of 어요 → [업써요]."
      },
      {
        "q": "책을 읽어요 means:",
        "options": [
          "I write a book",
          "I buy a book",
          "I read a book",
          "I have a book"
        ],
        "answer": 2,
        "explain": "읽다 = 'to read'; 책을 읽어요 = 'I read/am reading a book.'"
      },
      {
        "q": "오후 여섯 시 정각 means:",
        "options": [
          "Around 6 a.m.",
          "Exactly 6 p.m.",
          "Half past 6 p.m.",
          "Exactly 6 a.m."
        ],
        "answer": 1,
        "explain": "오후 = p.m., 여섯 시 = 6 o'clock, 정각 = 'exactly/on the dot.'"
      }
    ]
  },
{
  "day": 16,
  "phase": 1,
  "title": "Talking About Dates: 년/월/일 + More 겹받침 (앉다, 많다, 괜찮다)",
  "focus": "State full dates with Sino-Korean numbers using 년/월/일 (with irregular 6월/10월), and read three more double-batchim words.",
  "hangul": {
    "intro": "More 겹받침 (double batchim) pairs: ㄵ (as in 앉다) and ㄶ (as in 많다, 괜찮다). Before a CONSONANT, ㄵ surfaces as ㄴ and tenses what follows; ㄶ surfaces as ㅎ, which combines with a following ㄷ/ㄱ/ㅈ to make an aspirated sound (ㅌ/ㅋ/ㅊ). Before a VOWEL, the rules flip: ㄵ splits so both letters are heard, while the ㅎ of ㄶ usually disappears.",
    "items": [
      {
        "char": "앉다",
        "sound": "anj-da → [안따 an-tta]",
        "note": "'to sit'; batchim ㄵ → only ㄴ is pronounced before a consonant, and it tenses the following ㄷ"
      },
      {
        "char": "많다",
        "sound": "manh-da → [만타 man-ta]",
        "note": "'to be many/much'; batchim ㄶ → the ㅎ combines with ㄷ to form the aspirated ㅌ"
      },
      {
        "char": "괜찮다",
        "sound": "gwaenchanh-da → [괜찬타 gwaen-chan-ta]",
        "note": "'to be okay/fine'; same ㄶ + ㄷ → ㅌ pattern as 많다"
      }
    ],
    "reading": [
      {
        "block": "여기 앉으세요",
        "breakdown": "앉 + 으세요: before a vowel, ㄵ splits — ㄴ stays behind, ㅈ moves forward — giving [안즈세요 an-jeu-se-yo], 'Please sit here.'"
      },
      {
        "block": "시간이 많아요",
        "breakdown": "많 + 아요: before a vowel, the ㅎ of ㄶ is silent and only ㄴ carries over, giving [마나요 ma-na-yo], 'There's a lot of time.'"
      }
    ]
  },
  "grammar": {
    "point": "년/월/일 — saying full dates",
    "explanation": "Dates use Sino-Korean numbers throughout: [number]년 (year) + [number]월 (month) + [number]일 (day). Two months are irregular: 6월 is 유월 (not 육월) and 10월 is 시월 (not 십월) — the final consonant of 육/십 is dropped for smoother pronunciation. 'What date is it?' is 몇 월 며칠이에요?, using 몇 (what/which) for month and the special word 며칠 for 'what day of the month.'",
    "examples": [
      {
        "ko": "오늘은 몇 월 며칠이에요?",
        "en": "What's today's date?"
      },
      {
        "ko": "칠월 사 일이에요.",
        "en": "It's July 4th."
      },
      {
        "ko": "제 생일은 유월 십오 일이에요.",
        "en": "My birthday is June 15th."
      },
      {
        "ko": "이천이십육 년 칠월 사 일이에요.",
        "en": "It's July 4, 2026."
      },
      {
        "ko": "여기 앉으세요. 시간이 많아요.",
        "en": "Please sit here. There's plenty of time."
      }
    ]
  },
  "vocab": [
    {
      "ko": "년",
      "en": "year",
      "note": "Sino-Korean number + 년"
    },
    {
      "ko": "월",
      "en": "month",
      "note": "Sino-Korean number + 월; 6=유월, 10=시월"
    },
    {
      "ko": "일",
      "en": "day (of month)",
      "note": "Sino-Korean number + 일"
    },
    {
      "ko": "며칠",
      "en": "what day (of the month)",
      "note": "used with 몇 월 for full date questions"
    },
    {
      "ko": "생일",
      "en": "birthday",
      "note": ""
    },
    {
      "ko": "오늘",
      "en": "today",
      "note": ""
    },
    {
      "ko": "앉다",
      "en": "to sit",
      "note": "batchim ㄵ"
    },
    {
      "ko": "많다",
      "en": "to be many/much",
      "note": "batchim ㄶ"
    },
    {
      "ko": "괜찮다",
      "en": "to be okay/fine",
      "note": "batchim ㄶ"
    },
    {
      "ko": "시간",
      "en": "time",
      "note": ""
    }
  ],
  "exercises": [
    {
      "q": "Say 'It's July 4th' in Korean.",
      "a": "칠월 사 일이에요."
    },
    {
      "q": "Say 'My birthday is June 15th' in Korean.",
      "a": "제 생일은 유월 십오 일이에요."
    },
    {
      "q": "Translate: 오늘은 몇 월 며칠이에요?",
      "a": "What's today's date?"
    },
    {
      "q": "Translate: 시간이 많아요.",
      "a": "There's a lot of time."
    },
    {
      "q": "Fill in the blank: 여기 ___으세요 (Please sit here).",
      "a": "앉"
    },
    {
      "q": "How is 괜찮아요 pronounced?",
      "a": "[괜차나요 gwaen-cha-na-yo]"
    }
  ],
  "quiz": [
    {
      "q": "'June' (6월) in Korean is:",
      "options": [
        "육월",
        "유월",
        "뉵월",
        "유얼"
      ],
      "answer": 1,
      "explain": "6월 is irregular: 유월, not 육월."
    },
    {
      "q": "'October' (10월) in Korean is:",
      "options": [
        "십월",
        "시월",
        "십일월",
        "시얼"
      ],
      "answer": 1,
      "explain": "10월 is irregular: 시월, not 십월."
    },
    {
      "q": "Which number system is used for 년/월/일 dates?",
      "options": [
        "Native Korean (하나, 둘...)",
        "Sino-Korean (일, 이, 삼...)",
        "Counters only",
        "Mixed freely"
      ],
      "answer": 1,
      "explain": "Dates always use Sino-Korean numbers."
    },
    {
      "q": "시간이 많아요 means:",
      "options": [
        "There's no time",
        "There's a lot of time",
        "Time flies fast",
        "It's exactly on time"
      ],
      "answer": 1,
      "explain": "많다 = 'to be many/much', so 시간이 많아요 = 'There's plenty of time.'"
    },
    {
      "q": "앉으세요 means:",
      "options": [
        "Please stand",
        "Please sit",
        "Please wait",
        "Please read"
      ],
      "answer": 1,
      "explain": "앉다 = 'to sit'; -으세요 is a polite command ending, so 앉으세요 = 'Please sit.'"
    }
  ]
},
{
  "day": 17,
  "phase": 1,
  "title": "Days of the Week (요일) + 겹받침 ㄼ/ㅀ (넓다, 싫다)",
  "focus": "Name the seven days of the week with 요일 and use the time particle 에, while learning two more double-batchim syllables.",
  "hangul": {
    "intro": "Two more 겹받침 (double batchim) pairs: ㄼ (as in 넓다) and ㅀ (as in 싫다). Before a CONSONANT, ㄼ usually surfaces as ㄹ (and tenses what follows), while ㅀ surfaces as ㅎ, which combines with a following ㄷ/ㄱ/ㅈ to make an aspirated sound — just like ㄶ did in an earlier lesson. Before a VOWEL, both consonants of ㄼ can link and be heard, while the ㅎ of ㅀ usually disappears and only ㄹ carries over.",
    "items": [
      {
        "char": "넓다",
        "sound": "neolb-da → [널따 neol-tta]",
        "note": "'to be wide/spacious'; batchim ㄼ → only ㄹ is pronounced before a consonant, and it tenses the following ㄷ"
      },
      {
        "char": "싫다",
        "sound": "silh-da → [실타 sil-ta]",
        "note": "'to dislike'; batchim ㅀ → the ㅎ combines with ㄷ to form the aspirated ㅌ"
      },
      {
        "char": "앓다",
        "sound": "alh-da → [알타 al-ta]",
        "note": "'to be sick/ail'; same ㅀ + ㄷ → ㅌ pattern as 싫다"
      }
    ],
    "reading": [
      {
        "block": "방이 넓어요",
        "breakdown": "넓 + 어요: before a vowel, both letters of ㄼ can link forward, giving [널버요 neol-beo-yo], 'The room is spacious.'"
      },
      {
        "block": "저는 커피를 싫어해요",
        "breakdown": "싫 + 어해요: before a vowel, the ㅎ of ㅀ is silent and only ㄹ carries over, giving [시러해요 si-reo-hae-yo], 'I dislike coffee.'"
      }
    ]
  },
  "grammar": {
    "point": "요일 — days of the week + the time particle 에",
    "explanation": "Each day of the week is a Sino-Korean element + 요일 ('day'): 월(moon)/화(fire)/수(water)/목(wood)/금(gold)/토(earth)/일(sun) + 요일. To ask 'what day of the week', use 무슨 요일이에요? ('what day is it?' — different from 며칠, which asks the date). To say something happens ON a day, attach the time particle 에 right after 요일: 월요일에 ('on Monday'). 에 is not used with 오늘/내일/어제 (today/tomorrow/yesterday), only with specific named days, dates, and times.",
    "examples": [
      {
        "ko": "오늘 무슨 요일이에요?",
        "en": "What day of the week is it today?"
      },
      {
        "ko": "오늘은 금요일이에요.",
        "en": "Today is Friday."
      },
      {
        "ko": "월요일에 학교에 가요.",
        "en": "I go to school on Monday."
      },
      {
        "ko": "저는 이 방이 넓어서 좋아요.",
        "en": "I like this room because it's spacious."
      },
      {
        "ko": "저는 매운 음식을 싫어해요.",
        "en": "I dislike spicy food."
      }
    ]
  },
  "vocab": [
    {
      "ko": "월요일",
      "en": "Monday",
      "note": ""
    },
    {
      "ko": "화요일",
      "en": "Tuesday",
      "note": ""
    },
    {
      "ko": "수요일",
      "en": "Wednesday",
      "note": ""
    },
    {
      "ko": "목요일",
      "en": "Thursday",
      "note": ""
    },
    {
      "ko": "금요일",
      "en": "Friday",
      "note": ""
    },
    {
      "ko": "토요일",
      "en": "Saturday",
      "note": ""
    },
    {
      "ko": "일요일",
      "en": "Sunday",
      "note": ""
    },
    {
      "ko": "무슨 요일",
      "en": "what day (of the week)",
      "note": "different from 며칠 (date)"
    },
    {
      "ko": "넓다",
      "en": "to be wide/spacious",
      "note": "batchim ㄼ"
    },
    {
      "ko": "싫다",
      "en": "to dislike",
      "note": "batchim ㅀ; 싫어하다 = 'to dislike (something)'"
    }
  ],
  "exercises": [
    {
      "q": "Say 'Today is Friday' in Korean.",
      "a": "오늘은 금요일이에요."
    },
    {
      "q": "Say 'I go to school on Monday' in Korean.",
      "a": "월요일에 학교에 가요."
    },
    {
      "q": "Translate: 오늘 무슨 요일이에요?",
      "a": "What day of the week is it today?"
    },
    {
      "q": "Translate: 저는 매운 음식을 싫어해요.",
      "a": "I dislike spicy food."
    },
    {
      "q": "Fill in the blank: 방이 ___어요 (The room is spacious).",
      "a": "넓"
    },
    {
      "q": "How is 싫어해요 pronounced?",
      "a": "[시러해요 si-reo-hae-yo]"
    }
  ],
  "quiz": [
    {
      "q": "'Wednesday' in Korean is:",
      "options": [
        "화요일",
        "수요일",
        "목요일",
        "토요일"
      ],
      "answer": 1,
      "explain": "수 (water) + 요일 = 수요일, Wednesday."
    },
    {
      "q": "Which particle attaches to 요일 to mean 'on [that day]'?",
      "options": [
        "은/는",
        "이/가",
        "에",
        "을/를"
      ],
      "answer": 2,
      "explain": "에 marks a specific point in time: 월요일에 = 'on Monday.'"
    },
    {
      "q": "'What day of the week is it?' is:",
      "options": [
        "며칠이에요?",
        "몇 시예요?",
        "무슨 요일이에요?",
        "무엇이에요?"
      ],
      "answer": 2,
      "explain": "무슨 요일이에요? asks for the day of the week; 며칠 asks for the date."
    },
    {
      "q": "넓어요 (before a vowel) is pronounced:",
      "options": [
        "[너버요]",
        "[널버요]",
        "[널꺼요]",
        "[넙어요]"
      ],
      "answer": 1,
      "explain": "Before a vowel, both letters of ㄼ can link, giving [널버요 neol-beo-yo]."
    },
    {
      "q": "싫어해요 means:",
      "options": [
        "I like it",
        "I dislike it",
        "I don't have it",
        "I read it"
      ],
      "answer": 1,
      "explain": "싫어하다 = 'to dislike'; 싫어해요 is its polite present form."
    }
  ]
},
{
  "day": 18,
  "phase": 1,
  "title": "겹받침 ㄻ (닮다/젊다) + the Location Particle 에서",
  "focus": "Learn the double batchim ㄻ and contrast 에 (destination/existence) with 에서 (location of an action), rounding off the core Hangul lessons.",
  "hangul": {
    "intro": "One more 겹받침 (double batchim): ㄻ, made of ㄹ+ㅁ. Before a CONSONANT, only ㅁ is pronounced and it tenses the following consonant, just like the other double batchim you've studied. Before a VOWEL, both letters link forward: ㄹ closes the first syllable and ㅁ opens the next one.",
    "items": [
      {
        "char": "닮다",
        "sound": "dalm-da → [담따 dam-tta]",
        "note": "'to resemble'; batchim ㄻ → only ㅁ is pronounced before a consonant, and it tenses the following ㄷ"
      },
      {
        "char": "젊다",
        "sound": "jeolm-da → [점따 jeom-tta]",
        "note": "'to be young'; same ㄻ pattern as 닮다"
      },
      {
        "char": "삶다",
        "sound": "salm-da → [삼따 sam-tta]",
        "note": "'to boil'; same ㄻ pattern again — useful for cooking vocabulary later"
      }
    ],
    "reading": [
      {
        "block": "저는 엄마를 닮았어요",
        "breakdown": "닮 + 았어요: before a vowel, both letters of ㄻ link forward, giving [달마써요 dal-ma-sseo-yo], 'I resemble my mom.'"
      },
      {
        "block": "그는 아직 젊어요",
        "breakdown": "젊 + 어요: before a vowel, ㄹ closes the first syllable and ㅁ opens the next, giving [절머요 jeol-meo-yo], 'He is still young.'"
      }
    ]
  },
  "grammar": {
    "point": "에 vs 에서 — existence/destination vs. location of an action",
    "explanation": "You already know 에 for destinations (학교에 가요) and for where something simply exists or is located (집에 있어요). 에서 marks the location WHERE AN ACTION happens — used with action verbs like 먹다, 공부하다, 일하다, 만나다, 읽다. Rule of thumb: 있다/없다 and verbs of motion toward a place (가다/오다) usually pair with 에; almost every other action verb pairs with 에서. Compare: 학교에 가요 (I go TO school) vs 학교에서 공부해요 (I study AT school).",
    "examples": [
      {
        "ko": "저는 집에 있어요.",
        "en": "I am at home."
      },
      {
        "ko": "저는 집에서 밥을 먹어요.",
        "en": "I eat (a meal) at home."
      },
      {
        "ko": "도서관에서 책을 읽어요.",
        "en": "I read a book at the library."
      },
      {
        "ko": "친구를 카페에서 만나요.",
        "en": "I meet my friend at the cafe."
      },
      {
        "ko": "그는 아직 젊어요.",
        "en": "He is still young."
      }
    ]
  },
  "vocab": [
    {
      "ko": "도서관",
      "en": "library",
      "note": ""
    },
    {
      "ko": "회사",
      "en": "company / office",
      "note": "회사에서 일해요 = 'I work at the office'"
    },
    {
      "ko": "카페",
      "en": "cafe",
      "note": ""
    },
    {
      "ko": "공부하다",
      "en": "to study",
      "note": ""
    },
    {
      "ko": "일하다",
      "en": "to work",
      "note": ""
    },
    {
      "ko": "만나다",
      "en": "to meet",
      "note": ""
    },
    {
      "ko": "읽다",
      "en": "to read",
      "note": "review from Day 15"
    },
    {
      "ko": "닮다",
      "en": "to resemble",
      "note": "batchim ㄻ"
    },
    {
      "ko": "젊다",
      "en": "to be young",
      "note": "batchim ㄻ; opposite of 늙다 (to be old)"
    }
  ],
  "exercises": [
    {
      "q": "Say 'I study at the library' in Korean.",
      "a": "저는 도서관에서 공부해요."
    },
    {
      "q": "Say 'I work at the company/office' in Korean.",
      "a": "저는 회사에서 일해요."
    },
    {
      "q": "Fill in the blank with 에 or 에서: 저는 집__ 있어요.",
      "a": "에"
    },
    {
      "q": "Fill in the blank with 에 or 에서: 저는 집__ 밥을 먹어요.",
      "a": "에서"
    },
    {
      "q": "Translate: 친구를 카페에서 만나요.",
      "a": "I meet my friend at the cafe."
    },
    {
      "q": "How is 닮았어요 pronounced?",
      "a": "[달마써요 dal-ma-sseo-yo]"
    }
  ],
  "quiz": [
    {
      "q": "Which particle fits: 도서관___ 책을 읽어요 (I read a book AT the library)?",
      "options": [
        "은/는",
        "에",
        "에서",
        "을/를"
      ],
      "answer": 2,
      "explain": "에서 marks the location where an action (reading) takes place."
    },
    {
      "q": "Which particle fits: 학교___ 가요 (I go TO school)?",
      "options": [
        "에",
        "에서",
        "이/가",
        "도"
      ],
      "answer": 0,
      "explain": "에 marks the destination of motion verbs like 가다/오다."
    },
    {
      "q": "젊다 means:",
      "options": [
        "to resemble",
        "to be young",
        "to boil",
        "to read"
      ],
      "answer": 1,
      "explain": "젊다 = 'to be young'; its opposite is 늙다 ('to be old')."
    },
    {
      "q": "닮아요 (before a vowel) is pronounced:",
      "options": [
        "[다마요]",
        "[달마요]",
        "[담아요]",
        "[달까요]"
      ],
      "answer": 1,
      "explain": "Before a vowel, both letters of ㄻ link forward: ㄹ closes the first syllable, ㅁ opens the next, giving [달마요]."
    },
    {
      "q": "Which sentence is correct?",
      "options": [
        "저는 회사에 일해요.",
        "저는 회사에서 일해요.",
        "저는 회사를 일해요.",
        "저는 회사는 일해요."
      ],
      "answer": 1,
      "explain": "일하다 (to work) is an action verb, so it takes 에서: 회사에서 일해요, 'I work at the office.'"
    }
  ]
},
{
  "day": 19,
  "phase": 1,
  "title": "단위명사 (Counters): 개/명/마리/잔 + Number Contraction",
  "focus": "Learn common Korean counters and the special contracted forms of native numbers (하나→한, 둘→두, 셋→세, 넷→네, 스물→스무) used right before them.",
  "grammar": {
    "point": "Noun + Number + Counter (no particle needed)",
    "explanation": "To count things in Korean, the pattern is [Noun] + [Native Number] + [Counter], with no particle between them: 사과 세 개 (three apples). Counters change depending on what's being counted — 개 for general objects, 명 for people, 마리 for animals, 잔 for cups/glasses of a drink. Crucially, when a native number directly precedes a counter, four of them contract: 하나→한, 둘→두, 셋→세, 넷→네, and 스물→스무 (twenty). You already used this contraction for age and o'clock (한 살, 두 시) back in Day 14 — now you'll apply the same rule to everyday objects, people, and animals.",
    "examples": [
      {
        "ko": "사과 한 개 주세요.",
        "en": "Please give me one apple."
      },
      {
        "ko": "커피 두 잔 마셨어요.",
        "en": "I drank two cups of coffee."
      },
      {
        "ko": "친구가 세 명 있어요.",
        "en": "I have three friends."
      },
      {
        "ko": "강아지가 네 마리 있어요.",
        "en": "There are four puppies."
      },
      {
        "ko": "책 스무 권을 읽고 싶어요.",
        "en": "I want to read twenty books."
      }
    ]
  },
  "vocab": [
    {
      "ko": "개",
      "en": "counter for general objects",
      "note": "사과 한 개 = one apple"
    },
    {
      "ko": "명",
      "en": "counter for people",
      "note": "친구 세 명 = three friends"
    },
    {
      "ko": "마리",
      "en": "counter for animals",
      "note": "강아지 네 마리 = four puppies"
    },
    {
      "ko": "잔",
      "en": "counter for cups/glasses",
      "note": "커피 두 잔 = two cups of coffee"
    },
    {
      "ko": "권",
      "en": "counter for bound books",
      "note": "책 스무 권 = twenty books"
    },
    {
      "ko": "사과",
      "en": "apple",
      "note": ""
    },
    {
      "ko": "강아지",
      "en": "puppy",
      "note": ""
    },
    {
      "ko": "주세요",
      "en": "please give me (X)",
      "note": "Noun + 주세요; very common in shops and cafes"
    }
  ],
  "exercises": [
    {
      "q": "Say 'Please give me one apple' in Korean.",
      "a": "사과 한 개 주세요."
    },
    {
      "q": "Say 'I have three friends' in Korean.",
      "a": "친구가 세 명 있어요."
    },
    {
      "q": "Fill in the contracted number: 강아지가 __ 마리 있어요 (four puppies).",
      "a": "네"
    },
    {
      "q": "Fill in the contracted number: 책 __ 권을 읽고 싶어요 (twenty books).",
      "a": "스무"
    },
    {
      "q": "Translate: 커피 두 잔 마셨어요.",
      "a": "I drank two cups of coffee."
    },
    {
      "q": "Which counter fits: 강아지 네 ___ (puppies)?",
      "a": "마리"
    }
  ],
  "quiz": [
    {
      "q": "Which counter is used for people?",
      "options": [
        "개",
        "명",
        "마리",
        "잔"
      ],
      "answer": 1,
      "explain": "명 is the counter for counting people, e.g. 친구가 세 명 있어요."
    },
    {
      "q": "What is the contracted form of 넷 (four) before a counter?",
      "options": [
        "네",
        "너",
        "넉",
        "네다"
      ],
      "answer": 0,
      "explain": "넷 contracts to 네 before a counter, as in 네 마리 (four animals)."
    },
    {
      "q": "Complete: 사과 ___ 개 주세요 (one apple, please).",
      "options": [
        "하나",
        "한",
        "일",
        "첫"
      ],
      "answer": 1,
      "explain": "하나 contracts to 한 directly before a counter: 한 개."
    },
    {
      "q": "Which counter fits with coffee (커피)?",
      "options": [
        "명",
        "마리",
        "잔",
        "권"
      ],
      "answer": 2,
      "explain": "잔 is the counter for cups/glasses of a drink: 커피 두 잔."
    },
    {
      "q": "20 books is:",
      "options": [
        "책 이십 권",
        "책 스물 권",
        "책 스무 권",
        "책 스무 개"
      ],
      "answer": 2,
      "explain": "스물 (twenty) contracts to 스무 before a counter, and 권 is the counter for bound books: 책 스무 권."
    }
  ]
},
{
  "day": 20,
  "phase": 1,
  "title": "Connecting Sentences: 그리고/그래서/그런데/그러면",
  "focus": "Learn four everyday connecting words that link two full sentences — and, so, but, and then — to close out Phase 1 by combining everything you've learned so far into longer speech.",
  "grammar": {
    "point": "그리고 (and) / 그래서 (so, therefore) / 그런데 (but, by the way) / 그러면 (then, in that case)",
    "explanation": "So far every sentence you've made has stood alone. These four words let you connect two separate sentences into a flowing thought, always placed at the START of the second sentence (never in the middle like English 'and'). 그리고 simply adds one sentence to another ('and, also'). 그래서 shows the second sentence is a RESULT of the first ('so, therefore'). 그런데 shows a contrast OR a topic shift ('but' / 'by the way') — it's softer than a strong 'but'. 그러면 (often shortened to 그럼 in speech) means 'if that's the case, then...', setting up a conclusion or suggestion based on what was just said. Because each of these connects two complete, independently-conjugated sentences, you can immediately use them with all the polite present/past forms you already know.",
    "examples": [
      {
        "ko": "저는 학생이에요. 그리고 회사에서 일해요.",
        "en": "I'm a student. And I work at a company."
      },
      {
        "ko": "배가 고파요. 그래서 밥을 먹어요.",
        "en": "I'm hungry. So I'm eating (a meal)."
      },
      {
        "ko": "저는 커피를 좋아해요. 그런데 오늘은 안 마셨어요.",
        "en": "I like coffee. But I didn't drink it today."
      },
      {
        "ko": "오늘 시간이 있어요. 그러면 같이 도서관에 가요.",
        "en": "I have time today. Then let's go to the library together."
      },
      {
        "ko": "비가 왔어요. 그래서 집에 있었어요.",
        "en": "It rained. So I stayed home."
      }
    ]
  },
  "vocab": [
    {
      "ko": "그리고",
      "en": "and, also",
      "note": "adds a second, related sentence"
    },
    {
      "ko": "그래서",
      "en": "so, therefore",
      "note": "second sentence is a result of the first"
    },
    {
      "ko": "그런데",
      "en": "but; by the way",
      "note": "softer contrast or topic shift"
    },
    {
      "ko": "그러면",
      "en": "then, in that case",
      "note": "often shortened to 그럼 in casual speech"
    },
    {
      "ko": "좋아하다",
      "en": "to like",
      "note": "저는 커피를 좋아해요 = 'I like coffee'"
    },
    {
      "ko": "배(가) 고프다",
      "en": "to be hungry",
      "note": "배가 고파요 = 'I'm hungry'"
    },
    {
      "ko": "비가 오다",
      "en": "to rain",
      "note": "literally 'rain comes'; 비가 왔어요 = 'it rained'"
    },
    {
      "ko": "같이",
      "en": "together",
      "note": "같이 가요 = 'let's go together'"
    }
  ],
  "exercises": [
    {
      "q": "Join with 그리고: 저는 학생이에요. / 저는 회사에서 일해요.",
      "a": "저는 학생이에요. 그리고 회사에서 일해요."
    },
    {
      "q": "Join with 그래서: 배가 고파요. / 밥을 먹어요.",
      "a": "배가 고파요. 그래서 밥을 먹어요."
    },
    {
      "q": "Join with 그런데: 저는 커피를 좋아해요. / 오늘은 안 마셨어요.",
      "a": "저는 커피를 좋아해요. 그런데 오늘은 안 마셨어요."
    },
    {
      "q": "Join with 그러면: 시간이 있어요. / 같이 도서관에 가요.",
      "a": "시간이 있어요. 그러면 같이 도서관에 가요."
    },
    {
      "q": "Translate: 비가 왔어요. 그래서 집에 있었어요.",
      "a": "It rained, so I stayed home."
    },
    {
      "q": "Which connector shows a RESULT — 그리고 or 그래서?",
      "a": "그래서"
    }
  ],
  "quiz": [
    {
      "q": "Which connector means 'so, therefore' (shows a result)?",
      "options": [
        "그리고",
        "그래서",
        "그런데",
        "그러면"
      ],
      "answer": 1,
      "explain": "그래서 links a sentence that is the result of the previous one."
    },
    {
      "q": "배가 고파요. ___ 밥을 먹어요. Which word fits?",
      "options": [
        "그런데",
        "그래서",
        "그리고",
        "그러면"
      ],
      "answer": 1,
      "explain": "Eating because you're hungry is a result, so 그래서 ('so') is correct."
    },
    {
      "q": "저는 커피를 좋아해요. ___ 오늘은 안 마셨어요. Which word fits?",
      "options": [
        "그리고",
        "그래서",
        "그런데",
        "그러면"
      ],
      "answer": 2,
      "explain": "그런데 marks the contrast between liking coffee and not drinking it today."
    },
    {
      "q": "좋아하다 means:",
      "options": [
        "to be hungry",
        "to like",
        "to rain",
        "to work"
      ],
      "answer": 1,
      "explain": "좋아하다 = 'to like', as in 커피를 좋아해요 ('I like coffee')."
    },
    {
      "q": "Where does a connector like 그리고 go?",
      "options": [
        "In the middle of one sentence",
        "At the start of the second sentence",
        "At the end of the second sentence",
        "Attached to the verb stem"
      ],
      "answer": 1,
      "explain": "Unlike English 'and', these words start the second full sentence rather than sitting inside it."
    }
  ]
},
{
  "day": 21,
  "phase": 2,
  "title": "Topic vs Subject: 은/는 and 이/가",
  "focus": "Learn the crucial difference between the topic particle 은/는 and the subject particle 이/가 — when to mark what a sentence is 'about' versus what specifically 'does' or 'is' something.",
  "grammar": {
    "point": "Topic particle 은/는 vs Subject particle 이/가",
    "explanation": "Korean marks nouns with particles that show their role. You already met 은/는 lightly; now compare it with 이/가. Attachment by final sound: after a consonant use 은 / 이, after a vowel use 는 / 가 (책은/책이, 저는/제가). The topic particle 은/는 sets the overall TOPIC — 'as for X…' — often for general statements, contrasts, or things already known. The subject particle 이/가 points to the SUBJECT that specifically does or is something, often introducing new information or answering 'who/what?'. Compare 저는 학생이에요 ('As for me, I'm a student' — general self-intro) with 누가 학생이에요? — 제가 학생이에요 ('Who is a student? — I am' — 가 pinpoints the answer). With descriptive verbs, new/noticed information usually takes 이/가: 날씨가 좋아요 ('the weather is nice'). Contrast uses 은/는: 커피는 좋아해요, 그런데 차는 안 좋아해요 ('I like coffee, but tea I don't'). Note 저 + 가 becomes 제가, and 나 + 가 becomes 내가.",
    "examples": [
      {
        "ko": "저는 한국 사람이에요.",
        "en": "As for me, I'm Korean. (topic — self-introduction)"
      },
      {
        "ko": "누가 왔어요? — 친구가 왔어요.",
        "en": "Who came? — A friend came. (가 answers 'who')"
      },
      {
        "ko": "오늘은 날씨가 좋아요.",
        "en": "As for today, the weather is nice. (은 = topic, 가 = subject)"
      },
      {
        "ko": "커피는 좋아해요. 그런데 차는 안 좋아해요.",
        "en": "Coffee I like. But tea I don't. (은/는 for contrast)"
      },
      {
        "ko": "고양이가 있어요.",
        "en": "There is a cat. (가 introduces new information)"
      }
    ]
  },
  "vocab": [
    {
      "ko": "은/는",
      "en": "topic particle",
      "note": "은 after consonant, 는 after vowel; 'as for…'"
    },
    {
      "ko": "이/가",
      "en": "subject particle",
      "note": "이 after consonant, 가 after vowel; marks the doer/subject"
    },
    {
      "ko": "제가",
      "en": "I (subject)",
      "note": "저 + 가 → 제가; polite 'I' as a subject"
    },
    {
      "ko": "누가",
      "en": "who (subject)",
      "note": "누구 + 가 → 누가; 'who' as the subject of a question"
    },
    {
      "ko": "날씨",
      "en": "weather",
      "note": "날씨가 좋아요 = 'the weather is nice'"
    },
    {
      "ko": "친구",
      "en": "friend",
      "note": "친구가 왔어요 = 'a friend came'"
    },
    {
      "ko": "고양이",
      "en": "cat",
      "note": "고양이가 있어요 = 'there is a cat'"
    },
    {
      "ko": "사람",
      "en": "person",
      "note": "한국 사람 = 'Korean (person)'"
    }
  ],
  "exercises": [
    {
      "q": "Add the right subject particle: 친구__ 왔어요. (a friend came)",
      "a": "친구가 왔어요."
    },
    {
      "q": "Add the right subject particle: 책__ 있어요. (there is a book)",
      "a": "책이 있어요."
    },
    {
      "q": "Answer 'Who is a student?' with 제가: 누가 학생이에요?",
      "a": "제가 학생이에요."
    },
    {
      "q": "Fill in with contrast particles: 커피__ 좋아해요, 그런데 차__ 안 좋아해요.",
      "a": "커피는 좋아해요, 그런데 차는 안 좋아해요."
    },
    {
      "q": "Translate: 오늘은 날씨가 좋아요.",
      "a": "As for today, the weather is nice."
    },
    {
      "q": "Which particle marks the general TOPIC of a sentence — 은/는 or 이/가?",
      "a": "은/는"
    }
  ],
  "quiz": [
    {
      "q": "Which particle set marks the SUBJECT (the doer), often introducing new information?",
      "options": [
        "은/는",
        "이/가",
        "을/를",
        "에서"
      ],
      "answer": 1,
      "explain": "이/가 is the subject particle; it points to the specific subject and often marks new information."
    },
    {
      "q": "친구___ 왔어요. (A friend came.) Which fits?",
      "options": [
        "은",
        "는",
        "가",
        "이"
      ],
      "answer": 2,
      "explain": "친구 ends in a vowel, so the subject particle is 가: 친구가 왔어요."
    },
    {
      "q": "저 + 가 (I, as a subject) becomes:",
      "options": [
        "저가",
        "제가",
        "저는",
        "내가"
      ],
      "answer": 1,
      "explain": "저 + 가 contracts to 제가, the polite subject form of 'I'."
    },
    {
      "q": "커피___ 좋아해요, 그런데 차___ 안 좋아해요. Which particle fills both blanks (contrast)?",
      "options": [
        "이/가",
        "은/는",
        "을/를",
        "에"
      ],
      "answer": 1,
      "explain": "Contrast between two topics uses 은/는: 커피는 … 차는 …."
    },
    {
      "q": "누가 왔어요? Here 누가 comes from:",
      "options": [
        "누구 + 는",
        "누구 + 가",
        "누구 + 을",
        "누구 + 에"
      ],
      "answer": 1,
      "explain": "누구 + 가 contracts to 누가, 'who' as the subject of the question."
    }
  ]
},
{
  "day": 22,
  "phase": 2,
  "title": "The Object Particle 을/를",
  "focus": "Learn to mark the object of an action verb with 을/를, so you can say what you eat, drink, read, watch, and do — building full subject–object–verb sentences.",
  "grammar": {
    "point": "Object particle 을/를 (marking the direct object)",
    "explanation": "Korean sentence order is Subject–Object–Verb (SOV): the verb always comes last. To mark WHAT receives the action — the direct object — attach the object particle 을/를 to that noun. Attachment by final sound: after a consonant use 을 (밥을, 책을), after a vowel use 를 (커피를, 우유를). So '저는 밥을 먹어요' = 'I eat rice' (subject 저는 + object 밥을 + verb 먹어요). Compare with the subject particle 이/가 from Day 21: 이/가 marks the doer, 을/를 marks the thing acted upon — 고양이가 생선을 먹어요 ('the cat eats fish'). In casual speech the object particle is often dropped (밥 먹어요), but learn to place it correctly first. Only action (transitive) verbs take an object; descriptive verbs like 좋다/예쁘다 do not. Common verbs that take objects: 먹다 (eat), 마시다 (drink), 읽다 (read), 보다 (see/watch), 사다 (buy), 하다 (do).",
    "examples": [
      {
        "ko": "저는 밥을 먹어요.",
        "en": "I eat rice. (밥 ends in a consonant → 을)"
      },
      {
        "ko": "친구가 커피를 마셔요.",
        "en": "My friend drinks coffee. (커피 ends in a vowel → 를)"
      },
      {
        "ko": "저는 책을 읽어요.",
        "en": "I read a book. (책 → 책을)"
      },
      {
        "ko": "동생이 영화를 봐요.",
        "en": "My younger sibling watches a movie. (영화 → 영화를)"
      },
      {
        "ko": "고양이가 생선을 먹어요.",
        "en": "The cat eats fish. (가 = subject, 을 = object)"
      }
    ]
  },
  "vocab": [
    {
      "ko": "을/를",
      "en": "object particle",
      "note": "을 after a consonant, 를 after a vowel; marks the direct object"
    },
    {
      "ko": "밥",
      "en": "rice / meal",
      "note": "밥을 먹어요 = 'eat a meal'"
    },
    {
      "ko": "마시다",
      "en": "to drink",
      "note": "물을 마셔요 = 'drink water'"
    },
    {
      "ko": "읽다",
      "en": "to read",
      "note": "책을 읽어요 = 'read a book'; the ㄺ makes it sound like '일거요'"
    },
    {
      "ko": "보다",
      "en": "to see / watch",
      "note": "영화를 봐요 = 'watch a movie'"
    },
    {
      "ko": "사다",
      "en": "to buy",
      "note": "옷을 사요 = 'buy clothes'"
    },
    {
      "ko": "영화",
      "en": "movie",
      "note": "영화를 보다 = 'watch a movie'"
    },
    {
      "ko": "생선",
      "en": "fish (as food)",
      "note": "생선을 먹어요 = 'eat fish'"
    },
    {
      "ko": "물",
      "en": "water",
      "note": "물을 마셔요 = 'drink water'"
    }
  ],
  "exercises": [
    {
      "q": "Add the right object particle: 저는 밥__ 먹어요. (I eat rice)",
      "a": "저는 밥을 먹어요."
    },
    {
      "q": "Add the right object particle: 친구가 커피__ 마셔요. (my friend drinks coffee)",
      "a": "친구가 커피를 마셔요."
    },
    {
      "q": "Add the right object particle: 저는 책__ 읽어요. (I read a book)",
      "a": "저는 책을 읽어요."
    },
    {
      "q": "Put in order (SOV): 봐요 / 영화를 / 저는",
      "a": "저는 영화를 봐요. (I watch a movie.)"
    },
    {
      "q": "Translate to Korean: The cat eats fish.",
      "a": "고양이가 생선을 먹어요."
    },
    {
      "q": "Which particle marks the direct object — 이/가 or 을/를?",
      "a": "을/를"
    }
  ],
  "quiz": [
    {
      "q": "What is the basic word order of a Korean sentence?",
      "options": [
        "Subject–Verb–Object",
        "Subject–Object–Verb",
        "Verb–Subject–Object",
        "Object–Verb–Subject"
      ],
      "answer": 1,
      "explain": "Korean is Subject–Object–Verb (SOV): the verb always comes last."
    },
    {
      "q": "저는 밥___ 먹어요. Which particle fits?",
      "options": [
        "를",
        "을",
        "이",
        "가"
      ],
      "answer": 1,
      "explain": "밥 ends in a consonant, so the object particle is 을: 밥을 먹어요."
    },
    {
      "q": "친구가 커피___ 마셔요. Which particle fits?",
      "options": [
        "을",
        "이",
        "를",
        "은"
      ],
      "answer": 2,
      "explain": "커피 ends in a vowel, so the object particle is 를: 커피를 마셔요."
    },
    {
      "q": "Which particle marks the DIRECT OBJECT (the thing acted upon)?",
      "options": [
        "이/가",
        "은/는",
        "을/를",
        "에서"
      ],
      "answer": 2,
      "explain": "을/를 is the object particle; 이/가 marks the subject and 은/는 the topic."
    },
    {
      "q": "In 고양이가 생선을 먹어요, what role does 생선 play?",
      "options": [
        "subject",
        "object",
        "topic",
        "location"
      ],
      "answer": 1,
      "explain": "생선을 carries the object particle 을, so 생선 (fish) is the direct object being eaten."
    }
  ]
},
{
  "day": 23,
  "phase": 2,
  "title": "The Topic Particle 은/는",
  "focus": "Learn the topic particle 은/는 — how it introduces the topic of a sentence, contrasts two things, and differs from the subject particle 이/가.",
  "grammar": {
    "point": "Topic particle 은/는 (marking the topic / contrast)",
    "explanation": "은/는 marks the TOPIC of a sentence — 'as for X…'. Attachment by final sound: after a consonant use 은 (사람은, 이름은), after a vowel use 는 (저는, 우리는). You have already been using 저는 ('as for me') since the first lessons — that is this particle. Two big jobs: (1) TOPIC — it sets what the sentence is about: 저는 학생이에요 ('As for me, I'm a student'). (2) CONTRAST — it highlights a difference between two things: 커피는 좋아요, 그런데 우유는 싫어요 ('Coffee I like, but milk I dislike'). The hard part for learners is 은/는 vs 이/가 (Day 21). 이/가 introduces NEW or specific information and answers 'who/what?' — 누가 왔어요? 친구가 왔어요 ('Who came? A FRIEND came'). 은/는 talks about something already known or sets up contrast — 친구는 집에 있어요 ('As for my friend, he's at home'). A common pattern: first mention with 이/가, then refer back with 은/는. Note 저 + 는 = 저는, 나 + 는 = 나는.",
    "examples": [
      {
        "ko": "저는 한국 사람이에요.",
        "en": "As for me, I'm Korean. (저 ends in a vowel → 는)"
      },
      {
        "ko": "이름은 민수예요.",
        "en": "As for the name, it's Minsu. (이름 ends in a consonant → 은)"
      },
      {
        "ko": "커피는 좋아요. 우유는 싫어요.",
        "en": "Coffee, I like. Milk, I don't. (contrast between two topics)"
      },
      {
        "ko": "오늘은 바빠요.",
        "en": "As for today, I'm busy. (오늘 → 오늘은)"
      },
      {
        "ko": "누가 왔어요? — 친구가 왔어요.",
        "en": "Who came? — A friend came. (new info uses 이/가, not 은/는)"
      }
    ]
  },
  "vocab": [
    {
      "ko": "은/는",
      "en": "topic particle",
      "note": "은 after a consonant, 는 after a vowel; 'as for…'"
    },
    {
      "ko": "이름",
      "en": "name",
      "note": "이름은 …예요 = 'the name is …'"
    },
    {
      "ko": "오늘",
      "en": "today",
      "note": "오늘은 = 'as for today'"
    },
    {
      "ko": "우유",
      "en": "milk",
      "note": "우유는 = 'as for milk'; ends in a vowel → 는"
    },
    {
      "ko": "바쁘다",
      "en": "to be busy",
      "note": "descriptive verb; 바빠요 in polite form"
    },
    {
      "ko": "그런데",
      "en": "but / by the way",
      "note": "connects contrasting sentences"
    },
    {
      "ko": "사람",
      "en": "person",
      "note": "사람은 = 'as for the person'; ends in consonant → 은"
    },
    {
      "ko": "싫다",
      "en": "to dislike / not want",
      "note": "opposite of 좋다; 싫어요 in polite form"
    }
  ],
  "exercises": [
    {
      "q": "Add the right topic particle: 저__ 학생이에요. (As for me, I'm a student)",
      "a": "저는 학생이에요."
    },
    {
      "q": "Add the right topic particle: 이름__ 민수예요. (As for the name, it's Minsu)",
      "a": "이름은 민수예요."
    },
    {
      "q": "Add the right topic particle: 오늘__ 바빠요. (As for today, I'm busy)",
      "a": "오늘은 바빠요."
    },
    {
      "q": "Fill the contrast: 커피__ 좋아요, 그런데 우유__ 싫어요.",
      "a": "커피는 좋아요, 그런데 우유는 싫어요."
    },
    {
      "q": "Which particle answers 'Who came?' — 친구__ 왔어요?",
      "a": "친구가 왔어요. (new info → 이/가)"
    },
    {
      "q": "Translate: As for my friend, he's at home. (친구, 집, 있다)",
      "a": "친구는 집에 있어요."
    }
  ],
  "quiz": [
    {
      "q": "저___ 한국 사람이에요. Which topic particle fits?",
      "options": [
        "은",
        "는",
        "을",
        "가"
      ],
      "answer": 1,
      "explain": "저 ends in a vowel, so the topic particle is 는: 저는."
    },
    {
      "q": "이름___ 민수예요. Which topic particle fits?",
      "options": [
        "는",
        "를",
        "은",
        "이"
      ],
      "answer": 2,
      "explain": "이름 ends in a consonant, so the topic particle is 은: 이름은."
    },
    {
      "q": "What are the TWO main jobs of 은/는?",
      "options": [
        "subject and object",
        "topic and contrast",
        "location and time",
        "question and answer"
      ],
      "answer": 1,
      "explain": "은/는 marks the topic ('as for X') and shows contrast between two things."
    },
    {
      "q": "누가 왔어요? Which answer is most natural for brand-new information?",
      "options": [
        "친구는 왔어요",
        "친구가 왔어요",
        "친구를 왔어요",
        "친구에 왔어요"
      ],
      "answer": 1,
      "explain": "New/specific information answering 'who?' takes the subject particle 이/가: 친구가 왔어요."
    },
    {
      "q": "In 커피는 좋아요, 우유는 싫어요, why is 은/는 used?",
      "options": [
        "to mark the object",
        "to show location",
        "to contrast coffee vs milk",
        "to ask a question"
      ],
      "answer": 2,
      "explain": "The repeated 은/는 sets up a contrast between two topics: coffee vs milk."
    }
  ]
},
{
  "day": 24,
  "phase": 2,
  "title": "Location Particles 에 and 에서",
  "focus": "Learn 에 (static location / destination / time) and 에서 (where an action happens / starting point), and how to tell them apart.",
  "grammar": {
    "point": "Location particles 에 (at, to, in — location & time) vs 에서 (at, from — action location & origin)",
    "explanation": "Two particles both translate as 'at/in', but they do different jobs. 에 marks (1) a STATIC location — where something exists or is, used with 있다/없다: 집에 있어요 ('I'm at home'); (2) a DESTINATION — where you go, used with 가다/오다: 학교에 가요 ('I go to school'); and (3) a TIME point: 세 시에 ('at 3 o'clock'), 월요일에 ('on Monday'). 에서 marks (1) the place where an ACTION happens — used with active verbs like eat, study, work: 학교에서 공부해요 ('I study AT school'); and (2) a STARTING point / origin — 'from': 집에서 왔어요 ('I came from home'), 한국에서 왔어요 ('I'm from Korea'). The key test: if the verb is 있다/없다 or a movement verb (가다/오다), use 에. If someone is DOING an action in that place, use 에서. Compare: 도서관에 있어요 ('I'm at the library' — just located there) vs 도서관에서 공부해요 ('I study at the library' — doing something there). 에 attaches directly to the noun regardless of final sound (집에, 학교에); same for 에서 (집에서, 학교에서).",
    "examples": [
      {
        "ko": "지금 집에 있어요.",
        "en": "I'm at home right now. (static location → 에)"
      },
      {
        "ko": "내일 부산에 가요.",
        "en": "I'm going to Busan tomorrow. (destination → 에)"
      },
      {
        "ko": "카페에서 커피를 마셔요.",
        "en": "I drink coffee at the café. (action location → 에서)"
      },
      {
        "ko": "저는 일본에서 왔어요.",
        "en": "I came from Japan. / I'm from Japan. (origin → 에서)"
      },
      {
        "ko": "일곱 시에 아침을 먹어요.",
        "en": "I eat breakfast at 7 o'clock. (time → 에)"
      }
    ]
  },
  "vocab": [
    {
      "ko": "집",
      "en": "house, home"
    },
    {
      "ko": "학교",
      "en": "school"
    },
    {
      "ko": "도서관",
      "en": "library"
    },
    {
      "ko": "회사",
      "en": "company, workplace"
    },
    {
      "ko": "공부하다",
      "en": "to study",
      "note": "공부해요 (polite present)"
    },
    {
      "ko": "일하다",
      "en": "to work",
      "note": "일해요"
    },
    {
      "ko": "살다",
      "en": "to live (reside)",
      "note": "살아요; 서울에 살아요 = I live in Seoul (에, static)"
    },
    {
      "ko": "오다",
      "en": "to come",
      "note": "와요"
    },
    {
      "ko": "가다",
      "en": "to go",
      "note": "가요"
    },
    {
      "ko": "만나다",
      "en": "to meet",
      "note": "만나요"
    }
  ],
  "exercises": [
    {
      "q": "Fill in 에 or 에서: 저는 회사___ 일해요.",
      "a": "에서 — an action (working) happens there → 회사에서 일해요."
    },
    {
      "q": "Fill in 에 or 에서: 고양이가 방___ 있어요.",
      "a": "에 — 있다 (existence/location) → 방에 있어요 (The cat is in the room)."
    },
    {
      "q": "Fill in 에 or 에서: 세 시___ 친구를 만나요.",
      "a": "에 — a time point → 세 시에 (at 3 o'clock)."
    },
    {
      "q": "Say 'I'm going to school' in Korean.",
      "a": "학교에 가요. (destination with 가다 → 에)"
    },
    {
      "q": "Say 'I study at the library' in Korean.",
      "a": "도서관에서 공부해요. (action location → 에서)"
    },
    {
      "q": "Translate: 저는 한국에서 왔어요.",
      "a": "I came from Korea. / I'm from Korea. (origin → 에서)"
    }
  ],
  "quiz": [
    {
      "q": "Which is correct: 'I eat lunch at a restaurant'?",
      "options": [
        "식당에 점심을 먹어요",
        "식당에서 점심을 먹어요",
        "식당를 점심을 먹어요",
        "식당은 점심을 먹어요"
      ],
      "answer": 1,
      "explain": "Eating is an action happening at the restaurant, so use 에서: 식당에서 점심을 먹어요."
    },
    {
      "q": "Fill the blank: 저는 지금 도서관___ 있어요.",
      "options": [
        "에서",
        "에",
        "를",
        "도"
      ],
      "answer": 1,
      "explain": "있다 marks static location, which takes 에: 도서관에 있어요 ('I'm at the library')."
    },
    {
      "q": "What does 저는 미국에서 왔어요 mean?",
      "options": [
        "I'm going to America",
        "I live in America",
        "I came from America / I'm from America",
        "I like America"
      ],
      "answer": 2,
      "explain": "에서 here marks origin/starting point with 오다 (to come): 'I came from America.'"
    },
    {
      "q": "Choose the correct particle: '내일 부산___ 가요' (I'm going to Busan tomorrow).",
      "options": [
        "에",
        "에서",
        "은",
        "이"
      ],
      "answer": 0,
      "explain": "가다 (to go) takes a destination marked by 에: 부산에 가요."
    },
    {
      "q": "Which sentence correctly uses a time expression?",
      "options": [
        "여덟 시에서 일어나요",
        "여덟 시를 일어나요",
        "여덟 시에 일어나요",
        "여덟 시는 일어나요"
      ],
      "answer": 2,
      "explain": "Time points take 에, never 에서: 여덟 시에 일어나요 ('I get up at 8 o'clock')."
    }
  ]
},
{
  "day": 25,
  "phase": 2,
  "title": "Particles 의, 도, and 만 (possessive, 'also', 'only')",
  "focus": "Round out your particle toolkit: 의 to show possession, 도 for 'also/too', and 만 for 'only/just'.",
  "grammar": {
    "point": "의 (possessive 'of/'s'), 도 (also, too — replaces 은/는/이/가/을/를), 만 (only, just)",
    "explanation": "Three more everyday particles. 의 links two nouns to show possession or belonging, like English 's or 'of': 저의 책 ('my book'), 친구의 집 ('a friend's house'). In speech 의 is pronounced like 에 [e], and 저의/나의 usually shrink to 제/내: 제 책 ('my book'), 내 이름 ('my name'). 도 means 'also / too / even' and REPLACES the subject/topic/object particles (은/는/이/가/을/를) rather than stacking on them: 저도 학생이에요 ('I'm a student too'), 커피도 좋아해요 ('I like coffee too'). 만 means 'only / just' and also replaces 이/가/을/를 (though it can attach after location/other particles): 물만 마셔요 ('I drink only water'), 한 개만 주세요 ('give me just one'). Remember: 도 and 만 knock out the basic subject/object particle — you say 저도, never 저는도.",
    "examples": [
      {
        "ko": "이것은 선생님의 책이에요.",
        "en": "This is the teacher's book."
      },
      {
        "ko": "제 이름은 민수예요.",
        "en": "My name is Minsu. (저의 → 제)"
      },
      {
        "ko": "동생도 학교에 가요.",
        "en": "My younger sibling also goes to school."
      },
      {
        "ko": "저도 한국 음식을 좋아해요.",
        "en": "I also like Korean food."
      },
      {
        "ko": "커피만 마셔요.",
        "en": "I drink only coffee."
      },
      {
        "ko": "한 명만 왔어요.",
        "en": "Only one person came."
      }
    ]
  },
  "vocab": [
    {
      "ko": "이름",
      "en": "name",
      "note": "제 이름 = my name"
    },
    {
      "ko": "동생",
      "en": "younger sibling",
      "note": "남동생 (brother), 여동생 (sister)"
    },
    {
      "ko": "선생님",
      "en": "teacher",
      "note": "always used with 님 (honorific)"
    },
    {
      "ko": "음식",
      "en": "food",
      "note": "한국 음식 = Korean food"
    },
    {
      "ko": "물",
      "en": "water",
      "note": ""
    },
    {
      "ko": "명",
      "en": "counter for people",
      "note": "한 명, 두 명 = one/two people"
    },
    {
      "ko": "개",
      "en": "counter for objects",
      "note": "한 개 = one (thing)"
    },
    {
      "ko": "주세요",
      "en": "please give (me)",
      "note": "from 주다 (to give)"
    }
  ],
  "exercises": [
    {
      "q": "Say 'my book' the natural spoken way (저의 → ?).",
      "a": "제 책"
    },
    {
      "q": "Translate: 'I like coffee too.' (use 도)",
      "a": "저도 커피를 좋아해요. (or 커피도 좋아해요)"
    },
    {
      "q": "Translate: 'I drink only water.' (use 만)",
      "a": "물만 마셔요."
    },
    {
      "q": "Fix the mistake: 저는도 학생이에요.",
      "a": "저도 학생이에요. (도 replaces 는, don't stack them)"
    },
    {
      "q": "Translate: 'This is my friend's house.' (use 의)",
      "a": "이것은 제 친구의 집이에요."
    },
    {
      "q": "Translate: 'Please give me just one.' (counter 개)",
      "a": "한 개만 주세요."
    }
  ],
  "quiz": [
    {
      "q": "Which particle means 'also / too'?",
      "options": [
        "의",
        "도",
        "만",
        "에서"
      ],
      "answer": 1,
      "explain": "도 means 'also/too' and replaces the subject/object particle."
    },
    {
      "q": "'저의 책' is naturally shortened in speech to:",
      "options": [
        "제 책",
        "저 책",
        "내의 책",
        "저도 책"
      ],
      "answer": 0,
      "explain": "저의 contracts to 제, so '제 책' = my book."
    },
    {
      "q": "Choose the correct sentence for 'I drink only water.'",
      "options": [
        "물은 마셔요",
        "물도 마셔요",
        "물만 마셔요",
        "물의 마셔요"
      ],
      "answer": 2,
      "explain": "만 means 'only', and it replaces 을/를: 물만 마셔요."
    },
    {
      "q": "What is wrong with '저는도 학생이에요'?",
      "options": [
        "도 should be 만",
        "도 replaces 는, so it should be 저도",
        "It needs 의",
        "Nothing is wrong"
      ],
      "answer": 1,
      "explain": "도 replaces the topic particle 는; you cannot stack them. Correct: 저도."
    },
    {
      "q": "Which particle shows possession ('of / 's')?",
      "options": [
        "도",
        "만",
        "의",
        "에"
      ],
      "answer": 2,
      "explain": "의 links two nouns to show possession: 친구의 집 = a friend's house."
    }
  ]
},
{
  "day": 26,
  "phase": 2,
  "title": "Future Tense: -(으)ㄹ 거예요 (will / be going to)",
  "focus": "Talk about future plans and intentions with -(으)ㄹ 거예요, the everyday future ending.",
  "grammar": {
    "point": "-(으)ㄹ 거예요 (future / intention: 'will do', 'is going to do')",
    "explanation": "This is the most common way to say the future in polite speech. Take a verb stem (drop 다). If the stem ends in a VOWEL, add -ㄹ 거예요: 가다 → 갈 거예요 ('I will go'), 오다 → 올 거예요 ('I will come'). If the stem ends in a CONSONANT (batchim), add -을 거예요: 먹다 → 먹을 거예요 ('I will eat'), 읽다 → 읽을 거예요 ('I will read'). The ㄹ irregular: if the stem already ends in ㄹ, drop that ㄹ and add -ㄹ 거예요: 살다 → 살 거예요 ('I will live'). In speech 거예요 is often pronounced 꺼예요. This ending expresses both a plan/intention ('I'm going to…') and, with a third person, a guess ('he'll probably…'). The written form is 거예요; you'll also see the casual 거야.",
    "examples": [
      {
        "ko": "내일 친구를 만날 거예요.",
        "en": "I will meet a friend tomorrow."
      },
      {
        "ko": "주말에 집에서 쉴 거예요.",
        "en": "I'm going to rest at home on the weekend."
      },
      {
        "ko": "저녁에 한국어를 공부할 거예요.",
        "en": "I will study Korean in the evening."
      },
      {
        "ko": "그 사람은 안 올 거예요.",
        "en": "That person probably won't come."
      },
      {
        "ko": "점심에 김밥을 먹을 거예요.",
        "en": "I'm going to eat gimbap for lunch."
      }
    ]
  },
  "vocab": [
    {
      "ko": "내일",
      "en": "tomorrow",
      "note": "time word; pairs naturally with the future tense"
    },
    {
      "ko": "주말",
      "en": "weekend",
      "note": "주(week) + 말(end)"
    },
    {
      "ko": "계획",
      "en": "plan",
      "note": "계획이 있어요 = 'I have a plan'"
    },
    {
      "ko": "쉬다",
      "en": "to rest",
      "note": "stem 쉬- ends in a vowel → 쉴 거예요"
    },
    {
      "ko": "만나다",
      "en": "to meet",
      "note": "vowel stem → 만날 거예요"
    },
    {
      "ko": "여행",
      "en": "trip, travel",
      "note": "여행하다 = 'to travel'"
    },
    {
      "ko": "준비하다",
      "en": "to prepare",
      "note": "하다 verb → 준비할 거예요"
    },
    {
      "ko": "살다",
      "en": "to live",
      "note": "ㄹ-final stem → 살 거예요 (drop original ㄹ)"
    }
  ],
  "exercises": [
    {
      "q": "Conjugate 가다 into the future polite form.",
      "a": "갈 거예요 (vowel stem → -ㄹ 거예요)"
    },
    {
      "q": "Conjugate 읽다 (to read) into the future polite form.",
      "a": "읽을 거예요 (consonant stem → -을 거예요)"
    },
    {
      "q": "Say 'I will rest at home tomorrow.' in Korean.",
      "a": "내일 집에서 쉴 거예요."
    },
    {
      "q": "Say 'I'm going to study Korean on the weekend.'",
      "a": "주말에 한국어를 공부할 거예요."
    },
    {
      "q": "Conjugate 살다 (to live) into the future polite form.",
      "a": "살 거예요 (ㄹ-final: drop ㄹ, add -ㄹ 거예요)"
    }
  ],
  "quiz": [
    {
      "q": "What is the correct future form of 먹다 (to eat)?",
      "options": [
        "먹 거예요",
        "먹을 거예요",
        "먹를 거예요",
        "머글 거예요"
      ],
      "answer": 1,
      "explain": "먹- ends in a consonant (batchim ㄱ), so add -을 거예요 → 먹을 거예요."
    },
    {
      "q": "Which sentence means 'I will meet a friend tomorrow.'?",
      "options": [
        "내일 친구를 만나요.",
        "어제 친구를 만났어요.",
        "내일 친구를 만날 거예요.",
        "친구를 안 만나요."
      ],
      "answer": 2,
      "explain": "만나다 is a vowel stem → 만날 거예요; 내일 ('tomorrow') sets the future context."
    },
    {
      "q": "The verb 살다 (to live) becomes ___ in the future tense.",
      "options": [
        "살을 거예요",
        "살ㄹ 거예요",
        "살 거예요",
        "사를 거예요"
      ],
      "answer": 2,
      "explain": "The stem already ends in ㄹ, so it drops and -ㄹ 거예요 attaches: 살 거예요."
    },
    {
      "q": "In natural speech, 거예요 is usually pronounced like:",
      "options": [
        "거예요 exactly",
        "꺼예요",
        "거에요",
        "게요"
      ],
      "answer": 1,
      "explain": "The ㄱ tenses to ㄲ in speech, so 거예요 sounds like 꺼예요, though it is written 거예요."
    }
  ]
}
];
