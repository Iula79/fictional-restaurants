# Fictional Restaurant Roulette!

We'll be building out this app as our lab today! WOOHOO!!

We'll be working on it in five stages:
- [Stage 1](#stage-1): Creating a static version of it from HTML
- [Stage 2](#stage-2): Adding a random emoji when the emoji is clicked
- [Stage 3](#stage-3): Making a random restaurant appear when the page loads, and every time the button is clicked
- [Stage 4](#stage-4): Conditionally rendering a LOADING message
- [Stage 5](#stage-5): Listing out all the restaurants in the database.

## Stage 1

### Creating a static version from HTML

Here is the [HTML](https://git.generalassemb.ly/gist/jlr7245/2e9fe782a7987a11f428579cff17d7a7) and the [CSS](https://git.generalassemb.ly/gist/jlr7245/7de8e196abe14ea6934143a9546f7d73) for this app. You'll end up with three components total:

- App
    - Splash
        - Restaurant

We'll also eventually add RestaurantList and ShortRestaurant components in a later stage.

For now, we can hardcode the data -- we will work on getting the data in correctly from props & so on in a future step.

Setting the background image on the div is a little different. Here is the line of code you'll need for that:

```jsx
style={{backgroundImage:'url(https://img.buzzfeed.com/buzzfeed-static/static/2015-07/16/12/enhanced/webdr06/enhanced-32098-1437062439-1.png?crop=590:390;0,55&amp;downsize=715:*&amp;output-format=auto&amp;output-quality=auto)',}}
```

[Here is the solution for the first part.](https://git.generalassemb.ly/wdi-nyc-thundercats/LAB_U03_D03_Fictional-Restaurant-Roulette/pull/1/files)

## Stage 2

### Adding our random emoji generator

For this stage, you'll be adding our random emoji generator! The pseudocode for that looks like this:

- When the emoji is clicked
- A function `getRandomEmoji` is called
- Which generates a random emoji
- and sets it in state
- which changes the emoji on the page.

There are a couple of lines of code you'll need for this. Here they are:

```js
// make a new array of whatever length
const arr = new Array(128697 - 128512)
  // do an initial population of it
  .fill()
  // and map over it to get the numbers between 128512 and 128697 in hexadecimal
  .map((d, i) => (i + 128512).toString(16));
  // then get a random number
const random = Math.floor(Math.random() * arr.length);
// and get the emoji that corresponds to that hex code.
const newEmoji = String.fromCodePoint('0x' + arr[random]);
```

It is up to you to decide where they go... 🤔

**Remember**: With click events, you have to _bind_ your functions.

[Here is the solution for this part.](https://git.generalassemb.ly/wdi-nyc-thundercats/LAB_U03_D03_Fictional-Restaurant-Roulette/pull/2/files)

## Stage 3

### Getting a random restaurant when the page loads

Woooo, time to try out our API skills!!!!  Here's the pseudocode:

- When the Splash component mounts
   - Make a fetch request to `http://fictional-restaurants.herokuapp.com/api/restaurants/random`
   - And set the response data in state.
- The response data is passed into the `Restaurant` component
    - Which, instead of having hard-coded data, now references its props.

Let's also add the functionality for that "Get another restaurant" button!

- When the button (it's actually a span element but w/e) is clicked
   - Make a fetch request to `http://fictional-restaurants.herokuapp.com/api/restaurants/random`
   - And set the response data in state.

Things to think about:
- How can you modularize your code? Maybe there should be just one function that's called both when the component mounts and when the button is clicked.
- Which lifecycle method should you use?
- Are you binding your methods??? 🤔

**Remember**: When you pass the data into the `Restaurant` component, you have to have all the fields available. So, if your api response looks like this:
```json
"data":{
  "restaurant":{
    "id":2,
    "name":"Gusteau's",
    "description":"A Parisian bistro funded by famed food critic Anton Ego, Gusteau's is probably the only restaurant in the world where you can enjoy a meal prepared by a gourmet chef with four legs.",
    "media":"Ratatouille",
    "category":"Fine Dining",
    "image":"https://img.buzzfeed.com/buzzfeed-static/static/2015-07/16/12/enhanced/webdr06/enhanced-32098-1437062439-1.png?crop=590:390;0,55&downsize=715:*&output-format=auto&output-quality=auto",
    "source":"BuzzFeed",
    "media_category":"Movie"
  },
  "attr":"Description from \"28 Fictional Restaurants That Should Actually Be Real\" by Mallory McInnis. https://www.buzzfeed.com/mallorymcinnis/i-want-to-get-drunk-at-paddys-while-eating-a-bluth-banana"
}
```

Maybe your state should have a similar structure.... 🤔 If you are getting "cannot read property [thing] of undefined" type errors, check this out. (This is annoying. We will fix it in the next stage.)

And, last but not least, here is a line of code you will need for this part:

```jsx
style={{backgroundImage: `url(${props.restaurant.image})`}}
```

[Here is the solution for this part.](https://git.generalassemb.ly/wdi-nyc-thundercats/LAB_U03_D03_Fictional-Restaurant-Roulette/pull/3/files)

## Stage 4

### Conditionally rendering a LOADING message

For this stage, use whatever method of conditional rendering you'd like to render either a "loading" message or the `Restaurant` component.

- Maybe you need to have an `apiDataLoaded` message in `state` 🤔
- Doing this means you can simplify your `state` as well -- instead of building out the `apiData` object, you can just set it to `null`, since you won't need to render the `Restaurant` component until your data has loaded.

[Here is the solution for this stage.](https://git.generalassemb.ly/wdi-nyc-thundercats/LAB_U03_D03_Fictional-Restaurant-Roulette/pull/4/files)

## Stage 5

### Putting it all together!!!

For this stage, we'll be getting all the restaurants from the fictional restaurant API `http://fictional-restaurants.herokuapp.com/api/restaurants` and displaying them on the page.

- You'll need to create two new components, `RestaurantList` and `ShortRestaurant`, based on the [original HTML](https://git.generalassemb.ly/gist/jlr7245/2e9fe782a7987a11f428579cff17d7a7)
- You should make the API call for the restaurants in the `App` component, and pass the data down to the `RestaurantList` component.
    - Within the `RestaurantList` component, you should map over the list of restaurants and return a `ShortRestaurant` component, passing the data about each individual restaurant into it.
- You should conditionally render the `RestaurantList` component based on whether or not the API data has loaded.

[Here's the solution for this stage.](https://git.generalassemb.ly/wdi-nyc-thundercats/LAB_U03_D03_Fictional-Restaurant-Roulette/pull/5/files)
