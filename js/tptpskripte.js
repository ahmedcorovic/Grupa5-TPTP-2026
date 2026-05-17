
function toggleAccordion(headerElement) {
    const trenutniItem = headerElement.parentElement;
    const trenutniSadrzaj = trenutniItem.querySelector('.accordion-content');
    const sviItemi = document.querySelectorAll('.accordion-item');

    sviItemi.forEach(item => {
        if (item !== trenutniItem && item.classList.contains('active')) {
            item.classList.remove('active');
            item.querySelector('.accordion-content').style.maxHeight = null;
        }
    });

    trenutniItem.classList.toggle('active');

    if (trenutniItem.classList.contains('active')) {
        trenutniSadrzaj.style.maxHeight = trenutniSadrzaj.scrollHeight + "px";
    } else {
        trenutniSadrzaj.style.maxHeight = null;
    }
}


//kalkulator//
    function izracunajOtisak() {
    const struja = parseFloat(document.getElementById('struja').value) || 0;
    const plin = parseFloat(document.getElementById('plin').value) || 0;
    const auto = parseFloat(document.getElementById('auto').value) || 0;

    const co2Struja = struja * 0.5; 
    const co2Plin = plin * 2.0;      
    const co2Auto = auto * 0.12;     

    const ukupno = co2Struja + co2Plin + co2Auto;
    const globalniProsjek = 400;

    const rezultatDiv = document.getElementById('rezultat');
    rezultatDiv.style.display = 'block';

    let poruka = `<strong>Vaš mjesečni otisak je: ${ukupno.toFixed(2)} kg CO₂</strong><br><br>`;


    if (ukupno < globalniProsjek) {
        const procenat = ((globalniProsjek - ukupno) / globalniProsjek) * 100;
        rezultatDiv.style.background = '#e8f5e9'; 
        rezultatDiv.style.borderColor = '#2e7d32';
        rezultatDiv.style.color = '#1b5e20';
        poruka += `Bravo! Vaš otisak je za <strong>${procenat.toFixed(0)}% manji</strong> od globalnog prosjeka (${globalniProsjek} kg).`;
    } else if (ukupno > globalniProsjek) {
        const procenat = ((ukupno - globalniProsjek) / globalniProsjek) * 100;
        rezultatDiv.style.background = '#ffebee';  
        rezultatDiv.style.borderColor = '#c62828';
        rezultatDiv.style.color = '#c62828';
        poruka += `Pažnja! Vaš otisak je za <strong>${procenat.toFixed(0)}% veći</strong> od globalnog prosjeka (${globalniProsjek} kg). Razmislite o smanjenju potrošnje.`;
    } else {
        rezultatDiv.style.background = '#e8f5e9';
        rezultatDiv.style.borderColor = '#2e7d32';
        rezultatDiv.style.color = '#1b5e20';
        poruka += `Nalazite se tačno na nivou globalnog prosjeka (${globalniProsjek} kg).`;
    }

    rezultatDiv.innerHTML = poruka;
}

//brojac stabala//
/* Napomena o AI upotrebi: 
   Sledeća funkcija za simulaciju brojača kreirana je uz pomoć AI asistenta 
   kako bi se postiglo optimalno osvežavanje ekrana na svakih 2.5 sekunde.
*/

document.addEventListener("DOMContentLoaded", function() {
    let brojStabala = 0;
    const brojacElement = document.getElementById("brojac-stabala");

    if (brojacElement) {
        setInterval(function() {
            brojStabala++;
            brojacElement.textContent = brojStabala;
        }, 2500);
    }
});

//da li ste znali kartica//
const cinjenice = [
    "Jedno odraslo stablo može proizvesti dovoljno kiseonika za čak četiri osobe dnevno.",
    "Recikliranjem samo jedne aluminijumske limenke uštedi se dovoljno energije za trosatni rad vašeg televizora.",
    "Plastičnoj flaši u prirodi je potrebno preko 450 godina da se potpuno razgradi.",
    "Oko 97% vode na Zemlji je slano, dok je manje od 1% dostupno ljudima kao pitka voda."
];

let mojTrenutniIndeks = 0;

function promijeniČinjenicu() {
    const tekstElement = document.getElementById("fact-text");
    
    
    mojTrenutniIndeks = (mojTrenutniIndeks + 1) % cinjenice.length;
    
    tekstElement.textContent = cinjenice[mojTrenutniIndeks];
}

//TAMNI MOD//
const toggleMod = document.getElementById('toggle-mod');
const logo = document.querySelector('header img');  

toggleMod.addEventListener('click', () => {
    document.body.classList.toggle('tamni-mod');

    const tamniMod = document.body.classList.contains('tamni-mod');

    
    toggleMod.innerHTML = tamniMod 
        ? '<i class="fa-regular fa-sun"></i>' 
        : '<i class="fa-regular fa-moon"></i>';

  
    logo.src = tamniMod 
        ? 'images/logo-dark.svg' 
        : 'images/logo-light.svg';

    localStorage.setItem('mod', tamniMod ? 'tamni' : 'svjetli');
});

//LOCAL STORAGE//
if (localStorage.getItem('mod') === 'tamni') {
    document.body.classList.add('tamni-mod');
    toggleMod.innerHTML = '<i class="fa-regular fa-sun"></i>';
    logo.src = 'images/logo-dark.svg';  
}

//SAT//
const DANI    = ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'];
const MJESECI = ['januar','februar','mart','april','maj','jun',
                 'jul','august','septembar','oktobar','novembar','decembar'];

function azurirajSat() {
  const sad    = new Date();
  const sati   = String(sad.getHours()).padStart(2, '0');
  const minute = String(sad.getMinutes()).padStart(2, '0');
  const sek    = String(sad.getSeconds()).padStart(2, '0');
  const datum  = `${DANI[sad.getDay()]}, ${sad.getDate()}. ${MJESECI[sad.getMonth()]} ${sad.getFullYear()}.`;

  document.getElementById('sati').textContent = sati;
  document.getElementById('minute').textContent = minute;
  document.getElementById('sekunde').textContent = sek;
  document.getElementById('sat-datum').textContent = datum;
}
azurirajSat();

setInterval(azurirajSat, 1000);


//BURGER MENI//

const burger = document.getElementById('burger');
const nav    = document.getElementById('glavna-nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('otvoren');  
    nav.classList.toggle('otvoren');     
});


nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('otvoren');
        nav.classList.remove('otvoren');
    });
});



// FILTRIRANJE KARTICA//
document.addEventListener("DOMContentLoaded", function(){
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards= document.querySelectorAll(".kartice");


    filterButtons.forEach(button => {
        button.addEventListener("click", function(e){
            e.preventDefault();

            document.querySelector(".filter-btn.active")?.classList.remove("active");
            this.classList.add("active");


            const filterVrijednost = this.getAttribute("data-filter");


            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if(filterVrijednost == "sve" || cardCategory.includes(filterVrijednost)){
                    
                    card.classList.remove("hidden");
                   }
                    else {
                        card.classList.add("hidden")
                    }
                });
            });
        });
    });




//DUGME ZA POVRATAK NA VRH//
const nazadBtn = document.querySelector('.nazad');

nazadBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// JAVA ZA KONTAKT FORMU
if (forma) {
    // Svi selektori moraju biti unutra da ne prave grešku na drugim stranicama
    const ime = document.getElementById('ime');
    const prezime = document.getElementById('prezime');
    const email = document.getElementById('email');
    const telefon = document.getElementById('telefon');
    const tema = document.getElementById('tema');
    const poruka = document.getElementById('poruka');
    const porukaUspjeh = document.getElementById('poruka-uspjeh');
    const uspjehNaslov = document.getElementById('uspjeh-naslov');
    const btnReset = document.getElementById('btnReset');

    // --- SLUŠAČ ZA SUBMIT FORME ---
    forma.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const jeFormaValidna = validirajFormu();
        
        if (jeFormaValidna) {
            ocistiSveGreske();
            uspjehNaslov.textContent = `Hvala Vam, ${ime.value.trim()}!`;
            porukaUspjeh.classList.remove('hidden');
            forma.reset();
            porukaUspjeh.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // --- SLUŠAČ ZA RESET DUGME ---
    btnReset.addEventListener('click', function() {
        forma.reset();
        ocistiSveGreske();
        porukaUspjeh.classList.add('hidden');
    });

    function validirajFormu() {
        let validno = true;
        
        if (ime.value.trim() === '') {
            prikaziGresku(ime, 'Ime je obavezno polje.');
            validno = false;
        } else {
            ukloniGresku(ime);
        }
        
        if (prezime.value.trim() === '') {
            prikaziGresku(prezime, 'Prezime je obavezno polje.');
            validno = false;
        } else {
            ukloniGresku(prezime);
        }
         
    // // Ovaj dio koda je generisan/optimizovan uz pomoć AI asistenta.
// 
// TEHNIČKO OBJAŠNJENJE REGEX-A ZA ODBRANU PROJEKTA:
// emailRegex: 
//    - ^ i $ označavaju striktan početak i kraj stringa.
//    - [a-zA-Z0-9._%+-]+ provjerava korisničko ime (dozvoljava slova, brojeve i specijalne znake).
//    - @ je fiksni znak separatora.
//    - [a-zA-Z0-9.-]+ provjerava domenu (npr. gmail, etf.unsa).
//    - \.[a-zA-Z]{2,} provjerava TLD ekstenziju koja mora imati najmanje 2 slova (npr. .com, .ba).
//
        const emailVrijednost = email.value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (emailVrijednost === '') {
            prikaziGresku(email, 'E-mail adresa je obavezna.');
            validno = false;
        } else if (!emailRegex.test(emailVrijednost)) {
            prikaziGresku(email, 'Unesite ispravan format e-mail adrese (npr. ime@primjer.com).');
            validno = false;
        } else {
            ukloniGresku(email);
        }
            // 4. Provjera Telefona (Prazno polje + Regex za cifre, razmake i crtice)
    // telefonRegex:
//    - /^[0-9\s\-]+$/ provjerava da li unos sadrži ISKLJUČIVO cifre ([0-9]), prazne razmake (\s) ili crtice (\-).
//    - Znak + osigurava da string mora imati barem jedan karakter, a ne biti prazan.
        const telefonVrijednost = telefon.value.trim();
        const telefonRegex = /^[0-9\s\-]+$/;
        
        if (telefonVrijednost === '') {
            prikaziGresku(telefon, 'Broj telefona je obavezan.');
            validno = false;
        } else if (!telefonRegex.test(telefonVrijednost)) {
            prikaziGresku(telefon, 'Telefon može sadržavati samo cifre, razmake i crtice.');
            validno = false;
        } else {
            ukloniGresku(telefon);
        }
        
        if (tema.value === '') {
            prikaziGresku(tema, 'Molimo odaberite temu vašeg upita.');
            validno = false;
        } else {
            ukloniGresku(tema);
        }
        
        const porukaVrijednost = poruka.value.trim();
        if (porukaVrijednost === '') {
            prikaziGresku(poruka, 'Tekst poruke ne može biti prazan.');
            validno = false;
        } else if (porukaVrijednost.length < 10) {
            prikaziGresku(poruka, 'Poruka mora sadržavati minimalno 10 karaktera.');
            validno = false;
        } else {
            ukloniGresku(poruka);
        }
        
        return validno;
    }

    function prikaziGresku(inputElement, tekstGreske) {
        const kontejnerGrupa = inputElement.parentElement;
        const greskaSpan = kontejnerGrupa.querySelector('.poruka-greske');
        
        kontejnerGrupa.classList.add('ima-gresku');
        if (greskaSpan) {
            greskaSpan.textContent = tekstGreske;
        }
    }

    function ukloniGresku(inputElement) {
        const kontejnerGrupa = inputElement.parentElement;
        kontejnerGrupa.classList.remove('ima-gresku');
        const greskaSpan = kontejnerGrupa.querySelector('.poruka-greske');
        if (greskaSpan) {
            greskaSpan.textContent = '';
        }
    }

    function ocistiSveGreske() {
        const sveGrupe = document.querySelectorAll('.forma-grupa');
        sveGrupe.forEach(grupa => {
            grupa.classList.remove('ima-gresku');
            const greskaSpan = grupa.querySelector('.poruka-greske');
            if (greskaSpan) {
                greskaSpan.textContent = '';
            }
        });
    }
}
