let lastPos = null
export const getCurrentPosition = async () => {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const pos = {
          latitude: coords.latitude,
          longitude: coords.longitude
        }
        lastPos = pos
        resolve(pos)
      },
      error => reject(error)
    )
  })
}
