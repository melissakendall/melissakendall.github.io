$(function() {

    var senses = {
        see: [ 'Angular','Bloated','Bright','Bulbous','Clinging','Cobwebbed','Cooked','Crosshatched','Crystalline','Dazzling','Dingy','Disheveled','Elegant','Filthy','Freckled','Glassy','Gleaming','Glittering','Gloomy','Glowing','Hazy','Immense','Indistinct','Knotty','Lacy','Lean','Lithe','Lofty','Matte','Metallic','Misshapen','Mottled','Mouldy','Murky','Opalescent','Pale','Petite','Plaid','Pointed','Pristine','Quaint','Radiant','Reflective','Rippling','Scalloped','Shallow','Shiny','Silvered','Sparkling','Spotted','Steep','Stomy','Striped','Tapering','Tarnished','Tiny','Tousled','Towering','Translucent','Transparent','Twinkling','Twisted','Vibrant', 'Wide','Wispy' ],
        smell: [ 'Acrid','Astringent','Briney','Cheesy','Coppery','Dank','Fishy','Fresh','Fruity','Herby','Lemony','Malty','Minty','Musky','Nutty','Peppery','Pungent','Putrid','Rank','Redolent','Rotten','Skinky','Smoky','Sour','Spicy','Stagnant','Stale','Sulphurous','Syrupy','Vinegary','Woody','Yeasty' ],
        hear: [ 'Bong','Boom','Buzz','Chatter','Chime','Clatter','Crack','Crackle','Drip','Drumming','Faint','Groan','Hiss','Hoot','Hum','Murmur','Panting','Patter','Peal','Peep','Plop','Pulsing','Rattle','Ring','Scratch','Screech','Shush','Sizzle','Slam','Splash','Sputter','Squeak','Squish','Stamp','Swish','Tattoo','Tear','Thob','Thump','Trill','Twang','Wail','Whisper','Yelp','Zap' ],
        touch: [ 'Chalky','Pebbled','Coarse','Smooth','Rough','Velvety','Waxy','Sharp','Cold','Icy','Burning','Clammy','Slick','Slippery','Sticky','Wrinkly','Soft','Crumbly','Prickly','Gritty','Rubbery','Lumpy','Bumpy','Downy','Fluffy','Gossamer','Shaggy','Wiry','Dry','Damp','Wet','Moist','Warm','Cool','Sandy','Spongy','Lukewarm','Boiling','Chilly','Dusty','Fleshy','Frosty','Fuzzy','Furry','Grainy','Leather','Sodden','Spiky','Stiff','Tacky','Tender','Tepid','Wooly','Creamy','Fibrous','Woven','Squishy','Ribbed','Whispy','Greasy','Oily','Brittle','Mushy','Crispy','Grooved' ],
        taste: [ 'Mellow', 'Piquant', 'Buttery', 'Sweet', 'Sour', 'Umami', 'Savory', 'Acidic', 'Bitter', 'Citrusy', 'Earthy', 'Herbal', 'Sharp', 'Smoky', 'Tangy', 'Tart', 'Fresh', 'Rich', 'Creamy' ]
    };

    $("#see").text(_.sample(senses.see));
    $("#smell").text(_.sample(senses.smell));
    $("#hear").text(_.sample(senses.hear));
    $("#taste").text(_.sample(senses.taste));
    $("#touch").text(_.sample(senses.touch));
});
