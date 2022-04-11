import { DiscountQuery } from './discount-calculator';

describe('calculateDiscount', () => {
  it('should be defined', () => {
    expect(DiscountQuery).toBeDefined();
  });
  describe('Specific Product', () => {
    it('should calculate percentage discount to specific product', () => {
      const discountQuery = new DiscountQuery({
        discount: 0.05,
        basePrice: 5,
        quantity: 1,
      });
      const discount = discountQuery.calculate();
      expect(discount).toBe(0.25);
    });
    
    it('should calculate percentage discount to specific product when it does not reach one unit', () => {
      const discountQuery = new DiscountQuery({
        discount: 0.05,
        basePrice: 5,
        quantity: 0.5,
      });
      const discount = discountQuery.calculate();
      expect(discount).toBe(0);
    });
    
    it('should calculate percentage discount to specific product when it does not reach one unit', () => {
      const discountQuery = new DiscountQuery({
        discount: 0.01,
        basePrice: 1.8,
        quantity: 1,
        minimumQuantity: 1,
      });
      const discount = discountQuery.calculate();
      expect(discount).toBe(0.018);
    });
    
    it('should calculate percentage discount to specific product when it does not reach one unit', () => {
      const discountQuery = new DiscountQuery({
        discount: 0.01,
        basePrice: 1.8,
        quantity: 1,
        minimumQuantity: 1,
      });
      const discount = discountQuery.calculate();
      expect(discount).toBe(0.018);
    });
    
    it('should calculate amount discount to specific product', () => {
      const discountQuery = new DiscountQuery({
        discount: 0.05,
        basePrice: 5,
        quantity: 1.5,
        minimumQuantity: 1,
      });
      const discount = discountQuery.calculate();
      expect(discount).toBe(0.375);
    });
    
    
    it('should calculate amount discount to specific product', () => {
      const discountQuery = new DiscountQuery({
        discount: 0.05,
        basePrice: 5,
        quantity: 0,
        minimumQuantity: 0,
      });
      const discount = discountQuery.calculate();
      expect(discount).toBe(0);
    });
  })

  describe('Product Group', () => {
    it('should calculate percentage discount', () => {
      const discountQuery = new DiscountQuery({
        discount: 0.08,
        basePrice: 5,
        quantity: 1,
        minimumQuantity: 1,
        productGroup: 'PERECIBLE',
        campaignGroup: 'PERECIBLE'
      });
      const discount = discountQuery.calculate();
      expect(discount).toBe(0.40);
    });
  })
});