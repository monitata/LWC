import { LightningElement } from 'lwc';

export default class DatePickerValidation extends LightningElement {
startDate
endDate
error
dateHandler(event)
{
const name=event.target.name

if(name=='startDate')
{
    this.startDate=event.target.value
}
else{

    this.endDate=event.target.value
}

}
submitHandler()
{
if(this.validateDate(this.startDate,this.endDate))
{
console.log('Date is valid')

}
else{
this.error='End date cannot be greater than Start Date'

}

}
validateDate(startDate,endDate)
{
return new Date(startDate).getTime()< new Date(endDate).getTime()
}

}