class GameCharacter {
  id: number
  name: string
  tier: string
  type: string
  image: string
  imagepick: string
  imageban: string
  card: string
  element: string

  constructor(
    id: number,
    name: string,
    tier: string,
    type: string,
    image: string,
    imagepick: string,
    imageban: string,
    card: string,
    element: string
  ) {
    this.id = id
    this.name = name
    this.tier = tier
    this.type = type
    this.image = image
    this.imagepick = imagepick
    this.imageban = imageban
    this.card = card
    this.element = element
  }
}
export default GameCharacter
