/**
 * @description       : 
 * @author            : JohnnyLi
 * @group             : 
 * @last modified on  : 2021-07-15
 * @last modified by  : JohnnyLi
 * Modifications Log 
 * Ver   Date         Author     Modification
 * 1.0   2021-07-15   JohnnyLi   Initial Version
**/
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByStr(String str){
        try {
            system.debug(str);
            return [
                Select id,name
                From Account
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        //return null;
    }
}