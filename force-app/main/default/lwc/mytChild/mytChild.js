/**
 * @description       : 
 * @author            : JohnnyLi
 * @group             : 
 * @last modified on  : 2021-07-14
 * @last modified by  : JohnnyLi
 * Modifications Log 
 * Ver   Date         Author     Modification
 * 1.0   2021-06-02   JohnnyLi   Initial Version
**/
import { api, LightningElement, track } from 'lwc';

export default class MytChild extends LightningElement {
    //@api
    list1 = ['peter','mary','jack'];
    @api
    get nameListInChild(){
        console.log('this.list1='+this.list1);
        return this.list1;
    }
    set nameListInChild(value){
        console.log('value='+value);
        this.list1 = value;
    }
    @api
    setList1API(value){
        console.log('setList1API value='+value);
        this.list1 = value;
    }
    connectedCallback(){
        console.log('connectedCallback','mytChild');
    }
    renderedCallback(){
        console.log('renderedCallback','mytChild');
    }
    disconnectedCallback(){
        console.log('disconnectedCallback','mytChild');
    }
    removeElement(event){
        console.log('removeElement');
        //? dataset, return type must be const
        const idx = event.target.dataset.id;
        console.log('idx=',idx);
        this.dispatchEvent(new CustomEvent('removeelement', {
            detail:idx
        }));
        //console.log('evt=',evt);
    }
}