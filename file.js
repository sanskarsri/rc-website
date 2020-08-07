AOS.init({
            offset: 150,
            delay: 0,
            duration: 800
        });
    
        new fullpage('#fullpage',{
            autoScrolling: true,
            navigation: true,
            anchors: ['Home','Aboutus','News','Startups','Faculty','Contactus'],
            navigationTooltips:['Home','About Us','News','StartUps','Faculty Advisors','Contact'],
            // showActiveTooltip: true,
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        })
        let menuOpen=false;
        const hamburger = document.querySelector(".hamburger");
        const navlinks = document.querySelector(".nav-links");
        const links = document.querySelector(".nav-links li");
        hamburger.addEventListener("click",()=>{
          if(!menuOpen){
              hamburger.classList.add("animate");
          navlinks.classList.add("open");
          menuOpen=true;
          navlinks.addEventListener('click',function(){
            hamburger.classList.remove("animate");
            navlinks.classList.remove("open");
          menuOpen=false;
          });
          
          } else {
            hamburger.classList.remove("animate");
            navlinks.classList.remove("open");
          menuOpen=false;
          }    
        });