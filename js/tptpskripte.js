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

// KOD ZA LIVE BROJAČ STABALA
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


