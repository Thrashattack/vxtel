import express, { Request, Response, json } from 'express';
import cors from 'cors';

import PlansDataSource from '../data-sources/mysql/PlansDataSource';
import TaxesDataSource from '../data-sources/postgres/TaxesDataSource';
import Listing from '../core/services/Listing';

const taxesDataSource = new TaxesDataSource();
const plansDataSource = new PlansDataSource();
const listingService = new Listing(taxesDataSource, plansDataSource);

const app = express();

app.use(cors());

app.use(json());

app.get('/api/v1/listing/:planOrTax', async (req: Request, res: Response) => {
  try {
    const { planOrTax } = req.params;
    switch (planOrTax) {
      case 'plans':
        return res.json(
          await listingService.listAllPlans()
        );
      case 'taxes':
        return res.json(
          await listingService.listAllTaxes()
        );;
      default:
        return res.status(400).json({
          message: "Wrong listing type",
          type: "error",
          data: "It must be 'plans' or 'taxes'"
        });;
    }
  } catch (e) {
    return res.status(500).json({
      message: "Processing information error",
      type: "error",
      data: e
    });
  }
});

export default () => app.listen(process.env.LISTING_MICROSERVICE_PORT, () => console.log("Listing Microservice is UP"));

