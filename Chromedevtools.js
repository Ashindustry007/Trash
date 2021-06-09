function KeepClicking(){
   console.log("Clicking");
   document.querySelector("colab-toolbar-button#connect").click()
}setInterval(KeepClicking,60000)

#press F12 and run this code in Console so that colab session will not disconnect due to inactivity.
