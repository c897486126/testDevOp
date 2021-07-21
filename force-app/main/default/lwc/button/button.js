/**
 * @description       : 
 * @author            : JohnnyLi
 * @group             : 
 * @last modified on  : 2021-06-14
 * @last modified by  : JohnnyLi
 * Modifications Log 
 * Ver   Date         Author     Modification
 * 1.0   2021-06-14   JohnnyLi   Initial Version
**/
import { LightningElement,api } from 'lwc';

export default class Button extends LightningElement {
    @api label;
    @api icon;
    handleButton(event) {
      this.dispatchEvent(new CustomEvent('buttonclick',{
          bubbles: true
      }));
    }
}