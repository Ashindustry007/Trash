function KeepClicking(){
   console.log("Clicking");
   document.querySelector("colab-toolbar-button#connect").click()
}setInterval(KeepClicking,60000)
