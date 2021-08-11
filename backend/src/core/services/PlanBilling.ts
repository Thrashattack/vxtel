import Billing from './Billing';
import PlansRepository from '../repositories/PlansRepository';
import TaxesRepository from '../repositories/TaxesRepository';

export default class PlanBilling extends Billing {
  private plansRepository: PlansRepository;

  constructor(taxesRepository: TaxesRepository, plansRepository: PlansRepository) {
    super(taxesRepository);
    this.plansRepository = plansRepository;
  }

  public async calculateBillWithPlan(regionA: string, regionB: string, minutes: number, planName: string|null = null): Promise<number> {
    if (planName == null)
      return super.calculateBill(regionA, regionB, minutes);
    
    const plan = await this.plansRepository.getPlanByName(planName);
    
    const discountedMinutes = minutes - plan.freeMinutes;

    const additionalTaxPerMinute = plan.exceededMinutePercentTax / 100;

    return super.calculateBill(regionA, regionB, discountedMinutes, additionalTaxPerMinute);
  }
}