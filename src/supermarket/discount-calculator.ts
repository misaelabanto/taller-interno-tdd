import { Campaign } from './campaign';
import { SaleItem } from './sale-item';

export class DiscountQuery {
	saleItem: SaleItem;
	campaign: Campaign;

	constructor(query: Partial<DiscountQuery>) {
		this.saleItem = query.saleItem;
    this.campaign = query.campaign;
	}

	private getApplicableQuantity() {
		return this.saleItem.quantity >= this.campaign.discounts[0].minimumQuantity
			? this.saleItem.quantity
			: Math.floor(this.saleItem.quantity);
	}

	calculate() {
		const quantityApplicable = this.getApplicableQuantity();
    const campaignDiscount = this.campaign.discounts[0];
		return truncateDecimals(
			campaignDiscount.discount * this.saleItem.product.price * quantityApplicable
		);
	}
}

function truncateDecimals(amount: number) {
	return Math.round(amount * 10_000) / 10_000;
}
