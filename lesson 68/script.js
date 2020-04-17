class Tamagochi{

	initialization(name){
		this.name = name;
		this.fooodlevel = 10;
		this.funlevel = 10;
		this.sleeplevel = 10;
	}

	timePasses(){
		this.fooodlevel = this.fooodlevel - 3;
		this.funlevel = this.funlevel - 2;
		this.sleeplevel = this.sleeplevel - 1;
	}

	isAlive(){
		if (this.fooodlevel <= 0 || this.funlevel <= 0 || this.sleeplevel <=0){
			return false;
		}
		else{
			return true;
		}
	}

	foodUp(){
		this.fooodlevel = this.fooodlevel + 1;
	}

	funUp(){
		this.funlevel = this.funlevel + 1;
	}

	sleepUp(){
		this.sleeplevel = this.sleeplevel + 1;
	}

}

var tamagochi = new Tamagochi;

function start(elem){
	elem.style.display = 'none';
	
	tamagochi.initialization(prompt("назови покебуха"));
	var countdown = setInterval(function() {
		tamagochi.timePasses();
		document.getElementById('food-level').innerHTML = tamagochi.fooodlevel;
		document.getElementById('fun-level').innerHTML = tamagochi.funlevel;
		document.getElementById('sleep-level').innerHTML = tamagochi.sleeplevel;

		if(!tamagochi.isAlive()){
			alert(tamagochi.name + " сдох как последняя собака");
			clearInterval(countdown);
			elem.style.display = 'inline-block';
		}
	}, 1000);
}

function food(elem){
	tamagochi.foodUp();
	document.getElementById('food-level').innerHTML = tamagochi.fooodlevel;
}

function fun(elem){
	tamagochi.funUp();
	document.getElementById('fun-level').innerHTML = tamagochi.funlevel;
}

function sleep(elem){
	tamagochi.sleepUp();
	document.getElementById('sleep-level').innerHTML = tamagochi.sleeplevel;
}
