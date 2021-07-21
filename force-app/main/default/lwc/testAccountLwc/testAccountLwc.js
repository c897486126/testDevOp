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
import { api, LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
export default class TestAccountLwc extends LightningElement {
    // Expose a field to make it available in the template
    nameField = NAME_FIELD;

    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;
}