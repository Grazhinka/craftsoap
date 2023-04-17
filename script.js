//-----------------------------------------------------------------исходные данные------------------------------------------------------------------

const categorii=['ВСЁ','ремесленное мыло',"твёрдый шампунь","для ванн", "для губ","баттеры для тела", "скрабы для тела", "бельди", "наборы"]

const ishodnyeDannye=[
    {
       title:'Мыло',
       kratkoeOpisanie:'Тыква и корица',
       img:'/img/mylo3.jpg',
       category:categorii[0]+' '+categorii[1],
       ves:'100 г.',
       cena:'10 BYN',
       polnoeOpisanie:'Сварено на пюре тыквы с добавлением пряностей и эфирных масел корицы'
    },
    {
        title:'Мыло',
        kratkoeOpisanie:'GREEN',
        img:'/img/mylo4.jpg',
        category:categorii[0]+' '+categorii[1],
        ves:'120 г.',
        cena:'12 BYN',
        polnoeOpisanie:'Сварено на пюре петрушки с эфирным маслом розмарина'
    },
    {
        title:'Мыло',
        kratkoeOpisanie:'Лаванда и рикотта',
        img:'/img/mylo5.jpg',
        category:categorii[0]+' '+categorii[1],
        ves:'90 г.',
        cena:'10 BYN',
        polnoeOpisanie:'Сварено с добавлением мягкого сыра, имеет лавандово-сливочный запах'
    },
    {
        title:'Мыло',
        kratkoeOpisanie:'Чили и апельсин',
        img:'/img/cilul.jpg',
        category:categorii[0]+' '+categorii[1],
        ves:'120 г.',
        cena:'12 BYN',
        polnoeOpisanie:'Массажное антицеллюлитное мыло с молотым перцем и цедрой апельсина'
    },
    {
        title:'Мыло',
        kratkoeOpisanie:'Чайное дерево',
        img:'/img/mylo2.jpg',
        category:categorii[0]+' '+categorii[1],
        ves:'120 г.',
        cena:'12 BYN',
        polnoeOpisanie:'С углем и черной глиной, эфирное масло австралийского чайного дерева, базилика, корицы, кумина'
    },
    {
        title:'Мыло',
        kratkoeOpisanie:'Кастильское',
        img:'/img/mylo6.jpg',
        category:categorii[0]+' '+categorii[1],
        ves:'120 г.',
        cena:'13 BYN',
        polnoeOpisanie:'100% масло оливы прямого холодного отжима'
    },
    {
        title:'Мыло',
        kratkoeOpisanie:'Овсяное массажное',
        img:'/img/mylo2.jpg',
        category:categorii[0]+' '+categorii[1],
        ves:'120 г.',
        cena:'12 BYN',
        polnoeOpisanie:'...'
    },
    {
        title:'Мыло',
        kratkoeOpisanie:'Мандарин и мак',
        img:'/img/mylo2.jpg',
        category:categorii[0]+' '+categorii[1],
        ves:'120 г.',
        cena:'12 BYN',
        polnoeOpisanie:'С цедрой и эфирным маслом мандарина, семена мака как мягкий скраб '
    },
    {
        title:'Мыло',
        kratkoeOpisanie:'Роза и гранат',
        img:'/img/mylo2.jpg',
        category:categorii[0]+' '+categorii[1],
        ves:'100 г.',
        cena:'11 BYN',
        polnoeOpisanie:'Сварено на гранатовом соке, с розовой глиной, эфирными маслами розы и герани'
    },
    {
        title:'Мыло',
        kratkoeOpisanie:'Пивное',
        img:'/img/mylo2.jpg',
        category:categorii[0]+' '+categorii[1],
        ves:'110 г.',
        cena:'11 BYN',
        polnoeOpisanie:'Сварено на темном бархатном пиве'
    },
    {
        title:'Мыло',
        kratkoeOpisanie:'Миндальное молочко',
        img:'/img/mylo2.jpg',
        category:categorii[0]+' '+categorii[1],
        ves:'100 г.',
        cena:'11 BYN',
        polnoeOpisanie:'Сварено на миндальном молоке с маслом сладкого миндаля и молотым миндалем'
    },
    {
        title:'Твердый шампунь',
        kratkoeOpisanie:'Цитрусовый',
        img:'/img/suhoish.jpg',
        category:categorii[0]+' '+categorii[2],
        ves:'80 г.',
        cena:'25 BYN',
        polnoeOpisanie:'Для склонных к жирности волос'
    },
    {
        title:'Твердый шампунь',
        kratkoeOpisanie:'Лаванда и кокос',
        img:'/img/suhoish.jpg',
        category:categorii[0]+' '+categorii[2],
        ves:'80 г.',
        cena:'25 BYN',
        polnoeOpisanie:'Для сухих и поврежденных волос'
    },
    {
        title:'Сухое молочко',
        kratkoeOpisanie:'шот для ванн',
        img:'/img/molochko.jpg',
        category:categorii[0]+' '+categorii[3],
        ves:'колба 60 мл',
        cena:'10 BYN',
        polnoeOpisanie:'Ингридиенты максимально приятные для вашей кожи'
    },
    {
        title:'Бальзам для губ',
        kratkoeOpisanie:'и не только',
        img:'/img/balsam.jpg',
        category:categorii[0]+' '+categorii[4],
        ves:'баночка',
        cena:'10 BYN',
        polnoeOpisanie:'В состав входит масло какао н/ф, масло кокоса ev, мацерат календулы на миндальном масле, масло кунжута, ланолин, воск рисовых отрубей'
    },
    {
        title:'Скраб для губ',
        kratkoeOpisanie:'',
        img:'/img/balsam2.jpg',
        category:categorii[0]+' '+categorii[4],
        ves:'баночка',
        cena:'10 BYN',
        polnoeOpisanie:'В состав входит сахар, масло жожоба, пчелиный отбеленный воск, глицерин, витамин Е'
    },
    {
        title:'Бальзам для губ',
        kratkoeOpisanie:'очень питательный',
        img:'/img/balsam3.jpg',
        category:categorii[0]+' '+categorii[4],
        ves:'туба',
        cena:'8 BYN',
        polnoeOpisanie:'В состав входит масло какао н/ф, масло кокоса, пчелиный воск, масло миндаля сладкого, витамин Е'  
    },
    {
        title:'Суфле для тела',
        kratkoeOpisanie:'Белый шоколад',
        img:'/img/butter.jpg',
        category:categorii[0]+' '+categorii[5],
        ves:'объем 200 мл',
        cena:'30 BYN',
        polnoeOpisanie:'Суфле - это взбитые до состояния облачка натуральные масла: ~ ши - питает кожу и помогает удерживать влагу, делая кожу невероятно нежной и бархатистой ~ масло какао - создаёт на коже дышащую плёнку, защищая от внешних воздействий ~ миндальное масло - улучшает состояние барьерных функций кожи и эффективно при профилактике растяжек ~ и витамин Е - лучший антиоксидант для нашей кожи'
    },
    {
        title:'Шарики-скрабы',
        kratkoeOpisanie:'сахарные',
        img:'/img/sahar2.jpg',
        category:categorii[0]+' '+categorii[6],
        ves:'3*30 г',
        cena:'4 BYN',
        polnoeOpisanie:'В таком шарике : стружка из натурального мыла - для очищения, сахар - для мягкой эксфолиации, миндальное масло - для питания кожи'
    },
    {
        title:'Бельди',
        kratkoeOpisanie:'густое травное мыло-скраб',
        img:'/img/beldi.png',
        category:categorii[0]+' '+categorii[7],
        ves:'200 мл',
        cena:'30 BYN',
        polnoeOpisanie:'Здесь сила весенних и летних трав, собранных мной с любовью и бережно высушенных. Травы измельчены и вмешаны в натуральное мягкое мыло, сваренное из растительных масел, сдобрены неомыленным маслом ши и оливы - для дополнительного ухода и питания кожи, эфирные масла эвкалипта и мяты дополняют травный аромат и всю эту аутентичность '
    },
    {
        title:'Наборы',
        kratkoeOpisanie:'подарочные',
        img:'/img/nabor1.jpg',
        category:categorii[0]+' '+categorii[8],
        ves:'на выбор',
        cena:'от 20 BYN',
        polnoeOpisanie:'Готовые варианты подарков с доставкой в наличии. Выбирай готовый или создавай свой!'
    },
]

//-----------------------------------------------------------------картинки в движении------------------------------------------------------------------

let kartinkiVDvizhenii = document.querySelector('.kartinkiVDvizhenii')
let kartinkiKatalog=[
    '/img/bomba2.jpg',
    '/img/molochko.jpg',
    '/img/balsam.jpg',
    '/img/mylo.jpg',
    '/img/sashe.jpg',
    '/img/bomba.jpg',
    '/img/mylo2.jpg'
]

for(let i=0;i<kartinkiKatalog.length;i++){
    kartinkiVDvizhenii.innerHTML+=`
    <div class='kartinkaFonom'>
    </div>` 
    let kartinkiFonom=kartinkiVDvizhenii.querySelectorAll('.kartinkaFonom')
    kartinkiFonom[i].style.backgroundImage=`url(${kartinkiKatalog[i]})`
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


//-----------------------------------------------------------------текст на картинках в движении------------------------------------------------------------------

const cytaty=['чистых мыслей и поступков... и чистых людей рядом',
'не сыпь мне соль на рану - а вот для упругости здоровой кожи очень даже сыпь','чем пахнет ваша весна?',
'праздновать жизнь вместе с продуктами @craftsoapgrodno',
'подарите себе и близким заботу ']

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

//-----------------------------------------------------------------верстка кнопок категорий------------------------------------------------------------------

let knopkiKategorij=document.querySelector('.knopkiKategorij')
for (let i=0;i<categorii.length;i++){
    const knopkaKategorii=document.createElement('button')
    knopkaKategorii.classList.add('kategorijaKnopka')
    knopkaKategorii.textContent=categorii[i]
    knopkiKategorij.appendChild(knopkaKategorii)
}


//-----------------------------------------------------------------верстка каталога------------------------------------------------------------------

let catalog=document.querySelector('.catalog')
for(let i=0;i<ishodnyeDannye.length;i++){
    const kartochkaKataloga=document.createElement('div')
    kartochkaKataloga.innerHTML=`<h2>${ishodnyeDannye[i].title}</h2>
    <p>${ishodnyeDannye[i].kratkoeOpisanie}</p>
    <p>${ishodnyeDannye[i].ves}</p>
    <h5 class='vyborKategorii'>${ishodnyeDannye[i].category}</h5>
    <img src='${ishodnyeDannye[i].img}' width='100px'/>
    <h4>${ishodnyeDannye[i].cena}</h4>
    <button class='podrobnosti'>Подробнее</button>
    `
    catalog.appendChild(kartochkaKataloga)
}
//-----------------------------------------------------------------сортировка по категориям------------------------------------------------------------------


let vyborKategorii=document.querySelectorAll('.vyborKategorii')

document.querySelectorAll('.kategorijaKnopka').forEach(item=>{    
    item.addEventListener('click',()=>{
        vyborKategorii.forEach(it=>{
            it.textContent.includes(item.textContent) ? (it.parentElement.style.display ='block') : (it.parentElement.style.display = 'none')
        })
    })
})

//-----------------------------------------------------------------подробности карточки------------------------------------------------------------------

let podrobnosti=document.querySelectorAll('.podrobnosti')

podrobnosti.forEach((it,index)=>{
    it.addEventListener('click',()=>{
        it.style.display='none'
        const knopkaZakrytija=document.createElement('button')
        knopkaZakrytija.textContent='закрыть'
        it.parentElement.classList.add('podrobnee')
        it.parentElement.appendChild(knopkaZakrytija)
        it.parentElement.querySelector('h2').before(knopkaZakrytija)

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

//------------------------------------------------------------------анимация---------------------------------------------------------------------------
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


