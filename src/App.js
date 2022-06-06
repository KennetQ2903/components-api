import './App.css'
import { NavigationMenu } from 'components/NavigationMenu'

const menu = [
  {
    to: '#',
    icon: 'home-outline',
    title: 'Home'
  },
  {
    to: '#',
    icon: 'person-outline',
    title: 'Profile'
  },
  {
    to: '#',
    icon: 'chatbubble-outline',
    title: 'Messages'
  },
  {
    to: '#',
    icon: 'camera-outline',
    title: 'Photos'
  },
  {
    to: '#',
    icon: 'settings-outline',
    title: 'Settings'
  }
]

function App () {
  return (
    <div className='App'>
      <NavigationMenu menu={menu} />
    </div>
  )
}

export default App
