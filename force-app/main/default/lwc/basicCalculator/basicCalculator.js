import{ LightningElement } from'lwc';

export default class basicCalculator extends LightningElement {
    firstNo=0;
    secondNo=0;
    result=0;

    handleChange(event)
    {
      let targetName=event.target.name;
      if(targetName==="fno")
      {
        this.firstNo=parseInt(event.target.value);
      }
      else{
          this.secondNo=parseInt(event.target.value);
      }
    }

    add()
    {
       this.result=this.firstNo+this.secondNo;
    }

    sub()
    {
        this.result=this.firstNo-this.secondNo;
    }

}
