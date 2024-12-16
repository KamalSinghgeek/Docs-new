// import { defineCustomElements } from '@dytesdk/ui-kit/loader';

// defineCustomElements();

// function onLoad() {
//   if (typeof window === 'undefined') return;

//   const play = window.HTMLAudioElement.prototype.play;

//   // override play() to avoid autoplay modal
//   window.HTMLAudioElement.prototype.play = function () {
//     try {
//       play.call(this);
//     } catch (err) {
//       // pass
//     }
//   };
// }

// onLoad();

import { defineCustomElements } from '@dytesdk/ui-kit/loader';

// Ensure this runs only in the browser and only once
if (typeof window !== 'undefined' && !window.__DYTE_CUSTOM_ELEMENTS_LOADED__) {
  defineCustomElements();
  window.__DYTE_CUSTOM_ELEMENTS_LOADED__ = true;

  // Safeguard HTMLAudioElement.prototype.play override
  (function overrideAudioPlay() {
    const originalPlay = window.HTMLAudioElement.prototype.play;

    // Override play method to handle autoplay errors gracefully
    window.HTMLAudioElement.prototype.play = function () {
      try {
        return originalPlay.call(this);
      } catch (err) {
        console.warn('Autoplay prevented:', err);
      }
    };
  })();
}
