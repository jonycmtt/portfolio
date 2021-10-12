/*function showDiv(){document.getElementById("animation").style.display="block"}function hideDiv(){document.getElementById("animation").style.display="none"}setTimeout("showDiv()",5e3),setTimeout("hideDiv()",15e3),*/window.addEventListener("load",function(){document.querySelector(".preloader").classList.add("opacity-0"),setTimeout(function(){document.querySelector(".preloader").style.display="none"},1e3)});const filterContainer=document.querySelector(".portfolio-filter"),filterBtns=filterContainer.children,totalFilterBtn=filterBtns.length,portfolioItems=document.querySelectorAll(".portfolio-item"),totalPortfolioItem=portfolioItems.length;for(let t=0;t<totalFilterBtn;t++)filterBtns[t].addEventListener("click",function(){filterContainer.querySelector(".active").classList.remove("active"),this.classList.add("active");const t=this.getAttribute("data-filter");for(let e=0;e<totalPortfolioItem;e++)t===portfolioItems[e].getAttribute("data-category")?(portfolioItems[e].classList.remove("hide"),portfolioItems[e].classList.add("show")):(portfolioItems[e].classList.remove("show"),portfolioItems[e].classList.add("hide")),"all"===t&&(portfolioItems[e].classList.remove("hide"),portfolioItems[e].classList.add("show"))});const lightbox=document.querySelector(".lightbox"),lightboxImg=lightbox.querySelector(".lightbox-img"),lightboxClose=lightbox.querySelector(".lightbox-close");lightboxText=lightbox.querySelector(".caption-text"),lightboxCounter=lightbox.querySelector(".caption-counter");let itemIndex=0;for(let t=0;t<totalPortfolioItem;t++)portfolioItems[t].addEventListener("click",function(){itemIndex=t,changeItem(),toggleLightbox()});function nextItem(){itemIndex===totalPortfolioItem-1?itemIndex=0:itemIndex++,changeItem()}function prevItem(){0===itemIndex?itemIndex=totalPortfolioItem-1:itemIndex--,changeItem()}function toggleLightbox(){lightbox.classList.toggle("open")}function changeItem(){imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src"),lightboxImg.src=imgSrc,lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML,lightboxCounter.innerHTML=itemIndex+1+" of "+totalPortfolioItem}lightbox.addEventListener("click",function(t){t.target!==lightboxClose&&t.target!==lightbox||toggleLightbox()});const nav=document.querySelector(".nav"),navlist=nav.querySelectorAll("li"),totalNavList=navlist.length,allSection=document.querySelectorAll(".section"),totalSection=allSection.length;for(let t=0;t<totalNavList;t++)navlist[t].querySelector("a").addEventListener("click",function(){for(let t=0;t<totalNavList;t++)allSection[t].classList.remove("back-section");for(let t=0;t<totalNavList;t++)navlist[t].querySelector("a").classList.contains("active")&&allSection[t].classList.add("back-section"),navlist[t].querySelector("a").classList.remove("active");this.classList.add("active"),showSection(this),window.innerWidth<1200&&asideSectionTogglerBtn()});function showSection(t){for(let t=0;t<totalSection;t++)allSection[t].classList.remove("active");const e=t.getAttribute("href").split("#")[1];document.querySelector("#"+e).classList.add("active")}function updateNav(t){for(let e=0;e<totalNavList;e++)navlist[e].querySelector("a").classList.remove("active"),t.getAttribute("href").split("#")[1]===navlist[e].querySelector("a").getAttribute("href").split("#")[1]&&navlist[e].querySelector("a").classList.add("active")}document.querySelector(".hire-me").addEventListener("click",function(){showSection(this),updateNav(this)});const navTogglerBtn=document.querySelector(".nav-toggler"),aside=document.querySelector(".aside");function asideSectionTogglerBtn(){aside.classList.toggle("open"),navTogglerBtn.classList.toggle("open");for(let t=0;t<totalSection;t++)allSection[t].classList.toggle("open")}navTogglerBtn.addEventListener("click",asideSectionTogglerBtn);