/**
 * Aastha Jha — Personal Portfolio
 * Beyond Code Interactive Widgets:
 * 1. Singing & Cultural Melodies (Soft Synthesizer & Visualizer)
 * 2. Creative Video & Photo Editing Timeline Scrubber
 */

// --- 1. Singing & Cultural Melodies Synthesizer & Visualizer ---
(function initSingingVisualizer() {
  const playBtn = document.getElementById('play-ambient-btn');
  const visualizer = document.getElementById('visualizer-bars');
  const trackTitle = document.getElementById('current-track-title');
  let isPlaying = false;
  let synthInterval = null;

  // Harmonious vocal scale chords
  const vocalChords = [
    [261.63, 329.63, 392.00, 523.25], // C Major / Sa, Ga, Pa, Sa'
    [293.66, 349.23, 440.00, 587.33], // D Minor / Re, Ma, Dha, Re'
    [329.63, 392.00, 493.88, 659.25], // E Minor / Ga, Pa, Ni, Ga'
    [261.63, 349.23, 392.00, 523.25]  // F/G progression
  ];
  let chordIndex = 0;

  if (!playBtn) return;

  playBtn.addEventListener('click', () => {
    if (!window.soundSystem.initialized) {
      window.soundSystem.init();
      window.soundSystem.enabled = true;
      const navAudioBtn = document.getElementById('audio-toggle');
      if (navAudioBtn) navAudioBtn.style.background = '#fce7f3';
    }

    isPlaying = !isPlaying;

    if (isPlaying) {
      playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="12" height="12"><rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/></svg>`;
      if (visualizer) visualizer.classList.add('playing');
      if (trackTitle) trackTitle.textContent = "Singing Harmonies (Playing)";
      
      synthInterval = setInterval(() => {
        const chord = vocalChords[chordIndex % vocalChords.length];
        chord.forEach((freq, idx) => {
          setTimeout(() => {
            if (isPlaying && window.soundSystem) {
              window.soundSystem.playTone(freq, 'sine', 1.5, 0.02);
            }
          }, idx * 120);
        });
        chordIndex++;
      }, 2200);

    } else {
      playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="12" height="12"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg>`;
      if (visualizer) visualizer.classList.remove('playing');
      if (trackTitle) trackTitle.textContent = "Singing & Cultural Harmonies";
      if (synthInterval) clearInterval(synthInterval);
    }
  });
})();

// --- 2. Interactive Video & Photo Editing Scrubber ---
(function initMediaScrubber() {
  const scrubber = document.getElementById('media-scrubber');
  const fill = document.getElementById('media-scrubber-fill');
  const timestamp = document.getElementById('media-timestamp');

  if (!scrubber || !fill || !timestamp) return;

  scrubber.addEventListener('click', (e) => {
    const rect = scrubber.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    
    fill.style.width = `${percentage}%`;
    const totalSeconds = 60;
    const currentSeconds = Math.floor((percentage / 100) * totalSeconds);
    const mins = Math.floor(currentSeconds / 60);
    const secs = currentSeconds % 60;
    timestamp.textContent = `0${mins}:${secs < 10 ? '0' : ''}${secs} / 01:00 (Edited in 4K)`;
    
    if (window.soundSystem) window.soundSystem.click();
  });
})();
