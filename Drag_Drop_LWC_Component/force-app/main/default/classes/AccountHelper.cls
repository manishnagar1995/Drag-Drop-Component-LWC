public with sharing class AccountHelper {
    @AuraEnabled (cacheable=true)
    public static List<Case> getAccountLocations(){
        return[SELECT Id, CaseNumber, Status, Subject, Rank_Case__c FROM Case ];
    }
}