(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();fetch("https://saamirdamadi1.github.io/api-for-test-2/db.json").then(o=>o.json()).then(o=>{let i=o.map(r=>`
            <div class="w-[350px] ml-10 mt-4 mb-4 h-[400px] border-[1px] p-5 inline-block border-blue-950">
      <img src="${r.img}" class="w-[100px] h-[120px] mx-auto mt-3 object-contain" alt="${r.img}">
      <div class="w-full h-auto flex justify-center items-center">
        <h1 class="mt-3 text-center" style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2;  -webkit-box-orient: vertical;">${r.name}</h1>
        <h1 class="mt-3 text-center" style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2;  -webkit-box-orient: vertical;">${r.title}</h1>
      </div>
      <div class="w-full h-auto">
        <h2 class="mt-3 text-center text-amber-200 underline underline-offset-4 decoration-dotted  decoration-4 decoration-emerald-700">${r.price}</h2>
      </div>
      <div class="w-full h-auto pl-[5px]">
        <h3 class="mt-5 text-center" style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2;  -webkit-box-orient: vertical;">${r.des}</h3>
      </div>
      <div class="w-full h-auto">
        <h4 class="mt-6 text-center">${r.cat}</h4>
        <a href="https://bpm.shaparak.ir/pgwchannel/startpay.mellat" class="rounded-2xl mx-auto w-[50px] h-[30px] flex justify-center items-center mt-3 bg-amber-200">
        by
        </a>
      </div>
    </div>
        `);document.querySelector(".card").insertAdjacentHTML("afterbegin",i.join(""))}).catch(()=>{console.log("error")});
