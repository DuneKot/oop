class MyString{
	constructor(){

	}

	reverse(s){
		var sr = [];
		var j = 0;
		for (var i = s.length - 1; i >= 0; i--) {
				sr[j]=s[i];
				j++;
			}	

		return sr.join('');
	}

	ucFirst(s){
		var sr = s.split('');
		sr[0] = sr[0].toUpperCase();
		return sr.join('');
	}

	ucWords(s){
		

		var str = s.split(/\s+/);

		for (var i = 0; i < str.length; i++) {
			str[i] = str[i][0].toUpperCase() + str[i].substring(1);
		}


		return str.join(' ');
	}
}

var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
