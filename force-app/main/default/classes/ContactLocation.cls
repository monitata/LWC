public with sharing class ContactLocation {
@AuraEnabled(cacheable=true)
public static List<Contact> getLocation()
    {
return [Select Id,MailingAddress,MailingCity from Contact LIMIT 30];

    }

}
