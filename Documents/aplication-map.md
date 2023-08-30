# Mapping of Features and Business Rules

## Application Usage:

this application will be used to integrate with the front-end of a platform that will initially allow the creation of characters for rpg, which may or may not scale to a platform in the virtual table top model, where in addition to character creation it may contain chats, scrolling data.

### Step 1 - User 

The first thing to build this aplications is the Entity User, and his aplications like Login, Token and other features.

For the user Entity we gonna need:

**Create a user:**

before creating the user we need to validate the information to ensure that we will not feed the database with garbage and only after this validation will we compose the user model with the information provided and only then will we connect to the database to actually create this user

* Validate Information
* Compose Model
* Conect with the db
* Create user

After all this is developed and tested, we will need to instantiate an endpoint route so that the user can connect.

* create the route method create (post)
* instantiate the route

***Scenario:*** for some reason the user would like to change or replace some information, for example: his email is jose_das_couves@gmail.com, but he made a typing error and wrote jose_da_couves@gmail.com, which by the business rule is not it is characterized as an error, however the user needs to correct this information.... for this we first need to verify the information of the bank and then perform the validation and then update the information:

* create the route methods to list (get) 
* Validate Information
* Conect with db
* update the user
* create the route method to update (patch)
* instantiate the routes (get and patch) 

***Scenario-2:*** The customer no longer wants to access the system and wants to ensure that no one can access it either, so he would need to "delete" his user, but as user information is sensitive, the ideal would be to just deactivate it

* create the method to desactive the user.

