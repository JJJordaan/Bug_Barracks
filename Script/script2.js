// const url = 'https://moviesdatabase.p.rapidapi.com/titles/tt0000002/main_actors';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a3fffaeb6dmshe7f669a4a3823f5p1a8d29jsne815fbca32f9',
// 		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com' //how do I get valid api?
// 	}
// };

// // Asynchronous function for fetching and displaying data
// async function Display() {
//     try {
//         const response = await fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options);
//         if (!response.ok) { // Check for errors in the response
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
        
//         const result = await response.json();  // Parse the response as JSON
//         console.log(result);  // Log the response for debugging
        
//         // Display formatted JSON in the 'Outpoop' element
//         document.getElementById('Outpoop').textContent = JSON.stringify(result, null, 2);
//     } catch (error) {
//         console.error('Fetch Error:', error);
//     }

//     // console.log(fetch('https://moviesdatabase.p.rapidapi.com/titles/tt0000002/main_actors'))
    
    
// }

// fetch('https://moviesdatabase.p.rapidapi.com/titles/tt0000002/main_actors')
//         .then(res => {
//             if (res.ok) {
//                 console.log("SUCCESS")
//             } else
//                 console.log("NOT SUCCESSFUL")
//         })
//         .then(res => res.json())
//         .then(data => console.log(data))
    

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2VhZjg4YmIyYzQ3MTQyZjczZTAxNmI3Y2U2ZTdiNyIsIm5iZiI6MTcyOTE2ODQyMy44NDM2NzgsInN1YiI6IjY3MTEwMzRiNmY3NzA3YWY0MGZhOWI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ZW3a-GGY1Rwsoany3kcnVQbRKhjkSqwCf7Ar5Pyffg'
            }
          };
          
          let TopMovieData;
        async function getTOPMOVIES() {
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {console.log(response);
                //main code for the api goes here
                TopMovieData = response;
                //call api functions
                console.log(TopMovieData);
            })
            .catch(err => console.error(err));

            //second fetch put here, save in different variables, not all in data
        }

        getTOPMOVIES();