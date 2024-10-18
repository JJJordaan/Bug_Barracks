const TopMoviesOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2VhZjg4YmIyYzQ3MTQyZjczZTAxNmI3Y2U2ZTdiNyIsIm5iZiI6MTcyOTE2ODQyMy44NDM2NzgsInN1YiI6IjY3MTEwMzRiNmY3NzA3YWY0MGZhOWI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ZW3a-GGY1Rwsoany3kcnVQbRKhjkSqwCf7Ar5Pyffg'
    }
  };
  
  let TopMoviesData;
  async function getTOPMOVIES() {
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TopMoviesOptions)
    .then(response => response.json())
    .then(response => {console.log(response);
        //main code for the api goes here
        TopMoviesData = response;
        //call api functions
        console.log(TopMoviesData);
  
        const list = TopMoviesData.results; //You have to create a variable to save the property of the results (property) into
  
        list.map((item) => {
          const name = item.title;
          const InnerImgUrl = item.poster_path;
          const InnerBackImgUrl = item.backdrop_path;
          console.log(name + ` ` + `https://image.tmdb.org/t/p/w500/${InnerImgUrl}` + ` ` + `https://image.tmdb.org/t/p/w500/${InnerBackImgUrl}`);
          const PosterUrl = `https://image.tmdb.org/t/p/w500/${InnerImgUrl}`;
          const BackgUrl = `https://image.tmdb.org/t/p/w500/${InnerBackImgUrl}`;
        })
  
        const Amount = list.length;
        console.log(Amount);

        //Figure out how to make AMOUNT of cards
        
    })

    .catch(err => console.error(err));
  
    //second fetch put here, save in different variables, not all in data
  }
  
  getTOPMOVIES();        