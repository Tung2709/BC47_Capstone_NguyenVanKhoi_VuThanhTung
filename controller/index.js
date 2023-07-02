var promise = axios({
	url:'https://649e04749bac4a8e669e8718.mockapi.io/products',
	method: 'GET',
})

promise.then(function(result){
	console.log(result.data)
}).catch(function(err){
	console.log(err)
})

var listProducts = new listPro();
var listCart = new listItems();
