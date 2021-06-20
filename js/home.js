let contactform = document.getElementById('contactform');
let footerText = document.querySelector('span.text-muted');
let currentYear = new Date().getFullYear();
contactform.setAttribute('action', '//formspree.io/' + 'tebohomphure' + '@' + 'gmail' + '.' + 'com');
footerText.innerHTML = `2018 - ${currentYear} Teboho Mphure`;