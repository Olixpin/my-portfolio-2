import { createContext, useContext, useEffect, useState, useRef } from "react";

const AppContext = createContext();

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

const AppProvider = ({ children }) => {
  // * Theme Switcher * //
  const [theme, setTheme] = useState(getInitialTheme);
  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (theme !== undefined) rawSetTheme(theme === "dark" ? "light" : "dark");

  // * Theme Switcher Handler * //
  const toggleTheme = () => {
    const rawTheme = theme === "dark" ? "light" : "dark";
    rawSetTheme(rawTheme);
    setTheme(rawTheme);
  };

  // * Sidebar * //
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // * Modal * //
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // track the window width
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  // track the window height
  useEffect(() => {
    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // scroll height track effect
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = () => setScrollHeight(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  function scrollTo(ref) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const value = {
    theme,
    toggleTheme,
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    isModalOpen,
    openModal,
    closeModal,
    screenWidth,
    screenHeight,
    scrollHeight,
    open,
    handleOpen,
    setOpen,
    scrollTo,
    scrollToTop,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
