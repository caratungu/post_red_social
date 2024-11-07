import styles from './App.module.css'
import Comments from './components/primary/comments/Comments'
import NavBar from './components/primary/navBar/NavBar'
import SideBar from './components/primary/sideBar/SideBar'

function App() {

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <Comments />
        <SideBar />
      </div>
    </div>
  )
}

export default App
