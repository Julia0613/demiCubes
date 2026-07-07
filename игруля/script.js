"use strict";

const ASSETS = {
  backgrounds: {
    main: "./assets/images/background-main-clean.png",
    game: "./assets/images/background-game.png",
  },
  logo: "./assets/images/logo-no-back.png",
  buttons: {
    play: "./assets/images/button-play.png",
    restart: "./assets/images/button-restart.png",
    soundOn: "./assets/images/button-sound-on.png",
    soundOff: "./assets/images/button-sound-off.png",
    pause: "./assets/images/pause.png",
    shop: "./assets/images/shop_icon.png",
    help: "./assets/images/help_icon.png",
  },
  airfryer: {
    normal: "./assets/images/airfryer-normal-cutout.png",
    happy: "./assets/images/airfryer-happy-cutout.png",
    sad: "./assets/images/airfryer-sad-cutout.png",
    perfect: "./assets/images/airfryer-perfect-cutout.png",
    card: "./assets/images/card-airfryer.png",
    blocks: ["./assets/images/airfryer-block-black-clean.png", "./assets/images/airfryer-block-white-clean.png", "./assets/images/airfryer-block-metal-clean.png"],
  },
  blender: {
    normal: "./assets/images/blender-normal.png",
    happy: "./assets/images/blender-happy.png",
    sad: "./assets/images/blender-sad.png",
    card: "./assets/images/card-blender.png",
    empty: "./assets/images/blender-empty.png",
    fill25: "./assets/images/blender-fill-25.png",
    fill50: "./assets/images/blender-fill-50.png",
    fill75: "./assets/images/blender-fill-75.png",
    fill100: "./assets/images/blender-fill-100.png",
    smoothie: "./assets/images/smoothie.png",
  },
  coffee: {
    normal: "./assets/images/coffee-normal.png",
    happy: "./assets/images/coffee-happy.png",
    sad: "./assets/images/coffee-sad.png",
    card: "./assets/images/card-coffee.png",
    idle: "./assets/images/coffee-machine-idle.png",
    brewing: "./assets/images/coffee-machine-brewing.png",
    steam: "./assets/images/coffee-machine-steam.png",
    perfect: "./assets/images/coffee-machine-perfect.png",
    fail: "./assets/images/coffee-machine-fail.png",
    cupEmpty: "./assets/images/cup-empty.png",
    cup30: "./assets/images/cup-coffee-30.png",
    cup60: "./assets/images/cup-coffee-60.png",
    cupFull: "./assets/images/cup-coffee-full.png",
    cupPerfect: "./assets/images/cup-perfect.png",
    cupFail: "./assets/images/cup-fail.png",
  },
  items: {
    strawberry: "./assets/images/strawberry.png",
    banana: "./assets/images/banana.png",
    mango: "./assets/images/mango.png",
    blueberry: "./assets/images/blueberry.png",
    mint: "./assets/images/mint.png",
    ice: "./assets/images/ice.png",
    smoothie: "./assets/images/smoothie.png",
    bomb: "./assets/images/bomb.png",
    tnt: "./assets/images/tnt.png",
    report: "./assets/images/list.png",
  },
  match: {
    card: "./assets/images/card_match.png",
    normal: "./assets/images/match_character_normal.png",
    happy: "./assets/images/match_character_happy.png",
    sad: "./assets/images/match_character_sad.png",
    tiles: {
      strawberry: "./assets/images/match_tile_strawberry.png",
      banana: "./assets/images/match_tile_banana.png",
      mango: "./assets/images/match_tile_mango.png",
      blueberry: "./assets/images/match_tile_blueberry.png",
      mint: "./assets/images/match_tile_mint.png",
      ice: "./assets/images/match_tile_ice.png",
    },
    specials: {
      star: "./assets/images/match_tile_star.png",
      heart: "./assets/images/match_tile_heart.png",
      blocker: "./assets/images/match_tile_report_blocker.png",
    },
  },
  economy: {
    coin: "./assets/images/coin.png",
    rewardBurst: "./assets/images/coin_reward_burst.png",
  },
  boosters: {
    hammer: "./assets/images/booster_hammer.png",
    shuffle: "./assets/images/booster_shuffle.png",
    star: "./assets/images/booster_star.png",
    bomb: "./assets/images/booster_bomb.png",
    extraMoves: "./assets/images/booster_extra_moves.png",
    colorMixer: "./assets/images/booster_color_mixer.png",
    shopCharacter: "./assets/images/shop_panel_character.png",
  },
  duel: {
    soloIcon: "./assets/images/solo_run_icon.png",
    icon: "./assets/images/duel_icon.png",
    roomBg: "./assets/images/duel_room_bg.png",
    codeTicket: "./assets/images/duel_code_ticket.png",
    vsBg: "./assets/images/duel_vs_bg.png",
    startBurst: "./assets/images/duel_start_burst.png",
    finalSecondsFrame: "./assets/images/duel_final_seconds_frame.png",
    rivalComboPop: "./assets/images/duel_rival_combo_pop.png",
    victoryBg: "./assets/images/duel_victory_bg.png",
    defeatBg: "./assets/images/duel_defeat_bg.png",
    drawBg: "./assets/images/duel_draw_bg.png",
  },
};

const SOUNDS = {
  click: "./assets/sounds/click.mp3",
  score: "./assets/sounds/score.mp3",
  fail: "./assets/sounds/fail.mp3",
  win: "./assets/sounds/win.mp3",
  gameOver: "./assets/sounds/game-over.mp3",
  music: "./assets/sounds/music.mp3",
};

const COPY = {
  universal: [
    "Согласовано!",
    "Команда одобряет",
    "Миссия выполнена",
    "Красиво получилось",
    "Идеально собрано",
    "Можно ещё раз",
    "Герой дня",
    "Уровень: вкусно",
    "Demiand доволен",
    "Вот это ход",
    "Почти магия",
    "Кубики сошлись",
    "Победа на кухне",
    "Ещё один раунд?",
    "Выглядит отлично",
    "Так держать!",
  ],
  air: {
    title: "Башня хруста",
    success: [
      "Ровненько!",
      "Вот это баланс!",
      "Башня держится!",
      "Хрустальный ход!",
      "Почти идеально!",
      "Ещё один кубик!",
      "Красиво поставлено!",
      "Аэрогриль припарковался",
      "Башня говорит: норм",
      "Кубик сел как надо",
      "Почти архитектура",
      "Сковородка аплодирует",
      "Хруст стоит ровно",
      "Слой за слоем!",
      "Башня не спорит",
      "Очень уверенно",
      "Кубик встал по красоте",
    ],
    fail: ["Ой, башня решила отдохнуть", "Кубик улетел не туда", "Почти получилось", "Башня сказала: пока", "Баланс ушёл пить чай", "Хруст покатился", "Немного поехали"],
    final: ["Башня собрана!", "Хруст победил хаос", "Аэрогриль доволен", "Уровень баланса: Demiand", "Кубики держатся!", "Вышло почти монументально"],
  },
  blender: {
    title: "Смузи-охота",
    success: [
      "В смузи!",
      "Ягодка поймана!",
      "Банановый плюс!",
      "Манго принято!",
      "Мята на месте!",
      "Лёд добавлен!",
      "Смузи становится мощнее!",
    ],
    fail: [
      "Это не в смузи!",
      "Бомбу не блендерим!",
      "TNT лучше отложить",
      "Отчёт сегодня не добавляем",
      "Бухгалтерия подождёт",
      "Ой, не тот ингредиент",
    ],
    final: ["Смузи собран!", "Витаминная победа", "Блендер счастлив", "Получилось вкусно", "Миссия: смузи выполнена"],
  },
  coffee: {
    title: "Идеальный кофе",
    stages: ["Этап 1: помол", "Этап 2: пролив", "Этап 3: пенка"],
    success: ["Идеально!", "То что надо!", "Красивый момент!", "Кофе одобряет", "Пенка улыбается", "Бариста внутри ликует", "Попали в аромат", "Кнопка нажалась вкусно"],
    fail: ["Чуть-чуть мимо", "Кофе задумался", "Пенка пошла гулять", "Бывает и такое", "Попробуем ещё вкуснее", "Кофе моргнул первым"],
    final: ["Кофе готов!", "Ароматная победа", "Кофемашина сияет", "Пенка получилась", "Утро спасено"],
  },
  match: {
    title: "Кубики сошлись",
    success: [
      "Цепочка пошла!",
      "Кубики договорились",
      "Сладкий ход",
      "Вот это связка!",
      "Кубики в ряд и порядок",
      "Плитки хлопнули",
      "Красиво совпало",
      "Ещё один вкусный ряд",
      "Комбо на кухне",
      "Почти кондитерская магия",
    ],
    fail: [
      "Не сошлось",
      "Кубики задумались",
      "Ход без искры",
      "Почти, но нет",
      "Плитки не договорились",
      "Нужна цепочка пободрее",
    ],
    final: ["Кубики сошлись!", "Комбо собрано", "Поле сияет", "Сладкая победа", "Матч получился"],
  },
  ranks: [
    { min: 20, title: "Легенда Demiand", phrase: "Миссия выполнена. Можно запускать ещё раз." },
    { min: 15, title: "Мастер Деми-кубиков", phrase: "Собрано красиво, сыграно уверенно." },
    { min: 10, title: "Герой кухни", phrase: "Вот это уровень! Команда одобряет." },
    { min: 5, title: "Кухонный помощник", phrase: "Уже вкусно. Уже красиво. Уже почти легенда." },
    { min: 0, title: "Стажёр Деми-кубиков", phrase: "Начало положено! Ещё один раунд — и будет мощно." },
  ],
};

const CHARACTERS = {
  airfryer: {
    name: "Аэрогриль",
    description: "Построй самую ровную башню",
    action: "Играть",
    image: ASSETS.airfryer.card,
    resultImage: ASSETS.airfryer.happy,
  },
  blender: {
    name: "Блендер",
    description: "Собери идеальный смузи",
    action: "Играть",
    image: ASSETS.blender.card,
    resultImage: ASSETS.blender.happy,
  },
  coffee: {
    name: "Кофемашина",
    description: "Поймай идеальный момент",
    action: "Играть",
    image: ASSETS.coffee.card,
    resultImage: ASSETS.coffee.happy,
  },
  match: {
    name: "Кубики сошлись",
    description: "Главная игра: собирай цели, бустеры и очки рейтинга",
    action: "Играть",
    image: ASSETS.match.card,
    resultImage: ASSETS.match.happy,
  },
};

const DIFFICULTIES = {
  easy: { label: "Легко", speed: 0.72, spawn: 1.28, airTarget: 30, blenderTarget: 30, badRate: 0.2, matchMoves: 24, matchGoals: 2, matchGoalBase: 7, matchBlockers: 0 },
  normal: { label: "Нормально", speed: 1, spawn: 1, airTarget: 70, blenderTarget: 70, badRate: 0.27, matchMoves: 22, matchGoals: 3, matchGoalBase: 8, matchBlockers: 3 },
  hard: { label: "Сложно", speed: 1.38, spawn: 0.72, airTarget: 100, blenderTarget: 100, badRate: 0.34, matchMoves: 20, matchGoals: 3, matchGoalBase: 10, matchBlockers: 5 },
};

const PROGRESS_KEY = "demiCareerProgress";
const WALLET_KEY = "demiWallet";
const RATING_STATS_KEY = "demiRatingStats";
const RATING_SESSIONS_KEY = "demiSubmittedMatchSessions";
const PLAYER_PROFILE_KEY = "DEMI_PLAYER_PROFILE";
const SUPABASE_URL = "https://jvjaeopcwmgaitdwuxqe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nFCuOvucr1dDH17vMeMIeQ_G7cfXsU-";
const SUPABASE_TABLES = {
  players: "players",
  scores: "scores",
  duelRooms: "duel_rooms",
};
const PROFILE_AVATARS = {
  airfryer: { label: "Аэрогриль", src: ASSETS.airfryer.normal },
  blender: { label: "Блендер", src: ASSETS.blender.normal },
  coffee: { label: "Кофемашина", src: ASSETS.coffee.normal },
};
const DEPARTMENTS = [
  "SMM",
  "HR",
  "Финансы",
  "Сервис-склад",
  "Сервис-менеджеры",
  "Контент-креаторы",
  "Продажи",
  "Бухгалтерия",
  "Логистика и ВЭД",
  "IT",
  "E-com",
  "Администрация и CEO",
  "Ассистенты",
];
const BOOSTERS = {
  hammer: { title: "Молоточек", desc: "Убирает одну плитку или отчёт.", price: 12, action: "target" },
  shuffle: { title: "Перемешать", desc: "Встряхивает всё поле.", price: 18, action: "instant" },
  star: { title: "Звёздный ход", desc: "Чистит ряд и колонку.", price: 24, action: "target" },
  bomb: { title: "Бум-связка", desc: "Чистит зону 3×3.", price: 28, action: "target" },
  extraMoves: { title: "+5 ходов", desc: "Добавляет пять ходов.", price: 32, action: "instant" },
  colorMixer: { title: "Миксер цвета", desc: "Убирает все плитки выбранного цвета.", price: 38, action: "target" },
};
const MINI_GAME_REWARDS = {
  easy: { airfryer: 5, blender: 7, coffee: 8 },
  normal: { airfryer: 9, blender: 11, coffee: 12 },
  hard: { airfryer: 14, blender: 16, coffee: 18 },
};
const MATCH_TILE_LABELS = {
  strawberry: "клубника",
  banana: "банан",
  mango: "манго",
  blueberry: "голубика",
  mint: "мята",
  ice: "лёд",
};
let matchTileId = 0;
const HELP_COPY = {
  select: {
    title: "Добро пожаловать на кухню!",
    lines: [
      "Главный челлендж — «Кубики сошлись». Там растёт рейтинг.",
      "Мини-игры — быстрые забеги за монетками.",
      "Монетки меняются на бустеры в лавке.",
    ],
    tip: "Сначала выбери сложность, потом решай: в рейтинг или на добычу монеток.",
  },
  airfryer: {
    title: "Башня хруста",
    lines: [
      "Жди момент, когда аэрогриль подплывёт ровно над башней.",
      "Тап — и блок встаёт на место. Сильный промах завершает раунд.",
      "Три идеальных попадания подряд приносят бонусную монетку.",
    ],
    tip: "Чем сложнее режим, тем вкуснее награда за победу.",
  },
  blender: {
    title: "Смузи-охота",
    lines: [
      "Лови фрукты, мяту и лёд — всё вкусное летит в смузи.",
      "Бомбы, TNT и отчёты оставляем за бортом стакана.",
      "Пять точных ловушек подряд дают бонусную монетку.",
    ],
    tip: "Если хороший продукт улетел вниз, теряется жизнь. Всего их три.",
  },
  coffee: {
    title: "Идеальный кофе",
    lines: [
      "На каждом этапе поймай бегунок в удачный момент.",
      "Зелёная зона делает кофе бодрым и засчитанным.",
      "Попадание в самый центр приносит бонусную монетку.",
    ],
    tip: "Помол, пролив, пенка — три шага до ароматной победы.",
  },
  match: {
    title: "Кубики сошлись",
    lines: [
      "Перетаскивай плитки, чтобы собрать три одинаковые в ряд.",
      "Закрывай цели до того, как закончатся ходы.",
      "Звёзды, сердца и бустеры устраивают красивую уборку поля.",
    ],
    tip: "Очки рейтинга копятся здесь. Отчёты убираются спецплитками и бустерами.",
  },
};
const STATUS_LEVELS = [
  {
    minPercent: 0,
    title: "Новичок рейтинга",
    desc: "Первые очки впереди. Таблица уже ждёт ход.",
  },
  {
    minPercent: 10,
    title: "Разогреватель",
    desc: "Старт есть: кухня проснулась и засчитала раунд.",
  },
  {
    minPercent: 20,
    title: "Ловец кубиков",
    desc: "Кубики узнают руку. Дальше будет вкуснее.",
  },
  {
    minPercent: 30,
    title: "Кухонный стажёр",
    desc: "Нижняя часть таблицы позади. Держим темп.",
  },
  {
    minPercent: 40,
    title: "Смузи-смельчак",
    desc: "Рейтинг заметил тебя и подвинул табличку выше.",
  },
  {
    minPercent: 50,
    title: "Комбо-мастер",
    desc: "Середина пройдена. Комбо звучит уверенно.",
  },
  {
    minPercent: 60,
    title: "Герой кухни",
    desc: "Очки растут уверенно. Место становится теплее.",
  },
  {
    minPercent: 70,
    title: "Звёздный игрок",
    desc: "Верхняя часть рейтинга. Пахнет победой.",
  },
  {
    minPercent: 80,
    title: "Мастер Demiand",
    desc: "Почти вершина. Кубики собираются ровнее.",
  },
  {
    minPercent: 90,
    title: "Профи Demiand",
    desc: "Верхние 10%. Это уже серьёзная кухня.",
  },
];
const LOCAL_STATUS_LEVELS = [
  {
    title: "Новичок кухни",
    desc: "Первые кубики только разогреваются.",
  },
  {
    title: "Первый замес",
    desc: "Раунд засчитан. Кухня уже в деле.",
  },
  {
    title: "Ловец ходов",
    desc: "Комбо начинают попадаться чаще.",
  },
  {
    title: "Кухонный стажёр",
    desc: "Плитки слушаются всё увереннее.",
  },
  {
    title: "Смузи-смельчак",
    desc: "Игровой ритм пойман, поле оживает.",
  },
  {
    title: "Комбо-мастер",
    desc: "Ходы собираются красиво и вовремя.",
  },
  {
    title: "Герой кухни",
    desc: "Раунды копятся, бустеры улыбаются.",
  },
  {
    title: "Звёздный игрок",
    desc: "Почти всё поле работает на тебя.",
  },
  {
    title: "Мастер кубиков",
    desc: "Кухня узнаёт твой стиль с первого хода.",
  },
  {
    title: "Профи Demiand",
    desc: "Внутриигровой уровень сияет на максимум.",
  },
];
const LOCAL_LEVEL_STEPS = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45];
const LEVEL_PROGRESS_BY_DIFFICULTY = {
  easy: 1,
  normal: 2,
  hard: 3,
};
const DUEL_TIMERS = {
  easy: 90,
  normal: 120,
  hard: 150,
};
const DUEL_COPY = {
  title: "Кулинарный поединок",
  solo: "Соло-забег",
  duel: "Кулинарный поединок",
  create: "Создать кухню",
  join: "Ворваться на кухню",
  codeTitle: "Код кухни",
  waiting: "Ждём второго повара...",
  rivalReady: "Соперник уже на кухне!",
  warming: "Кухня почти готова...",
  started: "Кулинарный поединок начался!",
  finalSeconds: "Последние 10 секунд!",
  timeUp: "Время вышло!",
  counting: "Кухня считает очки...",
  win: "Цели закрыты — кухня твоя!",
  winByScore: "Цели закрыты, ты выше по очкам!",
  goalsClosedButSecond: "Цели закрыты, но соперник обошёл по очкам",
  placedFirst: "Цели не закрыты, но ты выше по очкам",
  placedSecond: "Соперник набрал больше",
  draw: "Идеальная ничья",
  rematch: "Реванш на кухне",
  back: "Вернуться к кубикам",
};

const LOADING_COPY = [
  "Разогреваем кухню...",
  "Собираем кубики...",
  "Моем ягоды для смузи...",
  "Будим кофемашину...",
  "Проверяем кнопочки...",
  "Почти готово!",
];

const app = document.querySelector("#app");
const loadedAssets = new Set();
const failedAssets = new Set();
const state = {
  screen: "start",
  selectedCharacter: null,
  score: 0,
  muted: localStorage.getItem("demiMuted") === "1",
  audioUnlocked: false,
  difficulty: localStorage.getItem("demiDifficulty") || "normal",
  matchMode: localStorage.getItem("demiMatchMode") || "solo",
  currentGame: null,
  paused: false,
  playerProfile: loadPlayerProfile(),
  ratingStats: loadRatingStats(),
  matchSessionId: "",
  resultSubmitted: false,
  roundBonusCoins: 0,
  progress: loadCareerProgress(),
  wallet: loadWallet(),
  duel: null,
  raf: 0,
  timers: [],
  cleanup: [],
};

const audio = {};

document.addEventListener("DOMContentLoaded", async () => {
  setBackground("main");
  setupAudio();
  await runInitialLoading();
  showStartScreen();
  if (!state.playerProfile) openProfileModal({ required: true });
  else refreshRatingStats();
});

document.addEventListener("pointerdown", unlockAudio, { once: false, passive: true });
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && state.screen === "airfryer") {
    event.preventDefault();
  }
});

async function runInitialLoading() {
  updateLoadingProgress(0, 1);
  const startedAt = Date.now();
  const preload = preloadAssets();
  const timeout = delay(6000);
  await Promise.race([preload, timeout]);
  if (document.fonts?.ready) {
    await Promise.race([document.fonts.ready.catch(() => {}), delay(600)]);
  }
  const remaining = Math.max(0, 700 - (Date.now() - startedAt));
  if (remaining) await delay(remaining);
  updateLoadingProgress(1, 1);
  await delay(160);
}

function preloadAssets() {
  const urls = [...new Set(collectAssetUrls(ASSETS).filter((url) => url && !url.endsWith(".mp3")))];
  if (!urls.length) return Promise.resolve();
  let completed = 0;
  updateLoadingProgress(0, urls.length);

  return Promise.all(urls.map((url) => new Promise((resolve) => {
    const img = new Image();
    const done = (ok) => {
      if (ok) loadedAssets.add(url);
      else failedAssets.add(url);
      completed += 1;
      updateLoadingProgress(completed, urls.length);
      resolve();
    };
    img.onload = () => done(true);
    img.onerror = () => done(false);
    img.decoding = "async";
    img.src = url;
  })));
}

function updateLoadingProgress(completed, total) {
  const ratio = Math.max(0, Math.min(1, total ? completed / total : 1));
  const percent = Math.round(ratio * 100);
  const fill = document.querySelector("#loadingFill");
  const label = document.querySelector("#loadingPercent");
  const text = document.querySelector("#loadingText");
  if (fill) fill.style.width = `${Math.max(8, percent)}%`;
  if (label) label.textContent = `${percent}%`;
  if (text) {
    const index = Math.min(LOADING_COPY.length - 1, Math.floor(ratio * LOADING_COPY.length));
    text.textContent = LOADING_COPY[index];
  }
}

function collectAssetUrls(obj) {
  return Object.values(obj).flatMap((value) => {
    if (Array.isArray(value)) return value;
    if (value && typeof value === "object") return collectAssetUrls(value);
    return typeof value === "string" ? [value] : [];
  });
}

function setupAudio() {
  Object.entries(SOUNDS).forEach(([key, url]) => {
    const item = new Audio(url);
    item.preload = key === "music" ? "auto" : "metadata";
    item.volume = key === "music" ? 0.22 : 0.64;
    item.addEventListener("error", () => failedAssets.add(url), { once: true });
    if (key === "music") item.loop = true;
    audio[key] = item;
  });
}

function unlockAudio() {
  state.audioUnlocked = true;
  if (!state.muted) playMusic();
}

function playSound(name) {
  if (state.muted || !state.audioUnlocked || !audio[name]) return;
  try {
    audio[name].currentTime = 0;
    audio[name].play().catch(() => {});
  } catch {
    // Mobile browsers can reject sounds during gesture edge cases; gameplay should stay smooth.
  }
}

function playMusic() {
  if (state.muted || !state.audioUnlocked || !audio.music) return;
  audio.music.play().catch(() => {});
}

function stopMusic() {
  if (!audio.music) return;
  audio.music.pause();
}

function toggleSound() {
  state.muted = !state.muted;
  localStorage.setItem("demiMuted", state.muted ? "1" : "0");
  if (state.muted) {
    stopMusic();
  } else {
    playSound("click");
    playMusic();
  }
  const button = document.querySelector(".sound-button");
  if (button) button.replaceWith(soundButton());
}

function clearRuntime() {
  cancelAnimationFrame(state.raf);
  state.raf = 0;
  state.paused = false;
  state.timers.forEach(clearTimeout);
  state.timers = [];
  state.cleanup.forEach((fn) => fn());
  state.cleanup = [];
}

function render(markup, className = "") {
  clearRuntime();
  app.className = `app ${className}`.trim();
  app.innerHTML = markup;
}

function setBackground(kind) {
  app.style.setProperty("--screen-bg", `url("${kind === "game" ? ASSETS.backgrounds.game : ASSETS.backgrounds.main}")`);
}

function soundButton() {
  const button = document.createElement("button");
  button.className = "sound-button";
  button.type = "button";
  button.setAttribute("aria-label", state.muted ? "Включить звук" : "Выключить звук");
  const img = safeImg(state.muted ? ASSETS.buttons.soundOff : ASSETS.buttons.soundOn, state.muted ? "Звук выключен" : "Звук включен");
  button.append(img);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleSound();
  });
  return button;
}

function profileAvatarButton() {
  const button = document.createElement("button");
  const profile = state.playerProfile;
  const avatar = PROFILE_AVATARS[profile?.avatar_id] || PROFILE_AVATARS.airfryer;
  button.className = "profile-avatar-button";
  button.type = "button";
  button.setAttribute("aria-label", profile ? `Профиль: ${profile.display_name}` : "Профиль");
  button.append(safeImg(avatar.src, avatar.label));
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    playSound("click");
    openProfileModal();
  });
  return button;
}

function leaderboardButton() {
  const info = getRatingStatus();
  const button = document.createElement("button");
  button.className = "rating-board-button";
  button.type = "button";
  button.setAttribute("aria-label", `Рейтинг: ${info.level.title}, ${info.totalScore} очков`);
  button.innerHTML = `
    <span class="status-kicker">Рейтинг</span>
    <strong>Ур. ${info.localLevelNumber}/${info.localLevelMax}</strong>
    <span class="rating-mini">${info.totalScore}</span>
  `;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    playSound("click");
    openLeaderboardModal();
  });
  return button;
}

function mountStatus(selector = "#statusMount") {
  const mount = document.querySelector(selector);
  if (mount) {
    mount.append(leaderboardButton());
  }
}

function refreshStatusMounts() {
  document.querySelectorAll("#statusMount").forEach((mount) => {
    mount.innerHTML = "";
    mount.append(leaderboardButton());
  });
}

function mountProfile(selector = "#profileMount") {
  const mount = document.querySelector(selector);
  if (mount) mount.append(profileAvatarButton());
}

function walletButton() {
  const button = document.createElement("button");
  button.className = "wallet-button";
  button.type = "button";
  button.setAttribute("aria-label", `Магазин, монет: ${state.wallet.coins}`);
  button.append(safeImg(ASSETS.economy.coin, "Монеты"));
  const count = document.createElement("span");
  count.textContent = String(state.wallet.coins);
  button.append(count);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    playSound("click");
    openShopModal();
  });
  return button;
}

function mountWallet(selector = "#walletMount") {
  const mount = document.querySelector(selector);
  if (mount) mount.append(walletButton());
}

function addCoins(amount) {
  const value = Math.max(0, Math.floor(Number(amount) || 0));
  if (!value) return 0;
  state.wallet.coins += value;
  saveWallet();
  refreshWalletButtons();
  return value;
}

function showCoinBonus(parent, amount, x = "50%", y = "22%", phrase = "Монетка!") {
  const gained = addCoins(amount);
  if (!gained) return;
  if (["airfryer", "blender", "coffee"].includes(state.currentGame)) {
    state.roundBonusCoins += gained;
  }
  showCoinPop(parent, gained, x, y);
  showPhrase(parent, phrase, x, y);
}

function showCoinPop(parent, amount, x = "50%", y = "22%") {
  const pop = document.createElement("div");
  pop.className = "coin-pop";
  pop.style.left = typeof x === "number" ? `${x}px` : x;
  pop.style.top = typeof y === "number" ? `${y}px` : y;
  pop.innerHTML = `<img src="${ASSETS.economy.coin}" alt=""> <span>+${amount}</span>`;
  parent.append(pop);
  after(1150, () => pop.remove());
}

function safeImg(src, alt = "", className = "") {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  if (className) img.className = className;
  img.decoding = "async";
  img.draggable = false;
  img.addEventListener("error", () => {
    failedAssets.add(src);
    const fallback = document.createElement("span");
    fallback.className = "asset-fallback";
    fallback.textContent = alt || "Картинка";
    img.replaceWith(fallback);
  }, { once: true });
  return img;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

function makeId(prefix = "id") {
  if (globalThis.crypto?.randomUUID) return `${prefix}_${globalThis.crypto.randomUUID()}`;
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

function cleanProfileField(value, maxLength, fallback = "") {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  return (normalized || fallback).slice(0, maxLength);
}

function normalizeAvatarId(value) {
  return Object.prototype.hasOwnProperty.call(PROFILE_AVATARS, value) ? value : "airfryer";
}

function normalizeDepartment(value) {
  return DEPARTMENTS.includes(value) ? value : DEPARTMENTS[0];
}

function loadPlayerProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(PLAYER_PROFILE_KEY) || "null");
    if (!saved?.player_id || !saved?.name) return null;
    const name = cleanProfileField(saved.name, 24, "Игрок");
    const role = cleanProfileField(saved.role, 40, "Гость кухни");
    const avatarId = normalizeAvatarId(saved.avatar_id);
    const department = normalizeDepartment(saved.department);
    return {
      player_id: String(saved.player_id),
      name,
      role,
      avatar_id: avatarId,
      department,
      display_name: cleanProfileField(saved.display_name || name, 24, name),
      display_role: cleanProfileField(saved.display_role || role, 40, role),
      display_department: cleanProfileField(saved.display_department || department, 60, department),
      created_at: saved.created_at || new Date().toISOString(),
      updated_at: saved.updated_at || new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function emptyRatingStats() {
  return {
    total_score: 0,
    rounds: 0,
    level_points: 0,
    rank: null,
    total_players: 0,
    percentile: 0,
    updated_at: "",
  };
}

function loadRatingStats() {
  try {
    const saved = JSON.parse(localStorage.getItem(RATING_STATS_KEY) || "null");
    return {
      ...emptyRatingStats(),
      ...(saved || {}),
      total_score: Math.max(0, Number(saved?.total_score) || 0),
      rounds: Math.max(0, Number(saved?.rounds) || 0),
      level_points: Math.max(0, Number(saved?.level_points ?? saved?.rounds) || 0),
      rank: saved?.rank ? Number(saved.rank) : null,
      total_players: Math.max(0, Number(saved?.total_players) || 0),
      percentile: Math.max(0, Math.min(100, Number(saved?.percentile) || 0)),
    };
  } catch {
    return emptyRatingStats();
  }
}

function saveRatingStats(stats, options = {}) {
  const current = state.ratingStats || emptyRatingStats();
  const keepBestLocal = options.keepBestLocal !== false;
  const incomingTotal = Math.max(0, Number(stats?.total_score) || 0);
  const incomingRounds = Math.max(0, Number(stats?.rounds) || 0);
  const incomingLevelPoints = Math.max(0, Number(stats?.level_points) || 0);
  state.ratingStats = {
    ...emptyRatingStats(),
    ...current,
    ...(stats || {}),
    total_score: keepBestLocal ? Math.max(Math.max(0, Number(current.total_score) || 0), incomingTotal) : incomingTotal,
    rounds: keepBestLocal ? Math.max(Math.max(0, Number(current.rounds) || 0), incomingRounds) : incomingRounds,
    level_points: keepBestLocal ? Math.max(Math.max(0, Number(current.level_points) || 0), incomingLevelPoints) : incomingLevelPoints,
    rank: stats?.rank ? Number(stats.rank) : null,
    total_players: Math.max(0, Number(stats?.total_players) || 0),
    percentile: Math.max(0, Math.min(100, Number(stats?.percentile) || 0)),
    updated_at: stats?.updated_at || new Date().toISOString(),
  };
  localStorage.setItem(RATING_STATS_KEY, JSON.stringify(state.ratingStats));
  refreshStatusMounts();
  return state.ratingStats;
}

function loadSubmittedMatchSessions() {
  try {
    const saved = JSON.parse(localStorage.getItem(RATING_SESSIONS_KEY) || "[]");
    return new Set(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set();
  }
}

function saveSubmittedMatchSessions(sessions) {
  const list = Array.from(sessions).slice(-80);
  localStorage.setItem(RATING_SESSIONS_KEY, JSON.stringify(list));
}

function addLocalRatingScore(score, sessionId, difficulty = state.difficulty) {
  const amount = Math.max(0, Number(score) || 0);
  if (!amount || !sessionId) return state.ratingStats;
  const sessions = loadSubmittedMatchSessions();
  if (sessions.has(sessionId)) return state.ratingStats;
  sessions.add(sessionId);
  saveSubmittedMatchSessions(sessions);
  const levelGain = LEVEL_PROGRESS_BY_DIFFICULTY[difficulty] || LEVEL_PROGRESS_BY_DIFFICULTY.normal;
  return saveRatingStats({
    ...state.ratingStats,
    total_score: Math.max(0, Number(state.ratingStats?.total_score) || 0) + amount,
    rounds: Math.max(0, Number(state.ratingStats?.rounds) || 0) + 1,
    level_points: Math.max(0, Number(state.ratingStats?.level_points) || 0) + levelGain,
    updated_at: new Date().toISOString(),
  });
}

function getRatingStatus(stats = state.ratingStats) {
  const normalized = {
    ...emptyRatingStats(),
    ...(stats || {}),
  };
  const totalScore = Math.max(0, Number(normalized.total_score) || 0);
  const rounds = Math.max(0, Number(normalized.rounds) || 0);
  const levelPoints = Math.max(0, Number(normalized.level_points ?? rounds) || 0);
  const percentile = Math.max(0, Math.min(100, Number(normalized.percentile) || 0));
  const hasGlobalPosition = Boolean(normalized.rank && normalized.total_players);
  const globalLevelIndex = STATUS_LEVELS.reduce((current, level, index) => (percentile >= level.minPercent ? index : current), 0);
  const localLevelIndex = LOCAL_LEVEL_STEPS.reduce((current, minPoints, index) => (levelPoints >= minPoints ? index : current), 0);
  const levelIndex = hasGlobalPosition ? globalLevelIndex : localLevelIndex;
  const localLevel = LOCAL_STATUS_LEVELS[localLevelIndex] || LOCAL_STATUS_LEVELS[0];
  const globalLevel = STATUS_LEVELS[globalLevelIndex] || STATUS_LEVELS[0];
  return {
    ...normalized,
    totalScore,
    rounds,
    levelPoints,
    percentile,
    hasGlobalPosition,
    statusSource: hasGlobalPosition ? "global" : "local",
    level: hasGlobalPosition ? globalLevel : localLevel,
    levelIndex,
    localLevel,
    localLevelIndex,
    localLevelNumber: localLevelIndex + 1,
    localLevelMax: LOCAL_STATUS_LEVELS.length,
    globalLevel,
    globalLevelIndex,
    next: (hasGlobalPosition ? STATUS_LEVELS : LOCAL_STATUS_LEVELS)[levelIndex + 1] || null,
  };
}

function applyLeaderboardData(data) {
  if (data?.current_player) saveRatingStats(data.current_player, { keepBestLocal: false });
  else if (data?.ok && state.playerProfile) saveRatingStats(emptyRatingStats(), { keepBestLocal: false });
}

function refreshRatingSummary() {
  const summary = document.querySelector("#ratingSummary");
  if (!summary) return;
  const info = getRatingStatus();
  const rankText = info.rank && info.total_players
    ? `${info.rank} из ${info.total_players}`
    : "пока ждём таблицу";
  const statusLabel = info.hasGlobalPosition ? "Статус в рейтинге" : "Уровень в игре";
  const localLine = info.hasGlobalPosition
    ? `<small class="rating-summary-note">В игре: уровень ${info.localLevelNumber}/${info.localLevelMax} · ${escapeHtml(info.localLevel.title)}</small>`
    : `<small class="rating-summary-note">Уровень ${info.localLevelNumber}/${info.localLevelMax} · ${info.rounds} ${plural(info.rounds, ["победа", "победы", "побед"])}</small>`;
  summary.innerHTML = `
    <div class="rating-summary-main">
      <span>${statusLabel}</span>
      <strong>${escapeHtml(info.level.title)}</strong>
      <p>${escapeHtml(info.level.desc)}</p>
      ${localLine}
    </div>
    <div class="rating-stat points"><span>Очки</span><strong>${info.totalScore}</strong></div>
    <div class="rating-stat place"><span>Место</span><strong>${escapeHtml(rankText)}</strong></div>
  `;
}

async function refreshRatingStats() {
  if (!state.playerProfile || !isSupabaseConfigured()) return null;
  try {
    const data = await fetchLeaderboard("company");
    applyLeaderboardData(data);
    return data;
  } catch {
    return null;
  }
}

function savePlayerProfile(nameValue, roleValue, avatarValue, departmentValue) {
  const now = new Date().toISOString();
  const previous = state.playerProfile;
  const name = cleanProfileField(nameValue, 24, "Игрок");
  const role = cleanProfileField(roleValue, 40, "Гость кухни");
  const avatarId = normalizeAvatarId(avatarValue || previous?.avatar_id);
  const department = normalizeDepartment(departmentValue || previous?.department);
  const profile = {
    player_id: previous?.player_id || makeId("player"),
    name,
    role,
    avatar_id: avatarId,
    department,
    display_name: name,
    display_role: role,
    display_department: department,
    created_at: previous?.created_at || now,
    updated_at: now,
  };
  state.playerProfile = profile;
  localStorage.setItem(PLAYER_PROFILE_KEY, JSON.stringify(profile));
  return profile;
}

function openProfileModal(options = {}) {
  if (document.querySelector(".profile-modal")) return;
  const required = Boolean(options.required);
  const profile = state.playerProfile || {};
  const selectedAvatar = normalizeAvatarId(profile.avatar_id);
  const selectedDepartment = normalizeDepartment(profile.department);
  const avatarMarkup = Object.entries(PROFILE_AVATARS).map(([key, avatar]) => `
        <label class="avatar-option ${key === selectedAvatar ? "active" : ""}">
          <input type="radio" name="avatar_id" value="${key}" ${key === selectedAvatar ? "checked" : ""}>
          <img src="${avatar.src}" alt="">
          <span>${avatar.label}</span>
        </label>
      `).join("");
  const departmentMarkup = DEPARTMENTS.map((department) => `
          <option value="${escapeHtml(department)}" ${department === selectedDepartment ? "selected" : ""}>${escapeHtml(department)}</option>
        `).join("");
  const overlay = document.createElement("div");
  overlay.className = "profile-modal";
  overlay.innerHTML = `
    <form class="profile-card" id="profileForm">
      ${required ? "" : '<button class="status-close" type="button" id="closeProfile">×</button>'}
      <h3>Как тебя записать в рейтинг?</h3>
      <p>Имя, роль, отдел и герой будут видны в рейтинге “Кубики сошлись”.</p>
      <div class="profile-section-title">Выбери своего героя</div>
      <div class="avatar-picker" role="radiogroup" aria-label="Аватар профиля">
        ${avatarMarkup}
      </div>
      <label>
        <span>Имя игрока</span>
        <input id="profileName" name="name" type="text" maxlength="24" autocomplete="name" required value="${escapeHtml(profile.name || "")}" placeholder="Например, Аня">
      </label>
      <label>
        <span>Должность или роль</span>
        <input id="profileRole" name="role" type="text" maxlength="40" autocomplete="organization-title" value="${escapeHtml(profile.role || "")}" placeholder="Например, дизайнер кухни">
      </label>
      <label>
        <span>Отдел</span>
        <select id="profileDepartment" name="department" required>
          ${departmentMarkup}
        </select>
      </label>
      <button class="action-button full" type="submit">${required ? "Записать меня" : "Сохранить"}</button>
    </form>
  `;
  app.append(overlay);
  const close = () => {
    if (!required) {
      overlay.remove();
      playSound("click");
    }
  };
  overlay.querySelector("#closeProfile")?.addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  overlay.querySelectorAll(".avatar-option input").forEach((input) => {
    input.addEventListener("change", () => {
      overlay.querySelectorAll(".avatar-option").forEach((option) => {
        option.classList.toggle("active", option.contains(input));
      });
    });
  });
  overlay.querySelector("#profileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = overlay.querySelector("#profileName").value;
    const role = overlay.querySelector("#profileRole").value;
    const avatar = overlay.querySelector('input[name="avatar_id"]:checked')?.value;
    const department = overlay.querySelector("#profileDepartment").value;
    const profile = savePlayerProfile(name, role, avatar, department);
    refreshStatusMounts();
    syncPlayerProfile(profile);
    overlay.remove();
    showGlobalToast("Профиль сохранён");
    playSound("score");
  });
  after(50, () => overlay.querySelector("#profileName")?.focus({ preventScroll: true }));
}

function openLeaderboardModal(options = {}) {
  if (document.querySelector(".leaderboard-modal")) return;
  const department = state.playerProfile?.department ? normalizeDepartment(state.playerProfile.department) : "";
  const info = getRatingStatus();
  const rankText = info.rank && info.total_players
    ? `${info.rank} из ${info.total_players}`
    : "пока ждём таблицу";
  const statusLabel = info.hasGlobalPosition ? "Статус в рейтинге" : "Уровень в игре";
  const localLine = info.hasGlobalPosition
    ? `<small class="rating-summary-note">В игре: уровень ${info.localLevelNumber}/${info.localLevelMax} · ${escapeHtml(info.localLevel.title)}</small>`
    : `<small class="rating-summary-note">Уровень ${info.localLevelNumber}/${info.localLevelMax} · ${info.rounds} ${plural(info.rounds, ["победа", "победы", "побед"])}</small>`;
  const overlay = document.createElement("div");
  overlay.className = "leaderboard-modal";
  overlay.innerHTML = `
    <div class="leaderboard-card">
      <button class="status-close" type="button" id="closeLeaderboard">×</button>
      <h3>${escapeHtml(options.title || "Рейтинговая доска")}</h3>
      <div class="rating-summary" id="ratingSummary">
        <div class="rating-summary-main">
          <span>${statusLabel}</span>
          <strong>${escapeHtml(info.level.title)}</strong>
          <p>${escapeHtml(info.level.desc)}</p>
          ${localLine}
        </div>
        <div class="rating-stat points"><span>Очки</span><strong>${info.totalScore}</strong></div>
        <div class="rating-stat place"><span>Место</span><strong>${escapeHtml(rankText)}</strong></div>
      </div>
      <div class="leaderboard-tabs" role="tablist" aria-label="Тип рейтинга">
        <button class="leaderboard-tab active" type="button" data-scope="company">Компания</button>
        <button class="leaderboard-tab" type="button" data-scope="department" ${department ? "" : "disabled"}>Мой отдел</button>
      </div>
      <div class="leaderboard-list" id="leaderboardList">
        <div class="leaderboard-empty">Загружаем рейтинг...</div>
      </div>
    </div>
  `;
  app.append(overlay);
  const close = () => {
    overlay.remove();
    playSound("click");
  };
  overlay.querySelector("#closeLeaderboard").addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  overlay.querySelectorAll(".leaderboard-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.disabled) return;
      overlay.querySelectorAll(".leaderboard-tab").forEach((item) => item.classList.toggle("active", item === tab));
      loadLeaderboardInto(overlay.querySelector("#leaderboardList"), tab.dataset.scope);
      playSound("click");
    });
  });
  loadLeaderboardInto(overlay.querySelector("#leaderboardList"), options.scope || "company");
}

async function loadLeaderboardInto(container, scope = "company") {
  if (!container) return;
  container.innerHTML = '<div class="leaderboard-empty">Загружаем рейтинг...</div>';
  try {
    const data = await fetchLeaderboard(scope);
    applyLeaderboardData(data);
    refreshRatingSummary();
    const rows = Array.isArray(data.leaderboard) ? data.leaderboard : [];
    if (!rows.length) {
      container.innerHTML = `<div class="leaderboard-empty">${scope === "department" ? "В отделе пока пусто. Можно открыть счёт." : "Пока пусто. Самое время стать первым."}</div>`;
      return;
    }
    container.innerHTML = rows.map((row, index) => `
      <div class="leaderboard-row">
        <strong>${index + 1}</strong>
        <img class="leaderboard-avatar" src="${(PROFILE_AVATARS[row.avatar_id]?.src || PROFILE_AVATARS.airfryer.src)}" alt="">
        <div>
          <span>${escapeHtml(row.display_name || "Игрок")}</span>
          <em>${escapeHtml(row.display_role || "Гость кухни")}${row.display_department ? ` · ${escapeHtml(row.display_department)}` : ""}</em>
        </div>
        <b>${Number(row.total_score || 0)}</b>
        <small>${Number(row.rounds || 0)} ${plural(Number(row.rounds || 0), ["раунд", "раунда", "раундов"])}</small>
      </div>
    `).join("");
  } catch {
    const info = getRatingStatus();
    const profile = state.playerProfile || {};
    if (info.totalScore > 0) {
      container.innerHTML = `
        <div class="leaderboard-local-note">Глобальная таблица сейчас не отвечает, но твои очки сохранены на этом устройстве.</div>
        <div class="leaderboard-row local">
          <strong>★</strong>
          <img class="leaderboard-avatar" src="${PROFILE_AVATARS[profile.avatar_id]?.src || PROFILE_AVATARS.airfryer.src}" alt="">
          <div>
            <span>${escapeHtml(profile.display_name || profile.name || "Игрок")}</span>
            <em>${escapeHtml(profile.display_role || profile.role || "Гость кухни")}${profile.display_department || profile.department ? ` · ${escapeHtml(profile.display_department || profile.department)}` : ""}</em>
          </div>
          <b>${info.totalScore}</b>
          <small>${info.rounds} ${plural(info.rounds, ["раунд", "раунда", "раундов"])}</small>
        </div>
      `;
      return;
    }
    container.innerHTML = '<div class="leaderboard-empty">Рейтинг временно недоступен. Очки появятся после первого раунда «Кубиков».</div>';
  }
}

async function fetchLeaderboard(scope = "company") {
  if (!isSupabaseConfigured()) throw new Error("Supabase is not configured");
  const filters = [];
  if (scope === "department" && state.playerProfile?.department) {
    filters.push(`department=eq.${encodeSupabaseValue(state.playerProfile.department)}`);
  }
  const query = [
    `select=${encodeURIComponent("player_id,name,role,avatar_id,department,display_name,display_role,display_department,total_score,rounds,level_points,updated_at")}`,
    "order=total_score.desc,updated_at.asc",
    "limit=1000",
    ...filters,
  ].join("&");
  const players = await supabaseRequest(`${SUPABASE_TABLES.players}?${query}`);
  const rows = (Array.isArray(players) ? players : []).map(normalizeLeaderboardPlayer);
  const currentPlayer = state.playerProfile?.player_id
    ? rows.find((row) => row.player_id === state.playerProfile.player_id)
    : null;
  return {
    ok: true,
    leaderboard: rows.slice(0, 30),
    current_player: currentPlayer ? withLeaderboardPosition(currentPlayer, rows) : null,
  };
}

async function submitMatchResult(score, outcome) {
  if (state.resultSubmitted || state.currentGame !== "match") return;
  if (outcome !== "win") return;
  state.resultSubmitted = true;
  const sessionId = state.matchSessionId || makeId("session");
  addLocalRatingScore(score, sessionId, state.difficulty);
  refreshRatingSummary();
  if (!state.playerProfile) {
    openProfileModal({ required: true });
    showGlobalToast("Сначала нужен профиль для рейтинга");
    return;
  }
  if (!isSupabaseConfigured()) {
    showGlobalToast("Рейтинг временно недоступен");
    openLeaderboardModal({ title: "Очки сохранены" });
    return;
  }
  const profile = state.playerProfile;
  const payload = {
    player_id: profile.player_id,
    name: profile.name,
    role: profile.role,
    avatar_id: profile.avatar_id,
    department: profile.department,
    display_name: profile.display_name,
    display_role: profile.display_role,
    display_department: profile.display_department,
    game: "match",
    score: Number(score) || 0,
    difficulty: state.difficulty,
    session_id: sessionId,
    created_at: new Date().toISOString(),
    outcome,
  };
  try {
    const data = await sendLeaderboardPayload(payload);
    applyLeaderboardData(data);
    openLeaderboardModal({ title: "Рейтинг обновлён" });
  } catch {
    showGlobalToast("Рейтинг временно недоступен");
    openLeaderboardModal({ title: "Очки сохранены" });
  }
}

async function sendLeaderboardPayload(payload) {
  if (!isSupabaseConfigured()) throw new Error("Supabase is not configured");
  const profile = {
    player_id: payload.player_id,
    name: payload.name,
    role: payload.role,
    avatar_id: payload.avatar_id,
    department: payload.department,
    display_name: payload.display_name,
    display_role: payload.display_role,
    display_department: payload.display_department,
    created_at: state.playerProfile?.created_at || payload.created_at,
    updated_at: new Date().toISOString(),
  };
  let current = await fetchSupabasePlayer(payload.player_id);
  await upsertSupabasePlayer(profile, current || emptyRatingStats());

  const existingSession = await supabaseRequest(`${SUPABASE_TABLES.scores}?select=session_id&session_id=eq.${encodeSupabaseValue(payload.session_id)}&player_id=eq.${encodeSupabaseValue(payload.player_id)}&limit=1`);
  if (!Array.isArray(existingSession) || !existingSession.length) {
    await supabaseRequest(SUPABASE_TABLES.scores, {
      method: "POST",
      body: [{
        player_id: payload.player_id,
        game: payload.game,
        score: Math.max(0, Number(payload.score) || 0),
        difficulty: getDifficultyValue(payload.difficulty),
        session_id: payload.session_id,
      }],
      prefer: "return=minimal",
    });

    current = current || emptyRatingStats();
    const levelGain = LEVEL_PROGRESS_BY_DIFFICULTY[payload.difficulty] || LEVEL_PROGRESS_BY_DIFFICULTY.normal;
    await upsertSupabasePlayer(profile, {
      total_score: Math.max(0, Number(current?.total_score) || 0) + Math.max(0, Number(payload.score) || 0),
      rounds: Math.max(0, Number(current?.rounds) || 0) + 1,
      level_points: Math.max(0, Number(current?.level_points) || 0) + levelGain,
      updated_at: new Date().toISOString(),
    });
  }

  return fetchLeaderboard("company");
}

async function syncPlayerProfile(profile = state.playerProfile) {
  if (!profile || !isSupabaseConfigured()) return null;
  try {
    const current = await fetchSupabasePlayer(profile.player_id);
    const saved = await upsertSupabasePlayer(profile, current || state.ratingStats || emptyRatingStats());
    await refreshRatingStats();
    return saved;
  } catch {
    return null;
  }
}

function isSupabaseConfigured() {
  return /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(SUPABASE_URL)
    && SUPABASE_ANON_KEY
    && !SUPABASE_URL.includes("YOUR_PROJECT_REF")
    && !SUPABASE_ANON_KEY.includes("PASTE_YOUR");
}

function getSupabaseRestUrl(path) {
  const baseUrl = SUPABASE_URL.replace(/\/+$/, "");
  return `${baseUrl}/rest/v1/${path.replace(/^\/+/, "")}`;
}

function encodeSupabaseValue(value) {
  return encodeURIComponent(String(value ?? ""));
}

function getDifficultyValue(difficulty) {
  return { easy: 1, normal: 2, hard: 3 }[difficulty] || 2;
}

async function supabaseRequest(path, options = {}) {
  const response = await fetch(getSupabaseRestUrl(path), {
    method: options.method || "GET",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      ...(options.prefer ? { Prefer: options.prefer } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || `Supabase request failed: ${response.status}`);
  }
  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function normalizeLeaderboardPlayer(player) {
  const totalScore = Math.max(0, Number(player?.total_score) || 0);
  const rounds = Math.max(0, Number(player?.rounds) || 0);
  const levelPoints = Math.max(0, Number(player?.level_points ?? rounds) || 0);
  return {
    player_id: String(player?.player_id || ""),
    name: cleanProfileField(player?.name, 24, "Игрок"),
    role: cleanProfileField(player?.role, 40, "Гость кухни"),
    avatar_id: normalizeAvatarId(player?.avatar_id),
    department: normalizeDepartment(player?.department),
    display_name: cleanProfileField(player?.display_name || player?.name, 24, "Игрок"),
    display_role: cleanProfileField(player?.display_role || player?.role, 40, "Гость кухни"),
    display_department: cleanProfileField(player?.display_department || player?.department, 60, DEPARTMENTS[0]),
    total_score: totalScore,
    rounds,
    level_points: levelPoints,
    updated_at: player?.updated_at || "",
  };
}

function withLeaderboardPosition(player, rows) {
  const rank = rows.findIndex((row) => row.player_id === player.player_id) + 1;
  const totalPlayers = rows.length;
  const percentile = rank && totalPlayers
    ? Math.round(((totalPlayers - rank + 1) / totalPlayers) * 100)
    : 0;
  return {
    ...player,
    rank: rank || null,
    total_players: totalPlayers,
    percentile,
  };
}

async function fetchSupabasePlayer(playerId) {
  const rows = await supabaseRequest(`${SUPABASE_TABLES.players}?select=*&player_id=eq.${encodeSupabaseValue(playerId)}&limit=1`);
  return Array.isArray(rows) && rows[0] ? normalizeLeaderboardPlayer(rows[0]) : null;
}

async function upsertSupabasePlayer(profile, stats = {}) {
  const record = {
    player_id: profile.player_id,
    name: cleanProfileField(profile.name, 24, "Игрок"),
    role: cleanProfileField(profile.role, 40, "Гость кухни"),
    avatar_id: normalizeAvatarId(profile.avatar_id),
    department: normalizeDepartment(profile.department),
    display_name: cleanProfileField(profile.display_name || profile.name, 24, "Игрок"),
    display_role: cleanProfileField(profile.display_role || profile.role, 40, "Гость кухни"),
    display_department: cleanProfileField(profile.display_department || profile.department, 60, DEPARTMENTS[0]),
    total_score: Math.max(0, Number(stats?.total_score) || 0),
    rounds: Math.max(0, Number(stats?.rounds) || 0),
    level_points: Math.max(0, Number(stats?.level_points ?? stats?.rounds) || 0),
    created_at: profile.created_at || new Date().toISOString(),
    updated_at: stats?.updated_at || profile.updated_at || new Date().toISOString(),
  };
  const rows = await supabaseRequest(`${SUPABASE_TABLES.players}?on_conflict=player_id`, {
    method: "POST",
    body: [record],
    prefer: "resolution=merge-duplicates,return=representation",
  });
  return Array.isArray(rows) && rows[0] ? normalizeLeaderboardPlayer(rows[0]) : record;
}

function getDuelTimerSeconds(difficultyKey = state.difficulty) {
  return DUEL_TIMERS[difficultyKey] || DUEL_TIMERS.normal;
}

function makeRoomCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function normalizeDuelProfile(profile = state.playerProfile) {
  if (!profile) return null;
  return {
    player_id: String(profile.player_id || ""),
    name: cleanProfileField(profile.display_name || profile.name, 24, "Игрок"),
    role: cleanProfileField(profile.display_role || profile.role, 40, "Гость кухни"),
    avatar_id: normalizeAvatarId(profile.avatar_id),
    department: normalizeDepartment(profile.department),
  };
}

function ensureDuelProfile() {
  if (state.playerProfile) return true;
  openProfileModal({ required: true });
  showGlobalToast("Сначала запишем повара");
  return false;
}

function normalizeDuelRoom(room) {
  if (!room?.room_code) return null;
  return {
    room_code: String(room.room_code),
    status: String(room.status || "waiting"),
    difficulty: Object.prototype.hasOwnProperty.call(DIFFICULTIES, room.difficulty) ? room.difficulty : "normal",
    timer_seconds: Math.max(30, Number(room.timer_seconds) || DUEL_TIMERS.normal),
    seed: String(room.seed || room.room_code),
    board: Array.isArray(room.board) ? room.board : [],
    goals: room.goals && typeof room.goals === "object" ? room.goals : {},
    booster_kit: room.booster_kit && typeof room.booster_kit === "object" ? room.booster_kit : {},
    host_player_id: String(room.host_player_id || ""),
    guest_player_id: room.guest_player_id ? String(room.guest_player_id) : "",
    host_profile: room.host_profile || {},
    guest_profile: room.guest_profile || null,
    host_progress: room.host_progress || null,
    guest_progress: room.guest_progress || null,
    host_result: room.host_result || null,
    guest_result: room.guest_result || null,
    starts_at: room.starts_at || "",
    created_at: room.created_at || "",
    updated_at: room.updated_at || "",
  };
}

function getDuelSide(room = state.duel?.room) {
  if (!room || !state.playerProfile?.player_id) return "host";
  return room.host_player_id === state.playerProfile.player_id ? "host" : "guest";
}

function getDuelOpponentSide(side = getDuelSide()) {
  return side === "host" ? "guest" : "host";
}

function getDuelPlayerProfile(room, side) {
  return side === "host" ? room?.host_profile : room?.guest_profile;
}

function getDuelOpponentProfile(room = state.duel?.room) {
  return getDuelPlayerProfile(room, getDuelOpponentSide(getDuelSide(room)));
}

function getDuelKitForDifficulty(difficultyKey) {
  if (difficultyKey !== "hard") return {};
  const bonusPool = ["shuffle", "star", "bomb"];
  return {
    hammer: 1,
    [randomItem(bonusPool)]: 1,
  };
}

function cloneMatchBoard(board) {
  return (Array.isArray(board) ? board : []).map((tile) => (tile ? { ...tile } : null));
}

function makeDuelSeed(roomCode) {
  return `${roomCode}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function createSeededRandom(seedValue) {
  let hash = 2166136261;
  const seed = String(seedValue || "duel");
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return () => {
    hash += 0x6D2B79F5;
    let t = hash;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeSeededPicker(seedValue) {
  const random = createSeededRandom(seedValue);
  return (items) => items[Math.floor(random() * items.length)];
}

async function fetchDuelRoom(roomCode) {
  if (!isSupabaseConfigured()) throw new Error("Supabase is not configured");
  const rows = await supabaseRequest(`${SUPABASE_TABLES.duelRooms}?select=*&room_code=eq.${encodeSupabaseValue(roomCode)}&limit=1`);
  return Array.isArray(rows) && rows[0] ? normalizeDuelRoom(rows[0]) : null;
}

async function patchDuelRoom(roomCode, patch, prefer = "return=representation") {
  const rows = await supabaseRequest(`${SUPABASE_TABLES.duelRooms}?room_code=eq.${encodeSupabaseValue(roomCode)}`, {
    method: "PATCH",
    body: {
      ...patch,
      updated_at: new Date().toISOString(),
    },
    prefer,
  });
  return Array.isArray(rows) && rows[0] ? normalizeDuelRoom(rows[0]) : null;
}

async function createDuelRoom() {
  if (!ensureDuelProfile()) return null;
  if (!isSupabaseConfigured()) {
    showGlobalToast("Кухня временно не отвечает");
    return null;
  }
  const difficulty = state.difficulty;
  const config = DIFFICULTIES[difficulty] || DIFFICULTIES.normal;
  const size = 7;
  const tileTypes = Object.keys(ASSETS.match.tiles);
  let board = createMatchBoard(size, tileTypes);
  addMatchBlockers(board, size, config.matchBlockers);
  let guard = 0;
  while (!hasAnyMatchMove(board, size) && guard < 12) {
    board = createMatchBoard(size, tileTypes);
    addMatchBlockers(board, size, config.matchBlockers);
    guard += 1;
  }
  const goals = buildMatchGoals(tileTypes, config);
  const profile = normalizeDuelProfile();
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const roomCode = makeRoomCode();
    const existing = await fetchDuelRoom(roomCode).catch(() => null);
    if (existing) continue;
    const rows = await supabaseRequest(`${SUPABASE_TABLES.duelRooms}?on_conflict=room_code`, {
      method: "POST",
      body: [{
        room_code: roomCode,
        status: "waiting",
        difficulty,
        timer_seconds: getDuelTimerSeconds(difficulty),
        seed: makeDuelSeed(roomCode),
        board,
        goals,
        booster_kit: getDuelKitForDifficulty(difficulty),
        host_player_id: profile.player_id,
        host_profile: profile,
      }],
      prefer: "return=representation",
    });
    const room = Array.isArray(rows) && rows[0] ? normalizeDuelRoom(rows[0]) : null;
    if (room) return room;
  }
  throw new Error("Could not create duel room");
}

async function joinDuelRoom(roomCodeValue) {
  if (!ensureDuelProfile()) return null;
  if (!isSupabaseConfigured()) {
    showGlobalToast("Кухня временно не отвечает");
    return null;
  }
  const roomCode = String(roomCodeValue || "").replace(/\D/g, "").slice(0, 6);
  if (roomCode.length !== 6) {
    showGlobalToast("Код должен быть из 6 цифр");
    return null;
  }
  const room = await fetchDuelRoom(roomCode);
  if (!room) {
    showGlobalToast("Такой кухни не нашлось");
    return null;
  }
  if (room.status !== "waiting" && room.status !== "ready") {
    showGlobalToast("Поединок уже начался");
    return null;
  }
  const profile = normalizeDuelProfile();
  if (room.host_player_id === profile.player_id) return room;
  if (room.guest_player_id && room.guest_player_id !== profile.player_id) {
    showGlobalToast("Эта кухня уже занята");
    return null;
  }
  const startsAt = room.starts_at || new Date(Date.now() + 4500).toISOString();
  return patchDuelRoom(roomCode, {
    status: "ready",
    guest_player_id: profile.player_id,
    guest_profile: profile,
    starts_at: startsAt,
  });
}

async function updateDuelProgress(progress) {
  const room = state.duel?.room;
  if (!room?.room_code || !state.duel?.side) return;
  const key = `${state.duel.side}_progress`;
  const payload = {
    score: Math.max(0, Number(progress?.score) || 0),
    goals_left: Math.max(0, Number(progress?.goals_left) || 0),
    goals_total: Math.max(0, Number(progress?.goals_total) || 0),
    goals_closed: Boolean(progress?.goals_closed),
    updated_at: new Date().toISOString(),
  };
  patchDuelRoom(room.room_code, { [key]: payload }, "return=minimal").catch(() => {});
}

async function submitDuelResult(result) {
  const room = state.duel?.room;
  if (!room?.room_code || state.duel?.resultSubmitted) return null;
  state.duel.resultSubmitted = true;
  const key = `${state.duel.side}_result`;
  const payload = {
    score: Math.max(0, Number(result?.score) || 0),
    goals_closed: Boolean(result?.goals_closed),
    goals_left: Math.max(0, Number(result?.goals_left) || 0),
    goals_total: Math.max(0, Number(result?.goals_total) || 0),
    finished_at: new Date().toISOString(),
  };
  const updated = await patchDuelRoom(room.room_code, { [key]: payload }, "return=representation");
  if (updated) state.duel.room = updated;
  return updated;
}

function showGlobalToast(text) {
  document.querySelector(".global-toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "global-toast";
  toast.textContent = text;
  app.append(toast);
  after(1800, () => toast.remove());
}

function showStartScreen() {
  state.screen = "start";
  setBackground("main");
  render(`
    <section class="screen start-screen">
      <div class="top-row"><div id="profileMount"></div><div id="statusMount"></div><div id="walletMount"></div><div id="soundMount"></div></div>
      <div class="logo-wrap" id="logoMount"></div>
      <div class="start-copy">
        <div class="start-title-card">
          <span class="start-kicker">мини-игра Demiand</span>
          <h1 class="start-title">Деми-кубики</h1>
          <p class="subtitle start-subtitle">Выбирай игру, собирай монетки и забирай место в рейтинге</p>
        </div>
        <button class="image-button" type="button" id="playButton" aria-label="Играть"></button>
      </div>
    </section>
  `);
  mountProfile();
  mountStatus();
  mountWallet();
  document.querySelector("#soundMount").append(soundButton());
  document.querySelector("#logoMount").append(safeImg(ASSETS.logo, "Деми-кубики", "logo"));
  document.querySelector("#playButton").append(safeImg(ASSETS.buttons.play, "Играть"));
  document.querySelector("#playButton").addEventListener("click", () => {
    playSound("click");
    showCharacterSelect();
  });
}

function showCharacterSelect() {
  state.screen = "select";
  setBackground("main");
  render(`
    <section class="screen select-screen">
      <div class="top-row">
        <button class="back-button" type="button" id="backStart">←</button>
        <div id="statusMount"></div>
        <div id="walletMount"></div>
        <button class="help-button menu-help-button" type="button" id="selectHelpButton" aria-label="Как играть"></button>
        <div id="soundMount"></div>
      </div>
      <div class="difficulty-picker" id="difficultyPicker" aria-label="Сложность"></div>
      <div class="game-sections">
        <div class="main-game-zone">
          <div class="section-label">Главная игра</div>
          <div class="hero-list main-hero-list" id="mainHeroList"></div>
        </div>
        <div class="mini-games-zone">
          <div class="section-label coin-section-label"><span>Мини-игры для монет</span><img src="${ASSETS.economy.coin}" alt=""></div>
          <div class="hero-list mini-hero-list" id="miniHeroList"></div>
        </div>
      </div>
    </section>
  `);
  mountStatus();
  mountWallet();
  document.querySelector("#selectHelpButton").append(safeImg(ASSETS.buttons.help, "Как играть"));
  document.querySelector("#selectHelpButton").addEventListener("click", openSelectHelpDialog);
  document.querySelector("#soundMount").append(soundButton());
  document.querySelector("#backStart").addEventListener("click", () => {
    playSound("click");
    showStartScreen();
  });
  const picker = document.querySelector("#difficultyPicker");
  Object.entries(DIFFICULTIES).forEach(([key, item]) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = `difficulty-option ${state.difficulty === key ? "active" : ""}`;
    option.textContent = item.label;
    option.addEventListener("click", () => {
      state.difficulty = key;
      localStorage.setItem("demiDifficulty", key);
      playSound("click");
      picker.querySelectorAll(".difficulty-option").forEach((button) => button.classList.toggle("active", button === option));
    });
    picker.append(option);
  });
  const mainList = document.querySelector("#mainHeroList");
  const miniList = document.querySelector("#miniHeroList");
  Object.entries(CHARACTERS).forEach(([key, character]) => {
    const card = document.createElement("button");
    card.type = "button";
    const isMainGame = key === "match";
    card.className = `hero-card ${isMainGame ? "main-game-card" : "mini-game-card"}`;
    card.innerHTML = `
      <div class="hero-image"></div>
      <div>
        <span class="card-kicker">${isMainGame ? "Рейтинг и бустеры" : "Монетки за победу"}</span>
        <h3>${character.name}</h3>
        <p>${character.description}</p>
        <span class="select-pill">${character.action}</span>
      </div>
    `;
    card.querySelector(".hero-image").append(safeImg(character.image, character.name));
    card.addEventListener("click", () => {
      playSound("click");
      state.selectedCharacter = key;
      if (key === "airfryer") startAirfryerGame();
      if (key === "blender") startBlenderGame();
      if (key === "coffee") startCoffeeGame();
      if (key === "match") showMatchPrepScreen();
    });
    (isMainGame ? mainList : miniList).append(card);
  });
}

function gameShell(characterKey, title, subtitle, extraHud = "") {
  setBackground("game");
  state.screen = characterKey;
  state.currentGame = characterKey;
  state.paused = false;
  state.score = 0;
  state.roundBonusCoins = 0;
  const isRatingGame = characterKey === "match";
  render(`
    <section class="screen is-game">
      <div class="hud ${isRatingGame ? "" : "mini-game-hud"}">
        <div class="game-title"><strong>${title}</strong><span>${subtitle}</span></div>
        ${isRatingGame ? '<div id="statusMount"></div><div class="score-pill" id="scorePill">0 очков</div>' : ""}
        ${extraHud}
        <button class="help-button" type="button" id="helpButton" aria-label="Как играть"></button>
        <button class="pause-button" type="button" id="pauseButton" aria-label="Пауза"></button>
      </div>
      <div class="play-area" id="playArea"></div>
      <div class="game-controls">
        <div class="progress-panel" aria-live="polite">
          <div class="progress-label" id="progressLabel">Прогресс</div>
          <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
        </div>
        <button class="action-button full" type="button" id="mainAction">Поставить</button>
      </div>
    </section>
  `);
  if (isRatingGame) mountStatus();
  document.querySelector("#helpButton").append(safeImg(ASSETS.buttons.help, "Как играть"));
  document.querySelector("#helpButton").addEventListener("click", () => openHelpModal(characterKey));
  document.querySelector("#pauseButton").append(safeImg(ASSETS.buttons.pause, "Пауза"));
  document.querySelector("#pauseButton").addEventListener("click", openPauseMenu);
}

function setScore(score) {
  state.score = Math.max(0, score);
  const pill = document.querySelector("#scorePill");
  if (pill) pill.textContent = `${state.score} ${plural(state.score, ["очко", "очка", "очков"])}`;
}

function setRoundProgress(value) {
  state.score = Math.max(0, value);
}

function setHint(text) {
  const label = document.querySelector("#progressLabel");
  if (label && text) label.dataset.lastHint = text;
}

function setProgress(value, label = "Прогресс") {
  const fill = document.querySelector("#progressFill");
  const title = document.querySelector("#progressLabel");
  if (!fill || !title) return;
  const normalized = Math.max(0, Math.min(1, value));
  fill.style.width = `${Math.round(normalized * 100)}%`;
  title.textContent = label;
}

function openPauseMenu() {
  if (!["airfryer", "blender", "coffee", "match"].includes(state.screen) || document.querySelector(".pause-modal")) return;
  state.paused = true;
  playSound("click");
  const overlay = document.createElement("div");
  overlay.className = "pause-modal";
  overlay.innerHTML = `
    <div class="pause-card">
      <h3>Пауза</h3>
      <button class="action-button full" type="button" id="resumeGame">Продолжить</button>
      <button class="action-button secondary full" type="button" id="restartGame">Начать заново</button>
      <button class="action-button secondary full" type="button" id="menuGame">В главное меню</button>
    </div>
  `;
  app.append(overlay);
  document.querySelector("#resumeGame").addEventListener("click", closePauseMenu);
  document.querySelector("#restartGame").addEventListener("click", () => {
    const game = state.currentGame;
    closePauseMenu();
    playSound("click");
    if (game === "airfryer") startAirfryerGame();
    if (game === "blender") startBlenderGame();
    if (game === "coffee") startCoffeeGame();
    if (game === "match") startMatchGame();
  });
  document.querySelector("#menuGame").addEventListener("click", () => {
    playSound("click");
    showStartScreen();
  });
}

function closePauseMenu() {
  document.querySelector(".pause-modal")?.remove();
  state.paused = false;
  playSound("click");
}

function openSelectHelpDialog() {
  if (document.querySelector(".help-modal")) return;
  playSound("click");
  const steps = [
    {
      tab: "Кубики",
      text: "Вот главная игра: двигай плитки, собирай цели и набирай очки рейтинга. Чем удачнее раунд, тем веселее доска!",
      button: "Ух ты!",
    },
    {
      tab: "Мини-игры",
      text: "Аэрогриль, блендер и кофемашина — маленькие кухонные забеги. Проходишь раунд — получаешь монетки.",
      button: "Ого!",
    },
    {
      tab: "Бустеры",
      text: "Монетки живут в лавке бустеров. Молоточек, звёздный ход и миксер цвета помогают спасать сложные поля.",
      button: "Хочу бустеры!",
    },
    {
      tab: "Сложность",
      text: "Выбери ритм кухни: легко, нормально или сложно. Можно идти в рейтинг, а можно сначала пополнить монетный запас.",
      button: "На кухню!",
    },
  ];
  let index = 0;
  const overlay = document.createElement("div");
  overlay.className = "help-modal select-dialog-modal";
  overlay.innerHTML = `
    <div class="select-help-panel" role="dialog" aria-modal="true" aria-label="Как играть">
      <button class="status-close" type="button" id="closeSelectHelp">×</button>
      <div class="select-help-character"></div>
      <div class="select-help-bubble">
        <div class="select-help-tabs"></div>
        <p id="selectHelpText"></p>
      </div>
      <button class="action-button full" type="button" id="selectHelpNext">Ух ты!</button>
    </div>
  `;
  app.append(overlay);
  overlay.querySelector(".select-help-character").append(safeImg(ASSETS.boosters.shopCharacter, "Подсказчик"));
  const text = overlay.querySelector("#selectHelpText");
  const next = overlay.querySelector("#selectHelpNext");
  const tabs = overlay.querySelector(".select-help-tabs");
  const renderStep = () => {
    text.textContent = steps[index].text;
    tabs.innerHTML = steps.map((step, stepIndex) => `
      <button class="select-help-tab ${stepIndex === index ? "active" : ""}" type="button" data-step="${stepIndex}">${step.tab}</button>
    `).join("");
    next.textContent = steps[index].button || (index === steps.length - 1 ? "Понятно" : "Хорошо");
    tabs.querySelectorAll(".select-help-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        index = Number(tab.dataset.step) || 0;
        renderStep();
        playSound("click");
      });
    });
  };
  const close = () => {
    overlay.remove();
    playSound("click");
  };
  overlay.querySelector("#closeSelectHelp").addEventListener("click", close);
  next.addEventListener("click", () => {
    if (index >= steps.length - 1) {
      close();
      return;
    }
    index += 1;
    renderStep();
    playSound("click");
  });
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  renderStep();
}

function openHelpModal(characterKey = state.currentGame) {
  if (document.querySelector(".help-modal")) return;
  const copy = HELP_COPY[characterKey] || HELP_COPY.match;
  const wasPaused = state.paused;
  if (["airfryer", "blender", "coffee", "match"].includes(state.screen)) state.paused = true;
  playSound("click");
  const characterSrc = getHelpCharacter(characterKey);
  const overlay = document.createElement("div");
  overlay.className = "help-modal";
  overlay.innerHTML = `
    <div class="help-dialog compact">
      <div class="help-character"></div>
      <div class="help-copy">
        <h3>${copy.title}</h3>
        <div class="help-steps">${copy.lines.map((line) => `<span>${line}</span>`).join("")}</div>
        <p>${copy.tip}</p>
      </div>
      <button class="action-button full" type="button" id="helpOk">Понятно</button>
      <button class="status-close" type="button" id="closeHelp">×</button>
    </div>
  `;
  app.append(overlay);
  overlay.querySelector(".help-character").append(safeImg(characterSrc, "Подсказчик"));
  const close = () => {
    overlay.remove();
    state.paused = wasPaused;
    playSound("click");
  };
  overlay.querySelector("#closeHelp").addEventListener("click", close);
  overlay.querySelector("#helpOk").addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
}

function getHelpCharacter(characterKey) {
  if (characterKey === "airfryer") return ASSETS.airfryer.normal;
  if (characterKey === "blender") return ASSETS.blender.normal;
  if (characterKey === "coffee") return ASSETS.coffee.normal;
  return ASSETS.boosters.shopCharacter;
}

function startAirfryerGame() {
  gameShell("airfryer", COPY.air.title, "Тапни, чтобы поставить кубик");
  const area = document.querySelector("#playArea");
  const button = document.querySelector("#mainAction");
  const difficulty = DIFFICULTIES[state.difficulty] || DIFFICULTIES.normal;
  const targetScore = difficulty.airTarget;
  area.classList.add("air-stage");
  ensureFieldMessages(area);
  area.insertAdjacentHTML("beforeend", `<div class="air-ground"></div>`);
  document.querySelector(".progress-panel")?.classList.add("no-bar");

  const game = {
    blocks: [],
    current: null,
    direction: 1,
    x: 0,
    speed: 2.1,
    blockW: 112,
    blockH: 80,
    stepY: 60,
    baseY: 0,
    placed: 0,
    perfectStreak: 0,
    ended: false,
  };

  function resetSizes() {
    const rect = area.getBoundingClientRect();
    game.blockW = Math.min(96, rect.width * 0.265);
    game.blockH = game.blockW * 1.18;
    game.stepY = game.blockH * 0.7;
    game.baseY = rect.height - game.blockH - 22;
  }

  function makeBlock(x, y, index, current = false) {
    const block = document.createElement("div");
    block.className = `air-block ${current ? "current" : "landed"}`;
    block.style.width = `${game.blockW}px`;
    block.style.height = `${game.blockH}px`;
    block.style.left = `${x}px`;
    block.style.top = `${y}px`;
    block.style.zIndex = current ? "30" : String(10 + index);
    block.append(safeImg(ASSETS.airfryer.blocks[index % ASSETS.airfryer.blocks.length], "Аэрогриль", "air-block-img"));
    area.append(block);
    return block;
  }

  function spawnCurrent() {
    const rect = area.getBoundingClientRect();
    const level = game.placed + 1;
    const previous = game.blocks[game.blocks.length - 1];
    let y = previous ? previous.y - game.stepY : game.baseY;
    const focusY = Math.max(28, rect.height * 0.34);
    if (y < focusY) {
      const shift = focusY - y;
      game.blocks.forEach((block) => {
        block.y += shift;
        block.el.style.top = `${block.y}px`;
      });
      y = focusY;
      cleanupTower();
    }
    const max = rect.width - game.blockW - 12;
    const fromLeft = level % 2 === 1;
    game.x = fromLeft ? 12 : max;
    game.direction = fromLeft ? 1 : -1;
    game.current = makeBlock(game.x, y, level, true);
    game.speed = Math.min(5.8, (2.05 + level * 0.2) * difficulty.speed);
    game.current.dataset.max = String(max);
  }

  function cleanupTower() {
    const bottomLimit = area.clientHeight + game.blockH * 1.35;
    while (game.blocks.length > 6 && game.blocks[0].y > bottomLimit) {
      const removed = game.blocks.shift();
      removed.el.remove();
    }
  }

  function loop() {
    if (game.ended || !game.current) return;
    if (state.paused) {
      state.raf = requestAnimationFrame(loop);
      return;
    }
    const max = Number(game.current.dataset.max);
    game.x += game.speed * game.direction;
    if (game.x >= max || game.x <= 4) {
      game.direction *= -1;
      game.x = Math.max(4, Math.min(max, game.x));
    }
    game.current.style.left = `${game.x}px`;
    state.raf = requestAnimationFrame(loop);
  }

  function placeBlock() {
    if (state.paused || game.ended || !game.current) return;
    playSound("click");
    const previous = game.blocks[game.blocks.length - 1];
    const targetX = previous ? previous.x : (area.clientWidth - game.blockW) / 2;
    const diff = Math.abs(game.x - targetX);
    let points = 0;
    if (diff <= 10) points = 3;
    else if (diff <= 28) points = 2;
    else if (diff <= 42) points = 1;

    if (!points) {
      game.perfectStreak = 0;
      game.ended = true;
      game.current.style.transform = `translate(${game.direction * 120}px, 120px) rotate(${game.direction * 28}deg)`;
      area.classList.add("shake");
      showPhrase(area, randomItem(COPY.air.fail), "50%", "46%", "bad");
      playSound("gameOver");
      after(820, () => showResult("airfryer", state.score, "lose"));
      return;
    }

    const landed = game.current;
    const softOffset = game.x - targetX;
    if (points === 3) game.x = targetX;
    if (points === 2) game.x = targetX + Math.max(-14, Math.min(14, softOffset * 0.35));
    if (points === 1) game.x = targetX + Math.max(-22, Math.min(22, softOffset * 0.42));
    landed.classList.remove("current");
    landed.classList.add("landed");
    landed.style.left = `${game.x}px`;
    landed.style.zIndex = String(10 + game.blocks.length);
    game.blocks.push({ el: landed, x: game.x, y: parseFloat(landed.style.top) });
    game.placed += 1;
    game.current = null;
    setRoundProgress(state.score + points);
    setProgress(state.score / targetScore, `Башня: ${Math.min(targetScore, state.score)}/${targetScore}`);
    playSound("score");
    if (points === 3) {
      game.perfectStreak += 1;
      if (game.perfectStreak >= 3) {
        game.perfectStreak = 0;
        showCoinBonus(area, 1, "50%", "20%", "Три ровно подряд!");
      }
    } else {
      game.perfectStreak = 0;
    }
    showPhrase(area, randomItem(COPY.air.success), `${game.x + game.blockW / 2}px`, `${parseFloat(landed.style.top) + 44}px`);

    if (state.score >= targetScore) {
      game.ended = true;
      playSound("win");
      confetti();
      after(900, () => showResult("airfryer", state.score, "win"));
      return;
    }
    spawnCurrent();
  }

  resetSizes();
  const baseX = (area.clientWidth - game.blockW) / 2;
  game.blocks.push({ el: makeBlock(baseX, game.baseY, 0), x: baseX, y: game.baseY });
  setProgress(0, `Башня: 0/${targetScore}`);
  spawnCurrent();
  loop();

  button.textContent = "Поставить";
  button.addEventListener("click", placeBlock);
  area.addEventListener("pointerdown", placeBlock);
  const keyHandler = (event) => {
    if (event.code === "Space") placeBlock();
  };
  window.addEventListener("keydown", keyHandler);
  state.cleanup.push(() => window.removeEventListener("keydown", keyHandler));
}

function startBlenderGame() {
  gameShell("blender", COPY.blender.title, "Набери смузи и береги 3 жизни");
  const area = document.querySelector("#playArea");
  const button = document.querySelector("#mainAction");
  const difficulty = DIFFICULTIES[state.difficulty] || DIFFICULTIES.normal;
  const targetScore = difficulty.blenderTarget;
  area.classList.add("blender-stage");
  ensureFieldMessages(area);
  button.textContent = "Тапай ингредиенты";
  button.disabled = true;
  button.style.opacity = "0.9";

  const preview = document.createElement("div");
  preview.className = "blender-preview";
  const blenderImg = safeImg(ASSETS.blender.empty, "Блендер");
  preview.append(blenderImg);
  area.append(preview);

  const good = [
    { name: "Клубника", src: ASSETS.items.strawberry, points: 1, phrases: ["Клубничка в деле", "Ягодный плюс", "Красный заряд", "Клубничный хлоп!", "Витаминка поймана"] },
    { name: "Банан", src: ASSETS.items.banana, points: 1, phrases: ["Банан принят", "Жёлтый буст", "Банановая база", "Банан зашёл красиво", "Смузи стал мягче"] },
    { name: "Манго", src: ASSETS.items.mango, points: 1, phrases: ["Манго залетело", "Тропики в стакане", "Манго мощно", "Солнечный кусочек", "Тропический плюс"] },
    { name: "Голубика", src: ASSETS.items.blueberry, points: 1, phrases: ["Ягодный манёвр", "Голубика поймана", "Синий плюс", "Черничная магия", "Ягодка в команду"] },
    { name: "Мята", src: ASSETS.items.mint, points: 1, phrases: ["Мята освежила", "Свежесть подъехала", "Мятный вайб", "Листик на месте", "Смузи вдохнул"] },
    { name: "Лёд", src: ASSETS.items.ice, points: 1, phrases: ["Лёд добавлен", "Холодок пошёл", "Смузи не перегреется", "Кубик холода", "Освежили ситуацию"] },
  ];
  const bad = [
    { name: "Бомба", src: ASSETS.items.bomb, phrases: ["Бомбу не блендерим", "Это не витаминка", "Опасный рецепт", "Смузи без взрывов", "Не тот ингредиент"] },
    { name: "TNT", src: ASSETS.items.tnt, phrases: ["TNT на полочку", "Взрывной смузи отменяется", "Не тот заряд", "Фейерверк не нужен", "Слишком горячо"] },
    { name: "Бухгалтерский отчёт", src: ASSETS.items.report, phrases: ["Отчёт не фрукт", "Бухгалтерия подождёт", "Бумагу не жуём", "Документы мимо стакана", "Это в папку, не в смузи"] },
  ];
  const game = {
    items: [],
    lives: 3,
    combo: 0,
    lastSpawn: 0,
    spawnEvery: 820 * difficulty.spawn,
    ended: false,
  };

  const lives = document.createElement("div");
  lives.className = "lives-pill";
  lives.id = "livesPill";
  lives.textContent = "❤ ❤ ❤";
  document.querySelector(".hud").append(lives);

  function updateBlender() {
    const src = state.score >= 12
      ? ASSETS.blender.fill100
      : state.score >= 9
        ? ASSETS.blender.fill75
        : state.score >= 6
          ? ASSETS.blender.fill50
          : state.score >= 3
            ? ASSETS.blender.fill25
            : ASSETS.blender.empty;
    blenderImg.src = src;
  }

  function spawnItem(now) {
    const rect = area.getBoundingClientRect();
    const pressure = Math.min(0.18, state.score / targetScore * 0.18);
    const isBad = Math.random() < Math.min(0.48, difficulty.badRate + pressure);
    const itemData = isBad ? randomItem(bad) : randomItem(good);
    const size = 54 + Math.random() * 16;
    const item = document.createElement("button");
    item.type = "button";
    item.className = "falling-item";
    item.style.setProperty("--item-size", `${size}px`);
    item.style.left = `${16 + Math.random() * Math.max(30, rect.width - size - 32)}px`;
    item.style.top = `-${size}px`;
    item.append(safeImg(itemData.src, itemData.name));
    area.append(item);
    const model = {
      el: item,
      y: -size,
      x: parseFloat(item.style.left),
      size,
      speed: 1.25 + Math.random() * 1.1 + (state.score / targetScore) * 1.25,
      bad: isBad,
      points: itemData.points || 0,
      phrases: itemData.phrases || [],
      name: itemData.name,
    };
    item.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      catchItem(model);
    });
    game.items.push(model);
    game.lastSpawn = now;
  }

  function catchItem(item) {
    if (game.ended || !game.items.includes(item)) return;
    item.el.remove();
    game.items = game.items.filter((candidate) => candidate !== item);
    if (item.bad) {
      game.combo = 0;
      loseLife(randomItem(item.phrases), item.x + item.size / 2, item.y + 34);
      playSound("fail");
      showPop(area, "ой", `${item.x + item.size / 2}px`, `${item.y}px`);
      return;
    }
    game.combo += 1;
    const gained = item.points;
    setRoundProgress(state.score + gained);
    updateBlender();
    setProgress(state.score / targetScore, `Смузи: ${Math.min(targetScore, state.score)}/${targetScore}`);
    const phrase = game.combo >= 5 && game.combo % 5 === 0
      ? randomItem([`Серия ${game.combo}!`, "Пять без промаха!", "Смузи любит серию!", "Вот это темп!"])
      : randomItem(item.phrases);
    showPhrase(area, phrase, `${item.x + item.size / 2}px`, `${item.y + 34}px`);
    playSound("score");
    if (game.combo >= 5 && game.combo % 5 === 0) {
      showCoinBonus(area, 1, `${item.x + item.size / 2}px`, `${item.y + 8}px`, "Серия принесла монетку!");
    }
    if (state.score >= targetScore) finish("win");
  }

  function loseLife(phrase, x = "50%", y = "50%") {
    if (game.ended) return;
    game.lives -= 1;
    document.querySelector("#livesPill").textContent = "❤ ".repeat(game.lives).trim() || "0";
    area.classList.add("shake");
    after(320, () => area.classList.remove("shake"));
    if (navigator.vibrate) navigator.vibrate(70);
    game.combo = 0;
    showPhrase(area, phrase || randomItem(COPY.blender.fail), typeof x === "number" ? `${x}px` : x, typeof y === "number" ? `${y}px` : y, "bad");
    if (game.lives <= 0) finish("lose");
  }

  function loop(now) {
    if (game.ended) return;
    if (state.paused) {
      state.raf = requestAnimationFrame(loop);
      return;
    }
    const spawnDelay = Math.max(330, game.spawnEvery - (state.score / targetScore) * 260);
    if (now - game.lastSpawn > spawnDelay) spawnItem(now);
    game.items.forEach((item) => {
      item.y += item.speed * difficulty.speed;
      item.el.style.top = `${item.y}px`;
    });
    game.items = game.items.filter((item) => {
      if (item.y > area.clientHeight + item.size) {
        item.el.remove();
        if (!item.bad) loseLife(`${item.name} сбежал`, item.x + item.size / 2, area.clientHeight - 34);
        return false;
      }
      return true;
    });
    state.raf = requestAnimationFrame(loop);
  }

  function finish(outcome = state.score >= targetScore ? "win" : "lose") {
    if (game.ended) return;
    game.ended = true;
    game.items.forEach((item) => item.el.remove());
    game.items = [];
    if (outcome === "win") {
      playSound("win");
      confetti();
    } else {
      playSound("gameOver");
    }
    after(780, () => showResult("blender", state.score, outcome));
  }

  updateBlender();
  setProgress(0, `Смузи: 0/${targetScore}`);
  state.raf = requestAnimationFrame(loop);
}

function startCoffeeGame() {
  gameShell("coffee", COPY.coffee.title, "Три этапа, один идеальный кофе");
  const area = document.querySelector("#playArea");
  const button = document.querySelector("#mainAction");
  const difficulty = DIFFICULTIES[state.difficulty] || DIFFICULTIES.normal;
  area.classList.add("coffee-stage");
  button.textContent = "Поймать момент";

  area.innerHTML = `
    <div class="coffee-visual">
      <div id="coffeeMachine"></div>
      <div id="coffeeCup"></div>
    </div>
    <div class="field-toast-stack" id="fieldToastStack" aria-live="polite"></div>
    <div class="timing-panel">
      <div class="stage-name" id="stageName">Этап 1: помол</div>
      <div class="timing-bar">
        <div class="timing-target"></div>
        <div class="timing-center"></div>
        <div class="timing-pointer" id="timingPointer"></div>
      </div>
    </div>
  `;

  const machineMount = document.querySelector("#coffeeMachine");
  const cupMount = document.querySelector("#coffeeCup");
  const machineImg = safeImg(ASSETS.coffee.idle, "Кофемашина");
  const cupImg = safeImg(ASSETS.coffee.cupEmpty, "Чашка", "cup-img");
  machineMount.append(machineImg);
  cupMount.append(cupImg);

  const game = {
    stage: 0,
    pointer: 0,
    direction: 1,
    speed: 0.012 * difficulty.speed,
    done: false,
  };

  function updateVisuals(points = null) {
    if (game.stage === 0) {
      machineImg.src = ASSETS.coffee.idle;
      cupImg.src = ASSETS.coffee.cupEmpty;
    }
    if (game.stage === 1) {
      machineImg.src = ASSETS.coffee.brewing;
      cupImg.src = ASSETS.coffee.cup30;
    }
    if (game.stage === 2) {
      machineImg.src = ASSETS.coffee.steam;
      cupImg.src = ASSETS.coffee.cup60;
    }
    if (points !== null && game.stage === 2) {
      cupImg.src = points >= 2 ? ASSETS.coffee.cupFull : ASSETS.coffee.cup60;
    }
  }

  function loop() {
    if (game.done) return;
    if (state.paused) {
      state.raf = requestAnimationFrame(loop);
      return;
    }
    game.pointer += game.speed * game.direction;
    if (game.pointer >= 1 || game.pointer <= 0) {
      game.direction *= -1;
      game.pointer = Math.max(0, Math.min(1, game.pointer));
    }
    document.querySelector("#timingPointer").style.left = `${game.pointer * 100}%`;
    state.raf = requestAnimationFrame(loop);
  }

  function catchMoment() {
    if (state.paused || game.done) return;
    playSound("click");
    const diff = Math.abs(game.pointer - 0.5);
    let points = 0;
    if (diff <= 0.035) points = 3;
    else if (diff <= 0.08) points = 2;
    else if (diff <= 0.16) points = 1;

    setRoundProgress(state.score + points);
    if (points === 3) {
      showCoinBonus(area, 1, `${game.pointer * 100}%`, "50%", "Идеальный момент!");
    }
    showPhrase(area, randomItem(points ? COPY.coffee.success : COPY.coffee.fail), `${game.pointer * 100}%`, "56%", points ? "" : "bad");
    playSound(points ? "score" : "fail");
    if (!points) {
      area.classList.add("shake");
      after(320, () => area.classList.remove("shake"));
    }

    game.stage += 1;
    game.speed += 0.0035 * difficulty.speed;
    game.pointer = Math.random() < 0.5 ? 0.08 : 0.92;
    game.direction = game.pointer < 0.5 ? 1 : -1;
    updateVisuals(points);

    if (game.stage >= 3) {
      game.done = true;
      const outcome = state.score >= 5 ? "win" : "lose";
      setProgress(1, "Кофе: готово");
      machineImg.src = state.score >= 5 ? ASSETS.coffee.perfect : ASSETS.coffee.fail;
      cupImg.src = state.score >= 5 ? ASSETS.coffee.cupPerfect : ASSETS.coffee.cupFail;
      if (outcome === "win") {
        playSound("win");
        confetti();
      } else {
        playSound("gameOver");
      }
      after(980, () => showResult("coffee", state.score, outcome));
      return;
    }
    document.querySelector("#stageName").textContent = COPY.coffee.stages[game.stage];
    setProgress(game.stage / 3, `Кофе: этап ${game.stage + 1}/3`);
  }

  updateVisuals();
  setProgress(0, "Кофе: этап 1/3");
  button.addEventListener("click", catchMoment);
  area.addEventListener("pointerdown", catchMoment);
  const keyHandler = (event) => {
    if (event.code === "Space") catchMoment();
  };
  window.addEventListener("keydown", keyHandler);
  state.cleanup.push(() => window.removeEventListener("keydown", keyHandler));
  loop();
}

function showMatchPrepScreen() {
  state.screen = "matchPrep";
  setBackground("main");
  const difficulty = DIFFICULTIES[state.difficulty] || DIFFICULTIES.normal;
  const mode = state.matchMode === "duel" ? "duel" : "solo";
  render(`
    <section class="screen match-prep-screen">
      <div class="top-row">
        <button class="back-button" type="button" id="backSelect">←</button>
        <div id="statusMount"></div>
        <div id="walletMount"></div>
        <div id="soundMount"></div>
      </div>
      <h2>Кубики сошлись</h2>
      <p class="subtitle" style="text-align:center">Собирай цели, трать бустеры и не корми поле отчётами</p>
      <div class="match-prep-card">
        <div class="match-prep-hero" id="matchPrepHero"></div>
        <div class="match-prep-copy">
          <strong>${difficulty.label}: ${difficulty.matchMoves} ${plural(difficulty.matchMoves, ["ход", "хода", "ходов"])}</strong>
          <span>${difficulty.matchGoals} цели${difficulty.matchBlockers ? ` · ${difficulty.matchBlockers} отчёта-блокера` : ""}</span>
        </div>
      </div>
      <div class="match-mode-picker" id="matchModePicker" aria-label="Режим Кубиков">
        <button class="match-mode-option ${mode === "solo" ? "active" : ""}" type="button" data-mode="solo">
          <img src="${ASSETS.duel.soloIcon}" alt="">
          <span>${DUEL_COPY.solo}</span>
          <small>Личный забег за рейтингом</small>
        </button>
        <button class="match-mode-option ${mode === "duel" ? "active" : ""}" type="button" data-mode="duel">
          <img src="${ASSETS.duel.icon}" alt="">
          <span>${DUEL_COPY.duel}</span>
          <small>${getDuelTimerSeconds(state.difficulty)} секунд на кухне</small>
        </button>
      </div>
      <div class="inventory-preview" id="inventoryPreview"></div>
      <div class="match-prep-actions">
        <button class="action-button secondary full shop-open-button solo-action" type="button" id="openShop"><img src="${ASSETS.buttons.shop}" alt=""> Магазин бустеров</button>
        <button class="action-button full solo-action" type="button" id="startMatch">Играть в «Кубики сошлись»</button>
        <button class="action-button full duel-action" type="button" id="createDuelKitchen">${DUEL_COPY.create}</button>
        <button class="action-button secondary full duel-action" type="button" id="joinDuelKitchen">${DUEL_COPY.join}</button>
      </div>
    </section>
  `);
  mountStatus();
  mountWallet();
  document.querySelector("#soundMount").append(soundButton());
  document.querySelector("#matchPrepHero").append(safeImg(ASSETS.match.normal, "Кубики сошлись"));
  renderInventoryPreview();
  updateMatchModeUi();
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.matchMode = button.dataset.mode === "duel" ? "duel" : "solo";
      localStorage.setItem("demiMatchMode", state.matchMode);
      playSound("click");
      updateMatchModeUi();
    });
  });
  document.querySelector("#backSelect").addEventListener("click", () => {
    playSound("click");
    showCharacterSelect();
  });
  document.querySelector("#openShop").addEventListener("click", () => {
    playSound("click");
    openShopModal();
  });
  document.querySelector("#startMatch").addEventListener("click", () => {
    playSound("click");
    startMatchGame();
  });
  document.querySelector("#createDuelKitchen").addEventListener("click", async () => {
    playSound("click");
    await showCreateDuelRoomScreen();
  });
  document.querySelector("#joinDuelKitchen").addEventListener("click", () => {
    playSound("click");
    showJoinDuelRoomScreen();
  });
}

function updateMatchModeUi() {
  const mode = state.matchMode === "duel" ? "duel" : "solo";
  document.querySelectorAll(".match-mode-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  document.querySelectorAll(".solo-action").forEach((node) => {
    node.hidden = mode !== "solo";
  });
  document.querySelectorAll(".duel-action").forEach((node) => {
    node.hidden = mode !== "duel";
  });
  const inventory = document.querySelector("#inventoryPreview");
  if (inventory) inventory.hidden = mode !== "solo";
}

async function showCreateDuelRoomScreen() {
  if (!ensureDuelProfile()) return;
  setDuelBackground(ASSETS.duel.roomBg);
  render(`
    <section class="screen duel-room-screen">
      <div class="top-row">
        <button class="back-button" type="button" id="backMatchPrep">←</button>
        <div id="soundMount"></div>
      </div>
      <div class="duel-room-card loading">
        <h2>${DUEL_COPY.create}</h2>
        <p>${DUEL_COPY.warming}</p>
        <div class="duel-loader"></div>
      </div>
    </section>
  `, "duel-app");
  document.querySelector("#soundMount").append(soundButton());
  document.querySelector("#backMatchPrep").addEventListener("click", () => {
    playSound("click");
    showMatchPrepScreen();
  });
  try {
    const room = await createDuelRoom();
    if (!room) {
      showMatchPrepScreen();
      showGlobalToast("Кухня временно не отвечает");
      return;
    }
    state.duel = { room, side: "host", resultSubmitted: false };
    showDuelWaitingRoom(room);
  } catch {
    showMatchPrepScreen();
    showGlobalToast("Связь с кухней пропала, пробуем ещё раз");
  }
}

function showDuelWaitingRoom(room) {
  state.duel = { room, side: getDuelSide(room), resultSubmitted: false };
  setDuelBackground(ASSETS.duel.roomBg);
  render(`
    <section class="screen duel-room-screen">
      <div class="top-row">
        <button class="back-button" type="button" id="backMatchPrep">←</button>
        <div id="soundMount"></div>
      </div>
      <div class="duel-room-card">
        <h2>${DUEL_COPY.codeTitle}</h2>
        <div class="duel-code-ticket">
          <img src="${ASSETS.duel.codeTicket}" alt="">
          <strong>${room.room_code}</strong>
        </div>
        <p>Передай код сопернику</p>
        <div class="duel-player-row">
          ${duelPlayerBadge(room.host_profile, "Ты на кухне")}
          ${duelPlayerBadge(room.guest_profile, room.guest_profile ? DUEL_COPY.rivalReady : DUEL_COPY.waiting, !room.guest_profile)}
        </div>
        <button class="action-button secondary full" type="button" id="copyRoomCode">Скопировать код</button>
      </div>
    </section>
  `, "duel-app");
  document.querySelector("#soundMount").append(soundButton());
  document.querySelector("#backMatchPrep").addEventListener("click", () => {
    playSound("click");
    showMatchPrepScreen();
  });
  document.querySelector("#copyRoomCode").addEventListener("click", () => {
    playSound("click");
    navigator.clipboard?.writeText(room.room_code).catch(() => {});
    showGlobalToast("Код кухни скопирован");
  });
  startDuelRoomPolling(room.room_code, (freshRoom) => {
    state.duel.room = freshRoom;
    if (freshRoom.status === "ready" || freshRoom.starts_at) showDuelVsScreen(freshRoom);
  });
}

function showJoinDuelRoomScreen() {
  if (!ensureDuelProfile()) return;
  setDuelBackground(ASSETS.duel.roomBg);
  render(`
    <section class="screen duel-room-screen">
      <div class="top-row">
        <button class="back-button" type="button" id="backMatchPrep">←</button>
        <div id="soundMount"></div>
      </div>
      <form class="duel-room-card join" id="joinDuelForm">
        <h2>${DUEL_COPY.join}</h2>
        <p>Введи код кухни из 6 цифр</p>
        <input class="duel-code-input" id="duelCodeInput" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="000000" required>
        <button class="action-button full" type="submit">${DUEL_COPY.join}</button>
      </form>
    </section>
  `, "duel-app");
  document.querySelector("#soundMount").append(soundButton());
  document.querySelector("#backMatchPrep").addEventListener("click", () => {
    playSound("click");
    showMatchPrepScreen();
  });
  const input = document.querySelector("#duelCodeInput");
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 6);
  });
  document.querySelector("#joinDuelForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    playSound("click");
    const button = event.currentTarget.querySelector("button");
    button.disabled = true;
    button.textContent = DUEL_COPY.warming;
    try {
      const room = await joinDuelRoom(input.value);
      if (room) {
        state.duel = { room, side: getDuelSide(room), resultSubmitted: false };
        showDuelVsScreen(room);
        return;
      }
    } catch {
      showGlobalToast("Связь с кухней пропала, пробуем ещё раз");
    }
    button.disabled = false;
    button.textContent = DUEL_COPY.join;
  });
  after(80, () => input.focus({ preventScroll: true }));
}

function startDuelRoomPolling(roomCode, onRoom) {
  let stopped = false;
  const poll = async () => {
    if (stopped) return;
    try {
      const room = await fetchDuelRoom(roomCode);
      if (room) onRoom(room);
    } catch {
      showGlobalToast("Связь с кухней пропала, пробуем ещё раз");
    }
  };
  const interval = setInterval(poll, 1400);
  state.cleanup.push(() => {
    stopped = true;
    clearInterval(interval);
  });
  poll();
}

function showDuelVsScreen(room) {
  const side = getDuelSide(room);
  const opponentSide = getDuelOpponentSide(side);
  const me = getDuelPlayerProfile(room, side) || normalizeDuelProfile();
  const rival = getDuelPlayerProfile(room, opponentSide);
  const startsAt = room.starts_at ? new Date(room.starts_at).getTime() : Date.now() + 2500;
  state.duel = { room, side, resultSubmitted: false };
  setDuelBackground(ASSETS.duel.vsBg);
  render(`
    <section class="screen duel-vs-screen">
      <div class="duel-vs-card">
        <div class="duel-contender">
          ${duelAvatar(me)}
          <strong>${escapeHtml(me?.name || "Ты")}</strong>
          <span>готовит ход</span>
        </div>
        <div class="duel-countdown" id="duelCountdown">3</div>
        <div class="duel-contender">
          ${duelAvatar(rival)}
          <strong>${escapeHtml(rival?.name || "Соперник")}</strong>
          <span>уже на кухне</span>
        </div>
      </div>
      <p class="duel-vs-caption">${DUEL_COPY.title}</p>
    </section>
  `, "duel-app");
  playSound("score");
  const countdown = document.querySelector("#duelCountdown");
  const tick = () => {
    const left = Math.max(0, startsAt - Date.now());
    const number = Math.max(1, Math.ceil(left / 1000));
    if (countdown) countdown.textContent = left <= 300 ? "Старт!" : String(number);
    if (left <= 0) {
      clearInterval(interval);
      if (side === "host") {
        patchDuelRoom(room.room_code, { status: "started", starts_at: room.starts_at || new Date().toISOString() }, "return=minimal").catch(() => {});
      }
      startDuelMatch(room);
    }
  };
  const interval = setInterval(tick, 180);
  state.cleanup.push(() => clearInterval(interval));
  tick();
}

function startDuelMatch(room) {
  state.difficulty = room.difficulty;
  localStorage.setItem("demiDifficulty", room.difficulty);
  startMatchGame({ duel: true, room });
}

function setDuelBackground(src) {
  app.style.setProperty("--screen-bg", `url("${src}")`);
}

function duelPlayerBadge(profile, label, pending = false) {
  return `
    <div class="duel-player-badge ${pending ? "pending" : ""}">
      ${duelAvatar(profile)}
      <strong>${escapeHtml(profile?.name || "Соперник")}</strong>
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function duelAvatar(profile) {
  const avatar = PROFILE_AVATARS[normalizeAvatarId(profile?.avatar_id)] || PROFILE_AVATARS.airfryer;
  return `<img class="duel-avatar" src="${avatar.src}" alt="">`;
}

function formatTime(secondsValue) {
  const seconds = Math.max(0, Math.ceil(Number(secondsValue) || 0));
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function ensureMatchTileIdFromBoard(board) {
  const maxId = (Array.isArray(board) ? board : []).reduce((max, tile) => {
    const value = Number(String(tile?.id || "").replace(/^match-/, ""));
    return Number.isFinite(value) ? Math.max(max, value) : max;
  }, matchTileId);
  matchTileId = Math.max(matchTileId, maxId);
}

function getDuelProgressPayload(game) {
  const goalsLeft = Object.values(game.goals).reduce((sum, value) => sum + Math.max(0, Number(value) || 0), 0);
  return {
    score: state.score,
    goals_left: goalsLeft,
    goals_total: game.goalTotal,
    goals_closed: goalsLeft <= 0,
  };
}

function renderDuelRivalPill(room) {
  const pill = document.querySelector("#duelRivalPill");
  if (!pill) return;
  const opponentSide = getDuelOpponentSide(getDuelSide(room));
  const profile = getDuelPlayerProfile(room, opponentSide);
  const progress = opponentSide === "host" ? room.host_progress : room.guest_progress;
  pill.innerHTML = `
    ${duelAvatar(profile)}
    <span>${escapeHtml(profile?.name || "Соперник")}</span>
    <strong>${Math.max(0, Number(progress?.score) || 0)}</strong>
  `;
  if (progress?.goals_closed) {
    pill.classList.add("closed");
  }
}

function showDuelResultWaiting() {
  const room = state.duel?.room;
  if (!room) {
    showMatchPrepScreen();
    return;
  }
  setDuelBackground(ASSETS.duel.drawBg);
  render(`
    <section class="screen duel-result-screen">
      <div class="duel-room-card loading">
        <h2>${DUEL_COPY.counting}</h2>
        <p>Ждём, пока второй повар отдаст поднос</p>
        <div class="duel-loader"></div>
      </div>
    </section>
  `, "duel-app");
  startDuelRoomPolling(room.room_code, (freshRoom) => {
    state.duel.room = freshRoom;
    if (freshRoom.host_result && freshRoom.guest_result) showDuelResultScreen(freshRoom);
  });
  after(9000, async () => {
    const freshRoom = await fetchDuelRoom(room.room_code).catch(() => null);
    if (freshRoom) showDuelResultScreen(freshRoom);
  });
}

function showDuelResultScreen(room) {
  clearRuntime();
  state.screen = "duelResult";
  const side = getDuelSide(room);
  const opponentSide = getDuelOpponentSide(side);
  const myProfile = getDuelPlayerProfile(room, side) || normalizeDuelProfile();
  const rivalProfile = getDuelPlayerProfile(room, opponentSide) || {};
  const myResult = side === "host" ? room.host_result : room.guest_result;
  const rivalResult = opponentSide === "host" ? room.host_result : room.guest_result;
  const verdict = getDuelVerdict(myResult, rivalResult);
  const bg = verdict.tone === "win"
    ? ASSETS.duel.victoryBg
    : verdict.tone === "lose"
      ? ASSETS.duel.defeatBg
      : ASSETS.duel.drawBg;
  setDuelBackground(bg);
  render(`
    <section class="screen duel-result-screen">
      <div class="top-row">
        <button class="back-button" type="button" id="backMatchPrep">←</button>
        <div id="soundMount"></div>
      </div>
      <div class="duel-result-hero">
        <img src="${getDuelResultCharacter(verdict.tone)}" alt="">
      </div>
      <div class="duel-result-card ${verdict.tone}">
        <h2>${escapeHtml(verdict.title)}</h2>
        <p>${escapeHtml(verdict.phrase)}</p>
        <div class="duel-score-table">
          ${duelScoreRow(myProfile, myResult, verdict.myPlace, "Ты")}
          ${duelScoreRow(rivalProfile, rivalResult, verdict.rivalPlace, "Соперник")}
        </div>
      </div>
      <div class="result-actions">
        <button class="action-button full" type="button" id="duelRematch">${DUEL_COPY.rematch}</button>
        <button class="action-button secondary full" type="button" id="backToMatch">${DUEL_COPY.back}</button>
      </div>
    </section>
  `, "duel-app");
  document.querySelector("#soundMount").append(soundButton());
  const back = () => {
    playSound("click");
    state.matchMode = "duel";
    showMatchPrepScreen();
  };
  document.querySelector("#backMatchPrep").addEventListener("click", back);
  document.querySelector("#backToMatch").addEventListener("click", back);
  document.querySelector("#duelRematch").addEventListener("click", async () => {
    playSound("click");
    state.difficulty = room.difficulty;
    await showCreateDuelRoomScreen();
  });
  if (verdict.tone === "win") {
    playSound("win");
    confetti();
  } else if (verdict.tone === "lose") {
    playSound("gameOver");
  } else {
    playSound("score");
  }
}

function getDuelVerdict(myResult = {}, rivalResult = {}) {
  const myClosed = Boolean(myResult?.goals_closed);
  const rivalClosed = Boolean(rivalResult?.goals_closed);
  const myScore = Math.max(0, Number(myResult?.score) || 0);
  const rivalScore = Math.max(0, Number(rivalResult?.score) || 0);
  if (myClosed && !rivalClosed) {
    return { tone: "win", title: DUEL_COPY.win, phrase: "Ты закрыла цели, кухня аплодирует.", myPlace: 1, rivalPlace: 2 };
  }
  if (!myClosed && rivalClosed) {
    return { tone: "lose", title: "Соперник закрыл цели", phrase: "Твой поднос был близко. Реванш просится сам.", myPlace: 2, rivalPlace: 1 };
  }
  if (myScore === rivalScore) {
    return { tone: "draw", title: DUEL_COPY.draw, phrase: "Кухня не смогла выбрать любимчика.", myPlace: 1, rivalPlace: 1 };
  }
  const iLead = myScore > rivalScore;
  if (myClosed && rivalClosed) {
    return iLead
      ? { tone: "win", title: DUEL_COPY.winByScore, phrase: "Обе цели закрыты, но твой счёт вкуснее.", myPlace: 1, rivalPlace: 2 }
      : { tone: "lose", title: DUEL_COPY.goalsClosedButSecond, phrase: "Цели закрыты, но соперник собрал больше очков.", myPlace: 2, rivalPlace: 1 };
  }
  return iLead
    ? { tone: "draw", title: DUEL_COPY.placedFirst, phrase: "Победа не засчитана без целей, но по очкам ты первая.", myPlace: 1, rivalPlace: 2 }
    : { tone: "lose", title: DUEL_COPY.placedSecond, phrase: "Цели не закрыты, а соперник оказался выше по очкам.", myPlace: 2, rivalPlace: 1 };
}

function duelScoreRow(profile, result = {}, place, fallbackName) {
  return `
    <div class="duel-score-row ${place === 1 ? "leader" : ""}">
      ${duelAvatar(profile)}
      <div>
        <strong>${escapeHtml(profile?.name || fallbackName)}</strong>
        <span>${result?.goals_closed ? "цели закрыты" : "цели не закрыты"}</span>
      </div>
      <em>${place} место</em>
      <b>${Math.max(0, Number(result?.score) || 0)}</b>
    </div>
  `;
}

function getDuelResultCharacter(tone) {
  const avatar = normalizeAvatarId(state.playerProfile?.avatar_id);
  if (avatar === "blender") return tone === "lose" ? ASSETS.blender.sad : ASSETS.blender.happy;
  if (avatar === "coffee") return tone === "lose" ? ASSETS.coffee.sad : ASSETS.coffee.happy;
  return tone === "lose" ? ASSETS.airfryer.sad : ASSETS.airfryer.happy;
}

function renderInventoryPreview() {
  const mount = document.querySelector("#inventoryPreview");
  if (!mount) return;
  mount.innerHTML = Object.entries(BOOSTERS).map(([key, booster]) => `
    <div class="inventory-chip">
      <img src="${ASSETS.boosters[key]}" alt="">
      <span>${booster.title}</span>
      <strong>${state.wallet.inventory[key] || 0}</strong>
    </div>
  `).join("");
}

function startMatchGame(options = {}) {
  const duelRoom = options.duel ? normalizeDuelRoom(options.room) : null;
  const isDuel = Boolean(duelRoom);
  const duelSide = isDuel ? getDuelSide(duelRoom) : "";
  const duelOpponent = isDuel ? getDuelOpponentProfile(duelRoom) : null;
  const duelHud = isDuel ? `
    <div class="duel-timer-pill" id="duelTimerPill">${formatTime(getDuelTimerSeconds(duelRoom.difficulty))}</div>
    <div class="duel-rival-pill" id="duelRivalPill">
      ${duelAvatar(duelOpponent)}
      <span>${escapeHtml(duelOpponent?.name || "Соперник")}</span>
      <strong>0</strong>
    </div>
  ` : "";
  gameShell("match", isDuel ? DUEL_COPY.title : COPY.match.title, isDuel ? "Закрой цели до сигнала кухни" : "Собирай цели за ходы", duelHud);
  state.matchSessionId = makeId("session");
  state.resultSubmitted = false;
  if (isDuel) {
    state.duel = {
      room: duelRoom,
      side: duelSide,
      resultSubmitted: false,
    };
    const pauseButton = document.querySelector("#pauseButton");
    if (pauseButton) pauseButton.hidden = true;
  }
  const area = document.querySelector("#playArea");
  const button = document.querySelector("#mainAction");
  const difficulty = DIFFICULTIES[isDuel ? duelRoom.difficulty : state.difficulty] || DIFFICULTIES.normal;
  const size = 7;
  const tileTypes = Object.keys(ASSETS.match.tiles);
  const random = isDuel ? createSeededRandom(duelRoom.seed) : Math.random;
  const pickRandom = (items) => items[Math.floor(random() * items.length)];
  const game = {
    board: isDuel ? cloneMatchBoard(duelRoom.board) : [],
    goals: isDuel ? { ...duelRoom.goals } : buildMatchGoals(tileTypes, difficulty),
    goalTotal: 0,
    moves: isDuel ? 999 : difficulty.matchMoves,
    selected: null,
    selectedBooster: null,
    duel: isDuel,
    duelInventory: isDuel ? { ...(duelRoom.booster_kit || {}) } : null,
    duelEndsAt: isDuel ? Date.now() + getDuelTimerSeconds(duelRoom.difficulty) * 1000 : 0,
    duelLastProgressAt: 0,
    random,
    pickRandom,
    locked: false,
    ended: false,
    settlingFinish: false,
    extraUsed: false,
    pointerStart: null,
    dragTarget: null,
    cellEls: [],
  };
  game.goalTotal = Object.values(game.goals).reduce((sum, value) => sum + value, 0);

  area.classList.add("match-stage");
  area.innerHTML = `
    <div class="match-status">
      <div class="match-character" id="matchCharacter"></div>
      <div class="match-goals" id="matchGoals"></div>
    </div>
    <div class="field-toast-stack" id="fieldToastStack" aria-live="polite"></div>
    <div class="match-board" id="matchBoard" aria-label="Поле Кубики сошлись"></div>
  `;
  document.querySelector(".progress-panel")?.classList.add("match-progress");
  document.querySelector(".game-controls").insertAdjacentHTML("afterbegin", `<div class="booster-bar" id="boosterBar"></div>`);
  document.querySelector("#matchCharacter").append(safeImg(ASSETS.match.normal, "Кубики сошлись"));
  if (isDuel) {
    button.hidden = true;
    area.insertAdjacentHTML("beforeend", `<div class="duel-start-overlay" id="duelStartOverlay"><img src="${ASSETS.duel.startBurst}" alt=""><strong>${DUEL_COPY.started}</strong></div>`);
    after(1300, () => document.querySelector("#duelStartOverlay")?.remove());
  } else {
    button.classList.add("shop-open-button");
    button.innerHTML = `<img src="${ASSETS.buttons.shop}" alt=""> Магазин`;
    button.addEventListener("click", () => {
      playSound("click");
      openShopModal();
    });
  }

  function init() {
    if (!isDuel) {
      game.board = createMatchBoard(size, tileTypes);
      addMatchBlockers(game.board, size, difficulty.matchBlockers);
      let guard = 0;
      while (!hasAnyMatchMove(game.board, size) && guard < 12) {
        game.board = createMatchBoard(size, tileTypes);
        addMatchBlockers(game.board, size, difficulty.matchBlockers);
        guard += 1;
      }
    } else {
      ensureMatchTileIdFromBoard(game.board);
    }
    setScore(0);
    renderMatch();
    refreshBoosterBar();
    updateMatchHud();
    if (isDuel) {
      startDuelTimers();
      pushDuelProgress(true);
    }
  }

  function renderMatch(mode = "") {
    const boardEl = document.querySelector("#matchBoard");
    if (!boardEl) return;
    ensureMatchCells(boardEl);
    const previousIds = new Set(game.cellEls.map((cell) => cell.dataset.tileId).filter(Boolean));
    game.board.forEach((tile, index) => {
      const cell = game.cellEls[index];
      const tileId = tile?.id || "";
      const signature = tile ? `${tile.id}:${tile.type}:${tile.special || ""}` : "empty";
      const classes = ["match-cell"];
      if (game.selected === index) classes.push("selected");
      if (tile?.type === "blocker") classes.push("blocker");
      if (tile?.special) classes.push(`special-${tile.special}`);
      cell.className = classes.join(" ");
      cell.dataset.index = String(index);
      if (tileId) cell.dataset.tileId = tileId;
      else delete cell.dataset.tileId;
      if (mode === "settle" && tileId && !previousIds.has(tileId)) cell.classList.add("tile-new");
      if (cell.dataset.signature === signature) return;
      cell.dataset.signature = signature;
      cell.replaceChildren();
      if (tile?.type === "blocker") {
        cell.append(safeImg(ASSETS.match.specials.blocker, "Отчёт-блокер"));
      } else if (tile) {
        const src = tile.special ? ASSETS.match.specials[tile.special] : ASSETS.match.tiles[tile.type];
        cell.append(safeImg(src, MATCH_TILE_LABELS[tile.type] || "Плитка"));
      }
    });
  }

  function ensureMatchCells(boardEl) {
    if (game.cellEls.length === size * size && boardEl.children.length === size * size) return;
    boardEl.innerHTML = "";
    game.cellEls = [];
    for (let index = 0; index < size * size; index += 1) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "match-cell";
      cell.dataset.index = String(index);
      cell.addEventListener("pointerdown", (event) => {
        startTileDrag(index, cell, event.clientX, event.clientY, event.pointerId);
        cell.setPointerCapture?.(event.pointerId);
      });
      cell.addEventListener("pointermove", (event) => {
        if (!game.pointerStart || game.pointerStart.index !== index || game.pointerStart.pointerId !== event.pointerId) return;
        updateDragPreview(event.clientX - game.pointerStart.x, event.clientY - game.pointerStart.y);
      });
      cell.addEventListener("pointerup", (event) => {
        if (!game.pointerStart || game.pointerStart.index !== index || game.pointerStart.pointerId !== event.pointerId) return;
        const dx = event.clientX - game.pointerStart.x;
        const dy = event.clientY - game.pointerStart.y;
        cell.releasePointerCapture?.(event.pointerId);
        finishTileDrag(index, dx, dy);
      });
      cell.addEventListener("pointercancel", () => {
        resetDragPreview();
        game.pointerStart = null;
      });
      cell.addEventListener("mousedown", (event) => {
        if (game.pointerStart) return;
        startTileDrag(index, cell, event.clientX, event.clientY, "mouse");
      });
      boardEl.append(cell);
      game.cellEls.push(cell);
    }
  }

  function startTileDrag(index, cell, x, y, pointerId) {
    if (game.locked || game.ended || state.paused) return;
    game.pointerStart = { index, x, y, pointerId, cell };
    cell.classList.add("dragging");
  }

  function moveTileDrag(clientX, clientY) {
    if (!game.pointerStart) return;
    updateDragPreview(clientX - game.pointerStart.x, clientY - game.pointerStart.y);
  }

  function finishTileDrag(index, dx, dy) {
    resetDragPreview();
    if (Math.abs(dx) > 18 || Math.abs(dy) > 18) {
      const target = swipeTarget(index, dx, dy, size);
      if (target !== null) handleTileTap(target, index);
      game.pointerStart = null;
      return;
    }
    game.pointerStart = null;
    handleTileTap(index);
  }

  function updateDragPreview(dx, dy) {
    const start = game.pointerStart;
    if (!start?.cell) return;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);
    const mostlyX = absX >= absY;
    const cellSize = start.cell.getBoundingClientRect().width || 48;
    const travel = Math.max(-cellSize * 0.92, Math.min(cellSize * 0.92, mostlyX ? dx : dy));
    const moveX = mostlyX ? travel : 0;
    const moveY = mostlyX ? 0 : travel;
    start.cell.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.08)`;
    start.cell.style.zIndex = "20";
    const target = swipeTarget(start.index, dx, dy, size);
    if (game.dragTarget !== target) {
      document.querySelectorAll(".match-cell.drag-target").forEach((node) => node.classList.remove("drag-target"));
      game.dragTarget = target;
      if (target !== null && (absX > 16 || absY > 16)) {
        document.querySelector(`.match-cell[data-index="${target}"]`)?.classList.add("drag-target");
      }
    }
  }

  function resetDragPreview() {
    const cell = game.pointerStart?.cell;
    if (cell) {
      cell.style.transform = "";
      cell.style.zIndex = "";
      cell.classList.remove("dragging");
    }
    document.querySelectorAll(".match-cell.drag-target").forEach((node) => node.classList.remove("drag-target"));
    game.dragTarget = null;
  }

  const mouseMoveHandler = (event) => {
    if (!game.pointerStart || game.pointerStart.pointerId !== "mouse") return;
    moveTileDrag(event.clientX, event.clientY);
  };
  const mouseUpHandler = (event) => {
    if (!game.pointerStart || game.pointerStart.pointerId !== "mouse") return;
    const { index, x, y } = game.pointerStart;
    finishTileDrag(index, event.clientX - x, event.clientY - y);
  };
  window.addEventListener("mousemove", mouseMoveHandler);
  window.addEventListener("mouseup", mouseUpHandler);
  state.cleanup.push(() => {
    window.removeEventListener("mousemove", mouseMoveHandler);
    window.removeEventListener("mouseup", mouseUpHandler);
  });

  function handleTileTap(index, fromSwipe = null) {
    if (game.locked || game.ended || state.paused) return;
    const tile = game.board[index];
    if (!tile) return;
    if (game.selectedBooster) {
      useTargetBooster(index);
      return;
    }
    if (tile.type === "blocker") {
      showPhrase(area, "Отчёт просто так не двигается", "50%", "18%", "bad");
      playSound("fail");
      return;
    }
    if (fromSwipe !== null) {
      trySwap(fromSwipe, index);
      return;
    }
    if (game.selected === null) {
      game.selected = index;
      renderMatch();
      return;
    }
    if (game.selected === index) {
      game.selected = null;
      renderMatch();
      return;
    }
    if (areAdjacent(game.selected, index, size)) {
      trySwap(game.selected, index);
      return;
    }
    game.selected = index;
    renderMatch();
  }

  function trySwap(a, b) {
    if (!game.board[a] || !game.board[b] || game.board[a].type === "blocker" || game.board[b].type === "blocker") return;
    const first = game.board[a];
    const second = game.board[b];
    swap(game.board, a, b);
    if (first.special || second.special) {
      const clearSet = new Set();
      const combo = getSpecialCombo(first, second);
      if (combo === "doubleHeart") {
        game.board.forEach((tile, idx) => {
          if (tile) clearSet.add(idx);
        });
      } else if (combo === "doubleStar") {
        expandStarClear(a, clearSet);
        expandStarClear(b, clearSet);
        neighbors(a, size).forEach((idx) => clearSet.add(idx));
        neighbors(b, size).forEach((idx) => clearSet.add(idx));
      } else {
        if (first.special) expandSpecialClear(b, clearSet, second.type);
        if (second.special) expandSpecialClear(a, clearSet, first.type);
      }
      game.moves -= 1;
      game.selected = null;
      game.locked = true;
      renderMatch();
      applyBoosterClear(clearSet, combo || "special", specialComboPhrase(combo, first, second));
      return;
    }
    const matches = findMatchGroups(game.board, size);
    if (!matches.length) {
      swap(game.board, a, b);
      game.selected = null;
      renderMatch();
      document.querySelector("#matchBoard")?.classList.add("shake");
      after(280, () => document.querySelector("#matchBoard")?.classList.remove("shake"));
      showPhrase(area, randomItem(COPY.match.fail), "50%", "18%", "bad");
      playSound("fail");
      return;
    }
    game.moves -= 1;
    game.selected = null;
    game.locked = true;
    renderMatch();
    resolveMatches(matches).then(() => {
      game.locked = false;
      if (game.moves > 0 && !hasAnyMatchMove(game.board, size) && !isMatchWon(game.goals)) reshuffleBoard();
      renderMatch();
      updateMatchHud();
      checkMatchFinish();
    });
  }

  async function resolveMatches(initialMatches = null) {
    let matches = initialMatches || findMatchGroups(game.board, size);
    let combo = 0;
    while (matches.length && !game.ended) {
      combo += 1;
      await clearMatchGroups(matches, combo);
      renderMatch();
      await delay(80);
      dropMatchTiles(game.board, size, tileTypes, game.pickRandom);
      renderMatch("settle");
      await delay(260);
      matches = findMatchGroups(game.board, size);
    }
  }

  async function clearMatchGroups(groups, combo = 1) {
    const clearSet = new Set();
    const specials = [];
    groups.forEach((group) => {
      group.indices.forEach((idx) => clearSet.add(idx));
      if (group.indices.length >= 4) {
        const specialIndex = group.indices[Math.floor(group.indices.length / 2)];
        const special = group.indices.length >= 5 ? "heart" : "star";
        specials.push({ index: specialIndex, type: group.type, special });
        clearSet.delete(specialIndex);
      }
    });
    [...clearSet].forEach((idx) => expandSpecialClear(idx, clearSet));

    const clearList = [...clearSet];
    let gained = 0;
    clearList.forEach((idx) => {
      const tile = game.board[idx];
      if (!tile) return;
      if (tile.type === "blocker") {
        gained += 30;
        return;
      }
      if (game.goals[tile.type] > 0) game.goals[tile.type] -= 1;
      gained += tile.special ? 25 : 10;
    });
    await animateClearCells(clearList, specials.length ? "special" : "match");
    clearList.forEach((idx) => {
      if (game.board[idx]) game.board[idx] = null;
    });
    specials.forEach(({ index, type, special }) => {
      if (game.board[index] === null || game.board[index]?.type !== "blocker") {
        game.board[index] = makeMatchTile(type, special);
      }
    });
    if (gained) {
      setScore(state.score + gained + Math.max(0, combo - 1) * 15);
      showPop(area, `+${gained}`, "50%", "18%");
      showPhrase(area, combo > 1 ? `Комбо ${combo}!` : randomItem(COPY.match.success), "50%", "25%");
      playSound("score");
    }
  }

  function expandSpecialClear(index, clearSet, forcedType = null) {
    const tile = game.board[index];
    if (!tile?.special) return;
    clearSet.add(index);
    if (tile.special === "star") {
      expandStarClear(index, clearSet);
    }
    if (tile.special === "heart") {
      const targetType = forcedType && forcedType !== "blocker" ? forcedType : tile.type;
      game.board.forEach((candidate, idx) => {
        if (candidate?.type === targetType) clearSet.add(idx);
      });
    }
  }

  function expandStarClear(index, clearSet) {
    const row = Math.floor(index / size);
    const col = index % size;
    for (let i = 0; i < size; i += 1) {
      clearSet.add(row * size + i);
      clearSet.add(i * size + col);
    }
  }

  function getSpecialCombo(first, second) {
    if (first.special === "heart" && second.special === "heart") return "doubleHeart";
    if (first.special === "star" && second.special === "star") return "doubleStar";
    if (first.special && second.special) return "doubleSpecial";
    return "";
  }

  function specialComboPhrase(combo, first, second) {
    if (combo === "doubleHeart") return "Два сердца: поле сияет!";
    if (combo === "doubleStar") return "Двойная звезда!";
    if (combo === "doubleSpecial") return "Спец-комбо!";
    if (first.special === "heart" || second.special === "heart") return "Сердце выбрало цвет!";
    return "Звезда навела порядок!";
  }

  async function animateClearCells(indices, kind = "match") {
    const className = kind === "bomb"
      ? "clearing-bomb"
      : kind === "star" || kind === "heart" || kind === "special" || kind === "colorMixer" || kind === "doubleHeart" || kind === "doubleStar" || kind === "doubleSpecial"
        ? "clearing-special"
        : "clearing";
    indices.forEach((idx) => {
      const cell = document.querySelector(`.match-cell[data-index="${idx}"]`);
      if (cell) cell.classList.add(className);
    });
    await delay(className === "clearing-bomb" ? 360 : 300);
  }

  function useTargetBooster(index) {
    const key = game.selectedBooster;
    const tile = game.board[index];
    if (!key || !tile || getMatchBoosterCount(key) <= 0) return;
    const clearSet = new Set();
    if (key === "hammer") clearSet.add(index);
    if (key === "star") {
      const row = Math.floor(index / size);
      const col = index % size;
      for (let i = 0; i < size; i += 1) {
        clearSet.add(row * size + i);
        clearSet.add(i * size + col);
      }
    }
    if (key === "bomb") {
      const row = Math.floor(index / size);
      const col = index % size;
      for (let r = row - 1; r <= row + 1; r += 1) {
        for (let c = col - 1; c <= col + 1; c += 1) {
          if (r >= 0 && r < size && c >= 0 && c < size) clearSet.add(r * size + c);
        }
      }
    }
    if (key === "colorMixer") {
      if (tile.type === "blocker") {
        showPhrase(area, "Миксер отчёты не пьёт", "50%", "18%", "bad");
        playSound("fail");
        return;
      }
      game.board.forEach((candidate, idx) => {
        if (candidate?.type === tile.type) clearSet.add(idx);
      });
    }
    spendMatchBooster(key);
    game.selectedBooster = null;
    refreshBoosterBar();
    applyBoosterClear(clearSet, key);
  }

  async function applyBoosterClear(clearSet, key, phraseOverride = null) {
    if (!clearSet.size) {
      game.locked = false;
      renderMatch();
      updateMatchHud();
      return;
    }
    game.locked = true;
    const clearList = [...clearSet];
    await animateClearCells(clearList, key);
    clearList.forEach((idx) => {
      const tile = game.board[idx];
      if (!tile) return;
      if (tile.type !== "blocker" && game.goals[tile.type] > 0) game.goals[tile.type] -= 1;
      game.board[idx] = null;
    });
    setScore(state.score + clearSet.size * 12);
    showPhrase(area, phraseOverride || boosterPhrase(key), "50%", "18%");
    playSound("score");
    renderMatch();
    delay(80)
      .then(() => {
        dropMatchTiles(game.board, size, tileTypes, game.pickRandom);
        renderMatch("settle");
        return delay(260).then(() => resolveMatches());
      })
      .then(() => {
        game.locked = false;
        if (game.moves > 0 && !hasAnyMatchMove(game.board, size) && !isMatchWon(game.goals)) reshuffleBoard();
        renderMatch();
        updateMatchHud();
        checkMatchFinish();
      });
  }

  function activateInstantBooster(key) {
    if (getMatchBoosterCount(key) <= 0 || game.locked || game.ended) return;
    if (key === "shuffle") {
      spendMatchBooster(key);
      reshuffleBoard();
      showPhrase(area, "Поле встряхнулось!", "50%", "18%");
      playSound("score");
      renderMatch();
      refreshBoosterBar();
    }
    if (key === "extraMoves") {
      spendMatchBooster(key);
      game.moves += 5;
      showPhrase(area, "+5 ходов, красота!", "50%", "18%");
      playSound("score");
      updateMatchHud();
      refreshBoosterBar();
    }
  }

  function reshuffleBoard() {
    const pieces = game.board.filter((tile) => tile && tile.type !== "blocker").map((tile) => ({ ...tile, special: null }));
    for (let i = pieces.length - 1; i > 0; i -= 1) {
      const j = Math.floor(game.random() * (i + 1));
      [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }
    let cursor = 0;
    game.board = game.board.map((tile) => (tile?.type === "blocker" ? tile : pieces[cursor++]));
    let guard = 0;
    while (findMatchGroups(game.board, size).length && guard < 8) {
      game.board = game.board.map((tile) => (tile?.type === "blocker" ? tile : makeMatchTile(game.pickRandom(tileTypes))));
      guard += 1;
    }
  }

  function updateMatchHud() {
    if (isDuel) {
      const left = Math.max(0, Math.ceil((game.duelEndsAt - Date.now()) / 1000));
      setProgress(remainingGoalRatio(game.goals, game.goalTotal), `Кухня: ${formatTime(left)} · осталось собрать цели`);
    } else {
      setProgress(remainingGoalRatio(game.goals, game.goalTotal), `Ходы: ${game.moves} · осталось собрать цели`);
    }
    document.querySelector("#matchGoals").innerHTML = Object.entries(game.goals).map(([type, left]) => `
      <div class="goal-chip ${left <= 0 ? "done" : ""}">
        <img src="${ASSETS.match.tiles[type]}" alt="">
        <span>${Math.max(0, left)}</span>
      </div>
    `).join("");
    const character = document.querySelector("#matchCharacter img");
    if (character) {
      character.src = isMatchWon(game.goals) ? ASSETS.match.happy : game.moves <= 5 ? ASSETS.match.sad : ASSETS.match.normal;
    }
    if (isDuel) pushDuelProgress();
  }

  function checkMatchFinish() {
    if (game.ended || game.settlingFinish) return;
    const pendingMatches = findMatchGroups(game.board, size);
    if (pendingMatches.length) {
      game.settlingFinish = true;
      game.locked = true;
      resolveMatches(pendingMatches).then(() => {
        game.settlingFinish = false;
        game.locked = false;
        renderMatch();
        updateMatchHud();
        checkMatchFinish();
      });
      return;
    }
    if (isMatchWon(game.goals)) {
      if (isDuel) {
        updateMatchHud();
        return;
      }
      game.ended = true;
      playSound("win");
      confetti();
      after(900, () => showResult("match", state.score, "win"));
      return;
    }
    if (!isDuel && game.moves <= 0) {
      game.ended = true;
      playSound("gameOver");
      after(850, () => showResult("match", state.score, "lose"));
    }
  }

  function startDuelTimers() {
    const timer = setInterval(() => {
      if (game.ended) return;
      const left = Math.max(0, Math.ceil((game.duelEndsAt - Date.now()) / 1000));
      const pill = document.querySelector("#duelTimerPill");
      if (pill) {
        pill.textContent = formatTime(left);
        pill.classList.toggle("urgent", left <= 10);
      }
      document.querySelector(".is-game")?.classList.toggle("duel-final-seconds", left <= 10);
      if (left === 10) {
        showPhrase(area, DUEL_COPY.finalSeconds, "50%", "14%");
        playSound("fail");
      }
      updateMatchHud();
      if (left <= 0) finishDuelMatch();
    }, 500);
    state.cleanup.push(() => clearInterval(timer));
    const rivalPoll = setInterval(async () => {
      if (game.ended || !state.duel?.room?.room_code) return;
      try {
        const freshRoom = await fetchDuelRoom(state.duel.room.room_code);
        if (freshRoom) {
          state.duel.room = freshRoom;
          renderDuelRivalPill(freshRoom);
        }
      } catch {
        // The local round keeps running; the final submit will retry the room state.
      }
    }, 2400);
    state.cleanup.push(() => clearInterval(rivalPoll));
  }

  function pushDuelProgress(force = false) {
    if (!isDuel) return;
    const now = Date.now();
    if (!force && now - game.duelLastProgressAt < 1300) return;
    game.duelLastProgressAt = now;
    updateDuelProgress(getDuelProgressPayload(game));
  }

  function finishDuelMatch() {
    if (game.ended) return;
    game.ended = true;
    game.locked = true;
    pushDuelProgress(true);
    playSound(isMatchWon(game.goals) ? "win" : "gameOver");
    showPhrase(area, DUEL_COPY.timeUp, "50%", "14%");
    after(750, async () => {
      const result = getDuelProgressPayload(game);
      await submitDuelResult(result).catch(() => null);
      showDuelResultWaiting();
    });
  }

  function getMatchBoosterCount(key) {
    if (isDuel) return Math.max(0, Number(game.duelInventory?.[key]) || 0);
    return Math.max(0, Number(state.wallet.inventory[key]) || 0);
  }

  function spendMatchBooster(key) {
    if (isDuel) {
      game.duelInventory[key] = Math.max(0, (game.duelInventory[key] || 0) - 1);
      return;
    }
    state.wallet.inventory[key] -= 1;
    saveWallet();
  }

  window.__currentMatchGame = {
    selectBooster(key) {
      if (BOOSTERS[key]?.action === "instant") {
        activateInstantBooster(key);
        return;
      }
      game.selectedBooster = game.selectedBooster === key ? null : key;
      game.selected = null;
      showPhrase(area, game.selectedBooster ? "Выбери плитку" : "Бустер отложен", "50%", "18%");
      refreshBoosterBar();
    },
    getSelectedBooster: () => game.selectedBooster,
    getBoosterCount: (key) => getMatchBoosterCount(key),
    isDuel: () => isDuel,
  };
  state.cleanup.push(() => {
    if (window.__currentMatchGame) delete window.__currentMatchGame;
  });

  init();
}

function refreshBoosterBar() {
  const bar = document.querySelector("#boosterBar");
  if (!bar) {
    renderInventoryPreview();
    return;
  }
  const selected = window.__currentMatchGame?.getSelectedBooster?.() || null;
  const isTemporaryKit = Boolean(window.__currentMatchGame?.isDuel?.());
  const entries = Object.entries(BOOSTERS);
  if (isTemporaryKit && entries.every(([key]) => window.__currentMatchGame.getBoosterCount(key) <= 0)) {
    bar.hidden = true;
    return;
  }
  bar.hidden = false;
  bar.innerHTML = entries.map(([key, booster]) => {
    const count = window.__currentMatchGame?.getBoosterCount
      ? window.__currentMatchGame.getBoosterCount(key)
      : state.wallet.inventory[key] || 0;
    return `
      <button class="booster-button ${selected === key ? "active" : ""}" type="button" data-booster="${key}" ${count <= 0 ? "disabled" : ""} aria-label="${booster.title}">
        <img src="${ASSETS.boosters[key]}" alt="">
        <span>${count}</span>
      </button>
    `;
  }).join("");
  bar.querySelectorAll("[data-booster]").forEach((button) => {
    button.addEventListener("click", () => {
      playSound("click");
      window.__currentMatchGame?.selectBooster(button.dataset.booster);
    });
  });
}

function buildMatchGoals(tileTypes, difficulty, random = Math.random) {
  const shuffled = [...tileTypes].sort(() => random() - 0.5);
  return Object.fromEntries(shuffled.slice(0, difficulty.matchGoals).map((type, index) => [type, difficulty.matchGoalBase + index * 2]));
}

function createMatchBoard(size, tileTypes, pick = randomItem) {
  const board = [];
  for (let i = 0; i < size * size; i += 1) {
    let type = pick(tileTypes);
    let guard = 0;
    while (wouldCreateStartMatch(board, i, type, size) && guard < 20) {
      type = pick(tileTypes);
      guard += 1;
    }
    board.push(makeMatchTile(type));
  }
  return board;
}

function makeMatchTile(type, special = null) {
  matchTileId += 1;
  return { id: `match-${matchTileId}`, type, special };
}

function wouldCreateStartMatch(board, index, type, size) {
  const col = index % size;
  const leftMatch = col >= 2 && board[index - 1]?.type === type && board[index - 2]?.type === type;
  const topMatch = index >= size * 2 && board[index - size]?.type === type && board[index - size * 2]?.type === type;
  return leftMatch || topMatch;
}

function addMatchBlockers(board, size, count) {
  let placed = 0;
  let guard = 0;
  while (placed < count && guard < 80) {
    const index = size + Math.floor(Math.random() * (size * (size - 2)));
    if (board[index]?.type !== "blocker") {
      board[index] = makeMatchTile("blocker");
      placed += 1;
    }
    guard += 1;
  }
}

function findMatchGroups(board, size) {
  const groups = [];
  for (let row = 0; row < size; row += 1) {
    let col = 0;
    while (col < size) {
      const start = row * size + col;
      const type = board[start]?.type;
      if (!type || type === "blocker") {
        col += 1;
        continue;
      }
      const indices = [start];
      let next = col + 1;
      while (next < size && board[row * size + next]?.type === type) {
        indices.push(row * size + next);
        next += 1;
      }
      if (indices.length >= 3) groups.push({ type, indices });
      col = next;
    }
  }
  for (let col = 0; col < size; col += 1) {
    let row = 0;
    while (row < size) {
      const start = row * size + col;
      const type = board[start]?.type;
      if (!type || type === "blocker") {
        row += 1;
        continue;
      }
      const indices = [start];
      let next = row + 1;
      while (next < size && board[next * size + col]?.type === type) {
        indices.push(next * size + col);
        next += 1;
      }
      if (indices.length >= 3) groups.push({ type, indices });
      row = next;
    }
  }
  return groups;
}

function dropMatchTiles(board, size, tileTypes, pick = randomItem) {
  for (let col = 0; col < size; col += 1) {
    let segmentEnd = size - 1;
    for (let row = size - 1; row >= -1; row -= 1) {
      if (row >= 0 && board[row * size + col]?.type !== "blocker") continue;
      const segmentStart = row + 1;
      const pieces = [];
      for (let r = segmentEnd; r >= segmentStart; r -= 1) {
        const idx = r * size + col;
        if (board[idx]) pieces.push(board[idx]);
        board[idx] = null;
      }
      let writeRow = segmentEnd;
      pieces.forEach((piece) => {
        board[writeRow * size + col] = piece;
        writeRow -= 1;
      });
      for (let r = writeRow; r >= segmentStart; r -= 1) {
        board[r * size + col] = makeMatchTile(pick(tileTypes));
      }
      segmentEnd = row - 1;
    }
  }
}

function hasAnyMatchMove(board, size) {
  for (let index = 0; index < board.length; index += 1) {
    const row = Math.floor(index / size);
    const col = index % size;
    const candidates = [];
    if (col < size - 1) candidates.push(index + 1);
    if (row < size - 1) candidates.push(index + size);
    for (const next of candidates) {
      if (board[index]?.type === "blocker" || board[next]?.type === "blocker") continue;
      swap(board, index, next);
      const ok = findMatchGroups(board, size).length > 0;
      swap(board, index, next);
      if (ok) return true;
    }
  }
  return false;
}

function areAdjacent(a, b, size) {
  const ar = Math.floor(a / size);
  const ac = a % size;
  const br = Math.floor(b / size);
  const bc = b % size;
  return Math.abs(ar - br) + Math.abs(ac - bc) === 1;
}

function swipeTarget(index, dx, dy, size) {
  const row = Math.floor(index / size);
  const col = index % size;
  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 0 && col < size - 1) return index + 1;
    if (dx < 0 && col > 0) return index - 1;
  } else {
    if (dy > 0 && row < size - 1) return index + size;
    if (dy < 0 && row > 0) return index - size;
  }
  return null;
}

function neighbors(index, size) {
  const row = Math.floor(index / size);
  const col = index % size;
  return [
    row > 0 ? index - size : null,
    row < size - 1 ? index + size : null,
    col > 0 ? index - 1 : null,
    col < size - 1 ? index + 1 : null,
  ].filter((item) => item !== null);
}

function swap(board, a, b) {
  [board[a], board[b]] = [board[b], board[a]];
}

function remainingGoalRatio(goals, totalGoals) {
  const total = Object.values(goals).reduce((sum, value) => sum + Math.max(0, value), 0);
  return totalGoals ? Math.max(0, Math.min(1, 1 - total / totalGoals)) : 1;
}

function isMatchWon(goals) {
  return Object.values(goals).every((left) => left <= 0);
}

function boosterPhrase(key) {
  const phrases = {
    hammer: "Тюк, и порядок!",
    star: "Звезда навела красоту",
    bomb: "Мягкий бум!",
    colorMixer: "Цвет ушёл в отпуск",
  };
  return phrases[key] || "Бустер сработал!";
}

function showResult(character, score, outcome = "win") {
  clearRuntime();
  state.screen = "result";
  setBackground("main");
  if (outcome === "win") recordCareerRound(character);
  const isRatingGame = character === "match";
  const baseCoins = outcome === "win" ? awardCoins(character) : 0;
  const bonusCoins = isRatingGame ? 0 : Math.max(0, Number(state.roundBonusCoins) || 0);
  const coinsEarned = baseCoins + bonusCoins;
  const characterData = CHARACTERS[character];
  const result = getResultCopy(character, score, outcome);
  const resultImage = getResultImage(character, score, outcome);
  const resultRank = isRatingGame
    ? (outcome === "win" ? result.rank : "Очки рейтинга не начислены")
    : outcome === "win"
      ? "Монетки за победу получены"
      : "База не начислена";
  const coinDetails = !isRatingGame && coinsEarned
    ? `<p class="small-note result-note">${baseCoins ? `Победа: +${baseCoins} ${plural(baseCoins, ["монета", "монеты", "монет"])}` : "Победа не засчитана"}${bonusCoins ? ` · Бонусы: +${bonusCoins} ${plural(bonusCoins, ["монета", "монеты", "монет"])}` : ""}</p>`
    : `<p class="small-note result-note">${result.note}</p>`;
  render(`
    <section class="screen result-screen ${isRatingGame ? "" : "mini-result-screen"}">
      <div class="top-row"><button class="back-button" type="button" id="selectButtonTop">←</button>${isRatingGame ? '<div id="statusMount"></div>' : ""}<div id="walletMount"></div><div id="soundMount"></div></div>
      <div class="result-card">
        <div id="resultHero"></div>
        <div class="result-copy">
          ${isRatingGame ? `<div class="score-big">${outcome === "win" ? score : "0"}</div>` : `<div class="coin-total"><img src="${ASSETS.economy.coin}" alt="">${coinsEarned ? `+${coinsEarned}` : "0"} монет</div>`}
          <h2>${result.title}</h2>
          <div class="rank">${resultRank}</div>
          <p class="result-phrase">${result.phrase}</p>
          ${coinDetails}
        </div>
      </div>
      <div class="result-actions">
        <button class="action-button full" type="button" id="againButton">Сыграть ещё</button>
        <button class="action-button secondary full" type="button" id="selectButton">Выбрать другого героя</button>
      </div>
    </section>
  `);
  if (isRatingGame) mountStatus();
  mountWallet();
  document.querySelector("#soundMount").append(soundButton());
  document.querySelector("#resultHero").append(safeImg(resultImage, characterData.name, "result-hero"));
  document.querySelector("#againButton").addEventListener("click", () => {
    playSound("click");
    if (character === "airfryer") startAirfryerGame();
    if (character === "blender") startBlenderGame();
    if (character === "coffee") startCoffeeGame();
    if (character === "match") showMatchPrepScreen();
  });
  const goSelect = () => {
    playSound("click");
    showCharacterSelect();
  };
  document.querySelector("#selectButton").addEventListener("click", goSelect);
  document.querySelector("#selectButtonTop").addEventListener("click", goSelect);
  if (character === "match" && outcome === "win") submitMatchResult(score, outcome);
  if (outcome === "win") confetti();
}

function resetGame() {
  state.selectedCharacter = null;
  setScore(0);
  showStartScreen();
}

function loadCareerProgress() {
  const fallback = { airfryer: 0, blender: 0, coffee: 0 };
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "null");
    return {
      airfryer: Math.max(0, Number(saved?.airfryer) || 0),
      blender: Math.max(0, Number(saved?.blender) || 0),
      coffee: Math.max(0, Number(saved?.coffee) || 0),
    };
  } catch {
    return fallback;
  }
}

function saveCareerProgress() {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(state.progress));
}

function recordCareerRound(character) {
  if (!state.progress || !Object.prototype.hasOwnProperty.call(state.progress, character)) return;
  state.progress[character] += 1;
  saveCareerProgress();
}

function loadWallet() {
  const emptyInventory = Object.fromEntries(Object.keys(BOOSTERS).map((key) => [key, 0]));
  try {
    const saved = JSON.parse(localStorage.getItem(WALLET_KEY) || "null");
    return {
      coins: Math.max(0, Number(saved?.coins) || 0),
      inventory: {
        ...emptyInventory,
        ...(saved?.inventory || {}),
      },
    };
  } catch {
    return { coins: 0, inventory: emptyInventory };
  }
}

function saveWallet() {
  localStorage.setItem(WALLET_KEY, JSON.stringify(state.wallet));
}

function awardCoins(character) {
  if (!["airfryer", "blender", "coffee"].includes(character)) return 0;
  const rewards = MINI_GAME_REWARDS[state.difficulty] || MINI_GAME_REWARDS.normal;
  return addCoins(rewards[character] || 0);
}

function buyBooster(key) {
  const booster = BOOSTERS[key];
  if (!booster || state.wallet.coins < booster.price) return false;
  state.wallet.coins -= booster.price;
  state.wallet.inventory[key] = (state.wallet.inventory[key] || 0) + 1;
  saveWallet();
  playSound("score");
  return true;
}

function openShopModal() {
  if (document.querySelector(".shop-modal")) return;
  const overlay = document.createElement("div");
  overlay.className = "shop-modal";
  overlay.innerHTML = `
    <div class="shop-card">
      <button class="status-close" type="button" id="closeShop">×</button>
      <div class="shop-head">
        <div class="shop-character"></div>
        <div>
          <h3>Лавка бустеров</h3>
          <p>Монетки из трёх мини-игр меняются на помощь в «Кубики сошлись».</p>
          <div class="shop-balance"><img src="${ASSETS.economy.coin}" alt=""> <span id="shopCoins">${state.wallet.coins}</span></div>
        </div>
      </div>
      <div class="shop-grid" id="shopGrid"></div>
    </div>
  `;
  app.append(overlay);
  overlay.querySelector(".shop-character").append(safeImg(ASSETS.boosters.shopCharacter, "Магазин"));
  renderShopItems(overlay);
  const close = () => {
    overlay.remove();
    playSound("click");
    refreshWalletButtons();
    refreshBoosterBar();
  };
  overlay.querySelector("#closeShop").addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
}

function renderShopItems(overlay) {
  const grid = overlay.querySelector("#shopGrid");
  const coins = overlay.querySelector("#shopCoins");
  if (!grid || !coins) return;
  coins.textContent = String(state.wallet.coins);
  grid.innerHTML = "";
  Object.entries(BOOSTERS).forEach(([key, booster]) => {
    const item = document.createElement("div");
    const count = state.wallet.inventory[key] || 0;
    const canBuy = state.wallet.coins >= booster.price;
    item.className = `shop-item ${canBuy ? "" : "unavailable"}`.trim();
    item.innerHTML = `
      <img src="${ASSETS.boosters[key]}" alt="">
      <div>
        <strong>${booster.title}</strong>
        <span>${booster.desc}</span>
        <em>В запасе: ${count}</em>
      </div>
      <button class="mini-buy" type="button" ${canBuy ? "" : "disabled"}>${booster.price}</button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      if (buyBooster(key)) renderShopItems(overlay);
      else playSound("fail");
    });
    grid.append(item);
  });
}

function refreshWalletButtons() {
  document.querySelectorAll("#walletMount").forEach((mount) => {
    mount.innerHTML = "";
    mount.append(walletButton());
  });
}

function getCareerStatus() {
  const counts = {
    airfryer: Math.min(3, state.progress.airfryer || 0),
    blender: Math.min(3, state.progress.blender || 0),
    coffee: Math.min(3, state.progress.coffee || 0),
  };
  const filled = counts.airfryer + counts.blender + counts.coffee;
  const level = STATUS_LEVELS.reduce((current, item) => (filled >= item.min ? item : current), STATUS_LEVELS[0]);
  const next = STATUS_LEVELS.find((item) => item.min > filled) || null;
  return { counts, filled, level, next };
}

function openStatusModal() {
  openLeaderboardModal();
}

function showPop(parent, text, x, y) {
  const host = getPopHost(parent);
  trimToastStack(host);
  const position = host === parent ? getSafePopPosition(parent, "score", x, y) : null;
  const pop = document.createElement("div");
  pop.className = `pop ${host === parent ? "" : "stacked"}`.trim();
  pop.textContent = text;
  if (position) {
    pop.style.setProperty("--pop-x", position.x);
    pop.style.setProperty("--pop-y", position.y);
  }
  host.append(pop);
  after(860, () => pop.remove());
}

function showPhrase(parent, text, x, y, tone = "") {
  const host = getPopHost(parent);
  trimToastStack(host);
  const position = host === parent ? getSafePopPosition(parent, "phrase", x, y) : null;
  const phrase = document.createElement("div");
  phrase.className = `phrase-pop ${tone === "bad" ? "bad" : ""} ${host === parent ? "" : "stacked"}`.trim();
  phrase.textContent = text;
  if (position) {
    phrase.style.setProperty("--pop-x", position.x);
    phrase.style.setProperty("--pop-y", position.y);
  }
  host.append(phrase);
  after(1300, () => phrase.remove());
}

function ensureFieldMessages(parent) {
  if (!parent.querySelector("#fieldToastStack")) {
    const stack = document.createElement("div");
    stack.className = "field-toast-stack";
    stack.id = "fieldToastStack";
    stack.setAttribute("aria-live", "polite");
    parent.append(stack);
  }
}

function getPopHost(parent) {
  if (parent?.classList?.contains("play-area")) {
    return parent.querySelector("#fieldToastStack") || parent;
  }
  return parent;
}

function trimToastStack(host) {
  if (!host?.classList?.contains("field-toast-stack")) return;
  while (host.children.length >= 3) {
    host.firstElementChild?.remove();
  }
}

function getSafePopPosition(parent, kind, fallbackX = "50%", fallbackY = "18%") {
  if (!parent?.classList?.contains("play-area")) {
    return {
      x: typeof fallbackX === "number" ? `${fallbackX}px` : fallbackX,
      y: typeof fallbackY === "number" ? `${fallbackY}px` : fallbackY,
    };
  }

  const rect = parent.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return { x: "50%", y: "18%" };
  }

  const lane = Number(parent.dataset.popLane || 0);
  parent.dataset.popLane = String(lane + 1);
  const candidates = getPopCandidates(parent);
  const rotated = candidates.slice(lane % candidates.length).concat(candidates.slice(0, lane % candidates.length));
  const avoidRects = getPopAvoidRects(parent);
  const boxWidth = kind === "score" ? 70 : Math.min(240, rect.width * 0.74);
  const boxHeight = kind === "score" ? 44 : 50;

  for (const [xRatio, yRatio] of rotated) {
    const x = rect.width * xRatio;
    const y = rect.height * yRatio;
    const box = {
      left: rect.left + x - boxWidth / 2,
      right: rect.left + x + boxWidth / 2,
      top: rect.top + y - boxHeight / 2,
      bottom: rect.top + y + boxHeight / 2,
    };
    if (!avoidRects.some((avoid) => intersects(box, avoid, 10))) {
      return { x: `${x}px`, y: `${y}px` };
    }
  }

  const [xRatio, yRatio] = candidates[lane % candidates.length];
  return { x: `${rect.width * xRatio}px`, y: `${rect.height * yRatio}px` };
}

function getPopCandidates(parent) {
  if (parent.classList.contains("air-stage")) {
    return [
      [0.18, 0.18],
      [0.82, 0.18],
      [0.5, 0.16],
      [0.18, 0.36],
      [0.82, 0.36],
      [0.5, 0.52],
    ];
  }
  if (parent.classList.contains("blender-stage")) {
    return [
      [0.76, 0.14],
      [0.5, 0.13],
      [0.24, 0.14],
      [0.78, 0.34],
      [0.48, 0.34],
      [0.82, 0.52],
    ];
  }
  if (parent.classList.contains("coffee-stage")) {
    return [
      [0.5, 0.1],
      [0.24, 0.12],
      [0.76, 0.12],
      [0.5, 0.2],
      [0.78, 0.24],
      [0.22, 0.24],
    ];
  }
  return [
    [0.5, 0.16],
    [0.24, 0.2],
    [0.76, 0.2],
    [0.5, 0.34],
  ];
}

function getPopAvoidRects(parent) {
  let selector = ".falling-item, .blender-preview, .air-block";
  if (parent.classList.contains("coffee-stage")) {
    selector = ".timing-panel";
  }
  return [...parent.querySelectorAll(selector)]
    .filter((node) => !node.classList.contains("pop") && !node.classList.contains("phrase-pop"))
    .map((node) => node.getBoundingClientRect());
}

function intersects(a, b, gap = 0) {
  return !(a.right + gap < b.left || a.left - gap > b.right || a.bottom + gap < b.top || a.top - gap > b.bottom);
}

function getResultCopy(character, score, outcome) {
  if (outcome === "lose") {
    const byCharacter = {
      airfryer: ["Башня ушла на перерыв", "Аэрогриль чуть не удержался", "Кубики решили пошалить", "Хруст не сложился", "Башня попросила реванш"],
      blender: ["Смузи убежал", "Блендер просит реванш", "Рецепт почти собрался", "Фрукты разбежались", "Смузи пока в мечтах"],
      coffee: ["Кофе задумался", "Пенка не договорилась", "Чашка ждёт второй шанс", "Момент проскочил", "Кофе ушёл на паузу"],
      match: ["Кубики разбежались", "Поле просит реванш", "Цепочка не дособралась", "Ходы закончились", "Комбо ушло за печенькой"],
    };
    const losePhrases = {
      airfryer: ["Башня немного поехала, но идея была смелая. Ещё раунд — и кубики договорятся.", "Кубики пока не собрались в команду. Зато разминка получилась бодрая.", "Баланс почти пойман. Осталось чуть-чуть терпения и один точный тап."],
      blender: ["Раунд не засчитан, но смузи уже где-то рядом. Поймаем фрукты спокойнее.", "Рецепт пошалил, ингредиенты разбежались. Второй заход будет вкуснее.", "Блендер не обижается. Он просто ждёт ещё одну порцию внимания."],
      coffee: ["Кофе получился задумчивым. Следующий момент поймаем точнее.", "Пенка решила жить своей жизнью. Ничего, бариста внутри уже проснулся.", "Чашка ждёт реванш. Ещё одна попытка — и аромат вернётся."],
      match: ["Цели почти собрались, но поле решило покапризничать. Бустер и новый заход всё поправят.", "Кубики размялись, ходы закончились. Следующая партия будет бодрее.", "Комбо было рядом. Немного хитрости, и плитки сами попросятся в ряд."],
    };
    return {
      title: randomItem(byCharacter[character]),
      rank: score <= 3 ? "Почти герой кухни" : "Упрямый дегустатор",
      phrase: randomItem(losePhrases[character]),
      note: randomItem(["Можно ещё раз", "Реванш просится", "Кухня верит в тебя", "Второй заход будет сильнее", "Почти получилось"]),
    };
  }
  const rank = COPY.ranks.find((item) => score >= item.min);
  const finalPool = character === "airfryer" ? COPY.air.final : character === "blender" ? COPY.blender.final : character === "coffee" ? COPY.coffee.final : COPY.match.final;
  const winPhrases = {
    airfryer: ["Башня держится уверенно. Хруст построен, команда улыбается.", "Кубики встали красиво. Это уже маленькая архитектура кухни.", "Баланс пойман, аэрогриль доволен, можно любоваться."],
    blender: ["Смузи собран уверенно и без лишней бумаги. Витамины аплодируют.", "Ингредиенты пойманы, стакан почти сияет. Очень вкусный раунд.", "Блендер счастлив: всё нужное внутри, всё лишнее снаружи."],
    coffee: ["Кофейный момент пойман. Чашка выглядит уверенно и ароматно.", "Пенка на месте, настроение тоже. Отличный маленький кофе-подвиг.", "Кофемашина сияет: тайминг сработал красиво."],
    match: ["Цели собраны, поле довольно, бустеры лежат с важным видом.", "Кубики сошлись так красиво, будто репетировали.", "Ходы потрачены с умом, плитки хлопают маленькими ладошками."],
  };
  return {
    title: randomItem(finalPool),
    rank: rank.title,
    phrase: randomItem(winPhrases[character]) || rank.phrase,
    note: randomItem(COPY.universal),
  };
}

function getResultImage(character, score, outcome = "win") {
  if (character === "match") {
    if (outcome === "lose") return ASSETS.match.sad;
    if (score < 450) return ASSETS.match.normal;
    return ASSETS.match.happy;
  }
  if (character === "airfryer") {
    if (outcome === "lose" || score <= 4) return ASSETS.airfryer.sad;
    if (score <= 9) return ASSETS.airfryer.normal;
    if (score >= 20) return ASSETS.airfryer.perfect;
    return ASSETS.airfryer.happy;
  }
  if (character === "blender") {
    if (outcome === "lose" || score <= 4) return ASSETS.blender.sad;
    if (score <= 9) return ASSETS.blender.normal;
    return ASSETS.blender.happy;
  }
  if (outcome === "lose" || score <= 2) return ASSETS.coffee.sad;
  if (score <= 5) return ASSETS.coffee.normal;
  return ASSETS.coffee.happy;
}

function confetti() {
  let layer = document.querySelector(".confetti-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.className = "confetti-layer";
    app.append(layer);
  }
  const colors = ["#ff4d8d", "#ffd75a", "#59d77b", "#77d9ff", "#ff8d22", "#ffffff"];
  for (let i = 0; i < 36; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--confetti-color", randomItem(colors));
    piece.style.setProperty("--fall-time", `${900 + Math.random() * 900}ms`);
    piece.style.setProperty("--fall-x", `${-80 + Math.random() * 160}px`);
    layer.append(piece);
    after(1900, () => piece.remove());
  }
  after(2000, () => {
    if (!layer.children.length) layer.remove();
  });
}

function after(ms, fn) {
  const id = setTimeout(fn, ms);
  state.timers.push(id);
  return id;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function plural(number, forms) {
  const mod10 = number % 10;
  const mod100 = number % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1];
  return forms[2];
}

window.DemiGame = {
  ASSETS,
  COPY,
  SOUNDS,
  showStartScreen,
  showCharacterSelect,
  startAirfryerGame,
  startBlenderGame,
  startCoffeeGame,
  showMatchPrepScreen,
  startMatchGame,
  showResult,
  resetGame,
};
