const url = 'https://moviesdatabase.p.rapidapi.com/titles/tt0000002/main_actors';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a3fffaeb6dmshe7f669a4a3823f5p1a8d29jsne815fbca32f9',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};

// Make sure this function is wrapped inside async or called within an async function
async function fetchMainActors() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


// function Display() {
//     fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
//     .then(response => response.json())  // Use JSON if you expect a JSON response
//     .then(result => {
//         console.log(result);  // Log to see what the API returns
//         document.getElementById('Outpoop').innerHTML = JSON.stringify(result, null, 2); // Convert result to string format
//     })
//     .catch(error => console.error('Error:', error));
// }


async function Display() {
    try {
        const response = await fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options);
        if (!response.ok) { // Check for errors in the response
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const result = await response.json();  // Parse the response as JSON
        console.log(result);  // Log the response for debugging
        
        // Display formatted JSON in the 'Outpoop' element
        document.getElementById('Outpoop').textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}