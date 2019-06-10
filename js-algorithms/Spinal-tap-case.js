//change all character to lowercase and put a dash
//between every word
function spinalCase(str) {
	let y =  str.replace(/[$-/:-?{-~!"^_`\[\]]/g, ' ');
  	let strAsArray = y.split('')
	for(let i = 1; i < strAsArray.length; i++){
		if(strAsArray[i] === strAsArray[i].toUpperCase() && strAsArray[i-1] !== ' ' && strAsArray[i] !== ' '){
			strAsArray.splice(i,0,' ');
		}	
	}

  	return strAsArray.join('').replace(/\s/g, '-').toLowerCase();
}

spinalCase("Teletubbies say Eh-oh")