import styles from '../styles/cards.module.css';
import face from '../images/face.jpeg'
import Image from 'next/image'


const Cardfile = () => {
    return (
        <>
      <div className={styles.row}>
              <div className={styles.colleft}>
                  <div className={styles.card}>
                      <div className={styles.profilepic}>
                             
                              <Image 
                              src={face}
                              width=" 90%"
                              height= "75%"
                              />
                      </div>
                      <h1 className={styles.profilename}>Krishnaswamy Subramanium</h1>
                      <h5 className={styles.shortnote}>Aspiring UX Designer</h5>
                      <div className={styles.line}></div>
                      <h1 className={styles.toparea}>Top Areas</h1>
                      <div className={styles.areas}>
                          <h4 className={styles.areanames}>Software Development Life Cylcle(SDLC)</h4>
                      </div>
                      <div className={styles.areas}>
                          <h4 className={styles.areanames}>Github,Gith Version Control</h4>
                      </div>
                      <div className={styles.areas}>
                          <h4 className={styles.areanames}>Software Dev Methologies</h4>
                      </div>
  
                  </div>
  
                  <div className={styles.card}>
                      <div className={styles.profilepic}>
                      <Image 
                              src={face}
                              width=" 90%"
                              height= "75%"
                              />
                      </div>
                      <h1 className={styles.profilename}>Krishnaswamy Subramanium</h1>
                      <h5 className={styles.shortnote}>Aspiring UX Designer</h5>
                      <p className={styles.edu}>B.Tech,2 Year</p>
                      <p className={styles.location}>Chennai</p>
                      <div className={styles.line1}></div>
                      <h1 className={styles.toparea}>Top Areas</h1>
                      <div className={styles.areas}>
                          <h4 className={styles.areanames}>Software Development Life Cylcle(SDLC)</h4>
                      </div>
                      <div className={styles.areas}>
                          <h4 className={styles.areanames}>Github,Gith Version Control</h4>
                      </div>
                      <div className={styles.areas}>
                          <h4 className={styles.areanames}>Software Dev Methologies</h4>
                      </div>
  
                  </div>
                  
              </div>
              <div className={styles.colright}>
                  <div className={styles.card}>
                      <div className={styles.profilepic}>
                      <Image 
                              src={face}
                              width=" 90%"
                              height= "75%"
                              />
                      </div>
                      <h1 className={styles.profilename}>Krishnaswamy Subramanium</h1>
                      <h5 className={styles.shortnote}>Aspiring UX Designer</h5>
                      <p className={styles.edu}>B.Tech, 3year</p>
                      <p className={styles.location}>Chennai</p>
                      <div className={styles.line1}></div>
                      <h1 className={styles.toparea}>Top Areas</h1>
                      <div className={styles.areas}>
                          <h4 className={styles.areanames}>Software Development Life Cylcle(SDLC)</h4>
                      </div>
                      <div className={styles.areas}>
                          <h4 className={styles.areanames}>Github,Gith Version Control</h4>
                      </div>
                      <div className={styles.areas}>
                          <h4 className={styles.areanames}>Software Dev Methologies</h4>
                      </div>
  
                  </div>
                  <div className={styles.card}>
                      <div className={styles.profilepic}>
                      <Image 
                              src={face}
                              width=" 90%"
                              height= "75%"
                              />
                      </div>
                      <h1 className={styles.profilename}>Krishnaswamy Subramanium</h1>
                      <h5 className={styles.shortnote}>Aspiring UX Designer</h5>
                      <p className={styles.edu}>B.Tech</p>
                      <p className={styles.location}>Chennai</p>
                      <div className={styles.line1}></div>
                      <h1 className={styles.toparea}>Top Areas</h1>
                      <div className={styles.areas}>
                          <h4 className={styles.areanames}>Software Development Life Cylcle(SDLC)</h4>
                      </div>  
                  </div>
              </div>
          
      </div>
      
  </>
    )
  }
  
  export default Cardfile