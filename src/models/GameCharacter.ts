class GameCharacter {
  id: number
  name: string
  tier: string
  image: string
  card: string
  element: string

  constructor(
    id: number,
    name: string,
    tier: string,
    image: string,
    card: string,
    element: string
  ) {
    this.id = id
    this.name = name
    this.tier = tier
    this.image = image
    this.card = card
    this.element = element
  }
}
export default GameCharacter
