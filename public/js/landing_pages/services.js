var main_description = document.querySelector('#subtitle');
var services = [
    'Psicólogo Cognitivo Conductual',
    'Terapia Infantil',
    'Terapia Juvenil',
    'Charlas Educativas',
    'Orientación Vocacional',
    'Peritazgos Jurídicos',
    'Atención a Trastornos Emocionales',
    'Tratamiento en Ansiedad',
    'Tratamiento en Depresión',
    'Tratamiento en Adicciones'
];
var i = 0;

setInterval(() => {
    main_description.innerText = services[i];

    if( i === 9 ){
        i = 0;
    }else{
        i++;
    }
}, 3000);