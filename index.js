import{s as g,i as a}from"./assets/vendor-DnUmO7qu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n="data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%23fff'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fff'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.131%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e",h="46835246-fc67a7cc3b6e50b199f619e07",y="https://pixabay.com/api/";function v(o){const s=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${y}?${s.toString()}`).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()})}const u=document.querySelector(".gallery-list"),L=new g(".large-img",{overlayOpacity:.7,captionsData:"alt",captionDelay:250,close:!0});function w(){u.innerHTML=""}function b(o){const s=o.map(r=>{const{webformatURL:l,largeImageURL:e,tags:t,likes:i,views:m,comments:p,downloads:d}=r;return`
       <li class="img-card">
        <a class="large-img" href="${e}">
        <div class="img-wrapper">
        <img
        class="small-img"
        src="${l}" 
        alt="${t}"/>
        </div>
        </a>
        <ul class="gallery-info">
          <li>
          <p class="info-text">Likes</p>
           <p class="info-number">${i}</p>
          </li>
            <li>
          <p class="info-text">Views</p>
           <p class="info-number">${m}</p>
          </li>
            <li>
          <p class="info-text">Comments</p>
           <p class="info-number">${p}</p>
          </li>
            <li>
          <p class="info-text">Downloads</p>
           <p class="info-number">${d}</p>
          </li>
   </ul>
    </li>
    `}).join("");u.insertAdjacentHTML("beforeend",s),L.refresh()}const x=document.querySelector(".search-form"),f=document.querySelector(".search-input"),c=document.querySelector(".loader");x.addEventListener("submit",S);function S(o){o.preventDefault(),c.classList.remove("visually-hidden");const s=o.target.querySelector("input").value.trim();if(!s){a.error({titleColor:"#fff",titleLineHeight:1.5,titleSize:"16px",message:"Please enter a search term.",maxWidth:"432px",position:"topRight",closeOnEscape:!0,icon:"error",iconUrl:n,theme:"dark",messageSize:"16px",messageLineHeight:1.5,messageColor:"#fff",backgroundColor:"#ef4040"}),f.value="",c.classList.add("visually-hidden");return}v(s).then(r=>{r.hits.length===0?(a.error({titleColor:"#fff",titleSize:"16px",titleLineHeight:1.5,messageSize:"16px",messageLineHeight:1.5,messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"432px",position:"topRight",closeOnEscape:!0,icon:"error",iconUrl:n,theme:"dark"}),w()):b(r.hits)}).catch(r=>{console.error("Error fetching images:",r)}).finally(()=>{console.log("Hiding loader"),f.value="",c.classList.add("visually-hidden")})}
//# sourceMappingURL=index.js.map
