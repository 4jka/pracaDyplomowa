var city = {
    1 : { id: 1,
          name: 'Lublin'
        },
    2 : { id: 2,
          name: 'Warszawa'
        }  ,  
    3 : { id: 3,
           name: 'Wroclaw'
    }    
}


var category = {
    1 : {
        id: 1,
        name: 'Historia'
    },
    2 : {
        id: 2,
        name: 'Klub'
    },
    3 : {
        id: 3,
        name: 'Teatr'
    },
    4 : {
        id: 4,
        name: 'Kosmos'
    },
    5 : {
        id: 5,
        name: 'Zamek'
    },
    6 : {
        id: 6,
        name: 'Muzeum'
    }
}
// RowDataPacket { id_category: 2, name_category: 'Klub' },
//   RowDataPacket { id_category: 1, name_category: 'Historia' },
//   RowDataPacket { id_category: 4, name_category: 'Kosmos' },
//   RowDataPacket { id_category: 28, name_category: 'Music' },
//   RowDataPacket { id_category: 6, name_category: 'Muzeum' },
//   RowDataPacket { id_category: 3, name_category: 'Teatr' },
//   RowDataPacket { id_category: 33, name_category: 'Taniec' },
//   RowDataPacket { id_category: 32, name_category: 'Romantic' },
//   RowDataPacket { id_category: 31, name_category: 'Art' },
//   RowDataPacket { id_category: 5, name_category: 'Zamek' } ]

var allPlaces = {
    1 : {
        id : 1,
        allPhoto:[
            'majdanek/1.jpg',
            'majdanek/2.jpg',
            'majdanek/3.jpg',
            'majdanek/4.jpg',
            'majdanek/5.jpg',
            'majdanek/6.jpg'
        ],
        city: 1,
        lat: 51.226017, 
        lng: 22.605747,
        category: [1],
        video:'<div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/AaY7PbOaDjk?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><div style="position:relative;height:0;padding-bottom:75%"><iframe src="https://www.youtube.com/embed/u7cbd6w3nLQ?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="480" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/Lr0F_wr9R2Y?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>',
        title: 'Majdanek - miejsca pamięci i muzeum',
        paragraph: [
            '<span class="abstract-10">Państwowe Muzeum</span> na <span class="abstract-2">Majdanku</span> powstało w miejscu byłego niemieckiego obozu koncentracyjnego, który funkcjonował na obrzeżach Lublina od października 1941 roku do lipca 1944 roku. Powołano je w listopadzie 1944 roku, jako pierwsze muzeum upamiętniające ofiary II wojny światowej w Europie.',
            'W pierwszych latach swojej działalności Muzeum skupiało się głównie na pracach związanych z konserwacją i rekonstrukcją obiektów historycznych, a także poszukiwaniem i porządkowaniem dokumentów z okresu funkcjonowania obozu. W 1945 roku otwarto pierwszą muzealną wystawę stałą. W tym czasie zorganizowano także Tydzień Majdanka, którego głównym celem było upamiętnienie ofiar KL Lublin, ale w późniejszych okresach przybierał on też formę wieców antywojennych i podporządkowany był celom propagandowym. Przystąpiono także do realizacji pierwszego planu zagospodarowania przestrzennego Muzeum, w ramach którego zabezpieczono prochy ofiar obozu.',
            'Lata 50. XX wieku stały pod znakiem intensywnej działalności popularyzatorskiej – organizowano odczyty i wystawy objazdowe. Rozpoczęto także kwerendy archiwalne, które położyły podstawy pod prowadzone na szeroką skalę od lat 60. XX wieku badania naukowe. Już w 1965 roku zaowocowały one wydaniem I tomu „Zeszytów Majdanka”. W tym czasie realizowano również kolejny projekt zagospodarowania przestrzennego Muzeum, którego istotną częścią stał się Pomnik Walki i Męczeństwa – jeden z najbardziej rozpoznawalnych elementów krajobrazu Lublina.',
            'Nawiązanie bliskich kontaktów z byłymi więźniami Majdanka było efektem konkursów na pamiętniki i pamiątki z okresu okupacji. W latach 70. i 80. XX wieku byli oni gośćmi licznych sesji naukowych poświęconych dziejom obozu na Majdanku i okupacji niemieckiej na Lubelszczyźnie organizowanych przez PMM, przystąpiono także do nagrywania ich wspomnień. Dużą popularnością cieszyły się wystawy sztuki współczesnej z zakresu m.in. malarstwa i grafiki. W latach 1983–2004 PMM organizowało je w ramach Międzynarodowego Triennale Sztuki.',
            'Lata 90. ubiegłego wieku otworzyło wydanie monografii obozu „Majdanek 1941–1944”. Od kilkunastu lat badania naukowe pracowników Muzeum koncentrują się już nie tylko na historii KL Lublin, ale także praktyce muzealnej, zwłaszcza edukacji w miejscach pamięci. W kręgu zainteresowania historyków znalazła się również tematyka zagłady Żydów w Generalnym Gubernatorstwie, tym bardziej że Muzeum na Majdanku sprawuje opiekę nad obszarami byłych obozów zagłady w Bełżcu (od 2004 roku) i Sobiborze (od 2012 roku). Podobnej tematyce, a także prezentacji zbiorów muzealnych, podporządkowane były wystawy zorganizowane w ciągu ostatnich lat, wśród których na szczególne wymienienie zasługuje najnowsza ekspozycja historyczna „Więźniowie Majdanka”.',
            'W działalności Muzeum zaznaczyły się w ostatnich latach prace związane z modernizacją i rozbudową ekspozycji plenerowej oraz remonty służące poprawie infrastruktury dla zwiedzających, których przez 70 lat funkcjonowania instytucji odnotowano na Majdanku ponad 10 milionów.'
        ]
    },
    2 : {
        id : 2,
        allPhoto:[
            'muzeum/1.jpg',
            'muzeum/2.jpg',
            'muzeum/3.jpg',
            'muzeum/4.jpg',
            'muzeum/5.jpg',
            'muzeum/6.jpg',
            'muzeum/7.jpg'
        ],
        city: 1,
        lat: 51.262083, 
        lng: 22.506453,
        category: [1],
        video:'<div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/7_j8JRIJVlM?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/xhmWq4v-vio?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>',
        title: 'Muzeum Wsi Lubelskiej.',
        paragraph: [
            'Muzeum Wsi Lubelskiej istnieje od 1970 roku i ciągle jest w fazie budowy. Zajmuje teren o powierzchni ponad 25 ha i jest jednym z największych skansenów w Polsce. Swoim zasięgiem obejmuje regiony etnograficzne Podlasia, Polesia Lubelskiego, Powiśla, Roztocza oraz Wyżyny Lubelskiej.',
            'W przyszłości w muzeum będzie można obejrzeć sto osiemdziesiąt obiektów dużej architektury. Cała ekspozycja skansenowska została podzielona na 7 sektorów: Wyżyny Lubelskiej, Roztocza, Powiśla, Podlasia, Nadbuża oraz sektor dworski i miasteczkowy.',
            'W drewnianej zabudowie przeważa konstrukcja zrębowa ścian, a budynki posiadają charakterystyczne czterospadowe dachy pokryte słomą. Na uwagę zasługują zagrody okólnikowe, chata z Tarnogóry wybudowana w 1773 r., drewniany wiatrak oraz XVIII-wieczny dworek. Ponadto na terenie skansenu znajduje się kościół z Matczyna (XVII) oraz grecko-katolicka cerkiew z Tarnoszyna (XVIII w.). Obydwu obiektom przywrócono funkcje kultowe.',
            'W lubelskim skansenie obok ekspozycji stałych organizowane są wystawy czasowe, imprezy nawiązujące do roku gospodarsko-obrzędowego na wsi, a także imprezy patriotyczne, pokazy zanikających rzemiosł, zajęcia edukacyjne i inne imprezy kulturalne.'
        ]
    },
    3 :{
        id : 3,
        allPhoto:[
            'zamek/1.jpg',
            'zamek/2.jpg',
            'zamek/3.jpg',
            'zamek/4.jpg'
        ],
        city: 1,
        lat: 51.250461, 
        lng: 22.572446,
        category: [1,5],
        video:'<div style="position:relative;height:0;padding-bottom:56.27%"><iframe src="https://www.youtube.com/embed/ZrPRBicLEnM?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/9DJxN9arMNU?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>',
        title: 'Zamek w Lublinie',
        paragraph: [
            'Początki zamku związane są z powstaniem w XII wieku kasztelanii lubelskiej. Za czasów Kazimierza Sprawiedliwego został wzniesiony na wzgórzu gród umocniony drewniano-ziemnym wałem. W 2. połowie XIII lub na początku XIV wieku w obrębie górnej części grodu wybudowano murowaną wieżę obronno-rezydencjonalną (donżon, stołp). Wieża była pierwszym murowanym obiektem zamku.',
            'W XIV wieku za panowania Kazimierza Wielkiego wzniesiono murowany zamek otoczony murem obronnym z bramą od zachodu. Wybudowano pierwszy gotycki pałac dla króla oraz basztę żydowską. Zamek, leżący na królewskim szlaku z Krakowa do Wilna, cieszył się zainteresowaniem i opieką Jagiellonów. Tu pod kuratelą Jana Długosza wychowali się synowie Kazimierza Jagiellończyka.',
            'Około 1520 roku Zygmunt Stary zapoczątkował przebudowę zamku na okazałą renesansową rezydencję królewską, zatrudniając między innymi włoskich mistrzów sprowadzonych z Krakowa. Wybudowano nową bramę z wieżą, czworoboczną basztę, kamienicę Grodzką, podwyższono pałac królewski ozdabiając go attykami.',
            'W 1569 roku w murach zamku obradował sejm, na którym podpisano akt unii polsko-litewskiej – unię lubelską. 19 lipca 1569 na sejmie w Lublinie książę pruski Albrecht Fryderyk Hohenzollern złożył hołd lenny Zygmuntowi II Augustowi, co obecny wówczas Jan Kochanowski opisał w utworze Proporzec albo hołd pruski.',
            'Pomiędzy 1635–1642 rokiem pod kierunkiem Jana Cangerle zamek prawdopodobnie wyremontowano. W roku 1648 w zamku kierował działaniami wojennymi król Jan Kazimierz. W latach 1655–1657 zamek zajmowały wojska szwedzkie, węgierskie i moskiewskie, co doprowadziło do jego ogromnych zniszczeń. Ocalały jedynie najstarsze budowle – kaplica i donżon. W 1743 roku starosta Jakub Zamoyski wzniósł nowe budynki kancelarii i archiwum, a w 1773 roku budynek dawnej bramy wjazdowej został przebudowany na cele mieszkalne przez starostę Wincentego Potockiego.'
        ]
    },
    4 :{
        id : 4,
        allPhoto:[
            'stareMiasto/1.jpg',
            'stareMiasto/2.jpg',
            'stareMiasto/3.jpg',
            'stareMiasto/4.jpg'
        ],
        city: 1,
        lat: 51.246096,  
        lng: 22.573542,
        category: [1],
        video:'<div style="position:relative;height:0;padding-bottom:75%"><iframe src="https://www.youtube.com/embed/Qlq_tXHVTQM?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="480" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/OuqKQEBzH9c?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>',
        title: 'Stare Miasto',
        paragraph: [
            'Stare Miasto jest zdecydowanie najpiękniejszą częścią Lublina. Od 23 lutego 2006 jest również dzielnicą administracyjną miasta. Nie jest to jednak najstarszy obszar Lublina. Znaleziska archeologiczne potwierdzają, że pierwsze osady istniały na Wzgórzu Czwartek, Grodzisku oraz na terenie dzisiejszego zamku..',
            'Lubelskie Stare Miasto jest jednym z najlepiej zachowanych zabytkowych zespołów urbanistycznych w Polsce. Zachwyca nie tylko miejscowych, ale przede wszystkim polskich i zagranicznych turystów, którzy coraz tłumniej przybywają do Lublina.',
            'Choć Stare Miasto w Lublinie nie jest największe, znajduje się w jego obszarze całkiem sporo wartych zobaczenia obiektów. Wielu osobom lubelskie Stare Miasto błędnie kojarzy się przede wszystkim z Zamkiem Lubelskim, którego oryginalna architektura może początkowo zadziwić oglądającego. Zamek nie jest jednak położony w obrębie Starego Miasta (administracyjnie od 2009 roku należy on do obecnej dzielnicy Starego Miasta, jednak historyczne Stare Miasto kończy się na murach obronnych), a właściwy obszar tej dzielnicy kryje w sobie o wiele więcej interesujących miejsc i budynków. Sprawdź, którym obiektom warto poświęcić szczególną uwagę.'
        ]
    },
    5 :{
        id : 5,
        allPhoto:[
            'helium/1.jpg',
            'helium/2.jpg',
            'helium/3.jpg',
            'helium/4.jpg',
            'helium/5.jpg'
        ],
        city: 1,
        lat: 51.245428, 
        lng: 22.557461,
        category: [2],
        video:'<div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/6uZ-GjouX_0?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>',
        title: 'Helium Club',
        paragraph: ['NOT DESCRIPTION']
    },
    6 :{
        id : 6,
        allPhoto:[
            'club30/1.jpg',
            'club30/2.jpg',
            'club30/3.jpg',
            'club30/4.jpg'
        ],
        city: 1,
        lat: 51.248438, 
        lng: 22.553164,
        category: [2],
        video:'<iframe width="100%" height="230" src="https://www.youtube.com/embed/Xiuce2-837Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/3MlVOyn8yeg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/pNfv0d8796Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        title: 'Klub 30',
        paragraph: ['NOT DESCRIPTION']
    },
    7: {
        id : 7,
        allPhoto:[
            'silence/1.jpg',
            'silence/2.jpg',
            'silence/3.jpg',
            'silence/4.jpg',
            'silence/5.jpg'
        ],
        city: 1,
        lat: 51.246632, 
        lng: 22.543788,
        category: [2],
        video:'<iframe width="100%" height="230" src="https://www.youtube.com/embed/Xiuce2-837Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/3MlVOyn8yeg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/pNfv0d8796Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        title: 'Silence',
        paragraph: ['NOT DESCRIPTION']
    },
    8 :{
        id : 8,
        allPhoto:[
            'Graffiti/1.jpg',
            'Graffiti/2.jpg',
            'Graffiti/3.jpg',
            'Graffiti/4.jpg',
            'Graffiti/5.jpg'
        ],
        city: 1,
        lat: 51.240272, 
        lng: 22.557113,
        category: [2],
        video:'<iframe width="100%" height="230" src="https://www.youtube.com/embed/Xiuce2-837Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/3MlVOyn8yeg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/pNfv0d8796Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        title: 'Graffiti',
        paragraph: ['NOT DESCRIPTION']
    },
    9 :{
        id : 9,
        allPhoto:[
            'kazik/1.jpg',
            'kazik/2.jpg',
            'kazik/3.jpg',
            'kazik/4.jpg',
            'kazik/5.jpg',
            'kazik/6.jpg'
        ],
        city: 1,
        lat: 51.235245, 
        lng: 22.547232,
        category: [2],
        video:'<div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/OQ56LxH5CTc?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>',
        title: 'Kazik - klub studencki',
        paragraph: [
            'Klub studentów Politechniki Lubelskiej „Kazik”  ma swoją długą historię. Już w 1983 roku odbywały się w nim takie imprezy, jak: wieczór piosenki turystycznej, turnieje szachowe i brydżowe. ',
            '…a w ostatnich latach: koncerty takich gwiazd jak m.in.: Grubson, Luxtorpeda, Sokół, Otrzęsiny Studentów Politechniki Lubelskiej, Uniwersytetu Przyrodniczego, dyskoteki wydziałowe.',
            'Klub organizuje turnieje i imprezy studenckie, imprezy cykliczne i spontaniczne, koncerty, które mają na celu rozwój kulturalny.',
            'W Kaziku organizowane są również spotkania kół naukowych oraz samorządów. Studenci mogą tu w spokoju podyskutować o swoich problemach i sprawach, przeprowadzać głosowania, itp. Staramy się udostępniać klub studentom, aby mieli możliwość poznawania nowych ludzi oraz miło spędzali czas. '
        ]
    },
    10 :{
        id : 10,
        allPhoto:[
            'muzeumTechniki/1.jpg',
            'muzeumTechniki/2.jpg',
            'muzeumTechniki/3.jpg',
            'muzeumTechniki/4.jpg'
        ],
        city: 2,
        lat: 52.242969, 
        lng: 21.007653,
        category: [6],
        video:'<iframe width="100%" height="230" src="https://www.youtube.com/embed/Xiuce2-837Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/3MlVOyn8yeg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/pNfv0d8796Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        title: 'Muzeum techniki',
        paragraph: ['NOT DESCRIPTION']
    },
    11 :{
        id : 11,
        allPhoto:[
            'muzeumHistoriaZydow/1.jpg',
            'muzeumHistoriaZydow/2.jpg',
            'muzeumHistoriaZydow/3.jpg',
            'muzeumHistoriaZydow/4.jpg'
        ],
        city: 2,
        lat: 52.249381, 
        lng: 20.993204,
        category: [6],
        video:'<iframe width="100%" height="230" src="https://www.youtube.com/embed/Xiuce2-837Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/3MlVOyn8yeg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/pNfv0d8796Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        title: 'Muzeum Historii Żydów Polskich POLIN',
        paragraph: ['NOT DESCRIPTION']
    },
    12 :{
        id : 12,
        allPhoto:[
            'powstanieWarszawske/1.jpg',
            'powstanieWarszawske/2.jpg',
            'powstanieWarszawske/3.jpg',
            'powstanieWarszawske/4.jpg'
        ],
        city: 2,
        lat: 52.232356, 
        lng:  20.981210,
        category: [6],
        video:'<iframe width="100%" height="230" src="https://www.youtube.com/embed/Xiuce2-837Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/3MlVOyn8yeg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/pNfv0d8796Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        title: 'Muzeum Powstania Warszawskiego',
        paragraph: ['NOT DESCRIPTION']
    },
    13 :{
        id : 13,
        allPhoto:[
            'muzeumNarodowy/1.jpg',
            'muzeumNarodowy/2.jpg',
            'muzeumNarodowy/3.jpg',
            'muzeumNarodowy/4.jpg'
        ],
        city: 2,
        lat: 52.231615, 
        lng: 21.024791, 
        category: [6],
        video:'<iframe width="100%" height="230" src="https://www.youtube.com/embed/Xiuce2-837Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/3MlVOyn8yeg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><iframe width="100%" height="230" src="https://www.youtube.com/embed/pNfv0d8796Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        title: 'Muzeum Narodowe',
        paragraph: ['NOT DESCRIPTION']
    }
}


