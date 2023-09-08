let selectSeanse = JSON.parse(sessionStorage.selectSeanse);
let places = '',
	price = 0;

selectSeanse.salesPlaces.forEach(salePlace => {
	if (places) {
		places += ', ';
	};
	places += `${salePlace.row}/${salePlace.place}`;
	if (salePlace.type == "standart") {
		price += +selectSeanse.priceStandart;
	} else {
		price += +selectSeanse.priceVip;
	};
});

document.querySelector(".ticket__title").innerHTML = `"${selectSeanse.filmName}"`; 
document.querySelector(".ticket__hall").innerHTML = selectSeanse.hallName;
document.querySelector(".ticket__start").innerHTML = selectSeanse.seanceTime;
document.querySelector(".ticket__chairs").innerHTML = places;
document.querySelector(".ticket__cost").innerHTML = price;

let newHallConfig = selectSeanse.hallConfig.replace(/selected/g, "taken");
console.log(newHallConfig);

document.getElementById("acceptin-button").addEventListener("click", function(event) {
	let request = `event=sale_add&timestamp=${selectSeanse.seanceTimeStamp}&hallId=${selectSeanse.hallId}&seanceId=${selectSeanse.seanceId}&hallConfiguration=${newHallConfig}`;
	getRequest(request, function() {
		window.location.href = 'ticket.html';
	});
	event.preventDefault();
});


