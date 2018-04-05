// Runtime
require ('babel-polyfill');

export default class Rut
{
	// Constructor

	constructor (numero)
	{
		this.numero = numero;
		this.dv = Rut.generateDV (numero);
	}



	// Methods

	toString ()
	{
		return `${this.numero}-${this.dv}`;
	}



	// Static methods

	static *getDigits (numero)
	{
		do yield numero % 10;
		while ((numero = Math.floor (numero / 10)) > 0);
	}

	static generateDV (numero)
	{
		return '0K987654321' [
			Array.from (Rut.getDigits (numero))
				.map ((d, i) =>
					((i % 6) + 2) * d)
				.reduce ((a, b) => a + b) % 11];
	}
}
