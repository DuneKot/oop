class Validator{
	
	isEmail(email){
		let email_reg = /.+@mail.ru/;
		return email_reg.test(email);
	}

	isDomain(domain){
		let domain_reg = /.+\.net/;
		return domain_reg.test(domain);
	}

	isDate(date){
		let date_reg = /\d{1,2}\.\d{1,2}\.\d{4}/;
		return date_reg.test(date);
	}

	isPhone(phone){
		let phone_reg = /((\+7|8)(\(\d{3}\)|\d{3})(\d{3}-\d{2}-\d{2}|\d{7}))/;
		return phone_reg.test(phone);
	}
}



var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+7(290)817-68-92')); //тут можете формат своей страны
console.log(validator.isPhone('82908176892')); //тут можете формат своей страны