




    let arrow = document.getElementById('arrow');
    let input = document.querySelector('input');
    let bottomPart = document.getElementById('bottom-part');
    let ipAddress = document.getElementById('ipaddress');
    let user_location = document.getElementById('location');
    let timeZone = document.getElementById('timezone');
    let isp = document.getElementById('isp');
    let ip = '8.8.8.8';


   
    console.log(fetch(`https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_DenjOIPYrq9jC6AM3NW43t79X2aFE&ipAddress=${ip}`)
    .then(function(response){  return response.json()})
    .then((data) => { 
        ipAddress.innerHTML = data.ip;
        user_location.innerHTML = data.location.city+ ' ,' + data.location.country;
        timeZone.innerHTML = data.location.timezone;
        isp.innerHTML = data.isp
        //the map section
    let map = L.map('map').setView([data.location.lat,  data.location.lng], 4);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    marker = L.marker([data.location.lat,  data.location.lng]).addTo(map);

    
    
    }))
    //seaching section


    arrow.addEventListener('click',function(){
            const ip = input.value;
            fetch(`https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_DenjOIPYrq9jC6AM3NW43t79X2aFE&ipAddress=${ip}`)
            .then(function(response){  return response.json()})
            .then((details) => {
                    ipAddress.innerHTML = ip;
                    user_location.innerHTML = details.location.city + ' ,'+ details.location.country;
                    timeZone.innerHTML = details.location.timezone;
                    isp.innerHTML = details.isp;
                   
            })
            
        
        })

























   
