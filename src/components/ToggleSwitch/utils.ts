export const getThemeFromFlag = (flag: boolean) => (flag ? "dark" : "light");

const getFlagFromTheme = (mode: "light" | "dark") =>
  mode === "light" ? false : true;

export const getThemeFromStorage = () => {
  const mode = (localStorage.getItem("theme") || "light") as "light" | "dark";
  return getFlagFromTheme(mode);
};

export const setDocumentTheme = (flag: boolean) => {
  const theme = getThemeFromFlag(flag);
  document.documentElement.setAttribute("data-theme", theme);
};
