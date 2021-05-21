// @ts-check

import { APIWrapper, API_EVENT_TYPE } from "./api.js";
import { addMessage, animateGift, isPossiblyAnimatingGift, isAnimatingGiftUI } from "./dom_updates.js";

const api = new APIWrapper();

api.setEventHandler((events) => {
  events.forEach(e => {
    addMessage(e)
    const possiblyAnimatingGift = isPossiblyAnimatingGift()

    if (API_EVENT_TYPE.ANIMATED_GIFT === e.type && !possiblyAnimatingGift) {
      animateGift(e)
    }
  })
  // ...
  
})

// NOTE: UI helper methods from `dom_updates` are already imported above.
