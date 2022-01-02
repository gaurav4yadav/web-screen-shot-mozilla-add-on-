var d= document.getElementById("loader_div");
d.style.display="none";

window.onload = async function(){
    document.getElementById("bt1").onclick=async function(){
        var d= document.getElementById("loader_div");
        d.style.display="block";
      


       var sub=document.getElementById("input").value;
       if(sub==""){
        
        alert("please enter url , url cannot be empty");
        var d= document.getElementById("loader_div");
        d.style.display="none";


        return;
       }


    //    <a href="https://screenshot.abstractapi.com/v1/?api_key=dcad5cfdae6943efaf6c7c89faafe1b8&url=https://app.abstractapi.com/api/screenshot/tester" download></a>

        var url="https://screenshot.abstractapi.com/v1/?api_key=dcad5cfdae6943efaf6c7c89faafe1b8&url="+sub;

        downloadImage(url);

}

async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'image file name here'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    var d= document.getElementById("loader_div");
    d.style.display="none";
  }
}


        // var link = document.createElement('a');
