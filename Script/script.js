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

      function getNowPlayingClassData(){  //Function to put fetched data into readable class data
        NowPlayingInfo.map((Items) => {  //Create Items as a new variable to use as a replacement for loop variable
          const Name = Items.title;
          const Adult = Items.adult;
          const Language = Items.original_language;
          const Poster = `https://image.tmdb.org/t/p/w500/${Items.poster_path}`;
          const Backdrop = `https://image.tmdb.org/t/p/w500/${Items.backdrop_path}`;
          console.log(Name + ` ` + Poster + ` ` + Backdrop);
          return [Name, TimesShown, Adult, Language, Poster, Backdrop];
      })}

      //NOW PLAYING CARD
      class CardTemplate{
        constructor(Title,Date,AgeRating,Languages,FrontUrl,BackUrl){
          this.Title = Title;
          this.Date = Date;
          this.AgeRating = AgeRating;
          this.Languages = Languages;
          this.FrontUrl = FrontUrl;
          this.BackUrl = BackUrl;
        }
      }

      NowPlayingInfo.forEach(CardElement => {
        class CurrentClass extends CardTemplate {
          constructor (Title, Date, AgeRating, Languages, FrontUrl, BackUrl){
            super(Title, Date, AgeRating, Languages, FrontUrl, BackUrl);
          }
        }
      });
    })

    .catch(err => console.error(err));

  
    //second fetch put here, save in different variables, not all in data

    
  }
  
  getCardData();        