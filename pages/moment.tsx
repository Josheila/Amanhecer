import statusData from "../status.json"; // 根目录 status.json
import Status from "../components/Status";
import styles from "../styles/Status.module.css";
import Header from "../components/Header";
import AvatarSection from "../components/AvatarSection";

export default function StatusPage() {
  const statuses = [...statusData].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="container">
      <Header
        // style={{ justifyContent: "center" }}
        buttons={[
          { label: "Home", href: "/" },
          { label: "Posts", href: "/posts" },
          { label: "CozyDiary", href: "/cozydiary" },
          // { label: "Moments", href: "/moment" },
          //   { label: "Tags", href: "/tags" },
          { label: "Now", href: "/now" },
          { label: "About", href: "/about" },
        ]}
      />
      <AvatarSection />
      <div className={styles.statusPage}>
        <Status statuses={statuses} />
      </div>
    </div>
  );
}
