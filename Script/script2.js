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
    

