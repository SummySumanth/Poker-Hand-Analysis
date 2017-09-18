let suits = ['clubs', 'hearts', 'spades', 'diamonds'];

let ranks = ['ace', 'king', 'queen', 'jack', 'ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two'];

let hand = [
				{	rank:'ace', suit: 'clubs'		},
				{	rank:'ace', suit: 'diamonds'	},
				{	rank:'nine', suit: 'hearts'		},
				{	rank:'six', suit: 'spades'		},
				{	rank:'six', suit: 'diamonds'	}
			];

let getCardImage = {
						ace: {
							clubs:'ace_of_clubs.png',
							hearts:'ace_of_hearts.png',
							spades:'ace_of_spades.png',
							diamonds:'ace_of_diamonds.png',
						},
						king: {
							clubs:'king_of_clubs2.png',
							hearts:'king_of_hearts2.png',
							spades:'king_of_spades2.png',
							diamonds:'king_of_diamonds2.png',
						},
						queen: {
							clubs:'queen_of_clubs2.png',
							hearts:'queen_of_hearts2.png',
							spades:'queen_of_spades2.png',
							diamonds:'queen_of_diamonds.2png',
						},
						jack: {
							clubs:'jack_of_clubs2.png',
							Hearts:'jack_of_hearts2.png',
							spades:'jack_of_spades2.png',
							diamonds:'jack_of_diamonds2.png',
						},
						ten: {
							clubs:'10_of_clubs.png',
							hearts:'10_of_hearts.png',
							spades:'10_of_spades.png',
							diamonds:'10_of_diamonds.png',
						},
						nine: {
							clubs:'9_of_clubs.png',
							hearts:'9_of_hearts.png',
							spades:'9_of_spades.png',
							diamonds:'9_of_diamonds.png',
						},
						eight: {
							clubs:'8_of_clubs.png',
							hearts:'8_of_hearts.png',
							spades:'8_of_spades.png',
							diamonds:'8_of_diamonds.png',
						},
						seven: {
							clubs:'7_of_clubs.png',
							hearts:'7_of_hearts.png',
							spades:'7_of_spades.png',
							diamonds:'7_of_diamonds.png',
						},
						six: {
							clubs:'6_of_clubs.png',
							hearts:'6_of_hearts.png',
							spades:'6_of_spades.png',
							diamonds:'6_of_diamonds.png',
						},
						five: {
							clubs:'5_of_clubs.png',
							hearts:'5_of_hearts.png',
							spades:'5_of_spades.png',
							diamonds:'5_of_diamonds.png',
						},
						four: {
							clubs:'4_of_clubs.png',
							hearts:'4_of_hearts.png',
							spades:'4_of_spades.png',
							diamonds:'4_of_diamonds.png',
						},	
						three: {
							clubs:'3_of_clubs.png',
							hearts:'3_of_hearts.png',
							spades:'3_of_spades.png',
							diamonds:'3_of_diamonds.png',
						},
						two: {
							clubs:'2_of_clubs.png',
							hearts:'2_of_hearts.png',
							spades:'2_of_spades.png',
							diamonds:'2_of_diamonds.png',
						}
					};

let containsNTimes = (handRanks, elementToBeSearched, minimum) =>{
	let count = 0;
	let flag = false;
	// console.log('starting with flag  : ' + flag);
	// console.log('starting with count  : ' + count);

	// console.log('Hand Ranks ->');
	// console.log(handRanks);
	
	// console.log('elementToBeSearched ->');
	// console.log(elementToBeSearched);

	// console.log('minimum ->');
	// console.log(minimum);

	for( key in handRanks){
		if(handRanks[key] === elementToBeSearched){
			count++;
		}
		// console.log('-------------------------------------------------------------');
		// console.log('');
		// console.log('');
		// console.log('');
		// console.log('-------------------------------------------------------------');
	}

	// console.log('count during if :' + count);
	// console.log('minimum ->' + minimum);
	if(count === minimum){
		// console.log('In if');
	    flag = true;
	}
	// console.log('after with flag  : ' + flag);

	// console.log('');
	// console.log('');
	// console.log('count ->');
	// console.log(count);

	return flag; 
} 


var hasTwoPair = (ha444nd) =>{
	let result = false;
	let numberOfPairs = 0;
	let handRanks;
	
	handRanks = hand.map(function (card) {
		return card.rank;
	});

	ranks.forEach(function (rank) {
		let flag = containsNTimes(handRanks, rank, 2);
		if (flag) {
			result = true;
			numberOfPairs++;
		}
	});

	if(numberOfPairs < 2){
		result = false;
	}

	return result;
};

var hasOnePair = (hand) =>{
	let result = false;
	let numberOfPairs = 0;
	let handRanks;
	handRanks = hand.map(function (card) {
		return card.rank;
	});
	ranks.forEach(function (rank) {
		let flag = containsNTimes(handRanks, rank, 2);
		if (flag) {
			result = true;
			numberOfPairs++;
		}
	});
	console.log('numberOfPairs');
	console.log(numberOfPairs);
	if(numberOfPairs > 1){
		result = false;
	}
	return result;
};



let getPresentHands = (hand) =>{
	console.log(hand);

	let handStrenth = {
		onePair : hasOnePair(hand),
		twoPair : hasTwoPair(hand),
	};

	console.log('');
	console.log('');
	console.log('');
	console.log('');
	console.log('========================================================');
	console.log('========================================================');
	console.log('');
	console.log('Hand Strength');
	console.log(handStrenth);
}

let init = () =>{
	getPresentHands(hand);
}

init();




