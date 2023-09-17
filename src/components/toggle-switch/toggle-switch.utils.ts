export const getThemeFromFlag = (flag: boolean) => (flag ? "dark" : "light");

const getFlagFromTheme = (mode: "light" | "dark") =>
  mode === "light" ? false : true;

export const getThemeFromStorage = () => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) return getFlagFromTheme(storedTheme as "light" | "dark");

  const lightThemePreference = window.matchMedia(
    "(prefers-color-scheme: light)"
  );

  return getFlagFromTheme(lightThemePreference.matches ? "light" : "dark");
};

export const setDocumentTheme = (flag: boolean) => {
  const theme = getThemeFromFlag(flag);
  document.documentElement.setAttribute("data-theme", theme);
};
