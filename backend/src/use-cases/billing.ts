import express, { Request, Response, json } from 'express';
import cors from 'cors';

import PlansDataSource from '../data-sources/mysql/PlansDataSource';
import TaxesDataSource from '../data-sources/postgres/TaxesDataSource';
import PlanBilling from '../core/services/PlanBilling';

const taxesDataSource = new TaxesDataSource();
const plansDataSource = new PlansDataSource();
const billingService = new PlanBilling(taxesDataSource, plansDataSource);

const app = express();

app.use(cors());

app.use(json());

app.post('/api/v1/billing', async (req: Request, res: Response) => {
  const { sourceRegion, destinRegion, minutes, planName } = req.body;

  if (!sourceRegion || !destinRegion || !minutes)
    return res.status(400).json({
      message: "Missing body data",
      type: "error",
      data: req.body
    });
  try {
    const bill = await billingService.calculateBillWithPlan(sourceRegion, destinRegion, minutes, planName);
    return res.json({
      message: "Bill was calculated",
      type: "success",
      data: {
        bill
      }
    })
  } catch (e) {
    return res.status(500).json({
      message: "Processing information error",
      type: "error",
      data: e
    });
  }
});

export default () => app.listen(process.env.BILLING_MICROSERVICE_PORT, () => console.log("Billing microservice is UP"));



