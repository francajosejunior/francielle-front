export const mapCardToApi = card => {
  return {
    name: card.name || '',
    number: card.number || '',
    neighborhood: card.neighborhood || '',
    address: card.address || '',
    city: card.city || '',
    state: card.state || '',
    latitude: card.latitude || '',
    longitude: card.longitude || ''
  }
}
