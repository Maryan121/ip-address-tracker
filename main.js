

//using ipify API

//let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_xYtumx8CZMQGaSSkAqnwbEdL3ZUrU&`;
//function getDetails(){
    let arrow = document.getElementById('arrow');
    let input = document.querySelector('input');
    let bottomPart = document.getElementById('bottom-part');
    let ipAddress = document.getElementById('ipaddress');
    let user_location = document.getElementById('location');
    let timeZone = document.getElementById('timezone');
    let isp = document.getElementById('isp');
    
    let ip = '192.145.175.226';

    //let currentUrl = 'https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_xYtumx8CZMQGaSSkAqnwbEdL3ZUrU&ipAddress=';
    //ip = input.value;
    //let url = currentUrl + ip
    //let ip;
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
                    //mapping
                    //let updateMap = L.map('map').setView([details.location.lat,  details.location.lng], 5.5).addTo(map);
                    // marker = L.marker([0,  0]).addTo(map);
                    // map.setView([55.3,  22.1], 5).addTo(map);
                    // clearTiles('map');
                    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    // maxZoom: 20,
                    // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    // }).addTo(map);
                
            })
            
        
        })






















    // fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_xYtumx8CZMQGaSSkAqnwbEdL3ZUrU&ipAddress=8.8.8.8`)
    // .then(function(res){return res.json()})
    // .then(function(data){
    //     ipAddress.innerHTML = data.ip;
    //     user_location.innerHTML = data.location.city +', ' + data.location.country;
    //     timeZone.innerHTML = data.location.timezone;
    //     isp.innerHTML = data.isp;
    //     console.log(ipAddress)

    //     //map
    //     let map = L.map('map').setView([data.location.lat,  data.location.lng], 5);
    //     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    //     }).addTo(map);
    //     marker = L.marker([data.location.lat,  data.location.lng]).addTo(map);

    
    // })

//getDetails();
// arrow.addEventListener('click',() => {
//     if(ipAddress.innerHTML = ' ' | ipAddress.innerHTML == undefined){
//         alert(`${data.ip} is invalid`)
//     }
//     else{

//     }
// })




    //the map
// let map = L.map('map').setView([data.location.lat,  data.location.lng], 5);
//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 19,
//             attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         }).addTo(map);
//         marker = L.marker([data.location.lat,  data.location.lng]).addTo(map);