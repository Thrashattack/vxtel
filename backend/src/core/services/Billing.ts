import TaxesRepository from '../repositories/TaxesRepository';

export default class Billing {
  private taxesRepository: TaxesRepository;

  constructor(taxesRepository: TaxesRepository) {
    this.taxesRepository = taxesRepository;
  }


  public async calculateBill(regionA: string, regionB: string, minutes: number, additionalTaxPerMinute: number = 0.0): Promise<number> {
    const tax = await this.taxesRepository.getTaxByRegions(regionA, regionB);

    const cost_per_minute = tax.costPerMinute + (tax.costPerMinute * additionalTaxPerMinute);

    return minutes * cost_per_minute;
  }

}