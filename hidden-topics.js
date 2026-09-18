/**
 * HiddenTopicsBackground module
 * Infinite upward-flying background typography stream.
 * Text items float continuously upward and are strictly visible ONLY inside the cursor torch spotlight circle.
 * Pure DOM implementation.
 */

const TOPIC_POOL = [
  "Quantum Mechanics", "Free Will", "Artificial Intelligence", "Epistemology", "Neuroscience",
  "Macroeconomics", "Renaissance Art", "Space Exploration", "Game Theory", "Behavioral Economics",
  "Deep Learning", "Existentialism", "String Theory", "Bioethics", "Cognitive Psychology",
  "Climate Dynamics", "Cybernetics", "Linguistics", "Stoicism", "Astrophysics",
  "Democracy", "Genetic Engineering", "Metaphysics", "Machine Learning", "Algorithm Design",
  "Consciousness", "Socratic Method", "Philosophy of Mind", "Evolutionary Biology", "Crypto Economics",
  "Anthropology", "Robotics", "Virtual Reality", "Nanotechnology", "System Dynamics",
  "Sociology", "Thermodynamics", "Data Science", "Postmodernism", "Information Theory",
  "Dark Matter", "Neural Networks", "Cognitive Load", "Algorithmic Bias", "Heuristics",
  "Creative Thought", "Impromptu Speech", "Logic & Reasoning", "Decision Making", "Mental Models",
  "Paradoxes", "Thought Experiments", "Public Speaking", "Persuasion", "Structural Design",
  "World History", "Geopolitics", "Urban Planning", "Human Instinct", "Future Tech",
  "Behavioral Finance", "Philosophy", "Cognitive Science", "Modern Physics", "Macro Theory",
  "Digital Ethics", "Robotic Process", "Synthetic Biology", "Space Policy", "Complex Systems"
];

class HiddenTopicsBackground {
  constructor(containerId, spotlightId, options = {}) {
    this.container = document.getElementById(containerId);
    this.spotlight = document.getElementById(spotlightId);
    if (!this.container) return;

    this.config = {
      torchRadius: options.torchRadius || 240,
      fadeSpeed: options.fadeSpeed || 0.25,
      ...options
    };

    this.topics = [];
    this.mouse = { x: -1000, y: -1000, active: false };
    this.isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    this.autoAngle = 0;
    this.timerId = null;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    window.addEventListener('pointermove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    });

    window.addEventListener('pointerleave', () => {
      this.mouse.active = false;
    });

    // Standard interval timer for smooth animation
    this.timerId = setInterval(() => this.render(), 16);
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.generateTopics();
  }

  isInSafeZone(x, y) {
    const cx = this.width / 2;
    const cy = this.height / 2;

    // 1. Safe zone behind main topic hero title element
    const titleEl = document.getElementById('main-topic-display');
    if (titleEl) {
      const rect = titleEl.getBoundingClientRect();
      if (rect.width > 0 && Math.abs(x - cx) < rect.width / 2 + 35 && Math.abs(y - (rect.top + rect.height / 2)) < rect.height / 2 + 25) {
        return true;
      }
    } else {
      if (Math.abs(x - cx) < 240 && Math.abs(y - (cy + 20)) < 80) return true;
    }

    // 2. Right side widget panel safe zone
    const rightPanel = document.getElementById('right-side-panel');
    if (rightPanel) {
      const rect = rightPanel.getBoundingClientRect();
      if (rect.width > 0 && window.getComputedStyle(rightPanel).position === 'fixed') {
        if (x > rect.left - 25 && y >= rect.top - 20 && y <= rect.bottom + 20) {
          return true;
        }
      }
    }

    // 3. Settings Modal safe zone when open
    const settingsPanel = document.getElementById('settings-panel');
    if (settingsPanel) {
      const overlay = document.getElementById('settings-overlay');
      if (overlay && overlay.classList.contains('open')) {
        const rect = settingsPanel.getBoundingClientRect();
        if (x >= rect.left - 25 && x <= rect.right + 25 && y >= rect.top - 25 && y <= rect.bottom + 25) {
          return true;
        }
      }
    }

    return false;
  }

  generateTopics() {
    this.container.innerHTML = '';
    this.topics = [];

    const fontFamilies = [
      "'Inter', sans-serif",
      "'Playfair Display', serif",
      "'Georgia', serif",
      "'Courier New', monospace",
      "system-ui, sans-serif"
    ];

    const fontWeights = [300, 400, 600, 700, 900];
    const fontSizes = [12, 14, 16, 18, 22, 26, 30, 36];

    const placedBounds = [];
    const pool = [...TOPIC_POOL].sort(() => 0.5 - Math.random());
    const attempts = 2000;

    for (let i = 0; i < attempts; i++) {
      const text = pool[i % pool.length];
      const fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
      const fontWeight = fontWeights[Math.floor(Math.random() * fontWeights.length)];
      const fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];

      const textWidth = text.length * fontSize * 0.55;
      const textHeight = fontSize * 1.2;

      const margin = 10;
      const x = margin + Math.random() * Math.max(this.width - textWidth - margin * 2, 100) + textWidth / 2;
      const y = Math.random() * this.height;

      const gap = 6 + Math.random() * 8;
      const box = {
        left: x - textWidth / 2 - gap,
        right: x + textWidth / 2 + gap,
        top: y - textHeight / 2 - gap,
        bottom: y + textHeight / 2 + gap
      };

      if (this.isInSafeZone(x, y)) continue;

      let overlaps = false;
      for (let j = 0; j < placedBounds.length; j++) {
        const b = placedBounds[j];
        if (box.left < b.right && box.right > b.left && box.top < b.bottom && box.bottom > b.top) {
          overlaps = true;
          break;
        }
      }

      if (!overlaps) {
        placedBounds.push(box);

        const el = document.createElement('span');
        el.className = 'hidden-topic-item';
        el.textContent = text;
        el.style.fontFamily = fontFamily;
        el.style.fontWeight = fontWeight;
        el.style.fontSize = fontSize + 'px';
        this.container.appendChild(el);

        this.topics.push({
          id: this.topics.length,
          el: el,
          text: text,
          x: x,
          y: y,
          baseX: x,
          fontSize: fontSize,
          speed: 0.35 + Math.random() * 0.65,
          driftAmp: 2 + Math.random() * 4,
          driftPhase: Math.random() * Math.PI * 2,
          currentAlpha: 0
        });
      }
    }
  }

  render() {
    let mouseX = this.mouse.x;
    let mouseY = this.mouse.y;

    if (this.isTouch || !this.mouse.active) {
      this.autoAngle += 0.005;
      mouseX = this.width * 0.5 + Math.sin(this.autoAngle * 0.8) * (this.width * 0.35);
      mouseY = this.height * 0.5 + Math.cos(this.autoAngle * 1.1) * (this.height * 0.35);
    }

    const torchRadius = this.config.torchRadius;

    // Update spotlight torch position
    if (this.spotlight) {
      if (this.mouse.active || this.isTouch) {
        this.spotlight.style.left = mouseX + 'px';
        this.spotlight.style.top = mouseY + 'px';
        this.spotlight.classList.add('active');
      } else {
        this.spotlight.classList.remove('active');
      }
    }

    // Animate upward flying text items strictly inside torch spotlight radius
    for (let i = 0; i < this.topics.length; i++) {
      const topic = this.topics[i];

      topic.y -= topic.speed;
      topic.driftPhase += 0.008;
      topic.x = topic.baseX + Math.sin(topic.driftPhase) * topic.driftAmp;

      if (topic.y < -40) {
        topic.y = this.height + 40;
      }

      if (this.isInSafeZone(topic.x, topic.y)) {
        topic.currentAlpha = 0;
        topic.el.style.opacity = '0';
        continue;
      }

      const dx = topic.x - mouseX;
      const dy = topic.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let targetAlpha = 0;
      if (dist < torchRadius) {
        const factor = 1 - (dist / torchRadius);
        targetAlpha = Math.pow(factor, 0.65) * 0.95;
      }

      topic.currentAlpha += (targetAlpha - topic.currentAlpha) * this.config.fadeSpeed;

      topic.el.style.left = topic.x + 'px';
      topic.el.style.top = topic.y + 'px';
      topic.el.style.opacity = topic.currentAlpha > 0.001 ? topic.currentAlpha.toFixed(3) : '0';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new HiddenTopicsBackground('hidden-topics-container', 'torch-spotlight');
});
