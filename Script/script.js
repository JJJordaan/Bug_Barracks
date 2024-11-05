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

const HeroHeader = document.getElementById("HeroHeader")

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

          const Title = Items.title;
          
          const Poster = `https://image.tmdb.org/t/p/w500/${Items.poster_path}`;
          const Backdrop = `https://image.tmdb.org/t/p/w500/${Items.backdrop_path}`;

          console.log(Title + ` ` + Poster + ` ` + Backdrop);

          const TopMoviesDivElement = document.createElement('div');
          TopMoviesDivElement.classList.add('col-lg-2', 'col-md-2', 'col-sm-4', 'h-30', 'Card', 'CardGradient', 'text-light', 'bg-secondary');
          TopMoviesDivElement.innerHTML = `
          <h1>${Title}</h1>
          <img src="${Poster}" alt="${Title}" class="w-100">
          `;
          TopMovies.appendChild(TopMoviesDivElement);
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

      const NowPlayingInfo = res.results;
      const TimesShown = res.dates.minimum.slice(0,7);

      NowPlayingInfo.map((Items) => {  //Create Items as a new variable to use as a replacement for loop variable
        const Title = Items.title;
        const Adult = Items.adult? "18+" : "All Ages"; //IIIf statement called with '?' with the true case being the first option and false being the second
        const Language = Items.original_language.toUpperCase();
        const Poster = `https://image.tmdb.org/t/p/w500/${Items.poster_path}`;
        const Backdrop = `https://image.tmdb.org/t/p/w500/${Items.backdrop_path}`;
        const ID = Items.id;
        // return [Name, TimesShown, Adult, Language, Poster, Backdrop];
        console.log(`name: ${Title} Date: ${TimesShown} Adult: ${Adult} Language: ${Language} Poster: ${Poster} Backdrop: ${Backdrop} ID: ${ID}`);

        const DivElement = document.createElement('div');
        DivElement.classList.add('col-lg-2', 'col-md-4', 'col-sm-4', 'col-xs-6', 'h-30', 'Card', 'CardGradient', 'text-light', 'bg-secondary')
        DivElement.innerHTML = `
        <div class="card bg-secondary text-white h-100">
            <img src="${Poster}" class="card-img" alt="${Title}">
            <div class="card-img-overlay d-flex flex-column justify-content-end bg-gradient-overlay">
                <h5 class="card-title">${Title}</h5>
                <p class="card-text">Date: ${TimesShown}</p>
                <p class="card-text">Age: ${Adult}</p>
                <p class="card-text">Language: ${Language}</p>
            </div>
        </div>
        `;
        
        NowShowing.appendChild(DivElement);
      
      }); 
      })
    }

    // .catch(err => console.error(err));

  
    //second fetch put here, save in different variables, not all in 'data' variable

  
  
  
  getCardData();        