public with sharing class AccountDataController {
   

        @AuraEnabled(cacheable=true)
        public static List<Account>getAccounts()
        {
           return [Select Id,Name,AccountNumber,Site,Phone from Account order by Name desc Limit 15];
        }
    @AuraEnabled(cacheable=true)
    public static List<Account>filterAccount(String type)
    {
    return [Select Id,Name,Type,Industry from Account where Type=:type limit 5];
    
      }
   }
    
    