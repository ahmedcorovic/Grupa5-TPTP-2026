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
   


