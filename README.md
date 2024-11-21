# Assignment 1 - ReactJS app.

Name: Troy Barrett

## Overview.

Using the TMDB Developer API, this web app pulls in different movies based on different categories specified at the API Endpoints. Each movie has a "More Details" button that redirects the user to a page with more information regarding the movie. On this page, users can view "Reviews" of the movie, "Recommendations" based on the current movie, and "Credits" for actors who play in the movie. These parametered endpoints can be viewed in full in a separate page. Caching is performed on all endpoints and parametered endpoints. On the "Home" page, movies can be added to the "Favourites" page. On the "Upcoming" page, movies can be added to the "Playlist" page.

### Features.
 
+ Popular API Endpoint
+ Now Playing API Endpoint
+ Recommendations Parameterised Endpoint
+ Credits Parameterised Endpoint
+ Caching on Static Endpoints
+ Caching on Parameterised Endpoints
+ Playlist Functionality

## API endpoints.

+ See movies ordered by popularity - /movies/popular
+ Get a list of movies that are currently in theatres - /movies/now_playing
+ See playlist movies added by the user - /movie/playlist

## Routing.

+ /popular - displays currently popular movies
+ /now_playing - displays movies currently in the cinema
+ /credits/:id - displays the credits of a particular movie
+ /recommendations/:id - displays the recommendations of a particular movie
+ /playlist - displays saved movies added by the watchlist button