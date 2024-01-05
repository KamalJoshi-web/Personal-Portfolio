export const slideInTop = {
  initial: { opacity: 0, y: -100 },
  animate: (del) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: del },
  }),
};
export const slideInBottom = {
  initial: { opacity: 0, y: 100, x: -10 },
  animate: (del) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, delay: del },
  }),
};
export const slideInLeft = {
  initial: { opacity: 0, x: 100 },
  animate: (del = 0.8) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeIn", delay: del },
  }),
};
export const slideInRight = {
  initial: { opacity: 0, x: -100 },
  animate: (del) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeIn", delay: del },
  }),
};
export const fadeIn = {
  initial: { opacity: 0 },
  animate: (del) => ({ opacity: 1, transition: { duration: 0.7, delay: del } }),
};

export const staggerAnimationVariant = {
  initial: { opacity: 0, x: -100 },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: index * 0.3 },
  }),
};

export const popUp = {
  initial: { opacity: 0, scale: 0 },
  animate: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeIn", delay: index * 0.2 },
  }),
};
export const pageUp = {
  initial: { opacity: 0, scale: 0, y: -100 },
  animate: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeIn", delay: index * 0.2 },
  }),
};
