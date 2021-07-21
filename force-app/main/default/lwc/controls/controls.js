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
import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    
    factors = [0,2,3,4,5,6];

    

    handleAdd() {
        this.dispatchEvent(new CustomEvent('add'));
    }
    handleSubtract() {
        this.dispatchEvent(new CustomEvent('subtract'));
    }
    handleMultiply(event) {
        const factor = event.target.dataset.factor;
        console.log('controls : factor: '+factor);
        this.dispatchEvent(new CustomEvent('multiply', {
            detail: factor
        }));
    }
    handleDivide(event) {
        const factor = event.target.dataset.factor;
        console.log('controls : factor: '+factor);
        this.dispatchEvent(new CustomEvent('divide', {
            detail: factor
        }));
    }
}