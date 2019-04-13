
// Transaction (* means required, fields without star are optional)
//      - * name
//      - * price
//      - * code
//      - * from (object of type User)
//      - * to (object of type User)
//      - * state (enum - incoming, outcoming)
//      - * createdAt
//      - description

// User
//      - * name
//      - * surname
//      - * bankAccount

const getUserTo = ()=>{
	return {
		name:"Johny",
		surname:"English",
		bankAccount:"123456789/9999"
	}
}

const getUserFrom = ()=>{

 const names = ["John","Susan","Marco","Conor","Teo","Elizabeth","Morgan","Edison"];
 const surnames = ["Novak","Cavani","Tropp","Moros","Nevez"]

	return {
		name:names[Math.floor(Math.random()*names.length)],
		surname:surnames[Math.floor(Math.random()*surnames.length)],
		bankAccount:"123456789/9999"
	}
}



export const generateTransaction = ()=>{
   
    

	let trans = "transaction" + Math.floor((Math.random() * 1500) + 1)
	let transaction = {
		name:trans,
		code:"CODE:"+trans.toUpperCase(),
		price: Math.floor((Math.random() * 150000) + 1),
		to:getUserTo(),
		from:getUserFrom(),
		state:Math.floor((Math.random() * 4) + 1) >= 2 ? "incoming" : "outcoming",
		createdAt:Date.now(),
		description:"cool transaction"}
		return transaction;
}