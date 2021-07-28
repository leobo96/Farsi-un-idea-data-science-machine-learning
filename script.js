"use strict";

// Sezione dove salvo gli elementi in una variabile
const el_titolo = document.getElementById("titolo");
const el_indice = document.getElementById("indice");
const el_teoria = document.getElementById("teoria");
const el_quiz = document.getElementById("quiz");
const el_resources = document.getElementById("risorse");
const arrow_right_el = document.getElementById("arrow-right");
const arrow_left_el = document.getElementById("arrow-left");

// NAVIGATION FUNCTIONS & EVENT-LISTENERs
function change_to_theory() {
  el_indice.classList.add("hidden");
  el_quiz.classList.add("hidden");
  el_teoria.classList.remove("hidden");
  change_title("Teoria");
  el_titolo.classList.remove("text-centered");
}
function change_to_question() {
  el_teoria.classList.add("hidden");
  el_quiz.classList.remove("hidden");
  change_title("Domanda");
  el_titolo.classList.remove("text-centered");
}
function change_to_index() {
  el_quiz.classList.add("hidden");
  el_teoria.classList.add("hidden");
  el_resources.classList.add("hidden");
  el_indice.classList.remove("hidden");
  change_title("Indice");
  el_titolo.classList.add("text-centered");
}
function change_to_resources() {
  el_indice.classList.add("hidden");
  el_resources.classList.remove("hidden");
  change_title("Risorse");
}
document
  .querySelectorAll(".to-indice")
  .forEach((el) => el.addEventListener("click", change_to_index));
document
  .querySelector(".to-quiz")
  .addEventListener("click", change_to_question);
document
  .querySelector(".to-teoria")
  .addEventListener("click", change_to_theory);

// END NAVIGATION

function change_title(string) {
  document.getElementById("titolo").textContent = string;
}
function set_page(array, page_number) {
  el_teoria.querySelector("p").innerHTML = array[page_number];
  page_number + 1 < array.length
    ? arrow_right_el.classList.remove("hidden")
    : arrow_right_el.classList.add("hidden");
  page_number - 1 >= 0
    ? arrow_left_el.classList.remove("hidden")
    : arrow_left_el.classList.add("hidden");
}
function show_content(content, n_pagina) {
  set_page(content, n_pagina);

  arrow_right_el.addEventListener("click", function () {
    n_pagina++;
    if (n_pagina < content.length) {
      set_page(content, n_pagina);
    }
  });

  arrow_left_el.addEventListener("click", function () {
    n_pagina--;
    if (n_pagina >= 0) {
      set_page(content, n_pagina);
    }
  });
}
// QUIZ
const domande = [
  {
    domanda:
      "Quale tra queste professioni non è presente in un team di data science?",
    risposte: {
      a: "Data Engineer",
      b: "Data Scientist",
      c: "Data Entry",
      d: "Machine learning engineer",
    },
    corretta: "Data Entry",
  },
  {
    domanda: "Un SMS è un tipo di dato..",
    risposte: {
      a: "Semantico",
      b: "Strutturato",
      c: "Non strutturato",
      d: "Semi Strutturato",
    },
    corretta: "Semi Strutturato",
  },
  {
    domanda: "Fogli di calcolo, SQL e Python sono esempi di",
    risposte: {
      a: "Ecosistema dei dati",
      b: "Strumenti del Data Analyst",
      c: "Linguaggi di programmazione",
      d: "Kit per la Data Science",
    },
    corretta: "Strumenti del Data Analyst",
  },
  {
    domanda: "Velocità, Volume e..",
    risposte: {
      a: "Visibilità",
      b: "Vastità",
      c: "Trasparenza",
      d: "Varietà",
    },
    corretta: "Varietà",
  },
  {
    domanda: "La pulizia dei dati è un'attività...",
    risposte: {
      a: "Semplice, alla portata di tutti",
      b: "Inutile e dunque trascurabile",
      c: "Dispendiosa in termini di tempo",
      d: "Svolta solo dal Data Engineer",
    },
    corretta: "Dispendiosa in termini di tempo",
  },
  {
    domanda:
      "Quale tra queste affermazioni NON è associata al machine learning",
    risposte: {
      a: "Si basa su regole precise decise a priori",
      b: "È una branca dell'intelligenza artificiale",
      c: "Riguarda un insieme di algoritmi",
      d: "Può essere usato per tradurre testi",
    },
    corretta: "Si basa su regole precise decise a priori",
  },
  {
    domanda:
      "Il clustering consiste nella creazione automatica di sottogruppi. A quale approccio fa riferimento?",
    risposte: {
      a: "Apprendimento rinforzato",
      b: "Apprendimento semi-supervisionato",
      c: "Apprendimento non supervisionato",
      d: "Apprendimento supervisionato",
    },
    corretta: "Apprendimento non supervisionato",
  },
  {
    domanda: "Cosa NON è la Data Science?",
    risposte: {
      a: "L'attività svolta dal Data Scientist",
      b: "L'estrazione di intuizioni dai Big Data ",
      c: "Un modo accattivante per riferirsi alla statistica",
      d: "Una disciplina che ha i suoi metodi e i suoi ricercatori",
    },
    corretta: "Un modo accattivante per riferirsi alla statistica",
  },
  {
    domanda:
      "Quando un'azienda può decidere di assumere un machine learning engineer?",
    risposte: {
      a: "Per intuire in che periodo dell'anno i clienti sono più disposti a fare acquisti",
      b: "Per creare un algoritmo di apprendimento automatico complesso",
      c: "Per la rilevazione di anomalie",
      d: "Per essere competitiva sul mercato",
    },
    corretta: "Per creare un algoritmo di apprendimento automatico complesso",
  },
  {
    domanda: "Qual è la prima fase che avvia il processo di data science?",
    risposte: {
      a: "Analisi dei dati",
      b: "Comunicazione",
      c: "Problem solving",
      d: "Definizione del problema",
    },
    corretta: "Definizione del problema",
  },
];

const domanda_el = document.getElementById("domanda");
const risp1_el = document.getElementById("risp1");
const risp2_el = document.getElementById("risp2");
const risp3_el = document.getElementById("risp3");
const risp4_el = document.getElementById("risp4");
const successMessage_el = document.getElementById("success-message");

let QuestionIndex = 0;

function resetAnswer(first_el, second_el, third_el, fourth_el) {
  first_el.classList.remove("incorrect-ans");
  first_el.classList.remove("correct-ans");

  second_el.classList.remove("incorrect-ans");
  second_el.classList.remove("correct-ans");

  third_el.classList.remove("incorrect-ans");
  third_el.classList.remove("correct-ans");

  fourth_el.classList.remove("incorrect-ans");
  fourth_el.classList.remove("correct-ans");
}
function setQuestion(index) {
  resetAnswer(risp1_el, risp2_el, risp3_el, risp4_el);
  successMessage_el.classList.add("hidden");

  domanda_el.textContent = domande[index].domanda;
  risp1_el.textContent = domande[index].risposte.a;
  risp2_el.textContent = domande[index].risposte.b;
  risp3_el.textContent = domande[index].risposte.c;
  risp4_el.textContent = domande[index].risposte.d;
}
function evaluate(html_el) {
  if (html_el.textContent === domande[QuestionIndex].corretta) {
    html_el.classList.add("correct-ans");
    successMessage_el.classList.remove("hidden");
  } else {
    html_el.classList.add("incorrect-ans");
  }
}

risp1_el.addEventListener("click", (e) => {
  evaluate(e.target);
});
risp2_el.addEventListener("click", (e) => {
  evaluate(e.target);
});
risp3_el.addEventListener("click", (e) => {
  evaluate(e.target);
});
risp4_el.addEventListener("click", (e) => {
  evaluate(e.target);
});

// ARGOMENTI

function setTheory(title, array) {
  change_to_theory();
  change_title(title);
  show_content(array, 0);
}

function introduzione() {
  const content_introduzione = [
    "I dati sono ovunque.<br><br> Ogni giorno, senza accorgercene, facciamo analisi di dati.<br><br>Ogni volta che leggiamo le recensioni di un prodotto prima di decidere di comprarlo, stiamo facendo un'analisi di dati. Ogni volta che indossiamo un dispositivo che conta i passi per decidere se siamo stati abbastanza attivi durante il giorno stiamo facendo analisi di dati.<br><br>",
    "Non ci limitiamo tuttavia a usare i dati per prendere decisioni. Ogni giorno creiamo una quantità enorme di nuovi dati, per esempio utilizzando lo smartphone per guardare qualcosa online, fare una ricerca su Google, creare un post sui social network, ascoltando musica online o utilizzando il gps per avere indicazioni stradali.<br><br>Nel mondo digitale, dove sono presenti milioni di smartphone e altri dispositivi smart connessi ad internet, la quantità di dati prodotti può essere sorprendente. Ed è persino destinata a aumentare con l'avvento della internet of things, ossia una rete di oggetti d'uso quotidiano o di sensori tutti interconnessi e capaci di scambiarsi informazioni e prendere decisioni senza l'ausilio umano.<br><br>",
    "Non per altro l'Economist ha definito i dati la risorsa di maggior valore del mondo. (Persino maggiore del petrolio!)<br><br>Le aziende ne hanno colto l'importanza e utilizzano i dati per ottimizzare i processi aziendali, identificare opportunità e trend, lanciare nuovi prodotti, offrire un miglior servizio ai clienti e in generale per prendere decisioni più informate. Oggi per le aziende è diventato cruciale sfruttare il potenziale dei dati per vincere la concorrenza.<br><br>Per questo motivo sempre più aziende mettono su dei team di data science, composti da figure di vario tipo: data analyst, data scientist, data engineer, machine learning engineer.<br><br>In questo corso vedremo come avviene il processo di estrazione del valore dai dati e il ruolo delle varie figure coinvolte.",
  ];

  setTheory("1. Introduzione", content_introduzione);

  QuestionIndex = 0;
  setQuestion(QuestionIndex);
}
function dati() {
  const content_dati = [
    "Partiamo dalle basi: cosa sono i dati?<br><br>I dati possono essere definiti come una collezione di fatti. Questa collezione può includere dati di diverso tipo come numeri, immagini, video, parole, misurazione e altri.<br><br>Tradizionalmente i dati sono divisi in dati strutturati, dati non strutturati e dati semi-strutturati.<br><br>",
    "I dati strutturati sono quelli organizzati un database. Un database non è altro che un insieme di tabelle, organizzate in righe e colonne e messe in relazione tra di loro attraverso delle 'chiavi primarie'.<br><br>In un database le varie caratteristiche di un dato sono messe sulle colonne e prendono il nome di campi. Immaginiamo di avere i dati di una persona: il nome, il cognome, la data di nascita e la residenza sono i campi della tabella 'Persone'.<br><br>Le righe invece prendono il nome di record e corrispondono alle singole istanze. Nel nostro caso una prima riga avrà i dati di Mario Rossi nato a Milano il 30 Ottobre 1990; una seconda riga avrà i dati di Giuseppe Verdi nato a Roma il 27 Febbraio 1975.<br><br>I dati strutturati sono i più semplici da gestire e analizzare. Altri tipi di dato sono di solito ricondotti a questa forma.<br><br>",
    "I dati non strutturati sono invece dati 'grezzi'. I dati hanno questa forma prima di essere organizzati e per immaginarseli basta pensare ad una collezione di immagini, un insieme di testi o anche una serie di misurazioni fatte con un particolare strumento. I dati multimediali in generale sono non strutturati.<br><br>I dati semi-strutturati sono invece una via di mezzo. Il modo migliore di pensarli è la mail. Ogni mail ha dei dati etichettati come il destinatario, il mittente, l'ora di invio, ma presenta dati non strutturati nel corpo, che può contenetere di base un testo, ma anche immagini e allegati di vario tipo.<br><br>",
  ];

  setTheory("2. Dati", content_dati);

  QuestionIndex = 1;
  setQuestion(QuestionIndex);
}
function data_analytics() {
  const content_data_analytics = [
    "I dati nudi e crudi possono essere belli da ammirare nella loro dimensione e varietà, ma da soli non servono a molto.<br><br>Una volta ottenuti i dati bisogna analizzarli.<br><br>Prima di addentrarsi in maggiori dettagli, è utile definire alcuni concetti come quello di 'data analytics'. Dobbiamo però partire da chi è il data analyst e cosa si intende per ecosistema dei dati.<br><br>",
    "Il data analyst è la figura che si occupa dell'analisi dei dati. Dunque, è una persona capace di pensare in modo analitico, raccogliere i dati, trasformarli, organizzarli e utilizzare strumenti di analisi dei dati per ricavare informazioni utili a prendere decisioni. Non solo: il data analyst deve anche essere capace di comunicare i risultati delle sue analisi ai decisori in un linguaggio che sia semplice ed efficace. Per cui il data analyst è esperto anche di Data Visualization, la disciplina che studia come comunicare i dati.<br><br>Il kit di strumenti essenziali per il data analyst sono principalmente di tre tipi: <ol><li>I fogli di calcoli, ossia software come Excel</li><li>I linguaggi di interrogazione dei data base, tra cui il più importante e diffuso è sicuramente SQL</li><li>Software o linguaggi di visualizzazione dei dati, tra cui spiccano Tableau, R e il linguaggio Python.</li></ol>",
    "È importante notare che la scoperta di informazioni interessanti nei dati necessita non solo di padroneggiare gli strumenti essenziali, ma anche di informazioni specifiche relative ad uno o più settori industriali, in modo che per domande particolarmente complesse si possa avere una bussola che guida l'analisi. Per questo motivo esistono diverse specializzazioni per il data analyst.<br><br>Alcuni esempi sono:<ul><li>Business Analyst, che analizza i dati per aiutare l'azienda a migliorare i processi, i prodotti o i servizi</li><li>Business intelligence analyst, che analizza i dati finanziari e di mercato per avere intuizioni per la strategia aziendale</li><li>Financial analyst, che analizza i dati finanziari la situazione finanziaria dell'azienda monitorando dati come livello di debito e cashflow</li><li>Marketing analyst, che analizza le condizioni di mercato per valutare opportunità per niovi prodotti o servizi</li><li>Web analyst, che analizza le il comportamento degli utenti di un sito web per migliorare le visite, le conversioni di utenti in clienti o per valutare la bontà dell'esperienza utente</li></ul>",
    "Passiamo ora all'ecosistema dei dati.<br><br>L'ecosistema dei dati è fatto da vari elementi che interagiscono tra di loro per produrre, gestire, conservare, organizzare, analizzare e condividere i dati. Questi elementi includono strumenti hardware e software e le persone che li utilizzano.<br><br>",
    "Quando si parla di ecosistema dei dati si fa anche un implicito riferimento a una qualcosa chiamato 'cloud'.<br><br>Il cloud è il posto dove vengono conservati i dati online. Non si tratta di un posto fisico, come potrebbe essere un disco rigido di un computer, ma di un luogo virtuale, accessibile in qualsiasi momento da qualsiasi dispositivo connesso ad internet. L'idea base è che decine, se non centiaia di computer, si comportano come se fossero una cosa sola.<br><br>Molte volte i dati possono avere una dimensione talmente massiva da non poter essere conservati su un solo dispositivo nè possono essere elaborati da un solo computer, in quanto sarebbe necessaria una potenza di calcolo altrettanto grande. Il cloud risolve problemi di questo tipo fornendo la memoria e la potenza di calcolo di centinaia di computer che agiscono insieme.<br><br>",
    "Data analytics è un concetto che raccoglie tutti gli aspetti trattati fin'ora. Dall'idea di utilizzare i dati per guidare le decisioni, al lavoro svolto dai data analyst all'insieme di strumenti e metodi che chi lavora nel mondo dei dati utilizza ogni giorno (ecosistema).<br><br>",
  ];

  setTheory("3. Data Analytics", content_data_analytics);

  QuestionIndex = 2;
  setQuestion(QuestionIndex);
}
function big_data() {
  const content_big_data = [
    "Negli ultimi anni l'ecosistema dei dati è diventato decisamente più complesso.<br>Questo perchè, come abbiamo detto, i dati possono acquisire una dimensione enorme tale da richiedere tecniche come il cloud computing per essere gestiti.<br>Dall'altro lato, le aziende stanno imparando a ricavare valore da dati sempre più vari: non solo numeri, ma anche immagini, testi e altri formati multimediali.<br><br>Un nuovo termine si è aggiunto al vocabolario dell'ecosistema dei dati: Big Data.<br><br>Di cosa si tratta?",
    "Il primo scoglio da affrontare è che non esiste una definizione universalmente accettata del termine big data.<br><br> L'azienda di consulenza Ernst and Young li definisce così:<br><br>'Big data si riferisce al grande e disparato volume di dati che sono creati da persone, strumenti e macchine. Richiedono tecnologie nuove, innovative e scalabili per essere raccolti, conservati e processati analiticamente al fine di trarre intuizioni in tempo reale relative ai consumatori, i rischi, i profitti, le performance, la gestione della produttività e valore aggiunto per gli azionisti.'",
    "Da notare come questa definizione si focalizza su alcuni aspetti particolari come:<ul><li>La grandezza dei dati e la diversità di fonti</li><li>La possibilità di trarre intuizioni in tempo reale per beneficiare il business</li><li>La necessità di tecnologie innovative per gestirli</li></ul>",
    "Un'altra idea abbastanza condivisa è che i big data si caratterizzano per un certo numero di 'V'. Qualcuno sostiene 3 'V', qualcun'altro 5, qualcuno ne ha individuate più di 20.<br><br>Cosa sono queste 'V'?<br><br>Nel modello a 3 'V' si sostiene che i Big data siano caratterizzati da:<br><br><ol><li>Velocità, che si riferisce alla velocità con cui i dati sono accumulati. In alcuni casi l'accumulo di dati è un processo 'real-time' che non si ferma mai. Basta pensare che ogni 60 secondi, ore di video sono caricare su youtube e alla velocità con cui i dati si accumulano in ore, giorni e anni.</li><li>Volume, che si riferisce alla quantità di dati che vengono conservati. La popolazione mondiale è di circa 7 miliardi e la grande maggioranza utilizza dispositivi come smartphone, computer e dispositivi indossabili, ognuno dei quali produce dati. Circa 2.5 quintilioni di bytes ogni giorno!</li><li>Varietà, che si riferisce alla diversità dei formati di dati. Immagini, testi, video, suoni, dati sulla salute, ecc.</li></ol>",
  ];

  setTheory("4. Big Data", content_big_data);

  QuestionIndex = 3;
  setQuestion(QuestionIndex);
}
function big_data_analytics() {
  const content_big_data_analytics = [
    "Un'altra delle 'V' sulle quali c'è un relativo accordo, riguardo i big data è la V di Valore.<br><br>Valore si riferisci all'abilità di trasformare i dati in valore. Il valore non si riferisce solo al profitto, ma anche a benefici medici, sociali così come alla soddisfazione di clienti e dipendenti.<br><br>Generare valore dai big data è un'attività tutt'altro che semplice e come abbiamo visto dalla definizione di Ernst and Young richiede di padroneggiare tecnologie innovative per gestirli prima di tutto, e in secondo luogo analizzarli.<br><br>La figura professionale protagonista dell'era dei big data è senza dubbio il Data scientist.",
    "Abbiamo già incontrato una figura professionale capace di trarre valore dai dati. Il data analyst infatti è capace di indossare il cappello da detective e cercare risposte alle domande di business nei dati.<br><br>Tuttavia, come abbiamo già detto, i big data richiedono competenze statistiche avanzate e strumenti più complessi. Infatti, una quantità elevata di dati consente l'utilizzo di nuovi potenti strumenti, come ad esempio il machine learning. Il machine learning si riferisce ad algoritmi di apprendimento automatico che offrono principalmente due tipi di opportunità: quella di elaborare i dati in modo automatico ricercando regolarità statistiche e quella di fare previsioni basandosi sui dati passati.",
    "Il data scientist dunque è una persona capace di estrarre valore analizzando i big data attraverso analisi statistiche avanzate e implementando algoritmi di apprendimento automatico. È interessante sottolineare che il data scientist è capace non solo di rispondere a domande del tipo 'che cosa è successo', ma anche a domande del tipo 'cosa succedera?'<br><br>Vedremo più nel dettaglio cosa si intende per machine learning e in cosa consiste la data science. Per completare il quadro tuttavia abbiamo bisogno di conoscere un'altra figura: il data engineer.",
    "Per riuscire a fare 'magie' i data scientist hanno bisogno di dati. Ma non tutti i dati sono utilizzabili: c'è bisogno di dati 'puliti'.<br><br>Questo significa che i dati grezzi e incasinati devono essere convertiti in un formato consistente che può essere usato all'interno degli sturmenti del data scientist.<br><br>La pulizia dei dati, che può sembrare un'attività che non richiede grandi competenze, può tuttavia diventare incredibilmente difficile e richiedere molto tempo quando la grandezza dei dati è rilevante. Si dice che il data scientist può spendere l'80% del suo tempo a fare 'data wrangling' - districamento - prima che i dati siano pronti per essere analizzati. Una vera e propria inefficienza.<br><br>Qui viene in aiuto il data engineer, che utilizza principalmente linguaggi di programmazione come Python e R, ma anche algoritmi di apprendimento automatico, per preparare i dati e immagazzinari per bene nei data warehouse - veri e propri magazzini di dati strutturati.",
    "Abbiamo dunque ampliato il campo della data analytics, includendo tutte le tecnologie e le persone coinvolte nella gestione e analisi dei big data.<br><br> Nel prossimo argomento vedremo nel dettaglio in cosa consiste il machine learning.",
  ];
  setTheory("5. Big Data Analytics", content_big_data_analytics);

  QuestionIndex = 4;
  setQuestion(QuestionIndex);
}
function machine_learning() {
  const content_machine_learning = [
    "Abbiamo visto che quando i dati hanno una mole elevata c'è bisogno di strumenti più potenti per ricavare spunti utili per i decisori.<br><br>Uno di questi strumenti sono gli algoritmi di apprendimento automatico, raggruppati sotto il nome di Machine Learning.",
    "Il machine learning è una branca dell'intelligenza artificiale che cerca di costruire computer capaci di imparare a svolgere un determinato compito senza essere specificatamente programmati. Cioè, questi algoritmi non svolgono un compito basandosi su regole decise a priori, ma imparano da soli e migliorano nutrendosi di dati. Un po' come un bambino che apprende facendo numerose prove ed errori.",
    "A livello più tecnico, gli algoritmi di machine learning fanno affidamento sulla creazione di sofisticati modelli analitici i quali vengono 'addestrati' a riconoscere schemi in particolari insiemi di dati. Dopo la fase di addestramento vengono poi lasciati liberi di applicare questi schemi a sempre più dati. Ciò permette di ottenere performance sempre migliori nello specifico compito per cui sono stati pensati.<br><br>Per esempio, il machine learning permette di avere algoritmi di riconoscimento di immagini sempre più accurati. I programmatori umani forniscono un insieme di immagini relativamente piccoli che vengono etichettate per esempio come 'gatto' e 'non gatto'. L'algoritmo viene poi esposto a un grandissimo numero di immagini dalle quali si può imparare a riconoscere sempre meglio.",
    "Il tipo più comune di Machine learning è quello che impara l'associazione 'da A a B' o anche detta mappatura tra input e output.<br><br>All'algoritmo vengono forniti i dati in ingresso e quelli che ci si aspetta in uscita e il suo compito è quello di trovare la regola che collega questi due dati.<br><br>Questi sono alcuni esempi di applicazioni:<ol><li>L'algoritmo di riconoscimento vocale impara ad associare un contenuto audio e un trascritto di un testo in modo sempre più accurato</li><li>L'algoritmo di traduzione automatica impara ad associare un contenuto in una lingua e il contenuto in un'altra lingua</li><li>L'algoritmo di riconoscimento delle immagini impara ad associare un'immagine a una categoria del tipo 'X' e 'non X'.</li></ol>",
    "Tra le altre, l'applicazione di machine learning forse più lucrativa al momento è legata alla publicità online. Un algoritmo di machine learning che riceve in input delle pubblicità con varie caratteristiche e alcune informazioni personali degli utenti cerca di associare la combinazione di caratteristiche utente/pubblicità al fatto che l'utente clicchera o meno sulla pubblicità. Con questo meccanismo si cerca di proporre delle pubblicità mirate sempre più precise.<br><br>È interessante notare che nella progettazione del compito che si vuole far apprendere alla macchina, una parte fondamentale del processo riguarda la selezione delle 'features', ossia caratteristiche dei dati che si ritiene utili per comprendere il problema e che aiutano la macchina ad imparare.",
    "Gli algoritmi di Machine Learning che operano cercando la regola che porta a B dato A vengono chiamati 'supervised learning' - apprendimento supervisionato. Questo perchè per funzionare richiedono una fase di addestramento supportata da un essere umano che guida la macchina giudicando le risposte fornite dalla macchina come giuste o sbagliate. Non è però l'unico approccio.<br><br>Vedremo adesso più nel dettaglio i diversi approcci di machine learning e i diversi problemi che possono risolvere.",
  ];
  setTheory("6. Machine Learning", content_machine_learning);

  QuestionIndex = 5;
  setQuestion(QuestionIndex);
}
function machine_learning_categories() {
  const content_machine_learning_categories = [
    "Esistono tanti algoritmi di machine learning. Non esiste infatti un algoritmo generale che funziona bene per tutti i problemi. Ogni problema ha le sue particolarità e necessita dell'algoritmo adatto.<br><br>Abbiamo già visto che per problemi di mappatura tra input e output esistono algoritmi che rientrano nella categoria di 'Apprendimento supervisionato'. Ma è solo uno degli approcci. Ogni approccio inoltre è più o meno adatto per risolvere un particolare problema. Vediamo insieme quali sono gli approcci possibili e il tipo di problemi che è possibile affrontare con ogni approccio.<br><br>",
    "Gli algoritmi di Machine learning possono seguire 4 approcci:<ul><li>Apprendimento supervisionato,</li><li>Apprendimento non supervisionato, </li><li>Apprendimento semi-supervisionato</li><li>Apprendimento rinforzato.</li></ul>",
    "Gli algoritmi di apprendimento supervisionato, come abbiamo detto in precedenza, ricevono i dati di input e il risultato che ci si attende. Il risultato atteso può essere una categoria scelta in un insieme finito oppure un numero.<br><br>Per comprendere meglio, immaginiamo un algoritmo che riceve in input la temperatura e si vuole che venga fornito il numero di visitatori di una spiaggia. Il numero di visitatori può essere una categoria del tipo 'alto', 'basso', 'medio', oppure può essere un numero preciso - diciamo 300. Il compito dell'algoritmo è quello di trovare la regola che associa la temperatura al numero di visitatori, in modo che si possa fare una previsione.<br><br><ul><li>Quando ci si attende come risultato una categoria, si parla di algoritmo di classificazione.</li><li>Quando invece ci si attende un valore numerico, si parla di 'Regressione'.</li></ul>",
    "Gli algoritmi di apprendimento non supervisionato ricevono invece solo dati in input. Non ci sono esempi di output etichettati ai quali puntare. L'obiettivo è quello di riconoscere delle regolarità statistiche.<br><br>Un esempio di problema è quello di ordinare diverse monete colorate in pile separate. Un essere umano lo fa guardando caratteristiche come il colore o la grandezza, senza il bisogno di qualcuno che dica esattamente cosa guardare. Si vuole che la macchina imiti questo comportamento.",
    "L'approccio non supervisionato viene utilizzato per particolari problemi come il clustering automatico e la rilevazione di anomalie.<br><br><ul><li>Clustering è il tentativo di trovare sottogruppi con caratteristiche differenti all'interno di un insieme di dati. Non si è limitati da un numero di etichette da assegnare, perciò l'algoritmo è libero di scegliere quanti cluster creare. Gli algoritmi di clustering sono alla base dei motori di raccomandazione, che si appoggiano all'idea che sottogruppi di utenti simili hanno gusti simili.</li><li>La rilevazione di anomalie invece consiste nell'identificazione di elementi rari o inusuali che differiscono dalla maggioranza dei dati. Questi algoritmi sono alla base della rilevazione di attività fraudolente da parte delle banche. Se le tue normali abitudini di spesa rientrano in un certo intervallo di comportamenti e valori monetari, il tentativo di utilizzo illecito della tua carta può essere rilevato con un algoritmo di apprendimento non supervisionato.</li></ul>",
    "Questi primi due approcci sono sicuramente quelli più diffusi. La differenza principale è che nell'approccio supervisionato, l'essere umano guida la macchina nel processo di addestramento, fornendo il risultato atteso. L'approccio non supervisionato è invece più complesso, perchè con la rimozione della supervisione il problema diventa meno definito. L'algoritmo ha una idea meno precisa delle caratteristiche da guardare.",
    "L'apprendimento semi-supervisionato è un mix tra l'approccio supervisionato e quello non supervisionato. In questo caso il processo di addestramento prima del rilascio avviene con dati che a volte presentano anche il risultato atteso, e altre volte no.<br><br>I vantaggi di questo approccio riguardano il fatto che non si lascia l'algoritmo ad imparare senza fornirgli feedback, ma anche che non è strettamente necessario avere una grande quantità di dati etichettati. Riduce l'onere di avere abbastanza dati etichettati e apre a molti più problemi risolvibili con il machine learning.",
    "L'apprendimento rinforzato invece è in assoluto quello meno comune. Anziché fornire l'output atteso, come avviene nell'apprendimento supervisionato, viene fornito un premio o una punizione occasionale. Quando l'algoritmo fornisce come esito il risultato atteso, viene premiato e dunque il comportamento diventa più comune. Quando l'esito differisce da quello atteso, allora viene punito, rendendo il comportamento meno comune. L'idea alla base è quello di addestrare l'algoritmo nello stesso modo in cui si addestrerebbe un cane.",
    "Nelle prossime sezioni introdurremo gli aspetti generali della data science e il collegamento tra questa e il machine learning. In seguito approfondiremo più nel dettaglio il ciclo di vita di un progetto di data science. ",
  ];
  setTheory("7. Tipi di Machine Learning", content_machine_learning_categories);

  QuestionIndex = 6;
  setQuestion(QuestionIndex);
}
function datascience() {
  const content_datascience = [
    "Data science è un termine che può risultare ambiguo sotto certi aspetti. <br><br>Letteralmente data science indica la scienza dei dati. Probabilmente questa definizione può indurre a ritenere il termine data science come un modo più accattivante per riferirsi alla disciplina conosciuta come statistica.",
    "In effetti il termine potrebbe essere nato quando alcuni professori, guardando i curriculum di statistica, hanno pensato che sarebbe stato meglio chiamare la disciplina come scienza dei dati - data science, per l'appunto.<br><br>Seguendo questa linea di pensiero, dunque, verrebbe da definire la data science come una disciplina che ha i suoi metodi, i suoi assiomi e i suoi ricercatori. Stanno persino nascendo molti corsi universitari di data science che rinforzano questa linea di pensiero. Probabilmente non si tratta di un idea così sbagliata.",
    "Tuttavia, i professionisti che lavorano nel settore della data science sono più propensi a definire la data science come un processo.<br><br>Il processo di estrarre conoscenza e intuizioni da grandi volumi di dati disparati.<br><br>Questo processo però non ha a che fare solo con i dati crudi. Come abbiamo sostenuto in precedenza, grandi volumi di dati pongono l'essere umano di fronte alla sua limitatezza. La limitatezza della capacità di gestire e ricavare informazioni utili con i metodi di analisi tradizionali. L'essere umano è letteralmente obbligato a chiedere un supporto alla tecnologia.",
    "La data science dunque non riguarda solo la statistica. I professionisti del settore sono concordi nel definire la data science come un campo interdisciplinare che coinvolge sicuramente la statistica.<br><br>Ma anche discipline come la matematica, l'informatica, soprattutto in relazione agli algoritmi di apprendimento automatico, e infine anche aspetti legati alla comunicazione. Non tutti infatti sono capaci di leggere i risultati di un processo di data science. Degli aspetti comunicativi si interessa la data visualization.<br><br>C'è inoltre da sottolineare che, sebbene i big data rendano la sfida di ricavare informazioni utili per le decisioni qualitativamente diversa, gli aspetti legati alla data analytics sono ancora validi.",
    "A complicare le cose c'è il fatto che quando si tratta di 'fare' data science, è necessario tenere in considerazioni altri aspetti.<br><br>Quando si parla di data science in azienda si fa riferimento a due modi di utilizzare i dati.<br><br>Il primo modo è quello che abbiamo visto fino ad ora: la scoperta di intuizioni che possano guidare le decisioni aziendali. Il secondo è relativo allo sviluppo di 'data product'.",
    "Da definizione, il data product è un dispositivo tecnico che:<ol><li>Utilizza i dati come input</li><li>Processa quei dati per restituire un risultato generato algoritmicamente.</li></ol>Facendo un esempio. Un data product è il filtro antispam della posta elettronica che facendo lavorare un algoritmo, elabora le e-mail in ingresso per determinare se un messaggio sia spam o no.",
    "Un data product è sostanzialmente una funzionalià pensata per essere incapsulata in un'applicazione.<br><br>Come forse avrete intuito si sta facendo riferimento a prodotti che hanno un motore di machine learning al proprio interno.<br><br>Nella prossima sezione analizzaremo più nel dettaglio il collegamento tra data science, intesa come scoperta di conoscenza e machine learning.",
  ];
  setTheory("8. Data Science", content_datascience);

  QuestionIndex = 7;
  setQuestion(QuestionIndex);
}
function datascience_ml() {
  const content_datascience_ml = [
    "Partiamo da una premessa. Un'azienda che possiede un grande volume di dati può decidere di sfruttare due opportunità.<br><br>La prima opportunità riguarda quella che abbiamo definito vera e propria data science. Ossia, l'azienda assumerà un data scientist capace di maneggiare gli strumenti per gestire e analizzare i big data al fine di ricavare delle intuizioni interessanti per il business. Il risultato di un progetto di data science è una presentazione dove vengono esposte tutte le informazioni interessanti ricavate dall'analisi.<br><br>La seconda opportunità riguarda lo sviluppo di un progetto di machine learning. Una persona si occuperà di sviluppare un algoritmo che, dopo una fase di apprendimento con i dati già disponibili, è capace di utilizzare dati che arrivano successivamente per fare previsioni. Il risultato del progetto in questo caso è il data product, ovvero l'algoritmo di machine learning.",
    "Per capire meglio prendiamo come esempio l'industria della pubblicità online.<br><br>All'interno di un progetto di data science, l'analisi dei dati potrebbe mostrare che le agenzie turistiche non acquistano molta pubblicità. Tuttavia, i dati potrebbero mostrare anche che le agenzie turistiche sono maggiormente disposte ad acquistare pubblicità se c'è una persona esperta di vendite a fare da intermediario. Il progetto di data science si concluderebbe con l'esposizione di questi risultati e la decisione da parte del manager di indirizzare il team vendite a dedicare più tempo alle agenzie turistiche per convincerle a comprare.<br><br>Diversamente, un progetto di machine learning può consistere in un algoritmo che è capace di dire velocemente qual è la pubblicità su cui l'utente ha maggiore probabilità di cliccare. Il progetto di machine learning risulterebbe in un algoritmo attivo 24/7, integrato all'interno del sistema di vendita pubblicitaria dell'azienda.",
    "Riguardo la persona che si occupa di sviluppare algoritmi di machine learning c'è da fare un discorso complesso.<br><br>Il data scientist ha una certa expertise nel machine learning. Conosce gli algoritmi di base ed è in grado di sviluppare algoritmi capaci di risolvere nuovi problemi.<br><br>Alcune aziende possono decidere di assumere un data scientist per occuparsi sia di data science intesa come scoperta di intuizioni, sia intesa come sviluppo di data product non particolarmente complessi. Probabilmente l'ambiguità del ruolo può derivare dal fatto che il data scientist non necessariamente si occupa di data science intesa tradizionalmente come scoperta.<br><br>Vien da sè che per progetti più complessi di machine learning, un'azienda potrebbe decidere di affidare il progetto ad una persona particolarmente esperta - spesso denominata machine learning engineer.",
    "In termini più concreti i confini tra Data Science e Machine Learning non sono così netti. Spesso infatti si confondono.<br><br>Facciamo una sintesi<br><br>In un'azienda, investire nel machine learning si traduce spesso nell'assunzione di un team di Data Science che si pone l'obiettivo di sviluppare un data product (e quindi di un algoritmo di machine learning). I data product più profittevoli sembrerebbero derivare dall'approccio definito apprendimento supervisionato, principalmente perchè è quello che permette di fare previsioni.<br><br>Nondimeno, nella Data Science (intesa come scoperta di intuizioni) non è raro utilizzare algoritmi di machine learning nelle fasi di pulizia e qualche volta nella fase di analisi. Alcuni utilizzi potrebbero infatti essere la classificazione automatica dei dati nella fase di pulizia e la clusterizzazione in sottogruppi quando si volesse fare un'analisi sulle correlazioni dei dati.",
    "Nella prossima sezione cercheremo di capire il ciclo di vita di un progetto di data science. ",
  ];
  setTheory("9. Data Science e Machine Learning", content_datascience_ml);

  QuestionIndex = 8;
  setQuestion(QuestionIndex);
}
function datascience_lifecycle() {
  const content_datascience_lifecycle = [
    "Quali sono le fasi che caratterizzano un progetto di data science?<br><br>In questa sezione analizzeremo le fasi di un progetto di data science, che partono dalla definizione degli obiettivi sino alla comunicazione delle scoperte fatte durante il processo di analisi.",
    "Nel mondo reale capita che un'azienda si ritrovi ad aver accumulato centinaia di terabyte di dati e che voglia cercare di ricavare del valore. Un progetto di data science efficiente, tuttavia, parte sempre dalla definizione di un problema o una domanda.",
    "Fase 1: Definizione del problema e specificazione dei requisiti<br><br>In questa fase il data scientist farà molte domande, nel tentativo di definire i dati utili per trovare delle risposte o degli insight. In questa fase si cerca di specificare sia la popolazione da cui raccogliere i dati, sia le variabili d'interesse per la ricerca. Per esempio in una ricerca che vuole trovare intuizioni sui prodotti per la cura della barba, verranno escluse la popolazione femminile e la popolazione non ancora adulta. Verranno inoltre definite le variabili come per esempio il tipo di rasatura e la frequenza. Infine vengono definite le fonti dei dati e l'eventuale necessità di predisporre sensori.",
    "Fase 2: Data collection<br><br>Questa è la fase dove effettivamente vengono raccolti i dati. È da notare che questa fase può avere una durata considerevole nel momento in cui i dati devono essere raccolti da zero.",
    "Fase 3: Data processing<br><br>I dati raccolti possono essere non strutturati e contenere informazioni irrilevanti. Oppure sono in una forma non leggibile dai software di analisi. La raccolta deve essere completata con un processamento, che può consistere per esempio nell'organizzazione dei dati in righe e colonne all'interno di un database o di un foglio di calcolo.",
    "Fase 4: Analisi esplorativa e Data cleaning<br><br>Con l'analisi esplorativa ci si riferisce all'identificazione dei dati incompleti, incorretti o inaccurati e mentre data cleaning si riferisce alla sostituzione, modifica o cancellazione delle anomalie trovate. I dati possono essere controllati con l’utilizzo di metodi statistici e di database per rilevare le contraddizioni. Spesso questa fase riporta alle fasi precedenti per correggere le anomalie nell'estrazione dei dati o addirittura per suggerire nuovi dati da raccogliere.",
    "Fase 5: Analisi/Modellizzazione<br><br>È la fase centrale di un progetto di data science e permette di rivelare le informazioni nascoste nei dati. In questa fase vengono utilizzate alcune metriche statistiche come la correlazione e si cerca di fare delle ipotesi predittive. Ne risulta un modello statistico di relazione tra le varie caratteristiche dei dati. In questa fase è essenziale combinare le proprie conoscenze matematiche e statistiche con le proprie conoscenze di settore per creare un modello plausibile di funzionamento di un certo fenomeno. Le tecniche più utilizzate per estrarre conoscenza dai dati sono il data mining, text mining, analisi inferenziali e analisi predittive.",
    "Fase 6: Machine learning<br><br>In questa fase si utilizzano alcuni algoritmi basilari e collaudati di machine learning per testare le ipotesi predittive avanzate nella fase precedente. Le ipotesi possono essere confermate e fornire una cornice entro la quale prendere decisioni, ma possono essere anche smentite e riportare alla rielaborazione del modello. Eventualmente, per progetti più complessi è possibile sviluppare algoritmi innovativi per fare previsioni più accurate. ",
    "Fase 7: Comunicazione<br><br>Nell'ultima fase di un progetto di data science si comunica al management il risultato dell'analisi. Il data scientist utilizza tecniche di data visualization (come grafici e tabelle) e software specifici (come tableau)  per comunicare in modo semplice ed efficace i risultati.",
    "Con questo argomento si conclude il corso introduttivo ai concetti della data science e del machine learning.<br><br>Dove si può approfondire?<br><br>Nella prossima sezione sono indicate alcune risorse utili e interessanti per approfondire gli argomenti trattati in questo corso, con un'attenzione rivolta anche agli aspetti più applicativi.<br><br>Un saluto e un in bocca al lupo per questo viaggio! :)",
  ];
  setTheory(
    "10. Ciclo di vita della Data Science",
    content_datascience_lifecycle
  );

  QuestionIndex = 9;
  setQuestion(QuestionIndex);
}

document.getElementById("introduzione").addEventListener("click", introduzione);
document.getElementById("dati").addEventListener("click", dati);
document
  .getElementById("data_analytics")
  .addEventListener("click", data_analytics);
document.getElementById("bigdata").addEventListener("click", big_data);
document
  .getElementById("bigdata_analytics")
  .addEventListener("click", big_data_analytics);
document
  .getElementById("machine_learning")
  .addEventListener("click", machine_learning);
document
  .getElementById("machine_learning_categories")
  .addEventListener("click", machine_learning_categories);
document.getElementById("datascience").addEventListener("click", datascience);
document
  .getElementById("datascience-ml")
  .addEventListener("click", datascience_ml);
document
  .getElementById("datascience-lifecycle")
  .addEventListener("click", datascience_lifecycle);
document
  .getElementById("to-resources")
  .addEventListener("click", change_to_resources);
