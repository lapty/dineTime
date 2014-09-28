# Requirements Document


### Elevator

<p>The biggest problem people have: "Where do I want to eat"? Dine Time will randomize a restaraunt, add to a personal restauraunt list for narrower randomization and allow users to review a menu which contains user-voted menu items. Don't make any more decisions!</p>


### MVP Features


- Restaurant randomizer
	- A simple click function will pick a restaurant for the user at random. 
	-
- Item finder
	- A search function for restaurants by menu item name

- Favorite list
	- Users can add restauraunts to a specific list to narrow randomization

- Menu item voting
	- Users can vote on specific menu items to help others choose a menu item. (Upvotes/downvotes)


### Technologies

- mongodb, angular, mean-stack, bootstrap UI, underscore, heroku, grunt


### Wireframes

- https://gomockingbird.com/mockingbird/#nmkym99



### Roadmap (additional features)

- Filter restaurants
	- A filter for restaurant pricing

- Explore menu items further
	- Users can upload images of specific menu items, and leave commments for particular menu items.

- User authentication
	- Users can add restauraunts to favorites and keep a restaurant list tailored to them

- Restauraunts specific by location
	- Can choose what city, restauraunt list will populate according to specific city

- Restaurant tracking
	- A user-populated list of restaurants can be ordered by whether or not the user has been there recently.



## User Story Template

#### Name

  Ability to Crud restaurants that are available for app.
  Any user is able to add a restaurant and restauraunt   menu.


#### Value Statement: 

As an admin user,
I want the ability to approve new restaurants added by users. I want to be able to CRUD all menu items as well as clear votes for any particular menu item.


####  Assumptions
- We can assume that we know what restaurant we're going to add
- We can assume users will not abuse the voting system.


#### Acceptance Criterion

1. admin is able to create a restaurant
2. admin is able to update a restaurant
3. admin is able to delete a restauraunt
4. admin is able to read a course
5. The restaurant will contain the following field:
- Name
- Menu
- Restaurant info (hours, contact, geolocation)
- Image of restaurant that will be used as a placeholder

#### Notes

As a user, 

I want add restauraunts to my restauraunt list.
I want to be able to have a restaurant randomly picked for me.
I want to have that restaurant put in a recently went restauraunt when done.

so that I can not fight over where I choose to eat.

