import { useState } from "react";

export function useConfettiAnimation() {
  const ANIMATION_DURATION_IN_SECONDS = 10;
  const [isAnimating, setIsAnimating] = useState(false);

  function animate() {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000 * ANIMATION_DURATION_IN_SECONDS);
  }

  return {
    isAnimating,
    animate,
  };
}
