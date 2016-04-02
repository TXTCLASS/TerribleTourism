	$(document).ready(function(){
		var quoteSource=[
		/* CChina */
		{
			quote:"Shanghai offers a heady brew of half-digested images and preconceptions.",
			place:"Shanghai, China"
	    },
	    {
	    	quote:"But once the visitor drops down to street level, the profusion of traffic, tourists and touts can remove all sense of tranquility.",
	    	place:"Shanghai, China"
	    },
	    {
	    	quote:"Additionally, the surrounding garden helps create a pleasant atmosphere in which you can feel comfortable in a relaxed manner.",
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
	    	quote:"The first concentration camp was constructed in Dachau, just outside the medieval town, where today stands a Memorial Site.",
	    	place:"Dachau, Germany"
	    },
	    {
	    	quote:"The gate had the words 'Arbeit Macht Frei' (Freedom Through Work) on it, which served only to mislead the prisoners, who thought that they would be freed if they worked hard, whereas the only freedom that awaited them, was through death.",
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
	    	quote:"Once upon a time, a fisherman casting his net into the sea at Arenal could have gazed around an empty coastline. Nowadays he sees a continuous stretch of hotels, a concrete jungle extending all along the coast. And he wouldn’t be there anyway as there are few fish left to catch.",
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
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quotePlace">'+'&nbsp;'+newQuotePlace+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready