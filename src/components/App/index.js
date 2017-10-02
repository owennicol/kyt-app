import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router/lib/Link'
import styles from './styles.scss'

function App ({ children }) {
  return (
    <div>
      <i className={styles.logo} />
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link className={styles.link} to='/'>
            Home link
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to='/tools'>
            Link to tools
          </Link>
        </li>
      </ul>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
