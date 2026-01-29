// /components/AvatarSection.tsx
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/AvatarSection.module.css";
import { BLUR_DATA_URL } from "../lib/blur";

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
      <Image
        src={avatar}
        alt="Avatar"
        width={130}
        height={130}
        className={styles.avatar}
        onClick={toggleAvatar} // 点击切换
        priority
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes="130px"
      />
      <div className={styles.avatarText}>
        <h1>KuromiPiPi 🐱</h1>
        <p>quero amanhecer, entardecer e anoitecer com você :)</p>
      </div>
    </section>
  );
}
