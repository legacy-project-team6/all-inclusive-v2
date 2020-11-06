import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {
  events=[
    {
      name:"Marathon ASA-Ksar-Hellal",
      type:"sport",
      place:"Ksar-Helall",
      date:"20/12/2020",
      description:"December 20, 2020 The Sports Athletics Association ASA_Ksar_Hellal is organizing the 5th edition of the CARTE International De Ksar Hellal Marathon.Welcome everyone 🏃🏻🏃🏻‍♀️😀 ❤️Together we continue to participate in organizing a run àto experience the joy of reunion and to meet new people💖for the good of sport by adopting the new health situation of COVID-19 so as not to stop ❌Long live sport ❤ long live Tunisia 🇹🇳",
      imgUrl:"https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/121153384_4511924242212320_8623104553727921687_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=7J_as4xT9hUAX_k6aNs&_nc_ht=scontent.ftun4-1.fna&oh=ec4e04820a9c99cc63aca6a444864003&oe=5FCAA777",
      like:0,
      disLike:0,
      price:20,
      seats:1500
    },
   {
      name:"Tunis Open Tennis",
      type:"sport",
      place:"Tunis",
      date:"08/04/2021",
      description:"Nana Trophy and Tunis Open are Tennis tournaments organized from April 08 to 21, 2019 at Tennis Club Tunis.",
      imgUrl:"https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/56386501_259149958296218_8498618948722360320_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=Lm9UwqgkjxAAX-YxVE_&_nc_ht=scontent.ftun4-1.fna&oh=53f9673092751ee38e9d1b1a21ca5882&oe=5FCB86B9",
      like:0,
      disLike:0,
      price:2150,
      seats:100
    },
 {
      name:"Derby",
      type:"sport",
      place:"rades stadium",
      date:"29/12/2020",
      description:"watch your favorite game live in your chair at the Olympic Stadium in Rades EST vs CA",
      imgUrl:"https://content.mosaiquefm.net/uploads/content/thumbnails/derby_tunis_1507048628.jpg",
      like:0,
      disLike:0,
      price:70,
      seats:3000
    },
{
      name:"CAMPING",
      type:"trip",
      place:"Nabeul",
      date:"25/12/2020",
      description:"Al_Rahala Chez Eco_Rand .. Camping at Sidi Mechreg Our program: ✔ 08h00: Gathering Avenue Habib Bourguiba Kiosque Agil. ✔ 8:30 am: Departure ✔ 09:30 am: Mater break ✔ 11:15 am: Arrival at Eco-Rand.  Installation of tents. ~ Discover the place. ~ Swimming & Fishing for enthusiasts. ✔ 8:00 p.m .: Dinner ~ Complete grilled fish offered by our partner Eco-Rand. -> (Grilled fish + Slata mechouia AND Khadhra + fried + tabouna) ~ Evening in front of the campfire ~ Film screening camping theme",
      imgUrl:"https://idwey.tn/uploads/0000/44/2020/07/08/107541220-308456113623213-1039529357521709380-n.jpg",
      like:0,
      disLike:0,
      price:68,
      seats:80
    },
{
      name:"Sahara Tour",
      type:"trip",
      place:"south Tunisia",
      date:"29/11/2020",
      description:"Do you want to discover southern Tunisia and its wonderful hidden corners !? EL FALLEGA gives you this exceptional opportunity, a trip to the heart of the Tunisian Sahara",
      imgUrl:"https://cdn-az.allevents.in/events10/banners/de8fb12d394475c06dfc215d5ffd6ee692aeda9ec1d0e5c00e1d78e0230d1bef-rimg-w526-h263-gmir.jpg?v=1604656861",
      like:0,
      disLike:0,
      price:2145,
      seats:963
    },
{
      name:"Bouhertma Outdoors",
      type:"trip",
      place:"Fernana",
      date:"26/12/2020",
      description:"The Bouhertma Outdoors Ecological Center is located on the banks of the Bouhertma dam in Fernana of the Jendouba government. The center offers all the basic necessities: - Restaurant - Cafeteria - Tents Other activities will also be offered to you afterwards depending on the evolution of the situation and your personal preferences. The exceptional location of the environment in which the center is located and in particular on the edge of the dam invites nature lovers to observe flora and fauna, to enjoy an idyllic nature and to activities. multiple sports. We also offer hikes and walks to breathtaking places in the surroundings.",
      imgUrl:"https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/123245879_3065680743538549_1054959633549199626_o.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=P2tq8-EjSycAX_E0iWu&_nc_ht=scontent.ftun4-1.fna&oh=9b31312b69793d48b014f7237f950170&oe=5FCB62BC",
      like:0,
      disLike:0,
      price:150,
      seats:200
    },
    {
      name:"film screening",
      type:"culture",
      place:"Tunis",
      date:"25/1/2020",
      description:"Un Fils, a film written and directed by Mehdi Barsaoui, won the grand prize of the 10th edition of the Malmo Arab Film Festival (MAFF, Sweden). This fictional feature film won the highest distinction of the festival which awards several awards including 20,000 Swedish crowns to the winner of the first prize. In the same film, Najla Ben Abdallah won the award for best actress. This distinction is awarded to her for her role as a main actress. The winners of this edition of MAFF, organized from October 8 to 13 in the Swedish city of Malmo, was unveiled Monday evening. The final day of the festival will be marked by the screening of the award-winning films.",
      imgUrl:"https://www.grignoux.be/upload/grignoux/films/1074/un_fils_affiche.jpg",
      like:0,
      disLike:0,
      price:25,
      seats:200
    },
    {
      name:"Sicca Jazz",
      type:"culture",
      place:"Kef",
      date:"1/12/2020",
      description:"The 6th edition of the Sicca Jazz festival hosted annually by the city of Kef, will take place from December 12 to 16.This is the second postponement of the 2020 edition of this great meeting for jazz music lovers. Usually held in the month of March, it was to be held during that month of October.",
      imgUrl:"https://content.mosaiquefm.net/uploads/content/thumbnails/sika_jazz_1602095392.jpg",
      like:0,
      disLike:0,
      price:40,
      seats:300
    },
    {
      name:"THEATER",
      type:"culture",
      place:"Tunis",
      date:"12/12/2020",
      description:" Le 4ème Art - Avenue de Paris Benjamin, héros de Martyr, est un adolescent qui ne jure que par les Ecritures Saintes. La crise existentielle et religieuse qu’il traverse vient rapidement influer sur le quotidien du lycée : par les questions qu’il soulève, Benjamin révèle les failles de tout un système d’éducation, qu’il soit familial, scolaire ou même théologique. Les adultes sont vite dépassés par sa force de conviction. Seule sa professeure de biologie tente de le raisonner en l’emmenant sur son propre terrain : celui de sa lecture de la Bible. Marius Von Mayenburg nous interroge sur la révolte à l’adolescence et sur le fanatisme religieux – Où la parole est le moteur le plus puissant...",
      imgUrl:"https://www.jetsetmagazine.net//__admin/__admin_medias/modules/culture_listes/theatre_et_dance/2020/09/martyr09.jpg",
      like:0,
      disLike:0,
      price:30,
      seats:250
    }
];


  favorites=[];

  listCondition='home'
//method for changing view
  changeList(view){
    this.listCondition=view;
  }

  addLike(eventId){
    this.events[eventId].like=this.events[eventId].like+1;
  }

  addDisLike(eventId){
    this.events[eventId].disLike=this.events[eventId].disLike+1;
  }

  participate(event){
    this.favorites.push(event)
  }
  constructor() { }


}

