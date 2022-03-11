import styles from "../styles/navbar.module.css"
import logo from "../images/logo.png"
import Image from 'next/image'

const Navbar= () => {
    return (
        
        <div className={styles.navbar}>
            
        <Image  src={logo}
         alt="log" 
         className={styles.logo}
         width="60px"
         height="62px"
           
        />
        <a href="#" className={styles.link1}>
         ASSOCIATION  
        </a>
        <a href="#" className={styles.link2}>
         INTERNSHIP
        </a>
        <a href="#" className={styles.link3}>
         ABOUT US 
        </a>
        <a href="#" className={styles.link4}>
         CONTACT US  
        </a>      
    </div>
  
       
        
    );
  }
  
  export default Navbar;