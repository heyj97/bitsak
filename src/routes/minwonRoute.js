import { Router } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const minwonRouter = Router();

minwonRouter.get("/complaints", async (req, res) => {
    const serviceKey = process.env.SERVICE_KEY;
    const apiUrl = "http://apis.data.go.kr/1140100/minAnalsInfoView5/minWdcloudInfo5?";
  
    
    let paramsURI = `${("serviceKey")}=${serviceKey}&target=pttn,dfpt,saeol&dateFrom=20220601&dateTo=20230601&resultCount=30&dataType=json&searchword=%EB%B9%9B%EA%B3%B5%ED%95%B4`;

  
    const url = apiUrl + paramsURI;
    try {
        const result = await axios.get(url);
        
        res.json(result.data);
    } catch (err) {
      console.log(err);
    }
  });


export {minwonRouter};