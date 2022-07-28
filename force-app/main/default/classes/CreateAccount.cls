public with sharing class CreateAccount {
@AuraEnabled  
public static Account CreateAcc(Account acc) 
{
insert acc;
return acc;
}
}
