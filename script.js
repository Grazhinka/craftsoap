
const ssylka='https://db-craft-soap.glitch.me/'
//const ssylka='https://db-soap.glitch.me/'

async function dannyeCataloga(){
    const dop = await fetch(`${ssylka}craftsoap/dopinfo`);
    const dopInfo = await dop.json();
    const kartinkiDlaOboev=dopInfo[1]
    const cytaty=dopInfo[2]
    const categorii=dopInfo[0]

    const osnova = await fetch(`${ssylka}craftsoap`);
    const ishodnyeDannye = await osnova.json();
   
    oboi(kartinkiDlaOboev)  
    frazy(cytaty)
    knopkiKategorij(categorii)
    verstkaKataloga(ishodnyeDannye)  
    podrobnoeOpisanieCartochki(ishodnyeDannye)
}

dannyeCataloga().then(()=>{
    sortirovkaPoCategorijam()
    animacija()
  }
)



//-----------------------------------------------------------------картинки в движении------------------------------------------------------------------

function oboi(kartinkiDlaOboev){
    let kartinkiVDvizhenii = document.querySelector('.kartinkiVDvizhenii')

    for(let i=0;i<kartinkiDlaOboev.length;i++){
        kartinkiVDvizhenii.innerHTML+=`
        <div class='kartinkaFonom'>
        </div>` 
        let kartinkiFonom=kartinkiVDvizhenii.querySelectorAll('.kartinkaFonom')
        //kartinkiFonom[i].style.backgroundImage=`url(${ssylka}/${kartinkiDlaOboev[i]})`
        kartinkiFonom[i].style.backgroundImage=`url(${kartinkiDlaOboev[i]})`
    }

    const kartinkiFonom = document.querySelectorAll('.kartinkaFonom');
    kartinkiFonom.forEach(item=>{
        item.addEventListener('mouseover', ()=> {
            removeFocus();
            item.classList.add('uvelichenie');
        })

        function removeFocus(){
            kartinkiFonom.forEach(item=>{
                item.classList.remove('uvelichenie');
            })
        }
    })
}

//-----------------------------------------------------------------текст на картинках в движении------------------------------------------------------------------

function frazy(cytaty){
    const cytata=document.querySelector('.cytata')
    cytata.textContent=cytaty[0]
    let i=0

    function smenaCytaty() {
        i++;
        if(i>cytaty.length-1){
            i=0
        }    
        cytata.textContent=cytaty[i]

        gsap.from(".cytata", {
        duration: 0.5, 
        opacity: 0.5,  
        });    
    }

    setInterval(smenaCytaty,5000)
}

//-----------------------------------------------------------------верстка кнопок категорий------------------------------------------------------------------

function knopkiKategorij(categorii){
    let knopkiKategorij=document.querySelector('.knopkiKategorij')

    for (let i=0;i<categorii.length;i++){
        const knopkaKategorii=document.createElement('button')
        knopkaKategorii.classList.add('kategorijaKnopka')
        knopkaKategorii.textContent=categorii[i]
        knopkiKategorij.appendChild(knopkaKategorii)
    }
}


//-----------------------------------------------------------------верстка каталога------------------------------------------------------------------

function verstkaKataloga(ishodnyeDannye){
    let catalog=document.querySelector('.catalog')
    for(let i=0;i<ishodnyeDannye.length;i++){
        const kartochkaKataloga=document.createElement('div')
        kartochkaKataloga.classList.add('kart')
        kartochkaKataloga.innerHTML=`
            <p>${ishodnyeDannye[i].title}</p>
            <h3 class='color'>${ishodnyeDannye[i].kratkoeOpisanie}</h3>
            <p>${ishodnyeDannye[i].ves}</p>
            <h5 class='vyborKategorii'>${ishodnyeDannye[i].category}</h5>
            <img loading='lazy' src=${ishodnyeDannye[i].image} height='150px' width='100px'/>
            <h4>${ishodnyeDannye[i].cena}</h4>
            <button class='podrobnosti'>Подробнее</button>
        `
        catalog.appendChild(kartochkaKataloga)
    }
}
//<img src=${ssylka}/${ishodnyeDannye[i].image} width='100px'/>
//-----------------------------------------------------------------сортировка по категориям------------------------------------------------------------------


function sortirovkaPoCategorijam(){
    let vyborKategorii=document.querySelectorAll('.vyborKategorii')

    document.querySelectorAll('.kategorijaKnopka').forEach(item=>{    
        item.addEventListener('click',()=>{
            vyborKategorii.forEach(it=>{
                it.textContent.includes(item.textContent) ? (it.parentElement.style.display ='block') : (it.parentElement.style.display = 'none')
            })
        })
    })
}


//-----------------------------------------------------------------подробности карточки------------------------------------------------------------------



function podrobnoeOpisanieCartochki(ishodnyeDannye){
    let nazhatieNaKnopku=document.querySelectorAll('.podrobnosti')
    let nazhatieNaKartinku=document.querySelectorAll('.kart img')
    let nazhatieNaNazvanie=document.querySelectorAll('.kart h3')

    function podrobno(podrobnosti){
        podrobnosti.forEach((it,index)=>{
            it.addEventListener('click',()=>{
                nazhatieNaKnopku[index].style.display='none'
                const knopkaZakrytija=document.createElement('button')
                const krestik=document.createElement('button')
                knopkaZakrytija.textContent='закрыть'
                krestik.textContent='X'
                krestik.classList.add('krestik')
                it.parentElement.classList.add('podrobnee')
                it.parentElement.appendChild(knopkaZakrytija)
                it.parentElement.appendChild(krestik)
    
                const opisanie=document.createElement('p')
                opisanie.innerHTML=`
                <span>Описание: </span>${ishodnyeDannye[index].polnoeOpisanie}
                <br/>
                <br/>
                <span>Состав: </span>${ishodnyeDannye[index].sostav}
                <br/>
                <br/>
                <span>Сварено: </span>${ishodnyeDannye[index].svareno}
                `
                it.parentElement.appendChild(opisanie)
                it.parentElement.querySelector('h4').after(opisanie)
    
                function close(){
                    it.parentElement.classList.remove('podrobnee')
                    it.parentElement.removeChild(knopkaZakrytija)
                    it.parentElement.removeChild(krestik)
                    it.parentElement.removeChild(opisanie)
                    nazhatieNaKnopku[index].style.display='block'
                    nazhatieNaKnopku[index].style.margin='0 auto'
                }
    
                knopkaZakrytija.addEventListener('click',close ) 
                krestik.addEventListener('click',close ) 
            })
        })
    }
    podrobno(nazhatieNaKnopku)
    podrobno(nazhatieNaKartinku)
    podrobno(nazhatieNaNazvanie)
}





//------------------------------------------------------------------анимация---------------------------------------------------------------------------
function animacija(){
    let nazhatieNaKnopku=document.querySelectorAll('.podrobnosti')
    let nazhatieNaKartinku=document.querySelectorAll('.kart img')
    let nazhatieNaNazvanie=document.querySelectorAll('.kart h3')

    function anima(animirovat){
        animirovat.forEach(function(box) {
            box.addEventListener("click", function() {
              gsap.from(".podrobnee img", {
                duration: 0.5, 
                opacity: 0, 
                scale:0.5
              });
              gsap.from(".podrobnee p", {
                duration: 0.5, 
                opacity: 0, 
                x: -100, 
                stagger:0.5,
              });
            });
        });
    }

    anima(nazhatieNaKartinku)
    anima(nazhatieNaKnopku)
    anima(nazhatieNaNazvanie)
}


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
