document.addEventListener("DOMContentLoaded", () =>{
    const getElementById = (id) => document.getElementById(id)
    const form = document.querySelector("form");


    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let i = 0;
        const pet = form.elements.djur.value;
        const pizza = getElementById("matPizza")?.checked || false;

        if(pet === "sj"){
            i += 1;
            console.log(i, "sj")

        } 
        
        if(pizza) {
            i += 1;
            console.log(i, "pizza")
        }
    })
});


