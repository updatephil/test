let tab=document.querySelector("tbody");

          let listeFilms=[
           {
             titre:"Spiderman",
             annee:"2011",
             realisateur:" Stanley cubrick" ,
           },
           {
             titre:"Seul sur Mars",
             annee:"2016",
             realisateur:"Spielberg" ,
           }
         ];

         function afficherListe(){

///// Parcours de la liste de films /////
       for(i=0; i < listeFilms.length;i++){

//// Creation des elements du tableau ///////
         let trElt=document.createElement("tr");
         let tdTitre=document.createElement("td");
         let tdAnnee=document.createElement("td");
         let tdReal=document.createElement("td");
         let tdSupp=document.createElement("td");
         let btnSupp=document.createElement("button");
         btnSupp.textContent="Supprimer" ;

         btnSupp.addEventListener("click",function(e){

         let parentElement = this.parentElement
         let parentElement2=parentElement.parentElement
         tab.removeChild(parentElement2);

         });

      /// affectation des valeurs des TD /////
           tdTitre.textContent=listeFilms[i].titre ;
           tdAnnee.textContent=listeFilms[i].annee ;
           tdReal.textContent=listeFilms[i].realisateur ;
       //// Placement elements dans tableau /////
           tab.appendChild(trElt);
           trElt.appendChild(tdTitre);
           trElt.appendChild(tdAnnee);
           trElt.appendChild(tdReal);
           trElt.appendChild(tdSupp) ;
           tdSupp.appendChild(btnSupp) ;
        }
};
afficherListe();
////////// Creation BTN AJOUTER ///////////
                 /// recupere div ajout /////
           let divAjout=document.getElementById("zoneAjout")

                 //// BTN AJOUTER creer + insertion dans la zone ajout////
           let btnAjout=document.createElement("button");
                btnAjout.textContent="Ajouter";
                btnAjout.classList.add("btn");
                btnAjout.classList.add("btn-primary");
                btnAjout.classList.add("btn-sm");
                btnAjout.classList.add("btnAJ");


           divAjout.appendChild(btnAjout);

               //// Action bouton AJOUTER //////
               btnAjout.addEventListener("click",function(){

                     //// Creation formulaire (champs de saisies,label,et Btn ENVOYER )////
                     let form=document.createElement("form");
                     form.classList.add("form-group");

                     let envoyer=document.createElement("input");
                     envoyer.type="submit";
                     envoyer.value='envoyer';
                     envoyer.classList.add("btn-danger");
                     envoyer.classList.add("btn-md");

                     let labelTitre=document.createElement("label");
                     labelTitre.textContent="Entrer un titre";
                     labelTitre.htmlFor="inputIdTitre";
                     labelTitre.id="labelIdTitre";

                     let inputTitre=document.createElement("input");
                     inputTitre.id="inputIdTitre";
                     inputTitre.classList.add("form-control");
                     inputTitre.attributes.required="required" ;


                     let labelAnnee=document.createElement("label");
                     labelAnnee.textContent="Entrer la date de realisation ";
                     labelAnnee.htmlFor="inputIdAnnee";
                     labelAnnee.id="labelIdAnnee";


                     let inputAnnee=document.createElement("input");
                     inputAnnee.id="inputIdAnnee";
                     inputAnnee.classList.add("form-control");

                     let labelReal=document.createElement("label");
                     labelReal.textContent="Entrer le realisateur";
                     labelReal.htmlFor="inputIdReal";
                     labelReal.id="labelIdReal";


                     let inputReal=document.createElement("input");
                     inputReal.id="inputIdReal";
                     inputReal.classList.add("form-control");

                           /////placement(replace btn ajouter) des elements dans zone ajout //////
                                   form.appendChild(inputTitre);
                                   form.appendChild(inputAnnee);
                                   form.appendChild(inputReal);
                                   form.appendChild(labelTitre);
                                   form.appendChild(labelAnnee);
                                   form.appendChild(labelReal);
                                   form.appendChild(envoyer);

                                    divAjout.replaceChild(form,btnAjout);


                            ///// Action submit  sur formulaire //////

                       form.addEventListener("submit",function(e){

                           //// recupere donnees saisies /////

                           let resultatTitre=inputTitre.value ;
                           let resultatAnnee=inputAnnee.value ;
                           let resultatReal=inputReal.value ;

                           ///   verfier date /////

                           let regEx=/^[0-9]{4}$/ ;
                             if (regEx.test(resultatAnnee)){

                               divAjout.replaceChild(btnAjout,form)

                           /////// Creation Nouvelle liste de films //////
                                listeFilms.push({titre:resultatTitre,annee:resultatAnnee,realisateur:resultatReal})
                                             //// initialise tableau /////
                                           while (tab.hasChildNodes()){
                                             tab.removeChild(tab.firstChild) ;
                                                 }
                                ///// Parcours de la liste de films /////
                                        afficherListe();

                                       }
                                       /// fin IF ///
                                   else {
                                       alert("date non reconnue")
                                       }

                        e.preventDefault();
                             });
                           /// fin action SUBMIT ///
                  });
                /// fin action AJOUTER  ////

        //////TRIE PAR DATE/NOM AVEC CLICK SUR COLONNES TITRE/ANNEE /////

                       //////  PAR DATE /////

                         /// /recupere la colonne date puis click dessus ///

                               document.getElementById("iconAnne").addEventListener("click",function(){

                                                     /// trie la liste de film par année ///
                                                       listeFilms.sort(function(a,b){
                                                         return (a.annee)-(b.annee);
                                                                 });

                                                           //// initialise tableau /////
                                                           while (tab.hasChildNodes()){
                                                             tab.removeChild(tab.firstChild) ;
                                                               }

                                                          /// recupere la liste triée et on l'affiche ////
                                                           afficherListe();

                               });
                          /// fin action click colonne DATE ///


                          //////  PAR TITRE /////

                            /// /recupere la colonne titre puis click dessus ///

                                  document.getElementById("iconTitre").addEventListener("click",function(){

                                                        /// trie la liste de film par année ///
                                                          listeFilms.sort(function(a,b){
                                                            return (a.titre.localeCompare(b.titre));
                                                                    });
                                                              //// initialise tableau /////
                                                              while (tab.hasChildNodes()){
                                                                tab.removeChild(tab.firstChild) ;
                                                                  }

                                                             /// recupere la liste triée et on l'affiche ////
                                                                    afficherListe();

                                  });
                             /// fin action click colonne TITRE ///
