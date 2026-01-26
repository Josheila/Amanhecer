// /components/AvatarSection.tsx
import styles from "../styles/AvatarSection.module.css";

export default function AvatarSection() {
  return (
    <section className={styles.avatarSection}>
      <img src="/avatar.jpg" alt="Avatar" className={styles.avatar} />
      <h1>Amanhecer 🌅</h1>
      <p>
        Olá, seja bem-vinda! Olá, seja bem-vinda! Olá, seja bem-vinda! Olá, seja
        bem-vinda! Olá, seja bem-vinda! Olá, seja bem-vinda!
      </p>
    </section>
  );
}
