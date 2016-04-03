	$(document).ready(function(){
		var quoteSource=[
		/* CChina */
		{
			quote:"Shanghai offers a heady brew of half-digested images and preconceptions.",
			place:"Shanghai, China"
	    },
	    {
	    	quote:"Once on the street level with the profusion of traffic and tourists, can remove all sense of tranquility.",
	    	place:"Shanghai, China"
	    },
	    {
	    	quote:"Additionally, the surrounding gardens helps create a pleasant atmosphere in which you can feel comfortable in a relaxed manner.",
	    	place:"Shanghai, China"
	    },
	    /* CBrazil */
	    {
	    	quote:"The beach is not merely a place to absorb the sun's rays.",
	    	place:"Rio de Janeiro, Brazil"
	    },
	    {
	    	quote:"Clothing is minimal; bodies bronzed and beautiful and the famous Copacabana and Ipanema beaches are a Mecca for Brazilians and tourists alike.",
	    	place:"Rio de Janeiro, Brazil"
	    },
	    /* CSalvador */
	    {
	    	quote:"Few places could be friendlier than Salvador and it's been proven!",
	    	place:"Salvador, Brazil"
	    },
	    /* CEngland */
	    {
	    	quote:"Downtown London is like a multicultural maze of sounds, scents, and voices from all around the world!",
	    	place:"London, UK"
	    },
	    {
	    	quote:"English was spread around the globe by the British Empire and is today the world's premier language for international discourse.",
	    	place:"London, UK"
	    },
	    {
	    	quote:"London is a culturally forward destination that will induce wonder.",
	    	place:"London, UK"
	    },
	    {
	    	quote:"Along with the Royal Family came the cream of English society, including the aristocracy and the so-called “moneyed” classes.",
	    	place:"Brighton, UK"
	    },
	    {
	    	quote:"The famous Brighton Pier alone is worth a visit. It is no less than 512 meters long and is popular among locals and tourists.",
	    	place:"Brighton, UK"
	    },
	    /* CHungary */
	    {
	    	quote:"Budapest is a particularly popular location for filming action movies because many of the buildings are still studded with bullet holes.",
	    	place:"Budapest, Hungary"
	    },
	    {
	    	quote:"Budapest is home to several buildings of magnificent size and architecture.",
	    	place:"budapest, Hungary"
	    },
	    /* CGermany */
	    {
	    	quote:"Berlin! The capital is still being rebuilt, but it maintains a unique historical charm.",
	    	place:"Berlin, Germany"
	    },
	    {
	    	quote:"The Schloss Nymphenburg parklands are Munich’s lungs and are probably the biggest city parks in the world.",
	    	place:"Munich, Germany"
	    },
	    {
	    	quote:"The magnificent neo-Romanesque style of Neuschwanstein castle is the most popular castle in the world, and King Ludwig II of Bavaria was totally involved in its design.",
	    	place:"Neuschwanstein, Germany"
	    },
	    {
	    	quote:"The first concentration camp was constructed in Dachau, just outside the medieval town, today stands a memorial site.",
	    	place:"Dachau, Germany"
	    },
	    {
	    	quote:"The gate had the words 'Arbeit Macht Frei' (Freedom Through Work) on it, which served only to mislead the prisoners, who thought that they would be freed if they worked hard, whereas the only freedom that awaited them was through death.",
	    	place:"Dachau, Germany"
	    },
	    {
	    	quote:"Berchtesgaden, is located near the border of Austria, and was Hitler’s mountain retreat and the southern headquarters of the Nazi party.",
	    	place:"Berchtesgaden, Germany"
	    },
	    {
	    	quote:"At the top of the Mountain Kehlstein is a mountain top lodge built by the Nazis, called Eagle’s Nest. It is a major draw for tourists, and has incomparable views of the Alps mountain range. Ironically, Hitler suffered vertigo and rarely took pleasure in the views.",
	    	place:"Berchtesgaden, Germany"
	    },
	    {
	    	quote:"The Frankfurt Central Station is one of the largest terminals in Europe, and the Frankfurter Kreuz is the most used highway interchange in Europe.",
	    	place:"Frankfurt, Germany"
	    },
	    {
	    	quote:"Frankfurt International Airport is one of the busiest ones in the world.",
	    	place:"Frankfurt, Germany"
	    },
	    {
	    	quote:"Frankfurt features a fantastic mix of people from around the world, the main nationalities include German, English, North Americans, Scandinavian, Dutch, Italian and Japanese.",
	    	place:"Frankfurt, Germany"
	    },
	    /* CThailand */
	    {
	    	quote:"You should not miss the original, famous Thai massages. For little money you are fully kneaded, definitely an experience! About a tip, the Thais are very pleased.",
	    	place:"Bangkok, Thailand"
	    },
	    /* CSpain */
	    {
	    	quote:"In order for it to be so consistently popular among tourists, the island of Mallorca (or Majorca) must be doing something right.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	quote:"It is a feast for the eyes as dazzling displays of flowers, huge piles of oranges, buckets of olives, and fish you never knew existed!",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	quote:"Those of a squeamish disposition should avoid the upstairs meat counters, where the pigs and rabbits look like pigs and rabbits rather than sterile pieces of packaged flesh.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	quote:"The vintage trains are still in use, providing a joyride for tourists and a relief for locals from the terrors of the Palma-Soller road.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	quote:"The good, the bad and the ugly sides of Mallorcas tourist development meet along a 25-km stretch of coast.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	quote:"Once upon a time, a fisherman casting his net into the sea at Arenal could have gazed around at an empty coastline. Nowadays he sees a continuous stretch of hotels, a concrete jungle extending all along the coast. And he wouldn’t be there anyway as there are few fish left to catch.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	quote:"Like it or loathe it, you are bound to spend some time in Palma Bay even if you are not staying here. You should visit at least once to see some of the best, and the worst, that Mallorca has to offer.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	quote:"The streets behind the church, once home to jewelers and Jewish traders, are now run down and seedy and best avoided after dark.",
	    	place:"Malloroca, Spain"
	    },
	    {
	    	quote:"Among the paintings, pulpits and prayer books are splendid Arab tapestries, a collection of ceramics spanning five centuries and a 17th century painting of baby Jesus carrying a cross.",
	    	place:"Mallorca, Spain"
	    },
	    {
	    	quote:"Billed as Mallorca's most important museum, this undoubtedly contains some fascinating exhibits but the displays lack imagination and it is difficult to get excited about bits of stone in glass cases.",
	    	place:"Mallorca, Spain"
	    },
	    {
	    	quote:"Some of the exhibits are the sort of thing that give modern art a bad name, but do go with an open mind.",
	    	place:"Mallorca, Spain"
	    },
	    {
	    	quote:"This region is a land of sensual pleasures. Listen to the sounds of flamenco echoing through the warm summer nights or satisfy your hunger at the Andalucian table, overflowing with the country's finest legendary mountain hams of Trevélez and Jabugo.",
	    	place:"Barcelona, Spain"
	    },
	    {
	    	quote:"Today Spain is not nearly as powerful as in earlier times.",
	    	place:"Barcelona, Spain"
	    },
	    {
	    	quote:"Hallowed with a storied past, waiting to be revealed by passing travelers.",
	    	place:"Barcelona, Spain"
	    },
	    /* CItaly */
	    {
	    	quote:"Few other countries manage to evoke such a feast of emotions and images as Florence.",
	    	place:"Florence, Italy"
	    },
	    {
	    	quote:"Who doesn’t recognize the Leaning Tower of Pisa and that much-photographed scene of Florence, with its domes and bridges? And where would we be without Leonardo da Vinci?",
	    	place:"Florence, Italy"
	    },
	    {
	    	quote:"Milan is the wealthiest city in Italy and is comparatively modern in appearance after heavy bombing in WWII.",
	    	place:"Milian, Italy"
	    },
	    {
	    	quote:"Rome is a highly historical city that tries to preserve every last bit of it.",
	    	place:"Rome, Italy"
	    },
	    {
	    	quote:"Rome is filled with some of the most famous historic sites and monuments of history.",
	    	place:"Rome, Italy"
	    },
	    {
	    	quote:"Tourists are greatly attracted by a large rock formation which juts out into the sea opposite the town center.",
	    	place:"Capo Vaticano, Italy"
	    },
	    /* CSweden */
	    {
	    	quote:"No other city in Sweden has such national importance, history and culture the way Stockholm does!",
	    	place:"Stockholm, Sweden"
	    },
	    /* CMontreal */
	    {
	    	quote:"The eighty ethnic communities and four universities reflect Montréal’s vitality.",
	    	place:"Montréal, Canada"
	    },
	    {
	    	quote:"Be sure to get a free personal alarm that makes a loud noise when the pin is pulled. It is advised to carry this when walking alone.",
	    	place:"Montréal, Canada"
	    },
	    {
	    	quote:"Celine Dion was married there.",
	    	place:"Montréal, Canada"
	    },
	    {
	    	quote:"The cliffs provide a natural defense from the river, but early settlers wanted protection from a land based attack as well, hence the city walls.",
	    	place:"Quebec City, Canada"
	    },
	    /* CFinland */
	    {
	    	quote:"The Finnish have fought hard for their existence.",
	    	place:"Helsinki, Finland"
	    },
	    {
	    	quote:"Cell phones and the internet are ubiquitous in Finland with few countries adopting to new technology the way they have.",
	    	place:"Helsinki, Finland"
	    },
	    /* CIreland */
	    {
	    	quote:"Think of Ireland… Can you hear the soft, emotional music drifting over the green hills and lakes, or perhaps the gentle sound of a golfer hitting a ball, framed by a backdrop of rugged cliffs?",
	    	place:"Dublin, Ireland"
	    },
	    /* CDenmark */
	    {
	    	quote:"If you love the sea, you will yearn for Denmark with its beautiful and long sandy beaches.",
	    	place:"Copenhagen, Denmark"
	    },
	    {
	    	quote:"Denmark offers thick forests.",
	    	place:"Copenhagen, Denmark"
	    },
	    /* CSwitzerland */
	    {
	    	quote:"Yodeling is one well-known example of Swiss music that remains popular today!",
	    	place:"Zurich, Switzerland"
	    },
	    /* CNorway */
	    {
	    	quote:"You may have seen some pictures of the country’s famous and emotional painting, The Scream, by Norwegian artist Edward Munch.",
	    	place:"Oslo, Norway"
	    },
	    /* CSouth Korea */
	    {
	    	quote:"Feel free to explore the subtle differences between North and South Korea.",
	    	place:"Seoul, South Korea"
	    },
	    /* CFrance */
	    {
	    	quote:"With the rise of the United States during the World Wars, France has lost its position of influence.",
	    	place:"Paris, France"
	    },
	    {
	    	quote:"It is always bustling with humanity!",
	    	place:"Paris, France"
	    },
	    {
	    	quote:"The Eiffel Tower literally towers over the Champ de Mars in the seventh arrondissement.",
	    	place:"Paris, France"
	    },
	    {
	    	quote:"The stocky Notre-Dame Cathedral, on the Ile-de-la-Cite, could not be more different from the filigree Eiffel Tower.",
	    	place:"Paris, France"
	    },
	    {
	    	quote:"The Moulin Rouge is best known as the spiritual birthplace of the modern form of the can-can dance.",
	    	place:"Paris, France"
	    },
	    {
	    	quote:"Walking through labyrinths of narrow streets gives a really great pleasure.",
	    	place:"Tours, France"
	    },
	    {
	    	quote:"The world-famous Cote d'Azur, is the perennial favorite of wealthy scions and the shop-til-you-drop types.",
	    	place:"Cannes, France"
	    },
	    {
	    	quote:"Cannes is crammed with more money, more champagne, more mobile phones and more cleavage than anywhere else in the world!",
	    	place:"Cannes, France"
	    },
	    {
	    	quote:"The cathedral is the fine example, and provides a rare opportunity to experience the former U.S.S.R.",
	    	place:"Cannes, France"
	    },
	    {
	    	quote:"It's here that master perfumers - also known as nez (noses) - train their probosci for seven years to recognize around 6,000 scents!",
	    	place:"Grasse, France"
	    },
	    /* CMonaco */
	    {
	    	quote:"This country packs a lot of living into a little land.",
	    	place:"Monaco"
	    },
	    {
	    	quote:"Most of the people who live here come from somewhere else, drawn by the sun, glamorous lifestyle and - most importantly - tax-free income.",
	    	place:"Monaco"
	    },
	    {
	    	quote:"This is the playground of Europe's elite, a country where lady luck might clean you out at the casino one day, and put you on the VIP list the next!",
	    	place:"Monaco"
	    },
	    /* CCuba */
	    {
	    	quote:"Often remembered as the communist nation dividing east and west politics for a time during the cold war.",
	    	place:"Havana, Cuba"
	    },
	    /* CJordan */
	    {
	    	quote:"Amman is one of safest cities in the Middle East with virtually no petty crime!",
	    	place:"Amman, Jordan"
	    },
	    /* CMorocco */
	    {
	    	quote:"Morocco’s population explosion, brought about chiefly by immigration from the countryside, has brought some social problems like crime and prostitution, and resulted in the proliferation of shanty towns.",
	    	place:"Casablanca, Morocco"
	    },
	    {
	    	quote:"The gap between the haves and the have-nots in Casablanca may be wide, but the city center is impressive and modern, with wide avenues and well-kept skyscrapers.",
	    	place:"Casablanca, Morocco"
	    },
	    /* CAustralia */
	    {
	    	quote:"Australia; arguably the world’s largest island.",
	    	place:"Brisbane, Australia"
	    },
	    {
	    	quote:"This man-made beach along the Brisbane River gives people a lifeguarded and shark-free place to swim.",
	    	place:"Brisbane, Australia"
	    },
	    /* CRussia */
	    {
	    	quote:"Nowhere other than in Moscow are Russia's contrasts more apparent as ancient monasteries and ultra-modern monoliths stand side by side while new Russian millionaires and poverty stricken pensioners walk the same city streets.",
	    	place:"Moscow, Russia"
	    },
	    /* Malta */
	    {
	    	quote:"You’ll find everything if you decide to go shopping in Malta.",
	    	place:"St. Julian's, Malta"
	    },
	    {
	    	quote:"Malta has something for everyone and not just underwater!",
	    	place:"St. Julian's, Malta"
	    },
	    {
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
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuotePlace = quoteSource[randomNumber].place;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p class="lead">'+newQuoteText+'</p>'+'<h3 class="cover-heading" id="quotePlace">'+'<i class="fa fa-map-marker"></i>&nbsp;'+newQuotePlace+'</h3>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready