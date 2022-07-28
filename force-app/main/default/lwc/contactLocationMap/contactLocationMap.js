import { LightningElement,wire } from 'lwc';
import getLocation from '@salesforce/apex/ContactLocation.getLocation'

export default class ContactLocationMap extends LightningElement {
mapMarker
listView='visible'
@wire(getLocation)
wiredGetLocation({data,error}){
this.mapMarker=[];

if(data)
{
    data.forEach(contact=>{
        let MailingAddress=contact.MailingAddress;
        let MailingCity=contact.MailingCity;

        this.mapMarker.push(
        {
          Location:{Address:mailingAddress,City:MailingCity},
          title:mailingAddress+' : '+ MailingCity

        

        }
    )

    })
}
}
}