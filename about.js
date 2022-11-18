console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert('Your information was successfully sent!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const compliments = [
	`I'm sure you're a highly intelligent person!`,
	`You are impeccably dressed today!`,
	`Your parents must be so proud of how considerate you are!`,
	`Your smile is so bright and infectious today!`,
	`Your dance moves are second to none!`,
	`How do you work so hard and still keep such a positive attitude?`,
	`All my base are belong to you!`,
	`All the praise and adulation of which I'm capable is insufficient for you!`,
	`I'm unworthy to walk in the garden of your turbulence!`
];
let rubberDuckImg = document.querySelector('img#rubber-duck');
rubberDuckImg.addEventListener('mouseover', e => {
	let randomCompliment = Math.floor(Math.random() * compliments.length);
	console.log(randomCompliment);
	alert(compliments[randomCompliment]);
});