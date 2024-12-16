import Tools from '../tools.js';

export default {
  tagName: 'game-whack-a-mole',
  props: {
    headline: Object,
    subline: String,
    maxTime: Number,
  },
  computed: {
    buttonText() {
      return this.isPlaying ? this.translationData.gamePlaying : this.translationData.gameStart;
    },
  },
  data() {
    return {
      translationData: {},
      score: 0,
      isUpperBreakpoint: null,
      highScore: parseInt(localStorage.getItem('whackHighScore')) || 0,
      defaultMaxTime: 60,
      timeLeft: 0,
      isPlaying: false,
      numberOfHolesMobile: 6,
      numberOfHolesDesktop: 12,
      numberOfHoles: 0,
      holes: [],
      moleTimer: null,
      gameTimer: null,
      gameOverVisible: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);

    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData([
          'gameStart',
          'gamePlaying',
          'gameOver',
          'gameHighScore',
          'gameFinalScore',
          'gameTryAgain',
          'gameScore',
          'gameTimeLeft',
        ]);
      });
    }
  },
  created() {
    this.resetState();
  },
  methods: {
    handleResize() {
      const isUpperBreakpointCurrent = Tools.isUpperBreakpoint();

      if (this.isUpperBreakpoint === isUpperBreakpointCurrent) return;

      this.isPlaying = false;
      this.gameOverVisible = false;
      this.numberOfHoles = isUpperBreakpointCurrent ? this.numberOfHolesDesktop : this.numberOfHolesMobile;
      this.isUpperBreakpoint = isUpperBreakpointCurrent;

      this.resetState();
    },
    startGame() {
      if (this.isPlaying) return;

      this.resetState();
      this.isPlaying = true;
      this.startTimers();
    },
    startTimers() {
      this.gameTimer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.endGame();
        }
      }, 1000);

      this.moleTimer = setInterval(this.popRandomMole, 1000);
    },
    popRandomMole() {
      const index = Math.floor(Math.random() * this.holes.length);

      if (this.holes[index].up) return;

      this.holes = this.holes.map((hole, i) => ({
        ...hole,
        up: i === index ? true : false,
      }));

      setTimeout(() => {
        this.holes[index].up = false;
      }, 800);
    },
    whackMole(index) {
      if (!this.isPlaying || !this.holes[index].up) return;

      this.score++;
      this.holes[index].up = false;
      this.holes[index].bonk = true;

      setTimeout(() => (this.holes[index].bonk = false), 300);
    },
    endGame() {
      clearInterval(this.moleTimer);
      clearInterval(this.gameTimer);

      this.isPlaying = false;
      this.gameOverVisible = true;

      if (this.score > this.highScore) {
        this.highScore = this.score;

        localStorage.setItem('whackHighScore', this.highScore);
      }
    },
    resetGame() {
      this.resetState();
      this.gameOverVisible = false;
    },
    resetState() {
      this.score = 0;
      this.timeLeft = this.maxTime || this.defaultMaxTime;
      this.holes = Array(this.numberOfHoles).fill({ up: false, bonk: false });

      clearInterval(this.moleTimer);
      clearInterval(this.gameTimer);
    },
  },
  template: `
    <div class="game-whack-a-mole">
      <div class="container game-container">
        <div class="game-whack-a-mole__row row">
          <div class="game-whack-a-mole__col mx-auto col-md-8">
            <headline :text="headline?.text" :level="headline?.level" classes="game-whack-a-mole__headline" />
            <div class="game-whack-a-mole__subline" v-if="subline" ref="subline">{{ subline }}</div>
          </div>
        </div>
        <div class="game-whack-a-mole__header">
          <cta class="game-whack-a-mole__start-btn" @click="startGame" :text="buttonText"></cta>
          <div class="stats">
            <div class="score">
              <span class="game-whack-a-mole__score-count">{{ score }}</span>
              <span class="label">{{ translationData['gameScore'] }}</span>
            </div>
            <div class="timer">
              <span class="game-whack-a-mole__time">{{ timeLeft }}</span>
              <span class="label">{{ translationData['gameTimeLeft'] }}</span>
            </div>
            <div class="high-score">
              <span class="game-whack-a-mole__high-score-count">{{ highScore }}</span>
              <span class="label">{{ translationData['gameHighScore'] }}</span>
            </div>
          </div>
        </div>

        <div class="game-whack-a-mole__game-board">
          <div
            class="game-whack-a-mole__hole"
            v-for="(hole, index) in holes"
            :key="index"
            @click="whackMole(index)">
            <div class="mole" :class="{ up: hole.up, bonk: hole.bonk }">
              <div :class="['face', { 'game-whack-a-mole__face--2': hole.up && Math.random() < 0.5 }]"></div>
            </div>
            <div class="dirt"></div>
          </div>
        </div>

        <div class="game-over" :class="{ hidden: !gameOverVisible }">
          <div class="game-whack-a-mole__game-over-content">
            <div class="game-whack-a-mole__game-over-header">
              <div class="game-whack-a-mole__game-over-image"></div>
              <div class="game-whack-a-mole__game-over-infos">
                <headline class="game-whack-a-mole__game-over-headline h2-font-size">{{ translationData['gameOver'] }}!</headline>
                <div class="stats-final">
                  <div class="stat">
                    <span class="label">{{ translationData['gameFinalScore'] }}:</span>
                    <span class="value score-final">{{ score }}</span>
                  </div>
                  <div class="stat">
                    <span class="label">{{ translationData['gameHighScore'] }}:</span>
                    <span class="value high-score-final">{{ highScore }}</span>
                  </div>
                </div>
              </div>
            </div>
            <cta class="game-whack-a-mole__play-again-btn" width="w-auto" @click="resetGame" :text="translationData['gameTryAgain']"></cta>
          </div>
        </div>
      </div>
    </div>
  `,
};