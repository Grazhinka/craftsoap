async function dannyeCataloga(){
    const adv = await fetch('https://db-soap.glitch.me/craftsoap');
    const ishodnyeDannye = await adv.json();
    verstkaKataloga(ishodnyeDannye)
    podrobnoeOpisanieCartochki(ishodnyeDannye)
}

dannyeCataloga().then(()=>{
    sortirovkaPoCategorijam()
    animacija()
  }
)

async function ostalnyeDannye(){
    const adv = await fetch('https://db-soap.glitch.me/craftsoap/dopinfo');
    const dopInfo = await adv.json();
    const categorii=dopInfo[0]
    const kartinkiDlaOboev=dopInfo[1]
    const cytaty=dopInfo[2]

    knopkiKategorij(categorii)
    oboi(kartinkiDlaOboev)  
    frazy(cytaty) 
}

ostalnyeDannye().then(()=>{
    sortirovkaPoCategorijam()
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
        opacity: 0,  
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
        kartochkaKataloga.innerHTML=`
            <h2>${ishodnyeDannye[i].title}</h2>
            <p>${ishodnyeDannye[i].kratkoeOpisanie}</p>
            <p>${ishodnyeDannye[i].ves}</p>
            <h5 class='vyborKategorii'>${ishodnyeDannye[i].category}</h5>
            <img src='${ishodnyeDannye[i].img}' width='100px'/>
            <h4>${ishodnyeDannye[i].cena}</h4>
            <button class='podrobnosti'>Подробнее</button>
        `
        catalog.appendChild(kartochkaKataloga)
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
    let podrobnosti=document.querySelectorAll('.podrobnosti')

    podrobnosti.forEach((it,index)=>{
        it.addEventListener('click',()=>{
            it.style.display='none'
            const knopkaZakrytija=document.createElement('button')
            knopkaZakrytija.textContent='закрыть'
            it.parentElement.classList.add('podrobnee')
            it.parentElement.appendChild(knopkaZakrytija)

            const opisanie=document.createElement('p')
            opisanie.textContent=ishodnyeDannye[index].polnoeOpisanie
            it.parentElement.appendChild(opisanie)
            it.parentElement.querySelector('h4').after(opisanie)

            knopkaZakrytija.addEventListener('click',()=>{
                it.parentElement.classList.remove('podrobnee')
                it.parentElement.removeChild(knopkaZakrytija)
                it.parentElement.removeChild(opisanie)
                it.style.display='block'
                it.style.margin='0 auto'
            })
        })
    })
}

//------------------------------------------------------------------анимация---------------------------------------------------------------------------
function animacija(){
    document.querySelectorAll(".podrobnosti").forEach(function(box) {
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


