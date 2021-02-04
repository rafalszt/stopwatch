const startBtn = document.querySelector('.btn__start');
const pauseBtn = document.querySelector('.btn__pause');
const stopBtn = document.querySelector('.btn__stop');
const resetBtn = document.querySelector('.btn__reset');
const historyBtn = document.querySelector('.btn__history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time__list');

const infoBtn = document.querySelector('.fa-question');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close');

const colorBtn = document.querySelector(".fa-paint-brush");
const colors = document.querySelector('.colors');
colorOne = document.querySelector('.one');
colorTwo = document.querySelector('.two');
colorThree = document.querySelector('.three');
let root = document.documentElement;

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr =[];

const handleStart = () =>{
	clearInterval(countTime);

	countTime = setInterval(() => {
		
		if(seconds < 9 ){
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`
		}else if( seconds >= 9 && seconds<59){
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`
		}else{
			minutes++;
			seconds = 0;
			stopwatch.textContent = `${minutes}:00`
		}
	}, 100);
}

const handlePause =() =>{
	clearInterval(countTime);
}

const handleStop = () =>{

	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

	if(stopwatch.textContent !== '0:00'){
	time.style.visibility = 'visible';
	timesArr.push(stopwatch.textContent)

	}

	// clearInterval(countTime);
	// stopwatch.textContent = '0:00';
	// timeList.textContent = '';
	// seconds = 0;
	// minutes = 0;
	// zamiast tego co powyżej zastosujmy funkcje clearStuff poniewaz powtarza się ona w dwóch miejscach wiec nie ma sensu tego nadpisywać
	clearStuff();
}

const handleReset = () =>{
	time.style.visibility = 'hidden';

	timesArr = [];

	clearStuff();
}

const clearStuff= () =>{
	clearInterval(countTime);
	stopwatch.textContent = '0:00';
	timeList.textContent = '';
	seconds = 0;
	minutes = 0;
}


const showHistory = () =>{

	timeList.textContent = '';
	let num = 1;

	timesArr.forEach( time =>{
		const newTime = document.createElement('li');
		newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`;
		timeList.appendChild(newTime);
		num++;
	})
}


const showModal = () =>{
	if(!(modal.style.display === 'block')){
	modal.style.display = 'block';
	}else{
	modal.style.display = 'none'
	};

modal.classList.toggle('modal--animation')	
}

const changeColor = () =>{
     colors.classList.toggle('show-color')
}



startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);

infoBtn.addEventListener('click', showModal);
colorBtn.addEventListener('click', changeColor)
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modal ? showModal() : false);

colorOne.addEventListener('click', () =>{
	root.style.setProperty('--first-color', 'rgb(231, 57, 48)')
})
colorTwo.addEventListener('click', () =>{
	root.style.setProperty('--first-color', 'rgb(104, 228, 62)')
})
colorThree.addEventListener('click', () =>{
	root.style.setProperty('--first-color', 'rgb(101, 114, 255)')
})