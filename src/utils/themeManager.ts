export type Theme = "green" | "red" | "yellow" | "blue" | "white";

export const setTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

export const getCurrentTheme = (): Theme => {
  return (
    (document.documentElement.getAttribute("data-theme") as Theme) || "green"
  );
};
