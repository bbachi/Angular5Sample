import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import { ContentService } from '../services/content.service';
import { PlanDtlsRequest } from '../request/content.request';
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import * as _ from "lodash";
import { Promo, AveragePrice } from '../model/plandetails.model';

export class ContentHelper {

  private contentService: ContentService;

  constructor(){
      this.contentService = new ContentService();
  }

  public getPlanDetails(req: any) {

    LoggerUtil.info("GETTING PLAN DETAILS FOR THE PROMO CODE:::::"+req.body.promoCodeList)
    let inReq = this.populatePlanDtlsRequest(req);
    var p = new Promise((resolve, reject) => {
        this.contentService.getPlanDetails(inReq).then(s => {
          resolve(this.processPlanDetails(s))
        });
    });
    return p;
  }

  private populatePlanDtlsRequest(req: any){

      let inReq = new PlanDtlsRequest();
      inReq.brand = "GM";
      inReq.languageCode = "EN";
      inReq.promoCodeList = req.body.promoCodeList;
      return inReq;
  }

  private processPlanDetails(s: any): Promo {

      let promo = new Promo();
      try{
        //console.log("---------------")
        promo.publishDate = s.offer.publish_date._text;
        promo.priority = s.offer.priority._text;
        let prmryDiv = s.offer['primary-division'];
        promo.offerName = prmryDiv['offer-name']._cdata;
        promo.offerTagline = prmryDiv['offer-tagline']._cdata;
        promo.signUpBonus = prmryDiv['signup-bonus']._cdata;
        promo.marketingText = prmryDiv['marketing-text']._cdata;
        promo.disclaimer = prmryDiv['disclaimer']._cdata;
        promo.learnMore = prmryDiv['learn-more']._cdata;
        promo.energyCharge = this.processEnergyCharge(prmryDiv['energy-charge']._cdata);
        promo.baseCharge = this.processBaseCharge(prmryDiv['base-charge']._cdata);
        promo.averagePrice = this.processAveragePrice(prmryDiv['average-price']._cdata);
        promo.cancellationFee = prmryDiv['cancellation-fee']._cdata;
        promo.contractTerm = prmryDiv['contract-term']._cdata;
        promo.tdspCharge = prmryDiv['tdsp-charge']._cdata;
        promo.planType = prmryDiv['plan-type']._cdata;


      }catch(err){
        LoggerUtil.info("ERROR=====processPlanDetails====>"+err.message)
      }
      //console.log("Plan details::"+JSON.stringify(promo))
      return promo;
  }


  private processBaseCharge(baseCharge: string): string {
      return (undefined!=baseCharge?(baseCharge.split('>')[1]).split('&amp;cent')[0]:'Unavailable');
  }

  private processEnergyCharge(energyCharge: string): string {
      return (undefined!=energyCharge?(energyCharge.split('>')[1]).split('&amp;cent')[0]:'Unavailable');
  }

  private processAveragePrice(averageprice: string): AveragePrice {

      var avgprice = undefined!=averageprice?(averageprice.split('>')[1]).split('</span>')[0]:'Unavailable';
      avgprice = (undefined!=avgprice && ''!= avgprice)?avgprice.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&'):'Unavailable';
      let avgP = new AveragePrice();

      avgP.kwh500 = (undefined!=avgprice && ''!= avgprice)?(avgprice.split('500 kWh/month :')[1]).split('</p>')[0]:'Unavailable';
      avgP.kwh1000 = (undefined!=avgprice && ''!= avgprice)?(avgprice.split('1,000 kWh/month :')[1]).split('</p>')[0]:'Unavailable';
      avgP.kwh2000 = (undefined!=avgprice && ''!= avgprice)?(avgprice.split('2,000 kWh/month :')[1]).split('</p>')[0]:'Unavailable';

      return avgP;
  }


  public getMessageContent(req: any): Promise<any> {
      return new Promise((resolve, reject) => {
          this.contentService.getMessageContentByTitle(req.body).then(s => resolve(s))
      });
  }

  public getFAQs(req: any): Promise<any> {
      return this.contentService.getFAQs(req.body);
  }

}
