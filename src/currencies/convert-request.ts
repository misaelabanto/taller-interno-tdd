import { CurrencyType } from './currencies.types';

export class ConvertRequest {
	amount: number;
	fromCurrency: CurrencyType;
	toCurrency: CurrencyType;
  private _rates: Map<string, number>;
	constructor(
		amount: number,
		fromCurrency: CurrencyType,
		toCurrency: CurrencyType
	) {
    this.amount = amount;
    this.fromCurrency = fromCurrency;
    this.toCurrency = toCurrency;
    this._rates = new Map();
    this._rates.set('USD-YEN', 113.91);
		this._rates.set('USD-EUR', 0.88);
  }
  convertCurrency(): number {
    if (this.fromCurrency === this.toCurrency) {
      return this.amount;  
    }
    const rate = this._rates.get(`${this.fromCurrency}-${this.toCurrency}`);
    return this.amount*rate;
  };  
}
