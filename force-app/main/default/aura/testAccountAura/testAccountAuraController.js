/**
 * @description       : 
 * @author            : JohnnyLi
 * @group             : 
 * @last modified on  : 2021-07-19
 * @last modified by  : JohnnyLi
 * Modifications Log 
 * Ver   Date         Author     Modification
 * 1.0   2021-07-19   JohnnyLi   Initial Version
**/
({
    //https://developer.salesforce.com/docs/component-library/bundle/lightning:isUrlAddressable/documentation
    onPageReferenceChange: function(cmp, evt, helper) {
        var myPageRef = cmp.get("v.pageReference");
        var recordId = myPageRef.state.c__recordId;
        var objectApiName = myPageRef.state.c__objectApiName;
        cmp.set("v.recordId", recordId);
        cmp.set("v.objectApiName", objectApiName);
    }
})