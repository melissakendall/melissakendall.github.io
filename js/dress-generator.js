$(function() {

    var clothing = {
      colors: ['cream','mauve','scarlet','sapphire','ruby','rich gold','forest green','rose','light green','dove grey','violet','lilac','maroon','bronze','burgundy','cerulean blue','chestnut','champagne','copper','vermillion','fawn','fuchsia','jade','lavender','silver','peach','white','pink','blue','red','yellow','black','mint','beige','purple','saffron','cream'],
      adverbs: ['endorned','cluttered','decorated','scattered','embellished','covered','emblazoned','adorned','draped','feathered','softly folded','wrapped','box-pleated','printed','layered','brocaded','striped','pleated','ribboned','flounced','feathered','gathered','ribbed','brocaded','ruched'],
      victorian: {
        adjectives: ['soft','smooth','warm','cool','delicate','sheer','heavy','woven','beaded','lacy','fitted','fluttering','simple','striking','compact','ruched','jacquard-woven','printed','glazed'],
        dressType: ['evening gown','day dress','walking dress','riding dress','dress','night gown','fancy dress','gown','summer dress','afternoon dress','fancy dress','wedding dress'],
        fabrics: ['silk','chiffon','silk velvet','wool flannel','woven silk','silk faille','silk twill','chiffon','organza','moire','velveteen','silk taffeta','velvet','satin','muslin','wool','fur','cotton','linen','twill','cambric','taffeta','calico','canvas'],
        decorations: ['ostrich feathers','shell buttons','peacock feathers','owl feathers','heron feathers','eagle feathers','golden pheasant feathers','condor feathers','falcon feathers','dove feathers','mother of pearl beads','roses','violets','tulips','carnations','daisies','lillies','peonies','ribbons','lace','ribbons','glass beads','pearls','silk passementerie','frills','pleated flounces','iridescent beads','jet beads','crystal beads','silk rosettes'],
        sleeve: ['bow','puff','tied with bows','venetian','bell','cap','flutter','bishop','off the shoulder','petal','lantern','long','full','tight','frilled','straight','elbow-length','gathered','three-quarter','long',' flared','short',' flared','full',' flared'],
        lace: ['brussels','machine made','belgian','french','swiss','cotton','crocheted','knitted','needle','bobbin','knotted','metal'],
        waist: ['fitted','empire','raised','lowered','high','dropped','cinched','low','hip-length','short','cuirasse','loose'],
        neckLine: ['high','square-cut','heart-shaped','v-neck','low, square','scoop','plunging','low, square','high, round','scalopped'],
        skirtType:  ['narrow','full','flat-fronted','short','straight-cut','flared']
      },
      western: {
        accessories: ['hand rolled cigarette','double barrel shotgun','pistol','gold pocketwatch','bottle of whiskey', 'Derringer', 'belt knife', 'bandana', 'wire-rimmed spectacles', 'brass pocketwatch', 'silver pocketwatch', 'puff tie', 'kentucky string tie', 'bowtie', 'wool poncho'],
        hats: ['cowboy', 'wide-brimmed', 'sweatstained', 'reno', 'top'],
        colors: ['black', 'grey', 'brown', 'burgundy', 'green', 'blue', 'ebony', 'charcoal', 'olive'],
        adjectives: ['well-worn','smooth','tattered','new','dusty','stiff','torn', 'dark', 'well-tailored','tailored','expertly tailored','form-fitting'],
        fabrics: ['leather', 'prewashed cotton', 'cotton', 'denim', 'brushed cotton', 'silk', 'linen', 'canvas', 'wool felt'],
        shirts: ['pullover', 'bib front', 'bib', 'dress', 'night', 'striped', 'plaid'],
        vests: ['mini herringbone', 'herringbone', 'pinstripe', 'double pintstripe', 'paisley', 'plaid'],
        pockets: ['welt', 'double welt', 'side entry', 'chest welt', 'diagonal welt', 'no', 'watch'],
        lapels: ['small', 'thin notch', 'no', 'stiff'],
        collars: ['wing tip', 'banker', 'notched', 'no', 'trim', 'standup', 'stiff', 'band', 'turndown', 'tab'],
        buttons: ['metal', 'wooden', 'covered', 'pewter', 'engraved metal', 'suspender', 'self-covered', 'velvet covered', 'star', 'stamped metal' ],
        boots: ['cowboy', 'riding', 'stovepipe style', 'long', 'spats', 'snakeskin'],
        bootTypes: ['square', 'rounded', 'pointed', 'medium round', 'broad, square'],
      }          
    };

    //Generate new Victorian description on page load
    generateVictorian();

    $("#generate").on('click', generateVictorian );
    $("#generateWestern").on('click', generateWestern);

    function generateVictorian() {
        var simple = `A ${_.sample(clothing.colors)} and ${_.sample(clothing.colors)} ${_.sample(clothing.victorian.dressType)} made of ${_.sample(clothing.victorian.adjectives)} ${_.sample(clothing.victorian.fabrics)}, trimmed with ${_.sample(clothing.colors)} ${_.sample(clothing.victorian.fabrics)} and lined with ${_.sample(clothing.colors)} ${_.sample(clothing.victorian.fabrics)}.`
        var detailed = `The dress has ${_.sample(clothing.victorian.sleeve)} sleeves with ${_.sample(clothing.colors)} ${_.sample(clothing.victorian.lace)} lace, a ${_.sample(clothing.victorian.neckLine)} neckline, a ${_.sample(clothing.victorian.skirtType)} skirt and ${_.sample(clothing.victorian.waist)} waist and an overdress of ${_.sample(clothing.adverbs)} ${_.sample(clothing.colors)} ${_.sample(clothing.victorian.fabrics)} decorated with ${_.sample(clothing.victorian.decorations)}.`
        var hat = `A ${_.sample(clothing.victorian.adjectives)} hat ${_.sample(clothing.adverbs)} with ${_.sample(clothing.victorian.decorations)} and ${_.sample(clothing.victorian.decorations)}.`
  
        $("#simple").text(simple);
        $("#detail").text(detailed);
        $("#accessory").text(hat);
    }

    function generateWestern() {

        var simple = `A ${_.sample(clothing.colors)} and ${_.sample(clothing.colors)} dress made of ${_.sample(clothing.victorian.adjectives)} ${_.sample(clothing.victorian.fabrics)}  
                      trimmed with ${_.sample(clothing.colors)} ${_.sample(clothing.victorian.fabrics)} and lined with ${_.sample(clothing.colors)} ${_.sample(clothing.victorian.fabrics)}
                      ${_.sample(clothing.colors)}. Gloves of ${_.sample(clothing.western.fabrics)}.` 

        var detailed = `A ${_.sample(clothing.western.adjectives)} ${_.sample(clothing.western.colors)} ${_.sample(clothing.western.fabrics)} ${_.sample(clothing.western.shirts)} shirt with 
                        a ${_.sample(clothing.western.collars)} collar. A ${_.sample(clothing.western.vests)} vest with ${_.sample(clothing.western.pockets)} pockets, 
                        ${_.sample(clothing.western.lapels)} lapels and ${_.sample(clothing.western.buttons)} buttons. A ${_.sample(clothing.western.hats)} hat and ${_.sample(clothing.western.boots)}
                        boots with a ${_.sample(clothing.western.bootTypes)} toe.`

        var accessory = `A ${_.sample(clothing.western.accessories)}.` 

        $("#simple").text(simple);
        $("#detail").text(detailed);
        $("#accessory").text(accessory);
    }
  });
