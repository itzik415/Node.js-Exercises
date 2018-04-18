
//Exc.5
const channel = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
 ];
let user = {
    name:'Francis',
    premium:true,
    premiumChannels:function(list){
        const newThis = this;
        return list.filter(function(item){
            return item.premium && newThis.premium;
        })
    },
    channels:function(list){
        return list.filter(function(item){
            return item.premium === false;
        })
    }
}

 console.log(user.premiumChannels(channel))
 
 console.log(user.channels(channel))
