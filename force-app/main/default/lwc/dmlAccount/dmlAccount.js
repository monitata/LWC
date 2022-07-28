import { LightningElement } from 'lwc';
import Account_Object from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import PHONE from '@salesforce/schema/Account.Phone'
import CreateAcc from '@salesforce/apex/CreateAccount.CreateAcc';
export default class DmlAccount extends LightningElement {
    name=NAME_FIELD
    industry=INDUSTRY_FIELD
    phone=PHONE

    rec={
        Name:this.name,
        Industry:this.industry,
        Phone:this.phone,




    }




}