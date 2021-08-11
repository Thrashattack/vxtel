import Plans from '../../core/entities/Plans';
import PlansRepository from "../../core/repositories/PlansRepository";
import plansQueryBuilder from './config/queryBuilder';

export default class PlansDataSource implements PlansRepository {
  async getAllPlans(): Promise<Plans[]> {
    return await plansQueryBuilder.whereNotNull('name');
  }
  async getPlanByName(name: string): Promise<Plans> {
    const plans = await plansQueryBuilder.where('name', name).first();
    
    if (!plans) throw new Error("Plan not found");

    return plans;
  }
  
}