// Gantikan G-XXXXXXXXXX dengan ID anda
var ga_id = 'G-VM2DF83GJ7';

// Memuatkan skrip Google Analytics secara dinamik
var script = document.createElement('script');
script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ga_id;
script.async = true;
document.head.appendChild(script);

// Konfigurasi dataLayer
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ga_id);