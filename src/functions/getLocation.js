export function getLocation(activated, setActivated, setLocation) {
    
    if(!activated) setActivated(!activated);
    else {
        setLocation([])
        setActivated(!activated);
        return;
    }

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            setLocation({ latitude: lat, longitude: lon });
        }, showError);
    } else {
        alert('Geolocalização não é suportada nesse browser.');
    }
}
 
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert('Usuário rejeitou a solicitação de Geolocalização');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Localização indisponível');
            break;
        case error.TIMEOUT:
              alert('O tempo da requisição expirou');
              break;
        case error.UNKNOWN_ERROR:
          alert('Ocorreu um erro desconhecido')
          break;
    }
}
