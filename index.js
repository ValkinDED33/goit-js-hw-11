import{S as d,i}from"./assets/vendor-BPdYXKAK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function p(o,t=1){const e=`https://pixabay.com/api/?key=48211039-b5a5e94b0d08467a34362de56&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=40`;try{const r=await fetch(e);if(!r.ok)throw new Error("Failed to fetch images");return await r.json()}catch(r){throw console.error("Error fetching images:",r),r}}function m(o){const t=document.querySelector(".gallery"),n=o.map(({webformatURL:a,largeImageURL:e,tags:r,likes:s,views:l,comments:u,downloads:f})=>`<div class="photo-card">
          <a href="${e}">
            <img src="${a}" alt="${r}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${s}</p>
            <p><b>Views:</b> ${l}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${f}</p>
          </div>
        </div>`).join("");t.innerHTML=n}const g=document.querySelector("#search-form");document.querySelector(".gallery");let c="",h=1;const y=new d(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",async o=>{if(o.preventDefault(),c=o.target.elements.searchQuery.value.trim(),!c){i.error({title:"Error",message:"Please enter a valid search term!"});return}try{const t=await p(c,h);if(t.hits.length===0){i.warning({title:"No Results",message:"No images found. Try another query."});return}m(t.hits),y.refresh()}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=index.js.map
