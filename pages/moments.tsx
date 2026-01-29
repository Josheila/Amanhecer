import statusData from "../status.json"; // 根目录 status.json
import Status from "../components/Moments";
import styles from "../styles/Moments.module.css";
import Header from "../components/Header";
import AvatarSection from "../components/AvatarSection";
import SEO from "../components/SEO";

export default function StatusPage() {
  const statuses = [...statusData].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <SEO title="MOMENTS - KuromiPiPi" />
      <div className="container">
        <Header
          // style={{ justifyContent: "center" }}
          buttons={[
            { label: "HOME", href: "/" },
            { label: "POSTS", href: "/posts" },
            { label: "COZYDIARY", href: "/cozydiary" },
            { label: "MOMENTS", href: "/moments" },
            // { label: "TAGS", href: "/tags" },
            { label: "NOW", href: "/now" },
          ]}
        />
        <AvatarSection />
        <div className={styles.statusPage}>
          <Status statuses={statuses} />
        </div>
      </div>
    </>
  );
}
