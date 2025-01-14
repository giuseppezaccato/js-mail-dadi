/*-----MAIL-----*/

/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email */

const MailArrayAllowed = [
    "AriannaSole@gmail.com",
    "MatteoOceano@gmail.com",
    "LunaSilente@gmail.com",
    "MarcoTempesta@gmail.com",
    "AuroraBoreale@gmail.com",
    "LunaSilvana@gmail.com",
    "MatteoNordica@gmail.com"
]

let AddMail = prompt("Inserisci qui la tua email", "giuseppe@gmail.com");
let isMailAllowed = false;

console.log(!isMailAllowed); //* controllo cosa mi fornisce il contrario della variabile sopra stampandola!

// ? la versione con OR dentro alla condizione iniziale di FOR come adnrebbe scritta?
// ? for (i = 0; i < MailArrayAllowed.length || ; i++)
for (i = 0; i < MailArrayAllowed.length; i++) {
    if (MailArrayAllowed[i] == AddMail) /*oppure viceversa*/ {
        isMailAllowed = true
    }
}

if (isMailAllowed == true) {
    console.log(`Benvenuto alla Festa`, AddMail.split("@")[0])
    //!piccolo bonus .split applicato ad AddMail con [0] 
    //!per considerare solo il primo dei due "sottoarray" generati con lo split

} else {
    console.log(`Purtroppo Non sei Ammesso alla Festa`, AddMail.split("@")[0])
    //!piccolo bonus same as before!
}




