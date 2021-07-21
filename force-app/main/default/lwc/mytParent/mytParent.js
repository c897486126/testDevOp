/**
 * @description       : 
 * @author            : JohnnyLi
 * @group             : 
 * @last modified on  : 2021-07-16
 * @last modified by  : JohnnyLi
 * Modifications Log 
 * Ver   Date         Author     Modification
 * 1.0   2021-06-02   JohnnyLi   Initial Version
**/
import { LightningElement, track, api, wire } from 'lwc';

import getAccountsByStr from '@salesforce/apex/AccountController.getAccountsByStr';

export default class MytParent extends LightningElement {
    
    @track name='world';
    @track
    nameListInParent = [];
    @track
    isShowChild = true;
    toggleIsShowChild1(){
        console.log('toggleIsShowChild');
        console.log(this.isShowChild);
        if(this.isShowChild == true){
            this.isShowChild = false;
        }else{
            this.isShowChild = true;
        }
    }

    
    @wire(getAccountsByStr, {str : '$name'})
    accList;
    // popAccList(accList1){
    //     console.log('popAccList1');
    //     this.accList = accList1;
    //     console.log(accList1.data);
    //     console.log(accList1.error);
    //     console.log('popAccList2');
    // }

    removeElement(event){
        console.log('removeElement');
        const idx = event.detail;
        console.log('mytParent: idx: '+idx);
        this.nameListInParent.splice(idx,1);
    }

    areDetailsVisible = this.name != null && this.name !='';

    handleNameChange(event){
        this.name = event.target.value;
        this.areDetailsVisible = this.name != null && this.name !='';
    }
    @api
    handleClick(event){
        console.log('handleClick');
        this.nameListInParent.push(this.name);
        //this.nameListInParent = ['a'];
        //nameListInChild = this.nameListInParent;
        //console.log('nameListInParent = '+nameListInParent);
        
        console.log('handleClick2');
        // this.template.querySelector('c-myt-child').setList1API(this.nameListInParent);
        // console.log('handleClick3');
    }
    connectedCallback(){
        console.log('connectedCallback','mytParent');
    }
    renderedCallback(){
        console.log('renderedCallback','mytParent');
    }
    disconnectedCallback(){
        console.log('disconnectedCallback','mytParent');
    }
}