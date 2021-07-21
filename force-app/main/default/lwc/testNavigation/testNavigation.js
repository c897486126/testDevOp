/**
 * @description       : 
 * @author            : JohnnyLi
 * @group             : 
 * @last modified on  : 2021-07-17
 * @last modified by  : JohnnyLi
 * Modifications Log 
 * Ver   Date         Author     Modification
 * 1.0   2021-07-17   JohnnyLi   Initial Version
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class TestNavigation extends NavigationMixin(LightningElement) {
    accId = '0015g00000FjAszAAF';
    navigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                recordId: this.accId,
                objectApiName: 'Account', //Optional
                actionName: 'view'
            }
        });
    }
    navigateToNewAccountPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Account', 
                actionName: 'new'
            }
        });
    }
    navigateToAccountHomePage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Account', 
                actionName: 'home'
            }
        });
    }
    //can not navigate directly to lwc, only Aura
    navigateToComponent(){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes:{
                'componentName':'c__testAccountAura',
                'displayCloseButtonInHightlightPanel':true
            },
            state:{
                c__recordId: this.accId,
                c__objectApiName: 'Account'
            }
        });
    }
}