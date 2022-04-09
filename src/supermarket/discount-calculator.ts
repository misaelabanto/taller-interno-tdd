const DEFAULT_MINIMUM_QUANTITY = 1;

export class DiscountQuery {
	discount: number;
	basePrice: number;
	quantity: number;
	minimumQuantity: number = DEFAULT_MINIMUM_QUANTITY;

	constructor(query: Partial<DiscountQuery>) {
		this.discount = query.discount;
		this.basePrice = query.basePrice;
		this.quantity = query.quantity;
		this.minimumQuantity = query.minimumQuantity;
	}

	private getApplicableQuantity() {
		return this.quantity >= this.minimumQuantity
			? this.quantity
			: Math.floor(this.quantity);
	}

	calculate() {
		const quantityApplicable = this.getApplicableQuantity();
		return truncateDecimals(
			this.discount * this.basePrice * quantityApplicable
		);
	}
}

function truncateDecimals(amount: number) {
	return Math.round(amount * 10_000) / 10_000;
}
