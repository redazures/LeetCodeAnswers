# Write your MySQL query statement below
SELECT FirstName,LastName,City,State
FROM Person 
Left JOIN Address ON Person.PersonId=Address.PersonId;