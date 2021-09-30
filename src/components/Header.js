import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import useLocalStorage from "../hook/useLocalstorage";

const Header = () => {
  const [isFullscreen, setIsFullScreen] = useState(false);
  const [isDark, setIsDark] = useLocalStorage("dark", false);

  const setDark = () => {
    document.body.className = "dark";
    setIsDark(true);
  };
  const setLight = () => {
    document.body.className = "light";
    setIsDark(false);
  };

  const toggleDark = () => {
    document.body.classList.contains("dark") ? setLight() : setDark();
  };
  const elem = document.documentElement;
  const toggleFullScreen = () => {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };
  useEffect(() => {
    if (isDark) {
      setDark();
    } else {
      setLight();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      if (isFullscreen) {
        setIsFullScreen(false);
      } else {
        setIsFullScreen(true);
      }
    });
  }, [isFullscreen]);

  return (
    <header className={`${styles.header} shadow`}>
      <section className={styles.headerRight}>
        {isDark ? <i onClick={toggleDark} className="ri-sun-line cursorPointer" title="حالت روشن"></i> : <i onClick={toggleDark} className="ri-moon-line cursorPointer" title="دارک مود"></i>}
        <i className="ri-calendar-todo-line cursorPointer" title="تقویم"></i>
        {!isFullscreen ? <i onClick={toggleFullScreen} className="ri-fullscreen-fill cursorPointer" title="تمام صفحه"></i> : <i onClick={toggleFullScreen} className="ri-fullscreen-exit-fill cursorPointer" title="خروج از حالت تمام صفحه"></i>}
      </section>
      <section className={styles.headerCenter}>
        <h2>قیمت ارز :)</h2>
      </section>
      <section className={styles.headerLeft}>
        <div className={styles.greenCircle}></div>
        <div className={styles.yellowCircle}></div>
        <div className={styles.redCircle}></div>
      </section>
    </header>
  );
};

export default Header;
