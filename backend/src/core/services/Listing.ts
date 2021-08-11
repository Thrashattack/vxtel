import Plans from "../entities/Plans";
import Taxes from "../entities/Taxes";
import TaxesRepository from "../repositories/TaxesRepository";
import PlansRepository from '../repositories/PlansRepository';

export default class Listing {
  private taxesRepository: TaxesRepository;
  private plansRepository: PlansRepository;

  constructor(taxesRepository: TaxesRepository, plansRepository: PlansRepository) {
    this.taxesRepository = taxesRepository;
    this.plansRepository = plansRepository;
  }

  public async listAllPlans(): Promise<Plans[]> {
    return await this.plansRepository.getAllPlans();
  }

  public async listAllTaxes(): Promise<Taxes[]> {
    return await this.taxesRepository.getAllTaxes();
  }
}