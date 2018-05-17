var myQuotes = [
  "Time spent with cats is never wasted",
  
"Women and cats will do as they please, and men and dogs should relax and get used to the idea",

  "There are two means of refuge from the miseries of life: music and cats",
  
  "Cats have it all - admiration, an endless sleep, and company only when they want it",
  
  "If animals could speak, the dog would be a blundering outspoken fellow; but the cat would have the rare grace of never saying a word too much",
  
  "Cats choose us; we don’t own them",
  
  " Any household with at least one feline member has no need for an alarm clock",
  
  "Dogs come when they’re called; cats take a message and get back to you later",
  
  "I'm sorry that I'm not updating my Facebook status, my cat ate my mouse.",
  
  "The cat is mighty dignified until the dog comes by.  ",
  
  "Lettin' the cat outta the bag is a whole lot easier 'n puttin' it back in.  ",
  "If a dog jumps in your lap, it is because he is fond of you; but if a cat does the same thing, it is because your lap is warmer.",
  
  "Any cat who misses a mouse pretends it was aiming for the dead leaf",
  
  "A cat does not want all the world to love her. Only those she has chosen to love.",
  
  "After dark all cats are leopards",
  
  "No man or women can be called friendless who has the companionship of a cat.",
  
  "There is no snooze button on a cat who wants breakfast.",
  
  "Purring would seem to be, in her case, an automatic safety valve device for dealing with happiness overflow.",
  
  "The cat seldom interferes with other people’s rights. His intelligence keeps him from doing many of the fool things that complicate life.",
  
  "In ancient times cats were worshipped as gods; they have not forgotten this",
  
  "I had been told that the training procedure with cats was difficult. It’s not. Mine had me trained in two days",
  
  "Cats come and go without ever leaving",
  
  "There are few things in life more heartwarming than to be welcomed by a cat",
  
  "The cat could very well be man’s best friend but wouldn’t stoop to admitting it",
  
  "A catless writer is almost inconceivable. It’s a perverse taste, really, since it would be easier to write with a herd of buffalo in the room than even one cat; they make nests in the notes and bite the end of the pen and walk on the typewriter keys.",
  
  "You cannot look at a sleeping cat and feel tense",
  
  "Dogs have owners, cats have staff",
  
  "One must love a cat on its own terms",
  
  "Dogs eat. Cats dine",
  
  "There is something about the presence of a cat… that seems to take the bite out of being alone.",
  
  "A cat that jumps on a hot stove will never jump on a hot stove again. Neither will it jump on a cold stove.",
  
  "Cats know how to obtain food without labor, shelter without confinement, and love without penalties. ",
  
  "Cats are always elegant.",
  
  "A cat can purr its way out of anything.",
  
  "Cats are at home everywhere where one feeds them.   ",
  
  "Happy is the home with at least one cat.",
  
  "A cat pent up becomes a lion.",
  
  "Cats are connoisseurs of comfort.",
  
  "Cats are intended to teach us that not everything in nature has a function.",
  
  "Cats will outsmart dogs every time.",
  
  "Scalded cats fear even cold water.",
  
  "Cats like doors left open – in case they change their minds",
  
  "I purr, therefore I am",
  
  "The reason cats climb is so that they can look down on almost every other animal…it’s also the reason they hate birds.",
  
  "Dogs come when they’re called; cats take a message and get back to you later",
  
  "You can keep a dog; but it is the cat who keeps people, because cats find humans useful domestic animals",
  
  "A cat is there when you call her – if she doesn’t have something better to do.",
  
  "I had been told that the training procedure with cats was difficult. It’s not. Mine had me trained in two days",
  
  "Kittens can happen to anyone",
  
  "Meow is like aloha – it can mean anything",
  
  "Her function is to sit and be admired",
  
  "Thousands of years ago, cats were worshipped as gods. Cats have never forgotten this",
  
  "Cats are intended to teach us that not everything in nature has a purpose",
  
  "In a cat’s eye, all things belong to cats"];

function newQuote(){
  //We create a variable named randomNumber.

  var randomNumber = Math.floor(Math.random()*(myQuotes.length));
  //randomNumber equals the value of 0-1 times myQuotes.length rounded down. Math.random will always return a decimal less than one. Since objects start at 0, this is perfect. randomNumber can equal 0-60 with my example.
  
  //This displays the quote on your HTML section with the id quoteDisplay
  document.getElementById('quoteDisplay').innerHTML = myQuotes[randomNumber];
  
  //If you open the console part, you can see your myQuotes length and the random number. This does nothing except give you information. 
  console.log(myQuotes.length)
  console.log(randomNumber)
}

//This is what makes the Facebook button function

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));