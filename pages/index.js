import Head from 'next/head'
import Image from 'next/image'
import Inline from '../components/Inline'
import Stylingsheet from '../components/Stylingsheet'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Stylingsheet primary={true}/>
      <Inline/>
    </div>
  )
}
