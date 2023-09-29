import styles from "./NavMenu.module.css";
import { X as Cerrar } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

export default function NavMenu({ children, toggleMenuAbierto }) {
  return (
    <FocusLock>
      <RemoveScroll>
        <div className={styles.navContainer}>
          <div className={styles.navFondo} onClick={toggleMenuAbierto} />
          <div className={styles.navCajon}>
            <div>{children}</div>
            <button className={styles.cerrarBtn} onClick={toggleMenuAbierto}>
              <Cerrar
                aria-hidden="true"
                focusable="false"
                className={styles.iconCerrar}
              />
              Cerrar menú
            </button>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}
