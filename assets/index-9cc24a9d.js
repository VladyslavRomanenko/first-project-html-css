(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();new Swiper(".Swiper",{slidesPerView:4,spaceBetween:18,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1200:{slidesPerView:4},768:{slidesPerView:2.5},320:{slidesPerView:1}}});(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",t),n.closeModalBtn.addEventListener("click",t);function t(){n.modal.classList.toggle("is-hidden")}})();(()=>{const n={openModalBtn:document.querySelector("[buy-now-modal-open]"),closeModalBtn:document.querySelector("[buy-now-modal-close]"),modal:document.querySelector("[buy-now-modal]")};n.openModalBtn.addEventListener("click",t),n.closeModalBtn.addEventListener("click",t);function t(){n.modal.classList.toggle("is-hidden")}})();
