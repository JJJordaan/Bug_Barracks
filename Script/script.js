const TopMoviesOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2VhZjg4YmIyYzQ3MTQyZjczZTAxNmI3Y2U2ZTdiNyIsIm5iZiI6MTcyOTE2ODQyMy44NDM2NzgsInN1YiI6IjY3MTEwMzRiNmY3NzA3YWY0MGZhOWI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ZW3a-GGY1Rwsoany3kcnVQbRKhjkSqwCf7Ar5Pyffg'
    }
  };

  const NowPlayingOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2VhZjg4YmIyYzQ3MTQyZjczZTAxNmI3Y2U2ZTdiNyIsIm5iZiI6MTcyOTY0MjQzOS4yMjE4MjgsInN1YiI6IjY3MTEwMzRiNmY3NzA3YWY0MGZhOWI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKvP_2iGjaInMTjYzmO-UBHczZhVp0TcA6XpdNjQJWo'
    }
  };
  
  let TopMoviesData;
  async function getCardData() {

const Styler = document.querySelector(".Card");  //Add all classes here that need to be added to card text

//FIRST API DATA:
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TopMoviesOptions)
    .then(response => response.json()) //"response" is used a placeholder for the fetch function to loop with
    .then(response => {
        console.log(`POPULAR`);
        console.log(response);
        //main code for the api goes here
        TopMoviesData = response;
        //call api functions
        console.log(TopMoviesData);
  
        const TopMoviesInfo = TopMoviesData.results; //You have to create a variable to save the property of the results (property) into
  
        TopMoviesInfo.map((Items) => { 

          //Items is a placeholder variable that gets used by the map function to replace every item in the array with. Like a for loop

          const name = Items.title;
          const InnerImgUrl = Items.poster_path;
          const InnerBackImgUrl = Items.backdrop_path;
          
          const Poster = `https://image.tmdb.org/t/p/w500/${InnerImgUrl}`;
          const Backdrop = `https://image.tmdb.org/t/p/w500/${InnerBackImgUrl}`;

          console.log(name + ` ` + Poster + ` ` + Backdrop);
        })
  
        const Amount = TopMoviesInfo.length;
        console.log(Amount);

        //Figure out how to make AMOUNT of cards
        
    })

    .catch(err => console.error(err));

//SECOND API DATA:
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', NowPlayingOptions) 
    .then(res => res.json())
    .then(res => {
      console.log(`NOW SHOWING`);
      console.log(res);
      NowPlayingData = res;
      console.log(NowPlayingData);

      const NowPlayingInfo = NowPlayingData.results;
      const TimesShown = NowPlayingInfo.dates;

      NowPlayingInfo.map((Items) => {  //Create Items as a new variable to use as a replacement for loop variable
        const Name = Items.title;
        const Adult = Items.adult;
        const Language = Items.original_language;
        const Poster = `https://image.tmdb.org/t/p/w500/${Items.poster_path}`;
        const Backdrop = `https://image.tmdb.org/t/p/w500/${Items.backdrop_path}`;
        // return [Name, TimesShown, Adult, Language, Poster, Backdrop];
        console.log(`name: ${Name} Date: ${TimesShown} Adult: ${Adult} Language: ${Language} Poster: ${Poster} Backdrop: ${Backdrop}`);

        const NowPlayingCard = () => {      //Streight up a variable that just runs a function
          const DivElement = document.createElement('div'); //creates a div for the rest of the card html to be stored in
          DivElement.classList.add('Card');
          DivElement.innerHTML=`
              <h1>
                  ${Name}
              </h1>
              <p>
                  ${TimesShown}
              </p>
              <p id="Age">
                  ${Adult}
              </p>
                <div id="Languages" class="w-10">
                  <p>${Language}</p>
                </div>
              <p>
                  ${Poster}
              </p>
              <p>
                  ${Backdrop}
              </p>
                `
            Styler.appendChild(DivElement); //Classifies the DivElement and whatever is in it with the styler class object?
            NowPlayingCard()
        }}
        
        )

        
        })

    }

    // .catch(err => console.error(err));

  
    //second fetch put here, save in different variables, not all in 'data' variable

  
  
  
  getCardData();        