// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Header from './Header'
// import Footer from './Footer'

export default function Layout(props) {
  return (
    <div>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
          crossOrigin="anonymous"></link>
      <div className="container">
        <h3 className="my-3 text-primary text-center">
          {props.title}</h3>
          {props.children}
      </div>
    </div>
  )
}