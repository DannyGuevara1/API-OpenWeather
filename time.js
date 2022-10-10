let departamentos = '';
let departamentoAll = '';
let token = '';
let ArrDepartamentos = [
    'Ahuachapan',
    'Cabanas',
    'Chalatenango',
    'Cuscatlán',
    'La Libertad',
    'Morazan',
    'La Paz',
    'Santa Ana',
    'San Miguel',
    'San Salvador',
    'San Vicente',
    'Sonsonate',
    'La Union',
    'Usulutan'
];
async function connectToURL(url) {
    const resp = await axios.get(url);
    if (resp.status === 200) {
        departamentoAll = '';
        departamentos = `
                <div class="card-body">
					<img class="poster" src="http://openweathermap.org/img/wn/${resp.data.weather[0].icon}.png">
					<h3 class="titulo">${resp.data.name}</h3>
                    <div class="descripcion">
                        <p>${resp.data.weather[0].description}</p>
                        <p>Lat:${resp.data.coord.lat},Lon:${resp.data.coord.lon}</p>
                        <p>Temperatura:${resp.data.main.temp},Humedad:${resp.data.main.humidity}</p>  
                    </div>
				</div>
            `;
        document.getElementById('contenedor').innerHTML = departamentos;
    }
}
async function connectToURLAll(url) {
    departamentos = ''
    const resp = await axios.get(url);
    if (resp.status === 200) {
        departamentoAll += `
                <div class="card-body">
					<img class="poster" src="http://openweathermap.org/img/wn/${resp.data.weather[0].icon}.png">
					<h3 class="titulo">${resp.data.name}</h3>
                    <div class="descripcion">
                        <p>${resp.data.weather[0].description}</p>
                        <p>Lat:${resp.data.coord.lat},Lon:${resp.data.coord.lon}</p>
                        <p>Temperatura:${resp.data.main.temp},Humedad:${resp.data.main.humidity}</p>  
                    </div>
				</div>
            `;
        document.getElementById('contenedor').innerHTML = departamentoAll;
    }
}
function cleanContainer(){
    departamentos = '';
    document.getElementById('contenedor').innerHTML = ' ';
}
function renderWeather(valor){
    connectToURL('https://api.openweathermap.org/data/2.5/weather?q='+valor+'&appid=6b01a01e5185dad3e592db59930f699f')
            .catch(err => {
                console.log(err.toString())
            });
}
function renderWeatherAll(valor){
    connectToURLAll('https://api.openweathermap.org/data/2.5/weather?q='+valor+'&appid=6b01a01e5185dad3e592db59930f699f')
            .catch(err => {
                console.log(err.toString())
            });
}


function weatherSv(cel) {
    console.log(cel);
    if(cel.value === 'all'){
        for(let i = 0; i < ArrDepartamentos.length; i++){
            setTimeout(function(){
                renderWeatherAll(ArrDepartamentos[i]);
            },i * 1000)
        }  
    }
    if (cel.value === 'Ahuachapan') {
        token = 'Ahuachapan';
    }
    if (cel.value === 'Cabanas') {
        token = 'Cabanas';
    }
    if (cel.value === 'Chalatenango') {
        token = 'Chalatenango';
    }
    if (cel.value === 'Cuscatlán') {
        token = 'Cuscatlán';
    }
    if (cel.value === 'La Libertad') {
        token = 'La Libertad';
    }
    if (cel.value === 'Morazan') {
        token = 'Morazan';
    }
    if (cel.value === 'La Paz') {
        token = 'La Paz';
    }
    if (cel.value === 'Santa Ana') {
        token = 'Santa Ana';
    }
    if (cel.value === 'San Miguel') {
        token = 'San Miguel';
    }
    if (cel.value === 'San Salvador') {
        token = 'San Salvador';
    }
    if (cel.value === 'San Vicente') {
        token = 'San Vicente';
    }
    if (cel.value === 'Sonsonate') {
        token = 'Sonsonate';
    }
    if (cel.value === 'La Union') {
        token = 'La Union';
    }
    if (cel.value === 'Usulutan') {
        token = 'Usulutan';
    }
    
    renderWeather(token);
    
}