export type TAnimation =
  | "fade-in"
  | "slide-top"
  | "slide-left"
  | "slide-right"
  | "slide-bottom";

export const getAnimation = (type: TAnimation, delay: number): any => {
  switch (type) {
    case "fade-in":
      return {
        init: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1, delay: delay },
      };
    case "slide-top":
      return {
        init: { opacity: 0, y: 5 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay: delay },
      };
    case "slide-bottom":
      return {
        init: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay: delay },
      };
    case "slide-left":
      return {
        init: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { type: "spring", bounce: 0.6, delay: delay },
      };
    case "slide-right":
      return {
        init: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { type: "spring", bounce: 0.6, delay: delay },
      };
    default:
      return {};
  }
};
