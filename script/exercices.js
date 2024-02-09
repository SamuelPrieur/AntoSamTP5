//Récuperation des boutons

let reset = document.getElementById("reset");
let submit = document.getElementById("submit");

//Récupération des zones de code et d'affichage

let code = document.getElementById("code");
let display = document.getElementById("display");

//Récupératon de la zone de notification

let notif = document.getElementById("notif");

document.title = "Tailwind Tutorial | Exercice 1";

reset.addEventListener("click",function(){

    code.value = "<h1 class='text-gray-500'>Ce titre est actuellement gris, modifiez la classe pour le mettre en rouge</h1>"
    display.innerHTML = "<h1 class='text-gray-500'>Ce titre est actuellement gris, modifiez la classe pour le mettre en rouge</h1>"

})

let correctAnswer = "<h1 class='text-red-500'>Ce titre est actuellement gris, modifiez la classe pour le mettre en rouge</h1>"

code.value = "<h1 class='text-gray-500'>Ce titre est actuellement gris, modifiez la classe pour le mettre en rouge</h1>"
display.innerHTML = "<h1 class='text-gray-500'>Ce titre est actuellement gris, modifiez la classe pour le mettre en rouge</h1>"

submit.addEventListener("click",function(){

    if(code.value == correctAnswer){

        notif.innerHTML = '<div role="alert" class="alert alert-success"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><div><h3 class="font-bold">Bravo !</h3><div class="text-xs">Vous avez trouvé la bonne réponse.</div></div><button onclick="exo2()" class="btn btn-sm">Suivant</button></div>'
        console.log("true");
    }else{

        notif.innerHTML = '<div role="alert" class="alert alert-error"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Erreur ! Le code entré est invalide.</span></div>'
        console.log("false");
    }

})

function exo2(){

    document.title = "Tailwind Tutorial | Exercice 2";
    notif.innerHTML = "";

    reset.addEventListener("click",function(){

        code.value = '<p class="text-xl">Ce texte a actuellement une taille extra-large. Modifiez la classe pour ajuster la taille en large.</p>'
        display.innerHTML = '<p class="text-xl">Ce texte a actuellement une taille extra-large. Modifiez la classe pour ajuster la taille en large.</p>'
    })

    let correctAnswer = '<p class="text-lg">Ce texte a actuellement une taille extra-large. Modifiez la classe pour ajuster la taille en large.</p>'

    code.value = '<p class="text-xl">Ce texte a actuellement une taille extra-large. Modifiez la classe pour ajuster la taille en large.</p>'
    display.innerHTML = '<p class="text-xl">Ce texte a actuellement une taille extra-large. Modifiez la classe pour ajuster la taille en large.</p>'

    submit.addEventListener("click",function(){

        if(code.value == correctAnswer){
    
            notif.innerHTML = '<div role="alert" class="alert alert-success"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><div><h3 class="font-bold">Bravo !</h3><div class="text-xs">Vous avez trouvé la bonne réponse.</div></div><button onclick="exo3()" class="btn btn-sm">Suivant</button></div>'
            console.log("true");
        }else{
    
            notif.innerHTML = '<div role="alert" class="alert alert-error"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Erreur ! Le code entré est invalide.</span></div>'
            console.log("false");
        }
    
    })

}

function exo3(){

    document.title = "Tailwind Tutorial | Exercice 3";
    notif.innerHTML = "";

    reset.addEventListener("click",function(){

        code.value = '<div class="bg-blue-600 m-6 p-4"><p>Ceci est un contenu dans une boîte avec une couleur de fond bleue et une marge de 1.5rem. Modifiez la classe pour obtenir un contenu dans une boîte avec une couleur de fond verte (400) et une marge de 2.0rem.</p></div>'
        display.innerHTML = '<div class="bg-blue-600 m-6 p-4"<p>Ceci est un contenu dans une boîte avec une couleur de fond bleue et une marge de 1.5rem. Modifiez la classe pour obtenir un contenu dans une boîte avec une couleur de fond verte (400) et une marge de 2.0rem.</p></div>'
    })

    let correctAnswer = '<div class="bg-green-400 m-8 p-4"><p>Ceci est un contenu dans une boîte avec une couleur de fond bleue et une marge de 1.5rem. Modifiez la classe pour obtenir un contenu dans une boîte avec une couleur de fond verte (400) et une marge de 2.0rem.</p></div>'

    code.value = '<div class="bg-blue-600 m-6 p-4"><p>Ceci est un contenu dans une boîte avec une couleur de fond bleue et une marge de 1.5rem. Modifiez la classe pour obtenir un contenu dans une boîte avec une couleur de fond verte (400) et une marge de 2.0rem.</p></div>'
    display.innerHTML = '<div class="bg-blue-600 m-6 p-4"><p>Ceci est un contenu dans une boîte avec une couleur de fond bleue et une marge de 1.5rem. Modifiez la classe pour obtenir un contenu dans une boîte avec une couleur de fond verte (400) et une marge de 2.0rem.</p></div>'

    submit.addEventListener("click",function(){

        if(code.value == correctAnswer){
    
            notif.innerHTML = '<div role="alert" class="alert alert-success"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><div><h3 class="font-bold">Bravo !</h3><div class="text-xs">Vous avez trouvé la bonne réponse.</div></div><button onclick="exo3()" class="btn btn-sm">Suivant</button></div>'
            console.log("true");
        }else{
    
            notif.innerHTML = '<div role="alert" class="alert alert-error"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Erreur ! Le code entré est invalide.</span></div>'
            console.log("false");
        }
    
    })

}