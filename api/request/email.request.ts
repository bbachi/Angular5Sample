export class EmailRequest{

      externalId:string;
      subject:string;
      companyCode:string;
      languageCode:string;
      brandName:string;
      toEmailList =new Array<string>();
      bccEmailList =new Array<string>();
      ccEmailList=new Array<string>();
      fromEmailList=new Array<string>();
      replyToEmailList=new Array<string>();
      bounceAddEmailList=new Array<string>();
      propertyList=new Array<string>();
      templateType:string;
  }
