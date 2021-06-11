window.onload=function(){
  
    try{

      loadAnimacija();
      navigacija();
      projekti();
      jezici();
      socials();
      page();

      VANTA.NET({
        el: document.getElementsByTagName("header")[0],
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        points: 9.00,
        spacing: 10.50,
        color:0x238caa,
        maxDistance: 17,
        backgroundColor: 0x140c2a,
      });
     
    }
    catch(err){
      console.log(err);
    } 
  }
  
  window.onscroll = function(){
      try{
        scrollAnimacija();
      }
      catch(err){
          console.log(err);
      }
  }
  
  let scrollAnimacija = () => {
  
      let scroll = window.scrollY;
    
      try{
    
        let objCircleNav = {
          klasa : "active",
          home : "home",
          about : "aboutt",
          work : "workk",
          contact : "contactt",
        };
       
        let scrollPageNav = () => {
          
          const bodyHeight = () => {
            const body = document.body,
            html = document.documentElement;
        
            const height = Math.max( body.scrollHeight, body.offsetHeight, 
              html.clientHeight, html.scrollHeight, html.offsetHeight );
            
            return height;
          }
          
          if(scroll< (bodyHeight()*0.23) ){
            $(`#${objCircleNav.home}`).addClass(objCircleNav.klasa);
            $(`#${objCircleNav.about}`).removeClass(objCircleNav.klasa);
          }
          if(scroll < (bodyHeight()*0.47) && scroll >= (bodyHeight()*0.23) ){
            $(`#${objCircleNav.home}`).removeClass(objCircleNav.klasa);
            $(`#${objCircleNav.about}`).addClass(objCircleNav.klasa);
            $(`#${objCircleNav.work}`).removeClass(objCircleNav.klasa);
          }
          if(scroll < (bodyHeight()*0.73) && scroll >= (bodyHeight()*0.47)){
            $(`#${objCircleNav.about}`).removeClass(objCircleNav.klasa);
            $(`#${objCircleNav.work}`).addClass(objCircleNav.klasa);
            $(`#${objCircleNav.contact}`).removeClass(objCircleNav.klasa);
          }
          if(scroll < bodyHeight() && scroll >= (bodyHeight()*0.73)){
            $(`#${objCircleNav.work}`).removeClass(objCircleNav.klasa);
            $(`#${objCircleNav.contact}`).addClass(objCircleNav.klasa);
          }
  
          let scrollNav = () => {
  
            let socials =  document.querySelectorAll('#social a');
            let pageLinks= document.querySelectorAll('.linkSidebarNav');
          
  
            if(scroll> (bodyHeight()*0.25)){
              // document.querySelector('.navIco').style.color='#333';
            }
            if(scroll > (bodyHeight()*0.125)){
              for(let i of socials){
                i.style.color='#333';
              }
              for(let i of pageLinks){
                i.style.color='#333';
                
              }
             
            }
            else{
              // document.querySelector('.navIco').style.color='#fff';
              for(let i of socials){
                i.style.color='#fff';
              }
              for(let i of pageLinks){
                i.style.color='#fff';
                
              }
           
            }
          }
          scrollNav();
        }
        
       
        scrollPageNav();
      }
      catch(err){
        console.log(err);
      }
    }
  
  
  let loadAnimacija = function(){
    
    try{
      
      let objLoadAnimacija = {
        opacityValue: 1,
        page: 'page',
        social: 'social',
        header: 'header',
        main: 'main',
        footer: 'footer',
       
      }
  
      let atribut = document.getElementById('loadAnimacija');
    
      let a = (i) => {
        // console.log(i++);
        i++;
        const maxVrednost = 100;
        if(i<maxVrednost){
          setTimeout(a,13,i);
        }
        atribut.setAttribute('value',i);
        document.querySelector('#procenat').innerHTML=`${i}%`;


         // JS load animation
    setTimeout(function(){

      document.getElementById(objLoadAnimacija.social).style.opacity = objLoadAnimacija.opacityValue;
      document.getElementById(objLoadAnimacija.page).style.opacity = objLoadAnimacija.opacityValue;
      document.getElementById(objLoadAnimacija.header).style.opacity = objLoadAnimacija.opacityValue;
      document.getElementById(objLoadAnimacija.main).style.opacity = objLoadAnimacija.opacityValue;
      document.getElementById(objLoadAnimacija.main).style.opacity = objLoadAnimacija.opacityValue;  
      document.getElementById(objLoadAnimacija.footer).style.opacity = objLoadAnimacija.opacityValue;  
      document.getElementById('load').style.display = 'none';  

    },1800);

      }
      a(0);
      
    }
  
    catch(err){
      console.log(err);
    }
    
  }
  
  
  //Nav
  
  let navigacija = () => {
    try{
      document.querySelector('.navIco').addEventListener('click',function(e){
        e.preventDefault();
        // console.log('kliknuto');
        document.querySelector('.small').classList.toggle('smallClick');
        // document.querySelector('.navOpen').classList.toggle('navOpened');
        document.querySelector('.navTextResponsive').classList.toggle('clickText');
        document.querySelector('.navIco').classList.toggle('animacija');
        document.querySelector('.navIco').classList.toggle('animacijaNazad');
        document.querySelector('#headline').classList.toggle('resavanjeZIndexaKodOtvaranjaNavigacije');
      });

     
    }
    catch(err){
      console.log(err);
    }
    
    let navIspis = () => {
      try{
  
        let objNav = [{
          link: "#about",
          text: "about"
        },
        {
          link: "#work",
          text: "work"
        },
        { link: "#contact",
        text: "contact"
  
        }];
  
        let ispis = (data) => {
          let html = ``;
          for(let i of data){
            html+=`
                <div class="link">
                    <a class="" href="${i.link}">${i.text}</a>
                    <div class="navLinkBorder"></div>
                </div>`;
          }
          document.querySelector('.big').innerHTML=html;
          document.querySelector('.navTextResponsive').innerHTML=html;
        }
        ispis(objNav);
       

        if ($(window).width() <= 768) {
          var linkovi = document.querySelectorAll('.link');
          console.log(linkovi);
          linkovi.forEach(link => {
            link.addEventListener('click',() => {
              // e.preventDefault();
              setTimeout(() => {
                 document.querySelector('.small').classList.toggle('smallClick');
                document.querySelector('.navTextResponsive').classList.toggle('clickText');
                document.querySelector('.navIco').classList.toggle('animacija');
                document.querySelector('.navIco').classList.toggle('animacijaNazad');
                document.querySelector('#headline').classList.toggle('resavanjeZIndexaKodOtvaranjaNavigacije');
              },450);
            });
          });
         
       }
      

      }
      catch(err){
        console.log(err);
      }
      
    }
    navIspis();
  }
  
  
  let projekti = () => {
    try{
  
      let projekat = [{
        id: 2,
        src: 'assets/img/projekti/urbanInfo1.png',
        alt: 'Urban Info',
        naslov: 'Urban Info',
        desc: 'Used Teleport public API for searching and displaying info about the cities and quality of life among them',
        tech: ['Bootstrap','Javascript','jQuery'],
        links: {
          domain: 'https://njevric.github.io/urban-info',
          code: 'https://github.com/NJevric/urban-info'
        }
      },
      {
        id: 1,
        src: 'assets/img/projekti/csa.png',
        alt: 'CSA Sports Management',
        naslov: 'CSA Sports Management',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloribus neque pariatur.',
        tech: ['Bootstrap','Javascript','MySQL','PHP'],
        links: {
          domain: 'https://csasportsmanagement.com/',
          code: 'https://github.com/NJevric/csaV2'
        }
      },
      {
        id: 2,
        src: 'assets/img/projekti/tech.png',
        alt: 'The Tech News',
        naslov: 'The Tech News Blog',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloribus neque pariatur.',
        tech: ['Bootstrap','Javascript','MySQL','PHP'],
        links: {
          domain: 'http://www.the-tech-news.epizy.com/cms/index.php',
          code: 'https://github.com/NJevric/tech-news'
        }
      },
      {
        id: 3,
        src: 'assets/img/projekti/fashionx.png',
        alt: 'FashionX Web Shop',
        naslov: 'FashionX Web Shop',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloribus neque pariatur.',
        tech: ['Bootstrap','Javascript','AJAX'],
        links: {
          domain: 'https://njevric.github.io/fashionx/',
          code: 'https://github.com/NJevric/fashionx'
        }
      },
      {
        id: 4,
        src: 'assets/img/projekti/skver44.png',
        alt: 'Skver 44',
        naslov: 'Skver 44',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloribus neque pariatur.',
        tech: ['Bootstrap','PHP'],
        links: {
          domain: 'http://skver44.rs/',
          // code: 'www.cao1.com'
        }
      },
      {
        id: 5,
        src: 'assets/img/projekti/blizu.png',
        alt: 'Blizu Restobar',
        naslov: 'Blizu Restobar',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloribus neque pariatur.',
        tech: ['Bootstrap','PHP'],
        links: {
          domain: 'http://blizu.rs/',
          // code: 'www.cao1.com'
        }
      },
      {
        id: 6,
        src: 'assets/img/projekti/galaxy.png',
        alt: 'The Evolution of S',
        naslov: 'The Evolution of S',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloribus neque pariatur.',
        tech: ['Bootstrap'],
        links: {
          domain: 'https://njevric.github.io/galaxy-telefoni/index.html',
          code: 'https://github.com/NJevric/galaxy-telefoni'
        }
      },
      {
        id: 7,
        src: 'assets/img/projekti/portfolio1.png',
        alt: 'Portfolio First Version',
        naslov: 'Portfolio 1st v.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat doloribus neque pariatur.',
        tech: ['HTML','Sass','XML'],
        links: {
          domain: 'https://njevric.github.io/portfolio1/',
          code: 'https://github.com/NJevric/portfolio1'
        }
      }
    ];
    // console.log(projekat);
    let ispis = (data) => {
  
      let html=``;
  
      for(let i of data){
        console.log(i);
        html += 

      `
      <div class="project">
      <div class="slika">
          <img src="${i.src}" alt="${i.alt}" data-id="${i.id}" alt="${i.naslov}"/>
          <a href="${i.links.domain}"></a>
      </div>
      <div class="projekatTekst">
          <h4>${i.naslov}</h4>
          <div class="description">
              <p>${i.desc}</p>
              <ul>
              `
              for(let j of i.tech){
                html+=`<li>${j}</li>`;
              }

              html+=`
              </ul>
          </div>
          <div class="linkovi">
              <a href="${i.links.domain}" class="button">Github Repo</a>
              <a href="${i.links.domain}" class="button">Check it out</a>
          </div>
      </div>
      
      
      
  </div>
      `
      
      ;
      
      }
      document.getElementById('projects').innerHTML=html;
  
  
    }
    console.log(projekat);
    ispis(projekat);
      
    }
    catch(err){
      console.log(err.message);
    }
  }
  
  let jezici = () => {
    try{
      let arrJezici = ['HTML5 / Bootstrap', 'CSS3 / Sass', 'Javascript(ES6)/ jQuery / Angular', 'PHP / Laravel', 'SQL, MySQL', 'ASP.NET'];
      let html = '<ul>';
      for(let i of arrJezici){
        html +=`<li><div class="techIconList"></div>${i}</li>`;
      }
      html+=`</ul>`;
      document.querySelector('.lista').innerHTML=html;
    }
    catch(err){
      console.log(err);
    }
  }
  
  
  let socials = () => {
    try{
      let objSocials = [
        {
          link:'https://github.com/NJevric',
          name: 'logo-github'
        },
        {
          link:'https://www.instagram.com/n_jevric/',
          name: 'logo-instagram'
        },
        {
          link:'https://www.linkedin.com/in/nikola-jevric-1a64601b9/',
          name: 'logo-linkedin'
        },
        {
          link:'https://github.com/NJevric',
          name: 'mail-outline'
        }];
      let html = ``;
  
      objSocials.forEach(i=>{
        html +=`  <a href="${i.link}"><ion-icon name="${i.name}" class="social"></ion-icon></a>`;
      });
      document.querySelector('#social').innerHTML=html;
      document.querySelector('#socialResponsive').innerHTML=html;
    }
    catch(err){
      console.log(err);
    }
  }
  
  let page = () => {
    try{
      let objPage = [
        {
          link:'#',
          id: 'home'
        },
        {
          link:'#about',
          id: 'aboutt'
        },
        {
          link:'#work',
          id: 'workk'
        },
        {
          link:'#contact',
          id: 'contactt'
        }];
      let html = ``;
  
      objPage.forEach(i=>{
        html +=`  <a href="${i.link}" class="linkSidebarNav"><ion-icon name="ellipse-outline" class="page_circle" id="${i.id}"></ion-icon></a>`;
      });
     
      document.querySelector('#page').innerHTML=html;
      
    }
    catch(err){
      console.log(err);
    }
  }
