export const getHexColor = colors => {
  if(colors.includes('Redwine')){
    return '#cc0044'
  }
  if(colors.includes('Whitewine')) {
    return '#ffc128'
  }
  if(colors.includes('Rosewine')){
    return '#ff00aa'
  }
  else{
    return '#808080'
  }
}
