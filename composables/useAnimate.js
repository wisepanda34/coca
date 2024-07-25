// ~/composables/useAnimate.js

export function useAnimationObserver(callback, threshold = 0.8) {
  const elementRef = ref(null);
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    }, {
      threshold: threshold
    });

    if (elementRef.value) {
      observer.observe(elementRef.value);
    }
  });

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value);
    }
  });

  return elementRef;
}
