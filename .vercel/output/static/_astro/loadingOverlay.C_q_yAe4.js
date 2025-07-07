const r=()=>{const t=document.createElement("div");t.className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50";const n=document.createElement("div");n.className="p-8 flex flex-col items-center animate-fade-in";const e=document.createElement("div");return e.className=`
    h-10 w-10
    rounded-full
    border-2
    border-green-400
    border-t-transparent
    animate-spin
    shadow-md
  `,n.appendChild(e),t.appendChild(n),t},a=()=>{document.querySelectorAll("form").forEach(t=>{t.addEventListener("submit",n=>{const e=r();document.body.appendChild(e),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},5e3)})})};export{a as s};
