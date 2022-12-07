import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Greet from '../components/Greet'
import Message from '../components/Message'
import Eventbind from '../components/Eventbind';
export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Greet name="Clark" heroname='Batman'><p>This is a children p tag</p></Greet>
      <Greet name="Itachi" heroname='Akatsuki'><button>Action</button></Greet>
      <Greet name="Sujay" heroname='simple'/>
      <Message/> */}
      <Eventbind/>
    </div>
  )
}
