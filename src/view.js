// estas funciones son de ejemplo

export const renderItems = () => {
  return 'example';
};


document.querySelector("button").addEventListener("click", function() {
  document.querySelector("#tituloPag2").style.opacity=  1;
  document.querySelector("#titulo").style.opacity = 0;
  document.querySelector("h2").style.opacity = 0;
  document.querySelector("button").style.opacity = 0;
  document.querySelector("#gifPaises").style.opacity = 0;
});
