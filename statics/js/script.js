let suits = ['clubs', 'hearts', 'spades', 'diamonds'];

let ranks = ['ace', 'king', 'queen', 'jack', 'ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two'];

let hand = [
				{	rank:'three', suit: 'clubs'		},
				{	rank:'four', suit: 'diamonds'	},
				{	rank:'six', suit: 'hearts'		},
				{	rank:'five', suit: 'spades'		},
				{	rank:'ace', suit: 'diamonds'	}
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

// let getRank = {
// 					'ace'	: 14, 
// 					'king'	: 13, 
// 					'queen'	: 12, 
// 					'jack'	: 11, 
// 					'ten'	: 10, 
// 					'nine'	: 9, 
// 					'eight'	: 8, 
// 					'seven'	: 7, 
// 					'six'	: 6, 
// 					'five'	: 5, 
// 					'four'	: 4, 
// 					'three'	: 3, 
// 					'two'	: 2
// 				};

let getRank = (card) =>{
	switch(card){
		case 'ace'		: return 14; 
		case 'king'		: return 13; 
		case 'queen'	: return 12;
		case 'jack'		: return 11; 
		case 'ten'		: return 10; 
		case 'nine'		: return 9;
		case 'eight'	: return 8; 
		case 'seven'	: return 7; 
		case 'six'		: return 6; 
		case 'five'		: return 5; 
		case 'four'		: return 4; 
		case 'three'	: return 3; 
		case 'two'		: return 2;
		default			: return false;
	}
}

let containsNTimes = (handRanks, elementToBeSearched, minimum) =>{
	let count = 0;
	let flag = false;

	for( key in handRanks){
		if(handRanks[key] === elementToBeSearched){
			count++;
		}
	}
	if(count === minimum){
	    flag = true;
	} 
	return flag; 
} 

let isOrdered = (handRanks) =>{
	console.log('handRanks-->');
	console.log(handRanks);
	let highestRank = 0;
	let lowestRank = 0;
	
	console.log(getRank(currentRank));
	// for(let i = 0 ; i < handRanks.length; i++){
	// 	if( getRank.handRanks[i] > getRank.handRanks[highestRank] )
	// }
}

let isStraight = (hand) =>{
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
	console.log('numberOfPairs   ->  ' + numberOfPairs);
	if(numberOfPairs === 0){
		let ordered =	isOrdered(handRanks);
	}



	return result;

}

let isThreeOfAKind = (hand) =>{
	let result = false;
	let handRanks;
	
	handRanks = hand.map(function (card) {
		return card.rank;
	});

	ranks.forEach(function (rank) {
		let flag = containsNTimes(handRanks, rank, 3);
		if (flag) {
			result = true;
		}
	});

	return result;
}

var hasTwoPair = (hand) =>{
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
	if(numberOfPairs > 1){
		result = false;
	}
	return result;
};


let getPresentHands = (hand) =>{
	let handStrenth = {
		onePair : hasOnePair(hand),
		twoPair : hasTwoPair(hand),
		threeOfAKind : isThreeOfAKind(hand),
		straight : isStraight(hand)
	};
	console.log(handStrenth);
}

let init = () =>{
	getPresentHands(hand);
}

init();




