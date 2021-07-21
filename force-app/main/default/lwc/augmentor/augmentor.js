/**
 * @description       : 
 * @author            : JohnnyLi
 * @group             : 
 * @last modified on  : 2021-07-13
 * @last modified by  : JohnnyLi
 * Modifications Log 
 * Ver   Date         Author     Modification
 * 1.0   2021-07-13   JohnnyLi   Initial Version
**/
import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;
    //num = 0;
    handleStartChange(event) {
      this.startCounter = parseInt(event.target.value);
    }
    handleMaximizeCounter(event) {
      this.template.querySelector('c-numerator').maximizeCounter(1000000);
    }
    handleMaximizeCounterWithNum(event) {
      this.template.querySelector('c-numerator').maximizeCounter(parseInt(event.target.value));
    }
}