// /components/ScrollToTop.tsx
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // 监听滚动
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        right: "40px",
        bottom: "40px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "none",
        // backgroundColor: "#888",
        cursor: "pointer",
        // boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        zIndex: 1000,
        transition: "background-color 0.2s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d2d1d1")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f2f2f2")}
      aria-label="Scroll to top"
    >
      <Image
        src="/icon/arrow_up.svg"
        alt="↑"
        width={20}
        height={20}
      />
    </button>
  );
}
