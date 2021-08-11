import Taxes from "../../core/entities/Taxes";
import TaxesRepository from "../../core/repositories/TaxesRepository";
import taxesQueryBuilder from './config/queryBuilder';

export default class TaxesDataSource implements TaxesRepository {
  async getAllTaxes(): Promise<Taxes[]> {
    return await taxesQueryBuilder.whereNotNull('costPerMinute');
  }
  async getTaxByRegions(regionA: string, regionB: string): Promise<Taxes> {
    const taxes = await taxesQueryBuilder.where('sourceRegion', regionA)
      .where('destinRegion', regionB)
      .first();

    if (!taxes) throw Error("Tax not found");

    return taxes;
  }

}