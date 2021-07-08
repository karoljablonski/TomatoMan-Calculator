//potrzebuje 14 pomidorow na 34 osoby. zrob tak,ze wpisuje 34 osoby, a on mi mowi 14 pomidorow (1 pomidor na 2,5 osoby)
// 1 pomidor to 5/2 osoby
// 1 osoba to 4/10 pomidora
//liczba pomidorow - mam otrzymac liczbe ludzi
//liczba ludzi - mam otrzymac ilosc pomidorow
// glownie chodzi mi o to ze wpisuje liczbe pomidorow a wyskakuje liczba osob jo tam, w dwie strony

//pomysl na dodanie przelicznika - a raczej dac mozliwosc uzytkownikowi ustawienia samemu factora, np po kliknieciu w okienko factora alert z info ze zmieniasz ustawienia programu czy co :D
let factor = 2.5;

const tomato = document.querySelector(".tomato");
const button_tomato = document.querySelector(".button_tomato")
const tomato_p = document.querySelector("div.case>p.answer_in_tomato");
const tomato_answer = document.querySelector("span.answer_potato");

tomato_answer.textContent = Math.floor(tomato.value * factor);
// const p_tomato = document.querySelector("p.answer_in_tomatoes");
button_tomato.addEventListener("click", function(){
    tomato_p.classList.remove("anti-blur");
    tomato_p.classList.add("blurring");
    tomato_answer.textContent = Math.floor(tomato.value * factor);
    tomato_answer.style.color = "white";
    tomato_p.style.color = "white";
    // tomato_p.classList.remove("blurring");

});

const human = document.querySelector(".human");
const button_human = document.querySelector(".button_human");
const human_p = document.querySelector("div.case>p.answer_in_human");
const human_answer = document.querySelector("span.answer_human");

human_answer.textContent = Math.floor(human.value / factor);
// const p_tomato = document.querySelector("p.answer_in_tomatoes");
button_human.addEventListener("click", function(){
    human_p.classList.remove("anti-blur");
    human_p.classList.add("blurring");
    human_answer.textContent = (human.value/factor).toFixed(2);
    human_answer.style.color = "white";
    human_p.style.color = "white";
    // human_p.classList.remove("blurring");
});


{/* <div class="case">

<label for="">
    <input type="number" class="human" placeholder="Ile masz osób?!" value="1">
    <button class="button_human">Oblicz!</button>
</label>

<p class="answer_in_human">Potrzebujesz <span> </span> pomidorów!</p> */}




//reset ustawien
document.querySelector(".button_reset").addEventListener("click", ()=>{
    tomato.value = "0";
    human.value = "0";
    tomato_p.classList.add("anti-blur");
    human_p.classList.add("anti-blur");
    tomato_answer.textContent = "";
    human_answer.textContent = "";
})

