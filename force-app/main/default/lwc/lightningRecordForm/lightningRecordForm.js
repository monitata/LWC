
import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class LightningRecordForm extends LightningElement{

objectName=ACCOUNT_OBJECT
 fieldlist=[NAME_FIELD,ANNUAL_REVENUE_FIELD,TYPE_FIELD,INDUSTRY_FIELD]
 successHandler(event)
 {
     //alert(event.detail.id)
       const toastEvent=new ShowToastEvent({
           title:"Account record created",
           message:'Record ID: '+event.detail.Id,
           variant:'success'
       })

       this.dispatchEvent(toastEvent);

 }




}
