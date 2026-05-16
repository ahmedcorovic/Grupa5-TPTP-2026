
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
   




