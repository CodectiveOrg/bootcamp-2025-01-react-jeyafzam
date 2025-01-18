import MingcuteAddLine from "../../icons/MingcuteAddLine";

import Button from "../Button/Button";

import styles from "./Footer.module.css"

const Footer = () =>{
    return(
        <footer className={styles.footer} >
        <Button className={styles.button} shape="circle" sameWidthHeight>
          <MingcuteAddLine/>
        </Button>
      </footer>
    )
}
export default Footer;