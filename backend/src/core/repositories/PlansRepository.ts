import Plans from '../entities/Plans';

export default interface PlansRepository {
  getPlanByName(name: string): Promise<Plans>;
  getAllPlans(): Promise<Plans[]>;
}
