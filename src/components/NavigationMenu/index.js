import { useEffect, useRef } from 'react'

import './Navigation.css'

export const NavigationMenu = ({ menu }) => {
  const menuItems = useRef([])
  useEffect(() => {
    function activeLink () {
      menuItems.current.forEach(item => {
        item.classList.remove('active')
        this.classList.add('active')
      })
    }
    menuItems.current.forEach(item => item.addEventListener('click', activeLink))
  }, [])
  return (
    <div className='navigation'>
      <ul>
        {
          menu.map((item, i) => {
            return (
              <li
                key={item.title}
                className={i === 0 ? 'list active' : 'list'}
                ref={el => (menuItems.current[i] = el)}
              >
                <a href={`${item.to}${item.title}`}>
                  <span className='icon'>
                    <ion-icon name={item.icon} />
                  </span>
                  <span className='text'>{item.title}</span>
                </a>
              </li>
            )
          })
        }
        <div className='indicator' />
      </ul>
    </div>
  )
}
