let isIgnite = false

function changeCard(event) {
  const card = event.currentTarget
  /*CONDIÇÃO TERNÁRIA
  Se for Ignite '?' então muda o bg para bg-explorer.svg ':' senão o muda o bg para bg-ingnite.svg */
  const bg = isIgnite ? "ingnite" : "explorer"
  /*Se o background for ignite 'true' muda isIgnite para false*/  
  isIgnite = !isIgnite
  card.style.backgroundImage = `url('./assets/bg-${bg}.svg')`
}
