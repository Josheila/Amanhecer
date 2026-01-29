import Image from "next/image";
import styles from "../styles/BlogList.module.css";

interface BlogListControlsProps {
  viewMode: "card" | "list";
  onViewModeChange: (mode: "card" | "list") => void;
}

export default function BlogListControls({
  viewMode,
  onViewModeChange,
}: BlogListControlsProps) {
  return (
    <div className={styles.viewSwitch}>
      <Image
        src="/icon/view_gallery.svg"
        alt="卡片视图"
        width={22}
        height={22}
        className={styles.iconButton}
        onClick={() => onViewModeChange("card")}
      />
      <Image
        src="/icon/view_list.svg"
        alt="列表视图"
        width={22}
        height={22}
        className={styles.iconButton}
        onClick={() => onViewModeChange("list")}
      />
    </div>
  );
}
