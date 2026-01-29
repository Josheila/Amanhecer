// /components/AvatarSection.tsx
import { useState } from "react";
import styles from "../styles/AvatarSection.module.css";

export default function AvatarSection() {
  const [avatar, setAvatar] = useState("/avatar.jpg");

  // 点击切换
  const toggleAvatar = () => {
    setAvatar((prev) =>
      prev === "/avatar.jpg" ? "/avatar_2.jpg" : "/avatar.jpg",
    );
  };

  return (
    <section className={styles.avatarSection}>
      <img
        src={avatar}
        alt="Avatar"
        className={styles.avatar}
        onClick={toggleAvatar} // 点击切换
      />
      <div className={styles.avatarText}>
        <h1>KuromiPiPi 🐱</h1>
        <p>quero amanhecer, entardecer e anoitecer com você</p>
      </div>
    </section>
  );
}
