import Footer from '../../components/Footer'
import Header from '../../components/Header'
import GameCharacter from '../../models/GameCharacter'
import Draft from '../Draft'

export const charsP1: GameCharacter[] = [
  {
    id: 1,
    name: 'Tartaglia',
    tier: '5',
    image:
      'https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/image1.png',
    card: '',
    element: 'hydro'
  },
  {
    id: 2,
    name: 'Kaveh',
    tier: '4',
    image:
      'https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/image2.png',
    card: '',
    element: 'dendro'
  },
  {
    id: 3,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  },
  {
    id: 4,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  },
  {
    id: 5,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  },
  {
    id: 6,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  },
  {
    id: 7,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  },
  {
    id: 8,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  }
]

export const charsP2: GameCharacter[] = [
  {
    id: 11,
    name: 'Tartaglia',
    tier: '5',
    image:
      'https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/image1.png',
    card: '',
    element: 'hydro'
  },
  {
    id: 12,
    name: 'Kaveh',
    tier: '4',
    image:
      'https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/image2.png',
    card: '',
    element: 'dendro'
  },
  {
    id: 13,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  },
  {
    id: 14,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  },
  {
    id: 15,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  },
  {
    id: 16,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  },
  {
    id: 17,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  },
  {
    id: 18,
    name: '',
    tier: '',
    image: '',
    card: '',
    element: ''
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <Draft />
      <Footer />
    </>
  )
}

export default Home
