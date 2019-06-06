//Make each first letter of the words in  
//the setence upperCase
function titleCase(str) {
  return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
}

titleCase("I'm a little tea pot");
