
const ssylka='https://db-craft-soap.glitch.me/'

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
                <div class='big'>
                    <img loading='lazy' alt='подарок гродно' src=${ishodnyeDannye[i].image} height='150px' width='100px'/>
                </div>
                <h4><span>Цена: </span>${ishodnyeDannye[i].cena}</h4>
                <button class='podrobnosti'>Подробнее</button>  
        `
        catalog.appendChild(kartochkaKataloga)

        if(ishodnyeDannye[i].nalichie==='продано'){
            const lenta=document.createElement('div')
            lenta.classList.add('corner')
            lenta.classList.add('corner-right')
            lenta.innerHTML=`<span>sold out</span>`
            kartochkaKataloga.appendChild(lenta)
        }
    }
}

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
    let rod=document.querySelectorAll('.kart')

    function podrobno(podrobnosti){
        podrobnosti.forEach((it,index)=>{
            it.addEventListener('click',()=>{
                if(!rod[index].classList.contains('podrobnee')){
                    const roditel=document.querySelectorAll('.big')
                    nazhatieNaKnopku[index].style.display='none'
                    const knopkaZakrytija=document.createElement('button')
                    const krestik=document.createElement('button')
                    knopkaZakrytija.textContent='закрыть'
                    krestik.textContent='X'
                    krestik.classList.add('krestik')
                    rod[index].classList.remove('kart')
                    rod[index].classList.add('podrobnee')
                    rod[index].appendChild(knopkaZakrytija)
                    rod[index].appendChild(krestik)
                    if(rod[index].querySelector('.corner')){
                        rod[index].querySelector('.corner').style.display='none'
                    }


                    const naGlavnuju=document.createElement('button')
                    naGlavnuju.textContent='НА ГЛАВНУЮ'
                    naGlavnuju.classList.add('naGlavnuju')
                    rod[index].appendChild(naGlavnuju)

                    const opisanie=document.createElement('p')
                    opisanie.classList.add('opisanie')
                    if(ishodnyeDannye[index].svareno===' '){
                        opisanie.innerHTML=`
                        <span>Описание: </span>${ishodnyeDannye[index].polnoeOpisanie}
                        <br/>
                        <br/>
                        <span>Состав: </span>${ishodnyeDannye[index].sostav}
                        `
                    }else{
                        opisanie.innerHTML=`
                        <span>Описание: </span>${ishodnyeDannye[index].polnoeOpisanie}
                        <br/>
                        <br/>
                        <span>Состав: </span>${ishodnyeDannye[index].sostav}
                        <br/>
                        <br/>
                        <span>Сварено: </span>${ishodnyeDannye[index].svareno}
                        `
                    }
                    roditel[index].appendChild(opisanie)


                    knopkaZakrytija.addEventListener('click',close ) 
                    krestik.addEventListener('click',close ) 
                    naGlavnuju.addEventListener('click',close ) 

                    function close(){
                        rod[index].classList.remove('podrobnee')
                        rod[index].classList.add('kart')
                        rod[index].removeChild(knopkaZakrytija)
                        rod[index].removeChild(krestik)
                        rod[index].removeChild(naGlavnuju)

                        if(rod[index].querySelector('.corner')){
                           rod[index].querySelector('.corner').style.display='inline-block'
                        }
                        
                        nazhatieNaKnopku[index].style.display='block'
                        roditel[index].removeChild(opisanie)
                        nazhatieNaKnopku[index].style.margin='0 auto'
                    } 
                }
            }) 
            
        })
        
    }

    podrobno(nazhatieNaKnopku)
    podrobno(nazhatieNaNazvanie)
    podrobno(nazhatieNaKartinku)
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
                duration: 1, 
                opacity: 0, 
                x: 150,
              });
              gsap.from(".podrobnee p", {
                duration: 1, 
                opacity: 0, 
                x: -150, 
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



