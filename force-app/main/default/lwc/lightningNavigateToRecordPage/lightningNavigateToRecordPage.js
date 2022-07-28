import{ LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class LightningNavigateToRecordPage extends NavigationMixin(LightningElement) {

    recordViewMode()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'003Iw000001i2eyIAA',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }

    recordEditMode()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'001Iw000002VeReIAK',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
}

