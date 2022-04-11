export enum DiscountType {
  PERCENTAGE = 'PECENTAGE',
  AMOUNT = 'AMOUNT',
}

export class CampaignDiscount {
  productCode: string;
  productGroup: string;
  productCategory: string;
  minimumQuantity: number;
  discountType: DiscountType;
  discount: number;
}

export class Campaign {
  name: string;
  discounts: CampaignDiscount[];
}