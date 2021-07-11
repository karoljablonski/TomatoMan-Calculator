//potrzebuje 14 pomidorow na 34 osoby. zrob tak,ze wpisuje 34 osoby, a on mi mowi 14 pomidorow (1 pomidor na 2,5 osoby)
// 1 pomidor to 5/2 osoby
// 1 osoba to 4/10 pomidora
//liczba pomidorow - mam otrzymac liczbe ludzi
//liczba ludzi - mam otrzymac ilosc pomidorow
// glownie chodzi mi o to ze wpisuje liczbe pomidorow a wyskakuje liczba osob jo tam, w dwie strony

// 1.0.2 pomysl na dodanie przelicznika - a raczej dac mozliwosc uzytkownikowi ustawienia samemu factora, np po kliknieciu w okienko factora alert z info ze zmieniasz ustawienia programu czy co :D

// 1.0.2fix zrobic, zeby wyswietlanie wyniku nie powodowalo przeskakiwania linijki.

//11.07. 2:02 - stanelo na tym, ze w css dorzucam barwy do apki, html jest gotowy, probuje jeszcze rozkminic, zeby wartosc zmiennej factor wrzucic i wyswietlic w inpucie po wcisnieciu resetu, moze byc tez guzik resetu w ustawieniach. poza tym bangla
let factor = 2.5;

const tomato = document.querySelector(".tomato");
const button_tomato = document.querySelector(".button_tomato")
const tomato_p = document.querySelector("div.case>p.answer_in_tomato");
const tomato_answer = document.querySelector("span.answer_potato");

button_tomato.addEventListener("click", function(){
    // tomato_p.classList.remove("anti-blur");
    // debugger;
    if(tomato.value<=0){
        tomato_answer.textContent = "0";
    } else {
    tomato_answer.textContent = Math.floor(tomato.value * factor);
    }
    tomato_answer.style.color = "white";
    tomato_p.style.color = "white";
    // tomato_p.classList.remove("blurring");
});

const human = document.querySelector(".human");
const button_human = document.querySelector(".button_human");
const human_p = document.querySelector("div.case>p.answer_in_human");
const human_answer = document.querySelector("span.answer_human");

button_human.addEventListener("click", function(){
    // human_p.classList.remove("anti-blur");
    // human_p.classList.add("blurring");
    if(human.value == 0){
        human_answer.textContent = "0";

    } else {
    human_answer.textContent = Math.floor((human.value/factor).toFixed(2)) + 1;
    };
    human_answer.style.color = "white";
    human_p.style.color = "white";
    // human_p.classList.remove("blurring");
});



// button_human.addEventListener("click", calculate(human, human_answer, human_p));
// button_tomato.addEventListener("click", calculate(tomato, tomato_answer, tomato_p));

//sprobujmy zrobic jedna funkcje dla obu przyciskow, taki callback-kombajn:
// function calculate(subject, spanAnswer, pAnswer){
//     const zmienna = subject.toString();
//         spanAnswer.textContent = (subject.value*factor);
//         if(zmienna === "human"){
//             spanAnswer.textContent = (subject.value/factor).toFixed(2);
//         }
//         spanAnswer.style.color = "white";
//         pAnswer.style.color = "white";
//     }; PROBA NIEUDANA :(

// calculate(button_human, human, human_answer, human_p);



//zmienne potrzebne do popup'a
const div = document.querySelector("div.display_none");
const factorChanger = document.querySelector("p.factorChanger");
const factorReset = document.querySelector("p.factorReset");
const quit = document.querySelector("p.quit");
// factorChanger_span.textContent = `${factor}`;

document.querySelector("button.button_settings").addEventListener("click", function(){

    factorChanger.classList.remove("display_none");
    factorReset.classList.remove("display_none");
    quit.classList.remove("display_none");
    div.classList.remove("display_none");
    div.classList.add("popup");

    document.querySelector("div.wrapper").style.filter = "blur(3px)";

    //przycisk zapisujacy i wylaczajacy popup'a
    quit.addEventListener("click", function(){
        document.querySelector("div.wrapper").style.filter = "blur(0)";
        div.classList.remove("popup");
        div.classList.add("display_none");
        factorChanger.classList.add("display_none");
        factorChanger.classList.add("display_none");
        quit.classList.add("display_none");
        const newFactor = document.querySelector("input.factorChanger").value;
        factor = parseFloat(newFactor, 1);
    });
    factorReset.addEventListener("click", function(){
            //WAZNA RZECZ: DO INPUTA MOZESZ WPISAC STRING, A NIE LICZBE, DLATEGO KONWERTUJ ZAWSZE NA STRINGA TO CO CHCESZ MIEC W INPUCIE, KONIEC PRZEKAZU
        factor = 2.5;
        factorString = factor.toString();
        document.querySelector("input.factorChanger").value = factorString;
    })
});




//reset ustawien
document.querySelector(".reset").addEventListener("click", ()=>{
    tomato.value = "1";
    human.value = "1";
    // tomato_p.classList.add("anti-blur");
    // human_p.classList.add("anti-blur");
    tomato_p.style.color = "transparent";
    human_p.style.color = "transparent";
    tomato_answer.textContent = "";
    human_answer.textContent = "";
});

