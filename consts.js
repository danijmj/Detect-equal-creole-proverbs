// Cosine percents
const cosineLength = 0.25;
const cosineFoundedWordsLength = 0.333;
const cosineFoundedWordsOtherPos = 0.33;
const cosineFoundedWordsOtherPosElseFilter = 0.5;

// Real data
const data_default = [
    "À fos carésé ych li makak tué y",
    "À fos tiré chic en pié nèg y ka mandéw couss couri",
    "A la lè ou fen ou ka kuit manjé",
    "A pa gentil ou ka mèt adan kamnari aw",
    "A pa jou pyé bwa tonbé an dlo y ka pouri",
    "A pa jou pyébwa tonbé an dlo i ka pouri",
    "A pa jwét ka touné sé van",
    "A pa kouyon ki fè nwè",
    "A pa lè ou faim pou mété mangé si di fé",
    "a pa lè ou fen ou ka chèché sa ou ka manjé",
    "A pa lè ou fen ou ka mèt manjé aw an difé",
    "A pa lè ou fen ou kay tuit manjé",
    "À pa lè ou fen ou ké mèt kannari asi difé.",
    "A pa lè ou fen pou mèt manjé an difé",
    "A pa le ou fen pou met manje si dife",
    "A pa lè ou fen pou met manjé si difé",
    "A pa lè ou fen pou mété manjé si difé",
    "A pa lè ou fen pou mété manjé si difé",
    "A pa makak ou ké aprann monté piébwa",
    "A pa menm jou an fe-y tonbé an dlo i ka pouwi",
    "A pa tou di voyé koulèv lekol, fo ou pé mété y sizé",
    "A pa toudi kouri,ni las osi",
    "Adan la vi sé yon à lot",
    "Adan lanmè pani pié bwa",
    "Adan on gwap kouyon sé vou ki pli mi ?!",
    "Adan on kalbas tini dė kwi",
    "Adan on kalbas, ni dé kwi",
    "Adan on not soleil",
    "Adin la vi sé yon a lot",
    "Alé alé aw, routouné aw sé tan mwen",
    "Alé aux sé ta'w viré a'w sé tanmwen",
    "Alé aw sé taw rètou la sé tan mwen",
    "Ale aw se taw retourne aw se tan mwen",
    "Alé aw se taw viré aw se tan mwen",
    "Alé aw sé taw, retou la sé tan mwen",
    "Alé aw sé taw, viré aw sé tan mwen.",
    "Alé la sé taw viré la sé tan mwen",
    "Alé soukré sak aw ,la ou van'n chabon aw...",
    "Alé-a sé ta’w, viré-a sé ta mwen",
    "Alé-aw sé taw viréla séké ta bondiyé",
    "Alé-la sé t'as, viré la sé tan mwen",
    "Aléaw sé taw retounéaw sé tanmoin",
    "Allé awe Sé taxe,retour awe Sé tan Mwen",
    "An ba dan aw se san",
    "An ba la tè pa ni plezi",
    "An ba la tè pani plézi",
    "An enméw kon grés",
    "An fen kon rat",
    "An fen kon rat",
    "An ja mouyé, an pé pisé asi mwen",
    "An ja vwè van vanté kokoyé sek rété an piyé",
    "An ka potéw ou ka trinné mwen",
    "An ka pran douvan avan douvan pran mwen",
    "An mouyé an fouben pisé",
    "An pa gwan grèk an sé an ti kafétyè",
    "An pa ka bwè soup an mwen cho",
    "An pa ka manjé soup an mwen cho",
    "An pa ka manjé soup an mwen cho",
    "An paka acheté chat an sak.",
    "An paka manger soup en mwen fwet",
    "An paka manjé soup an mwen cho",
    "An plié mais pas cassé",
    "An pwan on chyen pou on chat.",
    "An sel mouton ka gâté tout twoupo la",
    "An soukré sak a charbon aw la ou vann-li",
    "An tet aw ça yé",
    "Anba latè pa ni plézi",
    "Anba latè, pa ni plézi.",
    "Apa toudi kaka sé tranblé ki ka konté.",
    "Apatoudi menné koulèv lékòl sé fè-y rété sizé ki tout.",
    "Apatoudi vlé, sé pé ki mèt",
    "Aprè kouri ni las",
    "Apré kouri, i ni las.",
    "Apré lanmò sé ti bèt",
    "Apré lanmò, sé tibèt",
    "Apré lapli, sé botan",
    "apré on tan sé on lot.",
    "Apwé ri sé pléré",
    "Asiré pa pétèt",
    "Asiré pa pétèt",
    "Asiré pa pétèt",
    "Asiré pa pétèt",
    "Assire pa peut etre",
    "Atten yo crie pot pou ouve finet",
    "Avè pasians où ka vwè lombic a pis",
    "Avè pasians ou kè vwè boyo à foumi roug.",
    "Avè ti moun Pa ni bòdlanmè",
    "Ay chien di den ya blen",
    "Ay chyen,di dan a'y blan",
    "Ay soukwé sak aw làw van chabon aw",
    "Ayen fòsé pa bon",
    "Ba-y koko pou savon",
    "Bal fini viyolon an sak",
    "Bal fini vyolon dan sak",
    "Balay nèf ka balayé bien",
    "Balé nef toujou ka balyé pwop",
    "Baléyé douvan pòt'aw, avan ou baléyé douvan pòt a vwazen aw",
    "Bambou penché ka plié i pa ka kacé",
    "Ban bay li baw bay",
    "Bannan jòn paka vini vèt",
    "Bannann jaune pa ka vini vêt",
    "Bannann jòn pa ka vin vèt.",
    "Bat chyen, entonner li.",
    "Bay koko pou savon",
    "Bèf dèyè bwen dlo sal",
    "Bèf dèyè ka bwè dlo sal",
    "Bèf dèyè ka bwè dlo sal.",
    "Bef deyè qu’a brè Flo sal",
    "Bèf douvan bwè bon dlo",
    "Bef douvan bwè dlo klè",
    "Bèf douvan bwè dlo klè",
    "Bèf douvan bwè dlo klè.",
    "Bef douvan bwè do klé",
    "Bef douvan ka bwé bon dlo",
    "Bèf ka jambé bayè",
    "Bèf ka janbé la bayè ba",
    "Bèf ka janbé labayè ba",
    "Bef ka saute la barrizr la ba",
    "Bèf ka sòté là bàyè ba",
    "Bef maré se pou bat",
    "Bef qu’à touvé con au long pou entré en bois",
    "Bèf- la pa jan bizwen ké a- y on sèl sézon.",
    "Bèf' douvan bwè dlo klè",
    "Bèl bouko mové mori.",
    "Bèl dra ka kouvè matla sal",
    "Bénéfis pa ka koupé poch",
    "Bénéfis pa ka krévé poch",
    "Bèt ki ni ké, pa ka janbé difé !",
    "Bo lanmè pa loin",
    "Bò lanmè pa lwen",
    "Bod lan mè pa lwen",
    "Bod lanmè pa lwen",
    "Bòd lanmè pa lwen",
    "Bòd lanmè pa lwen",
    "Bod lanmè pa lwen pita pitris",
    "Bod lanmè pas loin",
    "Bodlanmé pa lwen",
    "Bòdlanmè pa lwen",
    "Bòdlanmè pa lwen",
    "Bof lanmės pa loin",
    "Bon bèf, bon savann",
    "Bon maché ka kouté chè",
    "Bon maché kouté chè",
    "Bon maché kouté chè",
    "Bondyé ba-w chaj men i ka ba-w tòch pou pòté-y",
    "Bondyé ka ba''w Chaj,Mè i ka ba w tòch,pou poté 'y",
    "Bondyé ka baw chaj, men i ka baw zépòl pouw pòté'y",
    "Bonjou pa ka plen bouden.",
    "Bouché pè san",
    "Bwè dlo a-w men pa néyé kyè a-w.",
    "Bwè dlo aw pa néyé kè aw",
    "C zie ki lâche",
    "C. Gren du riz la Fès sac di riz",
    "Cabrit aw fai bef",
    "Cabrit-aw ka fè bèf !",
    "cChak kochon ni sanmdi-ay",
    "Cé graine di riz ki Ka fè sac di riz",
    "Ce graine du riz Ka fe sac di riz",
    "Cé gren diri ki ka plin sac",
    "Cé grin di riz ki ka fè sac di riz",
    "Cé pa lè ou envi allé aux toilettes pou ou acheté an pot' chanm",
    "Ce' couto s'el qui save sa qui en kai a jiromon",
    "Chak bèf konnèt pitjèt yo",
    "Chak bougo ka ralé kal a-y",
    "Chak bougo ralé Kal ayo",
    "Chak bougo, rédi kal a-y",
    "Chak cochon ni samdi ay",
    "Chak cochon ni samedi a yo",
    "Chak cochon ni samedi à yo",
    "Chak cochon ni samedi à yo",
    "Chak cochon ni sanmdi à y o",
    "Chak cochon ni sanmdi a yo",
    "Chak cochon ni sanmdi a yo",
    "Chak cochon ni sanmdi a yo!",
    "Chak cochon ni sanmdi ay",
    "Chak cochon ni sanmdi y.",
    "Chak cochon ni sanmdi-a-yo",
    "Chak kochon ni samdi a yo",
    "Chak kochon ni samdi a yo",
    "Chak kochon ni Samedi a yo",
    "Chak kochon ni samedi a yo",
    "Chak kochon ni sanmdi a Yo",
    "Chak kochon ni sanmdi a yo",
    "Chak kochon ni sanmdi a yo",
    "Chak kochon ni sanmdi à yo",
    "Chak kochon ni sanmdi à yo",
    "Chak kochon ni sanmdi a yo.",
    "Chak kochon ni sanmdi a-y",
    "Chak kochon ni sanmdi a'w",
    "Chak kochon ni sanmdi ay",
    "Chak kochon ni sanmdi ay",
    "Chak kochon ni sanmdi-ay",
    "Chak moun bouwé bouwèt a-y",
    "Chak moun ralé kannòt a yo",
    "Chak ti cochon ni sanmdi a yo",
    "Chak ti kochon ni sanmdi a yo",
    "Chak tou chak chivi",
    "Chak tou chak chivi",
    "Chaq bougo ka alé zékal a li",
    "Chaq cochon ni samdi a yo",
    "Chaque burgeot râle cal ay",
    "Chaque cochon ni samdi ay",
    "Chaque cochon ni samdi ay",
    "Chaque cochon ni samedi à yo",
    "Chat chodé an dlo cho pè dlo fwèt.",
    "Chat chodé pè dlo fwet",
    "Chat ka tête rat",
    "Chat pa la ,rat la bay bal..",
    "Chat pa la rat ka bat bal",
    "Chat pa la rat ka bay bal",
    "Chat pa là rat la ba'y bal",
    "Chat pa la rat la bay bal.",
    "Chat pa la, rat ka bay bal",
    "Chat paka fè chyen.",
    "Chat pala rat ka bay bal",
    "Chien mare fait pou lapide",
    "Chien maré sé pou bat",
    "Chien pa fé chat",
    "chien pa fè chat",
    "Chien pa ka fait chat",
    "Chien pa ka fe chat",
    "Chien pa ka fè chat",
    "Chien pa ka fè chat",
    "Chien pa ka fè chat",
    "Chien pa ka fè chat",
    "Chien pa ka fè chat.",
    "Chien pa ka fè chate",
    "Chien paka fait chatte",
    "Chien paka fè chat",
    "Chien paka fè chat",
    "Chien paka fè chat'",
    "Chien palé bannann i pa lé poule prany",
    "Chini an pwa aw",
    "Chiyen ka manjé chiyen sé mové chiyen",
    "Chiyen paka manjé bannan mé vépa poul manjéy",
    "Chocolat an nou péké jan fè kras",
    "Chodyè ka di kanari fès ay nwè",
    "Chodyè ka di kannari fès ay sal",
    "Chokola an fanmi pa ni kras.",
    "Chokola an nou pa ni kras",
    "Chopine pa demi po",
    "Chyen ka manje chyen se move chyen",
    "Chyen ka manjé chyen, sé mové chyen.",
    "Chyen maré fèt pou bàt",
    "Chyen maré sé pou bat",
    "Chyen maré sé pou bat.",
    "Chyen maré sé pou bat.",
    "Chyen maré sé pour bat",
    "Chyen pa fe chat.",
    "Chyen pa ka fe chat",
    "Chyen pa ka fè chat",
    "Chyen pa ka fè chat",
    "Chyen pa ka fè chat",
    "Chyen pa ka fè chat.",
    "Chyen pa ka fè chat...",
    "Chyen pa ka fè chate",
    "Chyen pa ka fè chatt",
    "Chyen pa lé bannann, i pa lé poul pran’y.",
    "Chyen pa vlé pen mé i pa vlé poul pran'y.",
    "Chyen paka fè chat",
    "Chyen paka fè chat’",
    "Chyen paka manjé fig men vlé pa poul bèkté-i",
    "Cod a gnam ka marré gnam",
    "Cordonnier toujou mal chausse",
    "Couteau seulement qui save ça qui ka passe en cœur à giromon",
    "Cyen pa ka fè chat",
    "Dan ka ri mizè",
    "Danse bonne pa danse",
    "Dapwe tete ou ka taye korsaj",
    "De grain diri ka fait sac diri",
    "Dé krab paka viv an menn toula",
    "Dé mal crab paka Rété an mem tou la !",
    "Dé mal crabe pa Ka rété en mim trou la",
    "Dé mal crabe pa resté an mim tou là",
    "Dé mal krab pa ka rété adan an menm trou",
    "Dé mal krab pa ka rété an mèm tou la.",
    "Dé mal krab pa ka rété dan même trou",
    "Dé mal krab paka rété an mem tou la",
    "Dé màl krab paka rété an menm toula",
    "Débouta pa péché",
    "Debouya pa péché",
    "Debouya pa péché",
    "Débouya pa péché",
    "Débouya pa péché",
    "Débouya pa péchè",
    "Débouya pa péchè",
    "Débouya pa péché.",
    "Debrouya pa Peche",
    "Débrouya pa péché",
    "Débrouya pa péché",
    "Démen sé an kouyon.",
    "Dèmen sé on not jou",
    "Diab' ka mayé fiy li dèyè lapot' légliz'",
    "Diri di plis biten kisa kolombo sali-i",
    "Do an moin kon fey a made",
    "Do an mwen kon fèy a madè",
    "Do an mwen sé féy a madé",
    "Do an mwen sé fèy a madè",
    "Do anmwen sé féy a madé",
    "Do ka mô pou zépol zépol pa sav",
    "Do ka mô pour zépol zépol pa minm sav",
    "Domino ka jwé an pangal, mé i pa ka rimé an pangal.",
    "Domino ka rimé an pangal, men paka jouwé an pangal",
    "Domino ka rimé anpagal men pa ka jouwé anpangal",
    "Domino paka jouwé an pangal...",
    "Draoite ay pouri se tayou",
    "En ni pliss san froi ki on barre glace",
    "En pa ka mangé soup en mwen fwet",
    "en pa te kay janmè pa pè diw ça",
    "En pas touvé soulié a pointi en moin",
    "Épi lajan ou ka fè tout makak dansé.",
    "Faire le débrouillard n'est pas pécher",
    "Fait mété difé en paille sec pou tan langage a criket",
    "Fam se chatènn nomm sé fouyapèn.",
    "Fanm sé chatenn minm a tè i ka fléri",
    "Fend sé chaten n’ont sé fouyapen",
    "Figi a moun ke ou ni",
    "Fo mèt difé an pay sèk, pou tann son a krikèt",
    "Fô ou maché dwèt kon rat si fil",
    "Fo ou manké neyé pou apren nagé",
    "Fò ou mèt difé an pay pou tann langaj a krikèt",
    "Fò pa janmen blamé on kontraryété",
    "Fô pa konté zé an fès a poul",
    "Fò pa monté si wòch pou méprizé latè",
    "Fo pa ou mélangé coco épi zabriko",
    "Fo pa plan farine mousach pou let",
    "Fo pa Pwan dlo mousach pou lèt",
    "Foufou fou men nich a-y pa fou",
    "Foufou men i sav asi ki branch i ka pozé",
    "Foumi fou fou men i konnèt ola nich a-y yé",
    "Fow paw pati en lagè san bâton",
    "frèch kon zépina ki pousé an kaka",
    "Frekanté chien ou ka trapé pis",
    "Frékanté chien ou ka trapé pis",
    "Frekanté chien ou ka trapé piss",
    "Frekanté chyen ou ka twapé pis",
    "Frozen di plis ki sa ,baton rantré kan menm",
    "Fwzen di plis bitin kisa éyo fouwé bwa an fés ay kan menm",
    "Gay chien di dan ay blan",
    "Gran moun pa Ka rété a Kaz a grand moun",
    "Gran parad piti koudbaton",
    "Gren di ri ka fe sak di ri",
    "Gren diri k fe sak diri",
    "Grènn di ri ka fè sak di ri",
    "Grenn diri ka fè sak diri",
    "Gro kòk ka fè sa i lé, ti kòk ka fè sa i pé.",
    "Guèl aw ralé Kon fren a men. Ou guèl aw plisé Kon fès a poul.",
    "Gwan pawad ti kou baton",
    "Hay chien di dan ay blan",
    "Hay chien di dan ay blan",
    "Hay chiyen di dan-ay blan",
    "Hay chyen di dan ay blan",
    "Hay chyen di dan ay blan.",
    "Hay chyen mè di dan ay blan.",
    "Hay chyen men di dan ay blan",
    "Hay chyen min di dan ay blan.",
    "Hay chyen, di dan a-y blan",
    "I ka maché pas Bonda",
    "I ka menti kon i ka respiré",
    "I ka semb on laline plenn",
    "I ké Fès ou kouės lanmės sec",
    "I ké pren i ké laissé à tė",
    "I kontan kon kochon an fwiapen",
    "I monte coco,desene palmise",
    "i ni kouri é i ni las",
    "I nouės kon lébene",
    "I piti mè kaka ay gwo",
    "I raid kon pine a juda",
    "Ich tig la ka fèt san zong (créole martiniquais)",
    "Ich tig pa ka né san zong",
    "Ich tig' pa ka nèt' san zong'",
    "Imite ka detenn",
    "Imité ka detenn",
    "Intel ni on vai solitai, i paka grosi",
    "Jade lwen gonbo gaté",
    "Jaden lwen gonbo gaté",
    "Jaden lwen, gombo gaté",
    "Jalousi c. Frè à poison",
    "Jalouzi se fanmi a sosyé",
    "Jalouzi sé frè sosyé",
    "jan ou fè kaban-aw sé jan ou ka domi",
    "Jan ou fê kabann a-w sé jan ou ka domi",
    "Jan ou fe kabann aw jan ou ke domi",
    "Jan ou ranjé kabann a-w sé jan ou ka dòmi",
    "Jan ou ranjé kabann aw sé jan ou domi",
    "Jan tanbou-la ka bat, sé jan ou ka dansé",
    "Jansiv té la avan dan",
    "Je ne trouve pas un troisième",
    "Jodi se taw dèmen se tanmwen",
    "Jòdijou sé tòch-la, chaj-la dèyè",
    "Jodla sé ta'w demen sé tan mwen",
    "Jou deven'n pa ni kimboi",
    "Jou malè pa ni kembwa",
    "Jou malè pa ni kinbwa",
    "Jou malè pani kenbwa.",
    "Jou male pani kimbaw",
    "Jou Malé pani kimbwa",
    "Ka palé kon rara an simèn sainte!",
    "Kabrit aw ka fè bèf",
    "Kabrit aw Ka fè bœuf",
    "Kabrit libres pa konnèt soufwans a kabrit maré",
    "Kaka an mala, men pli ba ou pé bizwen dlo- la pou bwè.",
    "Kalkil fet avan konte",
    "Kalkil fet avan konté",
    "Kalkil fèt avan konté",
    "Kalkilé fèt avant konté",
    "Kan bab a camarade aw ka brilé, metté tavou à la tremp",
    "Kaniri ka di chodié fes ay nwoue",
    "Kannari ka di chodiè bonda-y nwè",
    "kannari ka di chòdiyè, bonda a'y nwè",
    "Kannari ka di chodyè bonda a'w nwè",
    "Kannari ka di chodyé bonda-ay nwé",
    "Kannari ka di chòdyè dèyè a-w nwè",
    "Kannari ka di chodyè fès ay nwè",
    "Kannari ka di chodyè fès ay nwè.",
    "Kannari ka di chodyè, bonda-w nwè",
    "Kannari ka di chwodyè bonda ay nwè.",
    "Kannari la di chodyè bonday nwè",
    "Kod a yam maré yam",
    "Kòdonyé toujou mal chosé...",
    "Kòk atè fèt bou bàt",
    "Kòk atè, sé pou bat",
    "komkomb san gren",
    "Kon tambou a dé bonda",
    "Konplo a nég , konplo a chyen.",
    "Konplo a nèg sé konplo a chien",
    "Konplo neg sé konplo a chyen",
    "Kou pa d’où, si kou té d’où, i té ké pann an magazen",
    "Kou sab an lanmè pa ka léssé trace",
    "Koulèv an toch pa gra",
    "Koulèv antòch pa gra.",
    "Koulèv en toch pa gra",
    "Kouté pou tan, tan pou konprann",
    "Kouto sèl ki sav sa ki an kè a jiromon",
    "Kouto sèl ki sav sa ki an kè à jiromon",
    "Kouto sèl sav say ka pasé an kè a jiwomon.",
    "Kouto selmen pe diw sa ki anke a giromon",
    "Kouyonné dòktè, maladi ka fè pwogrè.",
    "Kouyonnér dòktè maladi ka fè progré",
    "Kraché an bouch aw",
    "Kréyon a bon dié pa ni gomm",
    "La bayè ba bèf ka jambé",
    "La bayè ba sé la bef ka janbé",
    "La béf pa vlé rantré an bwa.i la di kôn au two long",
    "La chouval kalé bouket ka rivé",
    "La i pan i sek",
    "La i penn i sec",
    "La parole de la bouche n'est pas une charge",
    "La pen profitant",
    "La pli bel an ba la bail",
    "La pli bel an ba la baille.",
    "La pli bel an ba la pa paill",
    "La pli bel an ba la pay",
    "La pli bèl anba labay",
    "La pli ka tombé chyen ka fè kaz",
    "La plus belle anba la baye",
    "La poul ka graté sé lay ka bèkté.",
    "la vi sé on fanm fól",
    "La vi sé on konba",
    "La y pann y ké sèk",
    "Labitid c vice",
    "Laden lwen combo gaté",
    "Lajan pa zaboka.",
    "lang an mwen pa lang a pwason fri",
    "Lanmè kalm makak kapitenn",
    "Lapli bèl anba labay.",
    "Lapli é soléy, diab la mayé fi-ay déyé légliz",
    "Latè paka potey",
    "Lavi la ja fofilé a pa vou ki ké koud li",
    "Lavi pa on bol toloman",
    "Lavi se on fanm fol",
    "Lavi sé on konba",
    "Lavi sé on konba",
    "Lè bèf pa vlé rantré an bwa, i ka di kòn a'y two long.",
    "Lè bèf vé pa antwé an bwa i ka di kòn-ay two long",
    "Lè bèf vé pa rantré an bwa, i ka di kon' ay two long.",
    "Lè bèf vépa pasé kònn ay toujou two long",
    "Lé boeuf vé pa rentré en savan conne ay toujou tro gran",
    "Lé chat pa la, rat ka bay bal",
    "Le konseye pa le peye",
    "Lé konséyè pa lé péyé",
    "Lé konséyè pa lé péyè",
    "Lè konséyè pa lè péyè",
    "Lè ou apwann Makak voyé wòch, sé tête aw i ka krazé avan",
    "Lè ou pa ni manman ou ka tété chyen",
    "Lè ou pani manman ou ka tété kabrit",
    "Lè slip aw sal fò pa ou monté si zéchèl",
    "Lé tin difé aka vwazen aw, mèt bab aw a la tranp",
    "Lè vant a zozyo plein tout goyav si",
    "Lè- w byen ou ka di dyab pran- w.",
    "Len mai pas loin",
    "Les chiens ne font pas de chats",
    "Lévé bonnè ou ka bwè bon kafé, lévé ta ou ka bwè kyòlòlò.",
    "Maché kochi maché kan menm !",
    "maché kochi, maché kantmenm",
    "Maché on min douvan on min dèyè",
    "Makak paka touvé pitit ay lèd.",
    "Makak sav adan ki pyé bwa i ka monté...",
    "Maladi ka rivé a chouval é ka pati a pié",
    "Maladi ka rivé à chouval, i ka pâti à pyé",
    "Malè ou té pou bèlmè aw sé manman-w i la rivé",
    "Maléré pa ni Gro tchè",
    "Man la pou bwè lète man pa la pou conté ti bèf",
    "Man pa ka conté zé an fèss a poul",
    "Man sé kanmararad tout chyen, mé kannari mwen pann wo laka'y mwen",
    "Manjé gombo é tèt ay",
    "Manman sûre, papa pé tèt",
    "Méchansté pa pwospéré",
    "Mel linj aw pou soulié aw few bien",
    "Mèm pwèl mèm bèt",
    "Men biten men bagay",
    "Menm bèt menm pwèl",
    "mété difé en paiy sek pou tann langag a kriket",
    "Mi bab pou babèt é fè pou fènan",
    "Minm bèt minm pwèl",
    "Mongo fil ka bay bil",
    "Monté anlè wòch pou malpalé latè.",
    "Monté si roch pou malpalé latè",
    "Mou ka boui lang",
    "Moun pa ka voyé woch an pyé mango ki pa ka poté",
    "Mouton maré pa vé vwè kouto",
    "Mové sizo pé gaté bon twel",
    "Nenvie pas ton voisin tu ne sais pas ce qu'il a fait pour avoir ce qu'il a",
    "Ni couri e' ni las",
    "Ni couri ni las",
    "Ni kouri é ni las !",
    "Ni kouri ni las",
    "Ni kouri ni las",
    "Ni kouri, ni las",
    "Ni kouri, ni las",
    "Ni moussach o solèy.",
    "Ni on tan pou gibie, ni on tan pou chasse",
    "Nonm sé fouyapen, fanm sé chatenn",
    "Nonm sé fouyapen, fanm sé chatèy",
    "Nonm sé fouyapen,fanm sé chatenn",
    "Nou rivé an bout à jaden a Etien",
    "Nou rivé an bout a jaden a étyèn",
    "Nou rivé an bout a jaden a man etienne",
    "Nou rivé la nou kay",
    "On chiyen ni kat pat,men sé on sèl chimen i ka fè",
    "On labé pa ka préché dé fwa",
    "On sel mèt sé Bondyé",
    "Osito diri kolonmbo",
    "Ou abiyé an pay où ka joué avè zalimèt",
    "Ou adoumanman",
    "Ou boudé kon doub sis",
    "Ou en ba fey",
    "Ou hay amériken la mè ou èmé bisui ay",
    "Ou ka chèché ou ka di bon dié pa fanw twouvé",
    "Ou Ka mange kon agoulou gran fal",
    "Ou ka monté kon lèt asi difé",
    "Ou ka pléré zyé-aw sèk!!",
    "Ou ka pran d'lo moustàch pou lèt",
    "Ou Ka soue kon Kanari châtaigne",
    "Ou kon chien savan",
    "Ou kon on gran zyé ti vant.",
    "Ou konsantré kon pòt lèt nèstlé",
    "Ou la rété la chyen ka japé pa ké",
    "Ou lach kon pété douvan jou",
    "Ou lach kon pété douvan jou.",
    "Ou laid kon ayayaye",
    "Ou lant kon molikoy",
    "Ou ni genm kon chik an pié malprop",
    "Ou ni mousach o soley, ou ka véyé lapli",
    "Ou nwè kon dé lannwit kolé",
    "Ou nwè kon solex",
    "Ou pa ka gardé pat a boukèt pou ba'y poté chaj",
    "Ou pa ka mandé malad si inmé bouyon",
    "Ou pa ka pań chapo aw pli ó kè ou pé dépenn li",
    "Ou pa ka toufé difé épi payé",
    "Ou paka ba moun fen, séparé gato",
    "Ou paka voyé wôch an mango ki paka pôté",
    "Ou pé ay jis la chien ka apé pa ké",
    "Ou pe ke apren vie singe fait grimace",
    "Ou Péké aprann papa w fè timoun.",
    "Ou pran mwen pou on tablo: ai-je l'air si couillon?",
    "Ou ra kon nèg a zyé blé",
    "Ou ra kon vèblé an figi a pòpòt",
    "Ou ra quon nèg à zié blé",
    "Ou rapièsté kon zannanna",
    "ou sav sa ou ka lésé ou pa sav sa ou ké trouvé",
    "Ou sé an tanbou a dé bonda",
    "Ou sé foumi maniok",
    "Ou sé on bef à gros qué",
    "Ou tini gyel a kabrit.",
    "Ou vini bouwè lèt ou pa vine konté vach",
    "Oui pani pouki",
    "Pa achte chat an sak",
    "Pa aten ou fim pou fai mange",
    "Pa ay chèché glo an pannyé",
    "Pa ban mwen dlo mousach pou let",
    "Pa ban mwen dlo mousach pou lèt",
    "Pa blanmé on kontrayété",
    "Pa cho marinad Luis-aw si difé",
    "Pa conté zé an fès a poul",
    "Pa dézabyé monpé pou soutann a-y: ne pas s'approprier les biens d'autrui",
    "Pa fé moun sa où pa lé yo fè’w",
    "Pa gadé pat a boukèt pou bay poté chag",
    "Pa gadé pat a boukèt pou bay pòté chaj.",
    "Pa jan pisé fas a van- la.",
    "Pa konèt môvé",
    "Pa konfonn koko é zabriko",
    "Pa konfonn koko é zabriko",
    "Pa konfonn koko é zabriko",
    "Pa konfonn koko épi zabriko.",
    "Pa konnet move",
    "Pa konnèt mové",
    "Pa konnèt mové",
    "pa konnèt mové, rasin-ay sé pwason",
    "Pa konté asi zyé a lézòt pou dòmi",
    "Pa lésé kanna pranw pou kanna",
    "Pa melangè coco é sabriko",
    "Pa melangè torchon et serviette",
    "Pa monté anlè rôch pou malpalé tè",
    "Pa ni volè san soutirè",
    "Pa pè sé siyé ki lach",
    "Pa pran dlo mousach pou lét",
    "Pa pran dlo mousach pou lèt",
    "Pa pren dlo moussach pou lèt",
    "Pa pwen dlo mousach pou lèt",
    "Pa rantré an laguè San baton",
    "Pa veye à zami pou domi",
    "Padon pa ka djéri bos",
    "Padon pa ka géri bòs",
    "Padon pa ka géri bòs...",
    "Padon pa ka gueri boss",
    "Padon pa ka guéri boss",
    "Padon paka géri bos's...",
    "Padon paka géri bosse",
    "Padon paka gueri bos",
    "Pajan blâmé on contrariété",
    "Pani lafimé san difé",
    "Papa-w té ka monté chouval",
    "Pardon paka guéri bos",
    "Parole en bouche pa charge",
    "Pas gadé pat’ a bouquet’ pou bye potée chage",
    "Pawol an bouch pa chag",
    "Pawol an bouch pa chag",
    "Pawol an bouch pa chage",
    "Pawol an bouch pa chaj",
    "Pawol an bouch pa chaj",
    "Pawol an bouch pa chaj",
    "Pawòl an bouch pa chaj",
    "Pawòl an bouch pa chaj.",
    "Pawòl an bouch pa chaj.",
    "Pawol an bouch' pa chaj'",
    "Pawol en bouch pa chag",
    "Penn pou penn pa la penn pi to",
    "Pi ou chiré pi chien chiréw",
    "Pi ou chiré pi chyèn chiréw",
    "Pi ou chire pi chyen ka chirew",
    "Pi ou véyé mwens ou vwè",
    "Pi ta pi tris",
    "Pi ta pi triss",
    "Pi ta pi twis",
    "Pi ta pli triss",
    "Pi ta, pi tris",
    "Pi ta, pi trist",
    "Pi ta,pi trist",
    "Pierre qui roule namasse pas mousse",
    "Piké né zyé ka pléré",
    "Pike zye ne ka koule",
    "Piman pa ka vanté fòs a-y.",
    "Piman pa ka vanté fòs a-y...",
    "Pis pa ka rété asi chyen mò...",
    "Pisimyé on vwèl déchiré kè on pè zaviwon nèf.",
    "Pita pi tris",
    "Pita pi triss",
    "Pita pitrisse",
    "Pitit a chat paka fét san grif",
    "Pli ba ki kaban a krapo",
    "Pli ou chire pli chien chirew",
    "Pli ou chiré pli chien chirew",
    "Pli ou chiré pli chien chiréw",
    "Pli ou chiré pli chyen chiré-w",
    "Pli ou chiré, pi chyen chirew",
    "Pli ou chiré, Pli chyen chiré-w",
    "Pli ou en chien pli chien ka chirew",
    "Pli pli tris's...",
    "Pli ta pi triss",
    "Pli ta pli tris",
    "Pli ta pli tris",
    "Pli ta pli tris",
    "Pli ta pli tris",
    "Pli ta pli tris",
    "Pli ta pli tris",
    "Pli ta pli tris",
    "Pli ta pli tris",
    "Pli ta pli tris",
    "Pli ta pli tris",
    "Pli ta pli tris'",
    "Pli ta pli triss",
    "Pli ta pli triss",
    "Pli ta pli triss",
    "Pli ta pli trist",
    "Pli ta pli trist",
    "Pli ta pli trist",
    "Pli ta pli triste",
    "Pli ta pli triste",
    "Pli ta pli triste",
    "Pli ta pli twis",
    "Pli ta pli twis",
    "Pli ta plis triss",
    "Pli ta, pli tris",
    "Pli ta, pli tris.",
    "Plis lènmi mwens dépans.",
    "Plis ou véyé mwens ou vwè",
    "Plis ouka gadé mwens ouka vwè",
    "Plita pli tris",
    "Plita pli triste",
    "Pon manman pa ka twouvé pitit ay lèd",
    "Poté mannèv",
    "Poul suiv kanna i néyé",
    "Pousyè di pliskisa, van chayé'y",
    "Pran pen aw o premyé boulangé",
    "Premié couché gangné kabann'",
    "premier kouché ganiyé kaban",
    "Prèmyé kouché ganyé kaban",
    "pwan pen-aw en premier boumangé",
    "Pwemié kouché gannié kabann",
    "Ra kon nèg a zié blé",
    "Raille chien mais dit dents ay blanc",
    "Ravet pa jan ni reson douvan poul",
    "Ravèt pa jan ni rézon douvan poul",
    "Ravèt pa jan tin rézon douvan poul.",
    "Ravèt pa janmen ni rézon douvan poul",
    "Ravet pa janmin ni rézon douvan poul",
    "Ravèt pa janni rézon d’ouvrants poul",
    "Ravèt pa jen ni réson douvan poul",
    "Ravèt pa jen ni rézon douvan poul",
    "Ravet pa ni rezon douvan poul",
    "Ravet pa ni rézon douvan poul",
    "Ravèt pa ni rézon douvan poul",
    "Ravèt pa ni rézon douvan poul",
    "Ravèt pa ni rézon douvan poul.",
    "Ravet pani rezon douvan poul",
    "Ravet pani rezon douvan poul",
    "ravèt pani rézon douvan poul",
    "Ravèt péké jenmen ni rézon douvan poul.",
    "Ravet’ pas ni raison douvant poule",
    "Ravit pa ni rézon douvan poul",
    "Ray chien di dan'y blan",
    "Ray chiyen di dan ay blan",
    "Ray chyen mè di dan a-y blan",
    "Ray chyen, di dan a-y blan",
    "Rayi chyen di dan ay blan",
    "Ri di ri plere lentille",
    "Ryi chyen, di dan'y blan",
    "Sa I pa bon pou zoie pa bon pou kanna",
    "Sa i pa bon pou zwa pa bon pou kanna",
    "Sa ka a jarry cé sa ki a houelebourg",
    "Sa ki an bèk aw pa ta'w, sa ki an fal aw sé ta'w.",
    "Sa ki an bek pa an fal",
    "Sa ki an bèk pa an fal.",
    "Sa ki an bek pa an fal'",
    "Sa ki an bek, pa an fal",
    "Sa ki ba bon pou zoi pa bon pou kanna",
    "Sa ki ba-w chouval a gwo vant pa ka baw zèb pou-w nouwi-y",
    "Sa ki bon pou kanna, bon pou zwa.",
    "Sa ki en bec aw pa taw se sa ki en fal aw ki taw",
    "Sa ki en bec pa en fal",
    "Sa ki fèt bèl",
    "Sa ki fèt bèl!",
    "Sa ki ka ba’w konseyl achté chouval a Gwo vant pa ka lavwan pou Bay manjé",
    "Sa ki ka baw konsey acheté chouval a gro vant pa ka baw lavoan pour nouri li",
    "Sa ki ka maché bò twotwa, ka tonbé an dalo !",
    "Sa ki la baw dlo pa ka chayé-y",
    "Sà ki la baw dlo pé kè chayey",
    "Sa ki la baw, rivyè paka chayé-i",
    "Sa ki la pou vou dlo pa ka chayé'y",
    "Sa ki la pou vou dlo pa ka chayié'y",
    "Sa ki la pou vou dlo paka chayéï",
    "Sa ki la pou-w dlo pa ka chayé-y",
    "Sa ki la pou-w dlo pa ka chayé-y",
    "Sa ki la pou-w, dlo pa ka chayé-y...",
    "Sa ki la pou'w dlo pa ka chayé'y",
    "Sa ki la pou'w dlo pa ka chayé'y",
    "Sa ki la pou'w dlô pa ka chayé'y",
    "Sa ki la pou'w dlo papa chayé-y",
    "Sa ki la pou’w dlo pa ka chayé’y",
    "Sa ki la pouw dlo pa ka chayé -i",
    "Sa ki la pouw dlo pa ka chayé y",
    "Sa ki la pouw dlo pa ka chayé-y",
    "Sa ki la pouw dlo pa ka chayey",
    "Sa ki la pouw dlo pa ka.chayey",
    "Sa ki la pouw dlo paa chayéy.",
    "Sa ki la pouw dlo paka chayé’y",
    "Sa ki la pouw dlo paka chayey",
    "Sa ki la pouw dlo paka chayey",
    "Sa ki la pouw dlo paka chayéy.",
    "Sa ki la pouw dlo pé pa chayiéy",
    "Sa ki la pouw la riviyè pa ka chayé y",
    "Sa ki la pouw rivyè pa chayéy",
    "Sa ki la pouw, dlo pa ka chayéy",
    "Sa ki la pow dlo pa chayé",
    "Sa ki la pow dlo pa ka chayew",
    "Sa ki lévé bonnè ka bwè bon kafé, sa ki lévé ta ka bwè chòlòlò.",
    "Sa ki lévé bonnè ka bwè kafé ,sa ki lévé ta ka bwè tchòlòlò.",
    "Sa ki lévé bonnè ka bwè kafé, sa ki lévé ta ka bwè kjòlòlò",
    "Sa ki lévé gran bonè ka bwè bon kafé. Sa ki lévé apwé ka bwè chololo",
    "Sa ki ni dan pa ni noizet",
    "Sa ki ni dan pa ni noizet' sa ki ni noizet' pa ni dan",
    "Sa ki ni dan pani nwoisèt",
    "Sa ki pa bon pou kanna pa bon pou zwa",
    "Sa ki pa bon pou soi pa bon pou kan-na",
    "Sa ki pa bon pou zoi pa bon pou canna",
    "Sa ki pa bon pou zoua pa bon pou kanna",
    "Sa ki pa bon pou zwa pa bon pou kanna",
    "Sa ki pa bon pou zwa pa bon pou kanna",
    "Sa ki pa bon pou zwa pa bon pou kanna",
    "Sa ki pa bon pou zwa pa bon pou kanna.",
    "Sa ki pa bon pou zwa pa bon pou kanna.",
    "Sa ki pa bon pou zwa, pa bon pou kanna",
    "Sa ki pa bon pour zwa, pa bon pou kanna",
    "Sa ki pa bon zwa, pa bon pou kanna",
    "Sa ki pa tombé an jaden'w; pa menyen'y",
    "Sa ki pani manman, ou ka tété kabrit",
    "Sa ki pou-w, dlo pa ka chayé-y",
    "Sa ki pour dlo pa ka chayéy",
    "Sa ki pour dlo pa la chayéy",
    "Sa ki taw rivié la péké chayéy",
    "Sa ou pa konèt pli gwan kiw",
    "Sa ou sime , se ou ja recolte",
    "Sa ou simé cé sa ou ka recolté",
    "Sa ou simé sé sa ou ka rékolté",
    "Sa ou simé sé sa ou ka rékòlté",
    "Sa ou simé se sa ou ka rékolté ..",
    "Sa ou simen se sa ou ka recolté",
    "Sa qui leve' bon nei ke bre bon cafe' sa Qui leve' ta que' bre' kionlolo",
    "Sa zié pa ka vwè kè pa ka fè mal",
    "Sa zié pa vouè kè pa ka fè mal",
    "Sa zié pa vouè, ķè pa fè mal",
    "Sa zie pa vwe ke pa fe mal",
    "Sa ziyé pa vwè tchè paka fè mal",
    "Sa zyé pa vwè kè pa fè mal",
    "Sac vide paka tiembe doubout",
    "Saille lévé bonè qua bré bon café Saille lévé t’a qu’à brè chololo",
    "Sak vid pa chenn doubout",
    "Sak vid pa ka kèn doubout",
    "Sak vid pa ka reste doubout.",
    "Sak vid pa ka rete doubout",
    "Sak vid pa ka rété doubout",
    "Sak vid paka kenbé doubout.",
    "Sak vid paka rété doubout",
    "Sak vid paka rété doubout",
    "Sak vid paka rété doubout.",
    "Saki la pouw dlo paka chayé-é",
    "Saki pouw dlo pa chayéy",
    "Sanmi ki fait si Gran pas ni tête",
    "Sauce la ka kouté pli chè ki pwasson la",
    "Say an bèk pa an fal.",
    "Sé adan vié kannari ou ka fè bon soup",
    "Se an lanmen ka lave lot",
    "Se an lanmen ka lave lot",
    "Sé Bondyé ki mèt",
    "Sé bonté a kabrit ki fè si fès a- y dèwò.",
    "Sé couteau selmen ki sav ka i ni en tche a giromon",
    "Sé couto tou sel ki sav ka ki ni an kè a jiromon",
    "Sé dapré tété ou ka tayé ròb.",
    "Sé dapré van ké a poul ka panché.",
    "Se dent à chien Ka guéri chien",
    "Sé déyé baw kini baw",
    "Sé fòt a zanmi si krab pa tini tèt.",
    "Sé greenn diri ka fè sak diri",
    "Sé grèn di ri ka fè sak di ri",
    "Sé gren diri ka fè sac",
    "Se gren diri ka fe sak diri",
    "Sé gren diri ka fè sak diri",
    "Sé gren diri ka fè sak diri",
    "Sé grèn diri ka fè sak diri",
    "Sé grèn diri ka fè sak diri",
    "Sé grèn diri ka fè sak diri",
    "Sé gren diri ka fè sak diri.",
    "Sé grenn diri ka fè sac",
    "Se grenn diri ka fe sak diri",
    "Se grenn diri ka fe sak diri",
    "Sé grenn diri ka fè sak diri",
    "Sé grenn diri ka fè sak diri",
    "Sé grenn diri Ka fè sak diri",
    "Sé grenn diri ka fè sak dirî",
    "Sé grenn diri ka fè sak diri.",
    "Sé grenn diri ka fè sak diri.",
    "Sé grenn diri ka fè sak.",
    "Sé grenn diri ki ka fè sak diri",
    "Sé grenn diri, ka fè sak diri",
    "Sé grenn' diri ka plin sak diri",
    "Sé gwenn diri ki ka fè sak diri",
    "Sé kanmarad ki fè si krab pa ni tèt",
    "Sé kouto ki sav ka ki an tchè a jiwomon",
    "Se kouto sel ki konnet sa ki ka pasé en kè a giromon",
    "Sé kouto sèl ki sav ka i adan kyè a jiwomon",
    "Sé kouto sèl ki sav ka ki en kè a jiromon",
    "Sé kouto sèl ki sav sa ki an kè a jiromon",
    "Sé kouto sèl ki sav sa ki an tjè jiromon",
    "Sé kouto sèl ki sav saki an kè a jiromon",
    "Sé kouto sel ki savé sa ki ka pasé an kè a giromon",
    "Sé kouto tou sel ki sav sa ki an tchè à jiromon.",
    "Sé kouto tousèl ki sav sa i ni an kyè a jiromon",
    "Sé kouto tousèl ki sav sa ki an kè a jiwomon.",
    "Sé kouto tout sèl ki sav sa ki ka passé en kè a jiromon",
    "Sé kouto tout sel ki sav sa y ka pasé an kè a jiromon",
    "Sé la bayè ba bèf ka jamvé",
    "Sé lè ou mété difé an pay sèk ou ka tann son a kritchèt",
    "Sé on grenn di ri ka fè sak di ri",
    "Sé On lanmè ka lavé lot",
    "Sé on lanmen ka lavé lòt",
    "Sé on lanmen ka lavé ondòt",
    "Sé on men ka lavé lot",
    "Sé on men ka lavé lot",
    "Sé on men ka lavé lòt",
    "Sé on min ki ka lavé lot",
    "Sé on tanbou a dé bonda",
    "Sé pa an sel jou bef ka bizwen latchéy pou chayé mouch",
    "Sé palé ki fè si krab pa ni tèt",
    "Sé pwèl a chien ka géri modé a chien",
    "Sé sa ki an fal ou ki taw",
    "Sé sèlmen kouto ki sav sa ki ka pasé en kè à giromon.",
    "Sé silon van latché poule panché",
    "Sé silon van vanté ké a poul ka panché",
    "Se Simon van la tchè poul panche",
    "Sé vié kannari ka fè bon soup'",
    "Sé vyé kannari ka fè bon soup",
    "Sé vyé kannari ka fè bon soup",
    "Sé yonn à lot",
    "Se zami ki si crabes pa ni tet",
    "Se zanmi ki fè si krab pa ni têt",
    "Sé zanmi ki fè si krab pa ni tèt",
    "Sé zanmi ki fè si krab pa ni tèt",
    "Sé zanmi ki fè si krab pa ni tèt !",
    "Sé zanmi ki fè si krab pa ni tèt.",
    "Sé zanmi ki fè si krab pani tèt",
    "Sé zanmi ki fè si krab pani tèt",
    "Sé zié ki lach",
    "Sèl couteau sav si ki ni an tchè a giromon !",
    "Sèl kouto ki sav sa ki an kè a jiromon",
    "Sèvis ka soulajé pié i paka soulajé kè",
    "si bari-aw pa plen en tan lapli, a pa siren ki ké rempli-y",
    "Si i ni pou yonn ni pou dé",
    "Si lanmè bel poussé o laj",
    "Si ou pa dòmi an poulayé, ou pa sav si poul ka wonflé.",
    "Si ou pè dépè",
    "Si pani soutirè pani volè",
    "Si vid pa ka kimbe doubout",
    "Si zandoli té bon viann, i pa té ké ka pwonmné si bayè",
    "Si zandoli té bon vyann, i pa té ké ka drivé asi bayè.",
    "Silon tété yo ka tayé soutyen",
    "Silon van latché poul panché",
    "Silon ven la ke poul penche",
    "Silteplé la rété pri en goj aw",
    "Sipote toujours an fom",
    "Sito diri colombo.",
    "Soldas goumin, officiés décoré",
    "Solèy ka kléré pou tout moun",
    "Tan fè tan, tan kité tan.",
    "Tanbou olwen toujou tini bon son",
    "Ten pou compren,compren pou ten",
    "Tèt aw an lè kon chien la véyé kowosol",
    "Ti kochon Di manman-i, poukwa gèl ay long kon sa? Pli ta pli tris",
    "Ti kochon ka di manman-y gyel ay two long men tanto tanto",
    "Ti kochon mandé manman'y pouki gèl a'y long. Manman la réponn li tanto tanto (ou ké sav)",
    "Ti kochon té ka di manman-y djèl ay gwo é manman-y di-y tantotanto.",
    "Ti manmay ka poussé kon piébwa épi titè pou ridrécéy",
    "Ti moun pa ti chodiè",
    "Ti moun pa ti chodiè",
    "Ti moun pa ti chôdiè",
    "Ti moun ti problèm,gran moun gran problèm...",
    "Ti moun, ti penn, gran moun, gran penn.",
    "Ti moune pa ti chodiè",
    "Ti ni kouri é ti ni las",
    "Ti poul suiv ti canan mo neye",
    "Ti poul suiv ti kanna i mò néyé",
    "ti poul suiv ti kanna, i mô néyé",
    "Ti poul swiv manman kanna, i néyé",
    "Ti poul' suiv' ti kanna mô néyé",
    "Ti pwason ka vini gwo pwason",
    "Ti rach koupé gwo bwa",
    "Ti zenfan ti sousi gran zenfan gran sousi",
    "Timoun pa ti chodyè",
    "Tin kouri é tin las",
    "Tin kouri men ni las osi.",
    "Tini kouri tini las",
    "Tini kouri tini las.",
    "Tipoul suiv ti kanna, i mò néyé",
    "Tipoul swiv tikanna i mò néyé.",
    "Tou à tou chouval an bankap",
    "Tou a tou chouval an branka",
    "Tou a tou chouval an branka",
    "Tou a tou chouval an bwanka",
    "Tou a tou milé an branka",
    "Tou a tou milé an branka.",
    "Tou sa ki fèt an lanmè sé fot’ a rékin",
    "Tousa i fèt an lanmè se réken",
    "Tousa ki fèt an lanmè sé fòt a réken (sé ré ki fè'y).",
    "Tousa ki fèt an lanmè, sé réken",
    "Tout chaplé ni kwa a yo",
    "Tout chaplé ni kwa a yo.",
    "Tout cochon ni samedi aye",
    "Tout cochon ni sanmdi a yo",
    "Tout feu toit flamme",
    "Tout gé sé gé mè fouré boi an fès a makak pq gé",
    "Tout jé sé jé mé fouwé bwa an Fès a makak pa jé",
    "Tout jé sé jé mé kasé tibwa an fès a makak pa jé",
    "Tout jé sé jé men fouré bwa an fês a makak pa jé",
    "Tout jé sé jé, kasé ti beaucoup an fès a makak pa jé",
    "Tout krab la mo en baril la !",
    "Tout mangé bon a mangé mè tout pawol pa bon a di",
    "Tout manjé bon a manjé tout pawol pa bon a di",
    "Tout moun Sé moun pani moun ki pi moun ki moun",
    "Tout' jé sé jé kasé bwa an fès a makak pa jé",
    "Toute coco verte Ka rété et tout sec la Ka rété",
    "Travay dèyè poko mannyé.",
    "Tro présé paka fè jou rouvè",
    "Trop pressé pa ka fè jou ouvè",
    "Tu cochon mendé maman ah pourquoi guèl au long quon ça,maman répon’ Plita plitriste",
    "Tu moun pa ti chodyè",
    "Two présé pa ka fè jou rouvè",
    "Two présé paka fè jou wouvè",
    "Un tiens vaut mieux que 2 tu l'auras",
    "Vann van pou acheté lèt",
    "Vant plen korosol si",
    "Vié kannari ka fai bon soup",
    "Vié kannari ka fè bon sôs",
    "Vié kannari ka fè bon soup",
    "Vié kannawi ka fè bon soup",
    "Vieux canari ka fait bon soup",
    "Volè pè volè",
    "Vométan kribich ki kakadó",
    "Vomyétan manjé kribich an hazyé ki vyann lajòl",
    "Vou men ka bate, vou men ka dance",
    "Vwè zégui adan a dan on sac charbon.",
    "Vyé kannari ka fè bon sòs's...",
    "Vyé kannari ka fè bon soup",
    "Vyé kannari ka fè bon soup",
    "Vyé kannari ka fè bon soup",
    "Vyé kannari ka fè bon soup",
    "Vyémoun ka pôté maldo",
    "Way an chien me di dan ay blan",
    "Wi paka monré mônn",
    "Y Kon kongo ki poko vwè kalson.",
    "Y nwè Kon fouk à vonvon.",
    "Yo Adan on lambilance San souffrance",
    "Yo kon kol é chimiz",
    "Yo pa ka konté zé an tchou poule",
    "Yo pa ka nourri chouval pou ba officie monte",
    "Yo pa ka voyé woch an pyé mango ki pa ka poté",
    "Yo té pou nou sé.",
    "Zafè tchou mèl ki pwan plomb",
    "Zandoli ka bay kantité san i tini",
    "Zandoli konnet asi ki pié boi i ka monté",
    "Zandoli konnet si ki pyebwa i ka monte.",
    "Zandoli sav si ki pié bwa i ka monté",
    "Zandoli sav si ki pyé bwa y ka monté",
    "Zavè tjou mèl ki pran plon",
    "Zépolèt pa klouré, sé maré i maré èvè zépeng",
    "zo maré en bon zèb, zo ka di zèb si pwan zot",
    "Zorang si pa ka fè Zorang dou"
]