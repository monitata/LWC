public with sharing class ContactDisplay {
@AuraEnabled(cacheable=true)
public static List<Contact> getContacts()
{
return [Select Id,Name,Title,Email,Phone from Contact order by Name LIMIT 10];

}
}
