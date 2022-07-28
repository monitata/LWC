import{ LightningElement } from'lwc';

export default class C2pModalComp extends LightningElement {
    closeHandler()
    {
        let myEvent=new CustomEvent('close',{
            detail:{
                msg:"Modal closed successfully"
            }
        });

        this.dispatchEvent(myEvent);
    }
}
