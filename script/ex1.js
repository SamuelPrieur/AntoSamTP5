document.getElementsByTagName("button")[1].addEventListener("click",function(){

    document.getElementById("code").value = "<h1 class='text-gray-500'>Ce titre est actuellement gris, modifiez la classe pour le mettre en rouge</h1>"
    document.getElementById("display").innerHTML = "<h1 class='text-gray-500'>Ce titre est actuellement gris, modifiez la classe pour le mettre en rouge</h1>"

})



let correctAnswer = "<h1 class='text-red-500'>Ce titre est actuellement gris, modifiez la classe pour le mettre en rouge</h1>"

document.getElementById("code").value = "<h1 class='text-gray-500'>Ce titre est actuellement gris, modifiez la classe pour le mettre en rouge</h1>"
document.getElementById("display").innerHTML = "<h1 class='text-gray-500'>Ce titre est actuellement gris, modifiez la classe pour le mettre en rouge</h1>"

document.getElementsByTagName("button")[0].addEventListener("click",function(){

    if(document.getElementById("code").value == correctAnswer){

        
        console.log("true");
    }else{

        document.getElementById("notif").innerHTML = '<div role="alert" class="alert alert-error"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Error! Task failed successfully.</span></div>'
        console.log("false");
    }

})