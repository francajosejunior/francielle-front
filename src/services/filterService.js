export const filterCardBySearch = searchText => x => {
  try {
    return (
      searchText === '' ||
      x.number.toString().match(new RegExp(searchText, 'i')) ||
      x.address.toString().match(new RegExp(searchText, 'i')) ||
      x.neighborhood.toString().match(new RegExp(searchText, 'i')) ||
      x.name.toString().match(new RegExp(searchText, 'i')) ||
      x.city.toString().match(new RegExp(searchText, 'i')) ||
      x.city.toString().match(new RegExp(searchText, 'i'))
    )
  } catch (error) {
    return false
  }
}
