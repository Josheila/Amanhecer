// /components/AvatarSection.tsx
import styles from "../styles/AvatarSection.module.css";

export default function AvatarSection() {
  return (
    <section className={styles.avatarSection}>
      <img src="/avatar.jpg" alt="Avatar" className={styles.avatar} />
      <h1> KuromiPiPi 🐱</h1>
      <p>quero amanhecer, entardecer e anoitecer com você</p>
    </section>
  );
}
