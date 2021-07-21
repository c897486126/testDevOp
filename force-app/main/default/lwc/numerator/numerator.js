/**
 * @description       : 
 * @author            : JohnnyLi
 * @group             : 
 * @last modified on  : 2021-07-13
 * @last modified by  : JohnnyLi
 * Modifications Log 
 * Ver   Date         Author     Modification
 * 1.0   2021-06-14   JohnnyLi   Initial Version
**/
import { LightningElement,api } from 'lwc';

export default class Numerator extends LightningElement {
    //@api counter = 0;
    _currentCount = 0;
    priorCount = 0;
    @api
    get counter() {
      return this._currentCount;
    }
    set counter(value) {
      this.priorCount = this._currentCount;
      this._currentCount = value;
    }
    handleIncrement() {
      this.counter++;
    }
    handleDecrement() {
      this.counter--;
    }
    handleMultiply(event) {
      const factor = event.detail;
      console.log('numberator: factor: '+factor);
      this.counter *= factor;
    }
    @api
    maximizeCounter(num) {
      this.counter += num;
    }
    handleDivide(event) {
      const factor = event.detail;
      console.log('numberator: factor: '+factor);
      this.counter /= factor;
    }
}