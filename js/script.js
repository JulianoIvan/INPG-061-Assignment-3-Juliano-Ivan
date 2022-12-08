let activeCases = document.getElementById('activeCases')
let newCases = document.getElementById('newCases')
let recoveredCases = document.getElementById('recoveredCases')
let totalCases = document.getElementById('totalCases')
let totalDeaths = document.getElementById('totalDeaths')
let totalTests = document.getElementById('totalTests')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f38c696783msh5f60a449aab14ffp131156jsne81a49c5ea66',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

let getData = document.getElementById('btn-getData')

getData.addEventListener('click', function(event) {
    event.preventDefault()
    
    let inputCountry = document.getElementById('country')
    let country = inputCountry.value
    let inputDate = document.getElementById('date')
    let date = inputDate.value

    fetch(`https://covid-193.p.rapidapi.com/history?country=${country}&day=${date}`, options)

    .then(response => response.json())
    .then (response =>{
        console.log(response)
        document.getElementById('activeCases').innerHTML = response['response']['0']['cases']['active']
        document.getElementById('newCases').innerHTML = response['response']['0']['cases']['new']
        document.getElementById('recoveredCases').innerHTML = response['response']['0']['cases']['recovered']
        document.getElementById('totalCases').innerHTML = response['response']['0']['cases']['total']
        document.getElementById('totalDeaths').innerHTML = response['response']['0']['deaths']['total']
        document.getElementById('totalTests').innerHTML = response['response']['0']['tests']['total']
    })
    .catch(err => console.error(err));
})
