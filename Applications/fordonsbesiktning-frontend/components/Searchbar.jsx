import styles from "../styles/Searchbar.module.css";

function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input className={styles.searchbar_field} type="text" maxLength="20" />
    </div>
  );
}

export default Searchbar;
