
//Exc.4
const channels = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
 ];

 let premium = channels.filter(function(channel){
    return channel.premium === true;
 })

 console.log(premium);












