import { Router } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const minwonRouter = Router();

minwonRouter.get("/api/complaints", async (req, res) => {

    const url = process.env.URL;
    
    try {
        const result = await axios.get(url);
        
        res.json(result.data);
    } catch (err) {
      console.log(err);
    }
  });


export { minwonRouter };
