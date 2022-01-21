import { ConvertRequest } from './convert-request';
import { CurrencyType } from './currencies.types';

test('100 USD equivalen a 11391 YEN', () => {
	const convertRequest = new ConvertRequest(
		100,
		CurrencyType.USD,
		CurrencyType.YEN
	);
	const yenes = convertRequest.convertCurrency();
	expect(yenes).toEqual(11391);
});

test('30 USD equivalen a 26.4 euros', () => {
	const convertRequest = new ConvertRequest(
		30,
		CurrencyType.USD,
		CurrencyType.EUR
	);
	const euros = convertRequest.convertCurrency();
	expect(euros).toEqual(26.4);
});

test('11391 YEN equivalen a 100 USD', () => {});

test('10 USD equivalen a 10 USD', () => {
	const convertRequest = new ConvertRequest(
		10,
		CurrencyType.USD,
		CurrencyType.USD
	);
	const dollars = convertRequest.convertCurrency();
	expect(dollars).toEqual(10);
});

test('debe lanzar un error cuando se intenta convertir un valor nulo mostrando un mensaje con el monto ingresado', () => {});
