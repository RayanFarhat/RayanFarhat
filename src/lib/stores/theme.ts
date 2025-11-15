import { writable } from "svelte/store";

const defaultTheme = "green";

export const theme = writable(defaultTheme);

if (typeof localStorage !== "undefined") {
  const saved = localStorage.getItem("theme");
  if (saved) theme.set(saved);

  theme.subscribe((t) => {
    document.documentElement.dataset.theme = t;
    localStorage.setItem("theme", t);
  });
}
