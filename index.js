const apiButton = document.getElementById('apiButton');

const callAPI = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

apiButton && apiButton.addEventListener('click', callAPI); 