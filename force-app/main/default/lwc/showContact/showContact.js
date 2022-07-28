import { LightningElement,track,wire } from 'lwc';
import getcontacts from '@salesforce/apex/ContactDisplay.getContacts';

export default class ShowContact extends LightningElement {


@track contacts=[]
@wire(getcontacts)
wiredgetContacts({data,error})
{
if(data)
{

data.forEach((contact=>{
this.contacts.push(
{
cid:contact.Id,
cname:contact.Name,
ctitle:contact.Title,
cemail:contact.Email,
cphone:contact.Phone

}

)


}
    ))

}

}
}
