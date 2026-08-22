/**
 * Aastha — Building Ideas Into Reality
 * Audio FX Module (Synthesized with Web Audio API - Zero External Dependencies)
 */

class SoundSystem {
  constructor() {
    this.audioCtx = null;
    this.enabled = false;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
        this.initialized = true;
      }
    } catch (e) {
      console.warn("Web Audio API not supported in this browser.", e);
    }
  }

  toggle() {
    this.init();
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playTone(freq, type = 'sine', duration = 0.1, gainValue = 0.05) {
    if (!this.enabled || !this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      
      gain.gain.setValueAtTime(gainValue, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (err) {
      // Ignore audio errors silently
    }
  }

  // Preset Micro-Sounds
  hover() {
    this.playTone(600, 'sine', 0.06, 0.02);
  }

  click() {
    this.playTone(850, 'triangle', 0.09, 0.04);
  }

  success() {
    if (!this.enabled || !this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.2, 0.04);
      }, i * 70);
    });
  }

  pop() {
    this.playTone(420, 'sine', 0.08, 0.03);
  }
}

window.soundSystem = new SoundSystem();
