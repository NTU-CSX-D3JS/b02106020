function toAvg(list) {

	var sum = 0

	for(var i = 0 ; i < list.length; i++){

		sum += list[i]

	}

	var avg = sum / list.length

	return avg
}

function toAbsolute(n) {
	if (n >= 0){
		return n
	}
	else 
		return -n
}

function changefontsize(obj) {
	return obj.attr("font-size","50px")
}


function changecolor(obj) {
	return obj.attr("color","blue")
}