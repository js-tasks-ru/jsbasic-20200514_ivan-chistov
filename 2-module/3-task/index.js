let calculator = {
	read(var1, var2) {
		this.var1 = var1;
		this.var2 = var2;
	},

	sum() {
		return this.var1 + this.var2;
	},

	mul() {
		return this.var1 * this.var2;
	}


};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
