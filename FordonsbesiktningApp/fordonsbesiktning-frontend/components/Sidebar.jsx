import styles from "../styles/Sidebar.module.css";
import Searchbar from "./Searchbar.jsx";
import Link from "next/link";
import systems from "../util/systems.json";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Searchbar />
      {systems.map((elem, index) => (
        <SidebarButton key={index} index={elem.id} text={elem.name} />
      ))}
    </div>
  );
}

function SidebarButton({ index, text }) {
  return (
    <Link href={`system/${text}`}>
      <div className={styles.sidebar_button}>
        <p className={styles.sidebar_button_text}>
          <sup className={styles.sidebar_button_number}>{index}</sup>
          {text}
        </p>
      </div>
    </Link>
  );
}

export default Sidebar;
