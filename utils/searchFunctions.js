export const locationFilter = (userposts, cords ,mainP) => {
  for (var i in userposts) {
    if(userposts[i].lat){
      let latup = userposts[i].lat + 0.050000
      let latdown = userposts[i].lat - 0.050000
      let lngup = userposts[i].lng + 0.050000
      let lngdown = userposts[i].lng - 0.050000
      if (cords.lat < latup && cords.lat > latdown && cords.lng < lngup && cords.lng > lngdown){
        mainP.push(userposts[i])
      }
    }
  }
  return mainP
}
export const mainFilter = (snapshot, mainP) => {
  for (var i in snapshot) {
    if (snapshot[i].date){
      mainP.push(snapshot[i])
    }
  }
  return mainP
}
