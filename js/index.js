$(document).ready(function(){
	var quoteSource=[
		/* CChina */
		{
			src: "img/places/Shanghai1.jpg",
			quote:"Shanghai offers a heady brew of half-digested images and preconceptions.",
			place:"Shanghai, China"
	    },
	    {
	    	src:"img/places/Shanghai2.jpg",
	    	quote:"Once on the street level with the profusion of traffic and tourists, can remove all sense of tranquility.",
	    	place:"Shanghai, China"
	    },
	    {
	    	src:"img/places/Shanghai3.jpg",
	    	quote:"Additionally, the surrounding gardens helps create a pleasant atmosphere in which you can feel comfortable in a relaxed manner.",
	    	place:"Shanghai, China"
	    },
	    /* CBrazil */
	    {
	    	src:"img/places/Brazil1.jpg",
	    	quote:"The beach is not merely a place to absorb the sun's rays.",
	    	place:"Rio de Janeiro, Brazil"
	    },
	    {
	    	src:"img/places/Brazil2.jpg",
	    	quote:"Clothing is minimal; bodies bronzed and beautiful and the famous Copacabana and Ipanema beaches are a Mecca for Brazilians and tourists alike.",
	    	place:"Rio de Janeiro, Brazil"
	    },
	    {
	    	src:"img/places/Brazil3.jpg",
	    	quote:"Few places could be friendlier than Salvador and it's been proven!",
	    	place:"Salvador, Brazil"
	    },
	    /* CEngland */
	    {
	    	src:"img/places/London1.jpg",
	    	quote:"Downtown London is like a multicultural maze of sounds, scents, and voices from all around the world!",
	    	place:"London, UK"
	    },
	    {
	    	src:"img/places/London2.jpg",
	    	quote:"English was spread around the globe by the British Empire and is today the world's premier language for international discourse.",
	    	place:"London, UK"
	    },
	    {
	    	src:"img/places/London3.jpg",
	    	quote:"London is a culturally forward destination that will induce wonder.",
	    	place:"London, UK"
	    },
	    {
	    	src:"img/places/Brighton1.jpg",
	    	quote:"Along with the Royal Family came the cream of English society, including the aristocracy and the so-called “moneyed” classes.",
	    	place:"Brighton, UK"
	    },
	    {
	    	src:"img/places/Brighton2.jpg",
	    	quote:"The famous Brighton Pier alone is worth a visit. It is no less than 512 meters long and is popular among locals and tourists.",
	    	place:"Brighton, UK"
	    },
	    /* CHungary */
	    {
	    	src:"img/places/Hungary1.jpg",
	    	quote:"Budapest is a particularly popular location for filming action movies because many of the buildings are still studded with bullet holes.",
	    	place:"Budapest, Hungary"
	    },
	    {
	    	src:"img/places/Hungary2.jpg",
	    	quote:"Budapest is home to several buildings of magnificent size and architecture.",
	    	place:"Budapest, Hungary"
	    },
	    /* CGermany */
	    {
	    	src:"img/places/Germany1.jpg",
	    	quote:"Berlin! The capital is still being rebuilt, but it maintains a unique historical charm.",
	    	place:"Berlin, Germany"
	    },
	    {
	    	src:"img/places/Germany2.jpg",
	    	quote:"The Schloss Nymphenburg parklands are Munich’s lungs and are probably the biggest city parks in the world.",
	    	place:"Munich, Germany"
	    },
	    {
	    	src:"img/places/Germany3.jpg",
	    	quote:"The magnificent neo-Romanesque style of Neuschwanstein castle is the most popular castle in the world, and King Ludwig II of Bavaria was totally involved in its design.",
	    	place:"Neuschwanstein, Germany"
	    },
	    {
	    	src:"img/places/Germany5.jpg",
	    	quote:"The first concentration camp was constructed in Dachau, just outside the medieval town, today stands a memorial site.",
	    	place:"Dachau, Germany"
	    },
	    {
	    	src:"img/places/Germany4.jpg",
	    	quote:"The gate had the words 'Arbeit Macht Frei' (Freedom Through Work) on it, which served only to mislead the prisoners, who thought that they would be freed if they worked hard, whereas the only freedom that awaited them was through death.",
	    	place:"Dachau, Germany"
	    },
	    {
	    	src:"img/places/Germany6.jpg",
	    	quote:"Berchtesgaden, is located near the border of Austria, and was Hitler’s mountain retreat and the southern headquarters of the Nazi party.",
	    	place:"Berchtesgaden, Germany"
	    },
	    {
	    	src:"img/places/Germany7.jpg",
	    	quote:"At the top of the Mountain Kehlstein is a mountain top lodge built by the Nazis, called Eagle’s Nest. It is a major draw for tourists, and has incomparable views of the Alps mountain range. Ironically, Hitler suffered vertigo and rarely took pleasure in the views.",
	    	place:"Berchtesgaden, Germany"
	    },
	    {
	    	src:"img/places/Germany8.jpg",
	    	quote:"The Frankfurt Central Station is one of the largest terminals in Europe, and the Frankfurter Kreuz is the most used highway interchange in Europe.",
	    	place:"Frankfurt, Germany"
	    },
	    {
	    	src:"img/places/Germany9.jpg",
	    	quote:"Frankfurt International Airport is one of the busiest ones in the world.",
	    	place:"Frankfurt, Germany"
	    },
	    {
	    	src:"img/places/Germany10.jpg",
	    	quote:"Frankfurt features a fantastic mix of people from around the world, the main nationalities include German, English, North Americans, Scandinavian, Dutch, Italian and Japanese.",
	    	place:"Frankfurt, Germany"
	    },
	    /* CThailand */
	    {
	    	src:"img/places/Bangkok1.jpg",
	    	quote:"You should not miss the original, famous Thai massages. For little money you are fully kneaded, definitely an experience! About a tip, the Thais are very pleased.",
	    	place:"Bangkok, Thailand"
	    },
	    /* CSpain */
	    {
	    	src:"img/places/Spain2.jpg",
	    	quote:"In order for it to be so consistently popular among tourists, the island of Mallorca (or Majorca) must be doing something right.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	src:"img/places/Spain3.jpg",
	    	quote:"It is a feast for the eyes as dazzling displays of flowers, huge piles of oranges, buckets of olives, and fish you never knew existed!",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	src:"img/places/Spain4.jpg",
	    	quote:"Those of a squeamish disposition should avoid the upstairs meat counters, where the pigs and rabbits look like pigs and rabbits rather than sterile pieces of packaged flesh.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	src:"img/places/Spain5.jpg",
	    	quote:"The vintage trains are still in use, providing a joyride for tourists and a relief for locals from the terrors of the Palma-Soller road.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	src:"img/places/Spain6.jpg",
	    	quote:"The good, the bad and the ugly sides of Mallorcas tourist development meet along a 25-km stretch of coast.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	src:"img/places/Spain7.jpg",
	    	quote:"Once upon a time, a fisherman casting his net into the sea at Arenal could have gazed around at an empty coastline. Nowadays he sees a continuous stretch of hotels, a concrete jungle extending all along the coast. And he wouldn’t be there anyway as there are few fish left to catch.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	src:"img/places/Spain8.jpg",
	    	quote:"Like it or loathe it, you are bound to spend some time in Palma Bay even if you are not staying here. You should visit at least once to see some of the best, and the worst, that Mallorca has to offer.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	src:"img/places/Spain9.jpg",
	    	quote:"The streets behind the church, once home to jewelers and Jewish traders, are now run down and seedy and best avoided after dark.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	src:"img/places/Spain10.jpg",
	    	quote:"Among the paintings, pulpits and prayer books are splendid Arab tapestries, a collection of ceramics spanning five centuries and a 17th century painting of baby Jesus carrying a cross.",
	    	place:"Mallorca, Spain"
	    },
	    {
	    	src:"img/places/Spain11.jpg",
	    	quote:"Billed as Mallorca's most important museum, this undoubtedly contains some fascinating exhibits but the displays lack imagination and it is difficult to get excited about bits of stone in glass cases.",
	    	place:"Mallorca, Spain"
	    },
	    {
	    	src:"img/places/Spain12.jpg",
	    	quote:"Some of the exhibits are the sort of thing that give modern art a bad name, but do go with an open mind.",
	    	place:"Mallorca, Spain"
	    },
	    {
	    	src:"img/places/Spain13.jpg",
	    	quote:"This region is a land of sensual pleasures. Listen to the sounds of flamenco echoing through the warm summer nights or satisfy your hunger at the Andalucian table, overflowing with the country's finest legendary mountain hams of Trevélez and Jabugo.",
	    	place:"Barcelona, Spain"
	    },
	    {
	    	src:"img/places/Spain14.jpg",
	    	quote:"Today Spain is not nearly as powerful as in earlier times.",
	    	place:"Barcelona, Spain"
	    },
	    {
	    	src:"img/places/Spain15.jpg",
	    	quote:"Hallowed with a storied past, waiting to be revealed by passing travelers.",
	    	place:"Barcelona, Spain"
	    },
	    /* CItaly */
	    {
	    	src:"img/places/Italy1.jpg",
	    	quote:"Few other countries manage to evoke such a feast of emotions and images as Florence.",
	    	place:"Florence, Italy"
	    },
	    {
	    	src:"img/places/Italy2.jpg",
	    	quote:"Who doesn’t recognize the Leaning Tower of Pisa and that much-photographed scene of Florence, with its domes and bridges? And where would we be without Leonardo da Vinci?",
	    	place:"Florence, Italy"
	    },
	    {
	    	src:"img/places/Italy5.jpg",
	    	quote:"Milan is the wealthiest city in Italy and is comparatively modern in appearance after heavy bombing in WWII.",
	    	place:"Milian, Italy"
	    },
	    {
	    	src:"img/places/Italy3.jpg",
	    	quote:"Rome is a highly historical city that tries to preserve every last bit of it.",
	    	place:"Rome, Italy"
	    },
	    {
	    	src:"img/places/Italy4.jpg",
	    	quote:"Rome is filled with some of the most famous historic sites and monuments of history.",
	    	place:"Rome, Italy"
	    },
	    {
	    	src:"img/places/Italy6.jpg",
	    	quote:"Tourists are greatly attracted by a large rock formation which juts out into the sea opposite the town center.",
	    	place:"Capo Vaticano, Italy"
	    },
	    /* CSweden */
	    {
	    	src:"img/places/Sweden1.jpg",
	    	quote:"No other city in Sweden has such national importance, history and culture the way Stockholm does!",
	    	place:"Stockholm, Sweden"
	    },
	    /* CCanada */
	    {
	    	src:"img/places/Canada1.jpg",
	    	quote:"The eighty ethnic communities and four universities reflect Montréal’s vitality.",
	    	place:"Montréal, Canada"
	    },
	    {
	    	src:"img/places/Canada2.jpg",
	    	quote:"Be sure to get a free personal alarm that makes a loud noise when the pin is pulled. It is advised to carry this when walking alone.",
	    	place:"Montréal, Canada"
	    },
	    {
	    	src:"img/places/Canada3.jpg",
	    	quote:"Celine Dion was married there.",
	    	place:"Montréal, Canada"
	    },
	    {
	    	src:"img/places/Canada4.jpg",
	    	quote:"The cliffs provide a natural defense from the river, but early settlers wanted protection from a land based attack as well, hence the city walls.",
	    	place:"Quebec City, Canada"
	    },
	    /* CFinland */
	    {
	    	src:"img/places/Finland1.jpg",
	    	quote:"The Finnish have fought hard for their existence.",
	    	place:"Helsinki, Finland"
	    },
	    {
	    	src:"img/places/Finland2.jpg",
	    	quote:"Cell phones and the internet are ubiquitous in Finland with few countries adopting to new technology the way they have.",
	    	place:"Helsinki, Finland"
	    },
	    /* CIreland */
	    {
	    	src:"img/places/Ireland1.jpg",
	    	quote:"Think of Ireland… Can you hear the soft, emotional music drifting over the green hills and lakes, or perhaps the gentle sound of a golfer hitting a ball, framed by a backdrop of rugged cliffs?",
	    	place:"Dublin, Ireland"
	    },
	    /* CDenmark */
	    {
	    	src:"img/places/Denmark1.jpg",
	    	quote:"If you love the sea, you will yearn for Denmark with its beautiful and long sandy beaches.",
	    	place:"Copenhagen, Denmark"
	    },
	    {
	    	src:"img/places/Denmark2.jpg",
	    	quote:"Denmark offers thick forests.",
	    	place:"Copenhagen, Denmark"
	    },
	    /* CSwitzerland */
	    {
	    	src:"img/places/Switzerland1.jpg",
	    	quote:"Yodeling is one well-known example of Swiss music that remains popular today!",
	    	place:"Zurich, Switzerland"
	    },
	    /* CNorway */
	    {
	    	src:"img/places/Norway1.jpg",
	    	quote:"You may have seen some pictures of the country’s famous and emotional painting, The Scream, by Norwegian artist Edward Munch.",
	    	place:"Oslo, Norway"
	    },
	    /* CSouth Korea */
	    {
	    	src:"img/places/SKorea1.jpg",
	    	quote:"Feel free to explore the subtle differences between North and South Korea.",
	    	place:"Seoul, South Korea"
	    },
	    /* CFrance */
	    {
	    	src:"img/places/France1.jpg",
	    	quote:"With the rise of the United States during the World Wars, France has lost its position of influence.",
	    	place:"Paris, France"
	    },
	    {
	    	src:"img/places/France2.jpg",
	    	quote:"It is always bustling with humanity!",
	    	place:"Paris, France"
	    },
	    {
	    	src:"img/places/France3.jpg",
	    	quote:"The Eiffel Tower literally towers over the Champ de Mars in the seventh arrondissement.",
	    	place:"Paris, France"
	    },
	    {
	    	src:"img/places/France4.jpg",
	    	quote:"The stocky Notre-Dame Cathedral, on the Ile-de-la-Cite, could not be more different from the filigree Eiffel Tower.",
	    	place:"Paris, France"
	    },
	    {
	    	src:"img/places/France5.jpg",
	    	quote:"The Moulin Rouge is best known as the spiritual birthplace of the modern form of the can-can dance.",
	    	place:"Paris, France"
	    },
	    {
	    	src:"img/places/France6.jpg",
	    	quote:"Walking through labyrinths of narrow streets gives a really great pleasure.",
	    	place:"Tours, France"
	    },
	    {
	    	src:"img/places/France7.jpg",
	    	quote:"The world-famous Cote d'Azur, is the perennial favorite of wealthy scions and the shop-til-you-drop types.",
	    	place:"Cannes, France"
	    },
	    {
	    	src:"img/places/France8.jpg",
	    	quote:"Cannes is crammed with more money, more champagne, more mobile phones and more cleavage than anywhere else in the world!",
	    	place:"Cannes, France"
	    },
	    {
	    	src:"img/places/France9.jpg",
	    	quote:"The cathedral is the fine example, and provides a rare opportunity to experience the former U.S.S.R.",
	    	place:"Cannes, France"
	    },
	    {
	    	src:"img/places/France10.jpg",
	    	quote:"It's here that master perfumers - also known as nez (noses) - train their probosci for seven years to recognize around 6,000 scents!",
	    	place:"Grasse, France"
	    },
	    /* CMonaco */
	    {
	    	src:"img/places/Monaco1.jpg",
	    	quote:"This country packs a lot of living into a little land.",
	    	place:"Monaco"
	    },
	    {
	    	src:"img/places/Monaco2.jpg",
	    	quote:"Most of the people who live here come from somewhere else, drawn by the sun, glamorous lifestyle and - most importantly - tax-free income.",
	    	place:"Monaco"
	    },
	    {
	    	src:"img/places/Monaco3.jpg",
	    	quote:"This is the playground of Europe's elite, a country where lady luck might clean you out at the casino one day, and put you on the VIP list the next!",
	    	place:"Monaco"
	    },
	    /* CCuba */
	    {
	    	src:"img/places/Cuba1.jpg",
	    	quote:"Often remembered as the communist nation dividing east and west politics for a time during the cold war.",
	    	place:"Havana, Cuba"
	    },
	    /* CJordan */
	    {
	    	src:"img/places/Jordan1.jpg",
	    	quote:"Amman is one of safest cities in the Middle East with virtually no petty crime!",
	    	place:"Amman, Jordan"
	    },
	    /* CMorocco */
	    {
	    	src:"img/places/Morocco1.jpg",
	    	quote:"Morocco’s population explosion, brought about chiefly by immigration from the countryside, has brought some social problems like crime and prostitution, and resulted in the proliferation of shanty towns.",
	    	place:"Casablanca, Morocco"
	    },
	    {
	    	src:"img/places/Morocco2.jpg",
	    	quote:"The gap between the haves and the have-nots in Casablanca may be wide, but the city center is impressive and modern, with wide avenues and well-kept skyscrapers.",
	    	place:"Casablanca, Morocco"
	    },
	    /* CAustralia */
	    {
	    	src:"img/places/Australia1.jpg",
	    	quote:"Australia; arguably the world’s largest island.",
	    	place:"Brisbane, Australia"
	    },
	    {
	    	src:"img/places/Australia2.jpg",
	    	quote:"This man-made beach along the Brisbane River gives people a lifeguarded and shark-free place to swim.",
	    	place:"Brisbane, Australia"
	    },
	    /* CRussia */
	    {
	    	src:"img/places/Russia1.jpg",
	    	quote:"Nowhere other than in Moscow are Russia's contrasts more apparent as ancient monasteries and ultra-modern monoliths stand side by side while new Russian millionaires and poverty stricken pensioners walk the same city streets.",
	    	place:"Moscow, Russia"
	    },
	    /* Malta */
	    {
	    	src:"img/places/Malta1.jpg",
	    	quote:"You’ll find everything if you decide to go shopping in Malta.",
	    	place:"St. Julian's, Malta"
	    },
	    {
	    	src:"img/places/Malta2.jpg",
	    	quote:"Malta has something for everyone and not just underwater!",
	    	place:"St. Julian's, Malta"
	    },
	    {
	    	src:"img/places/Malta3.jpg",
	    	quote:"Go to Sicily via the ferry! You’ll be able to find further interesting places over there.",
	    	place:"St. Julian's, Malta"
	    }
	];
		

	$('#quoteButton').click(function(evt){

		//define the containers of the info we target
		var quote = $('#quoteContainer p').text();
		var quotePlace = $('#quotePlace').text();

		//prevent browser's default action
		evt.preventDefault();

		//getting a new random number to attach to a quote and setting a limit
		var sourceLength = quoteSource.length;
		var randomNumber= Math.floor(Math.random()*sourceLength);

		//set a new quote
		for(i=0;i<=sourceLength;i+=1){
		var newQuoteImg = quoteSource[randomNumber].src;
		var newQuoteText = quoteSource[randomNumber].quote;
		var newQuotePlace = quoteSource[randomNumber].place;

		//console.log(newQuoteImg, newQuoteText,newQuotePlace);
    	//animation for fade
    	var timeAnimation = 500;
    	var quoteContainer = $('#quoteContainer');

    	//fade out animation with callback and elements to include
    	quoteContainer.fadeOut(timeAnimation, function(){
       		quoteContainer.html('');
				quoteContainer.append('<img class="img-circle" src='+newQuoteImg+' />'+'<p class="lead">'+newQuoteText+'</p>'+'<h3 class="cover-heading" id="quotePlace">'+'<i class="fa fa-map-marker"></i>&nbsp;'+newQuotePlace+'</h3>');
        
        	//fadein animation.
        	quoteContainer.fadeIn(timeAnimation);
    	});  
			
		break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready