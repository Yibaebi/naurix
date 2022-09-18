import React from 'react'
import styles from './styles.module.css'

const HorizontalTextScroller = ({ text = '', secText = '', customContainerClassName = '' }) => {
  return (
    <div className={`${styles['marquee']} ${customContainerClassName}`}>
      <p>
        <span>
          {text} {secText}
        </span>
        <span>
          {text} {secText}
        </span>
        <span>
          {text} {secText}
        </span>
        <span>
          {text} {secText}
        </span>
      </p>
    </div>
  )
}

export { HorizontalTextScroller }
