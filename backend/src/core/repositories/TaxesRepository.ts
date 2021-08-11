import Taxes from '../entities/Taxes';

export default interface TaxesRepository {
  getTaxByRegions(regionA: string, regionB: string): Promise<Taxes>;
  getAllTaxes(): Promise<Taxes[]>;
}