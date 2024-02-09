//Récuperation des boutons

let reset = document.getElementById("reset");
let submit = document.getElementById("submit");

//Récupération des zones de code et d'affichage

let code = document.getElementById("code");
let display = document.getElementById("display");

//Récupératon de la zone de notification

let notif = document.getElementById("notif");

//Récupération des zone de consignes

let lecon = document.getElementById("lecon");
let consigne = document.getElementById("consigne")

document.title = "Tailwind Tutorial | Exercice 1";

lecon.innerHTML = "Tailwind CSS permet de styliser rapidement et efficacement votre interface en utilisant des classes prédéfinies. La classe text-gray-500 est utilisée pour définir la couleur du texte en gris. Vous pouvez facilement changer la couleur du texte en utilisant d'autres classes de couleur disponibles dans la documentation.";
consigne.innerHTML = "Dans le code suivant, changez la classe du texte pour obtenir une couleur différente. Utilisez l'une des classes de couleur de texte disponibles dans Tailwind CSS. Assurez-vous de comprendre comment les classes de couleur fonctionnent."

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

    lecon.innerHTML = "Tailwind CSS propose des classes utilitaires pour ajuster la taille du texte. La classe text-xl est utilisée pour définir la taille du texte comme extra-large. Vous pouvez expérimenter avec différentes classes de taille de texte pour atteindre le rendu souhaité.";
    consigne.innerHTML = "Modifiez la classe de taille du texte dans le code ci-dessous pour obtenir une taille différente. Utilisez l'une des classes de taille de texte disponibles dans Tailwind CSS. Assurez-vous de comprendre comment ces classes fonctionnent.";

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

    lecon.innerHTML = "Dans Tailwind CSS, vous pouvez styliser la couleur de fond d'un élément en utilisant des classes telles que bg-blue-300. De plus, les marges peuvent être ajustées à l'aide de classes comme m-4 pour une marge de 1.0rem.";
    consigne.innerHTML = "Modifiez la couleur de fond et la marge de la boîte dans le code ci-dessous pour obtenir un résultat différent. Utilisez les classes de couleur de fond et de marge disponibles dans Tailwind CSS. Assurez-vous de comprendre comment ces classes influencent le style de l'élément.";

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