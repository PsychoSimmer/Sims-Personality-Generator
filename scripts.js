document.querySelector(".submitbutton").addEventListener("click", generate)
//this function runs when click
function generate() {
    console.log("generating")
    document.querySelector(".results").style.display = "block"

    //resetting choices
    grumpyOrRebellious = "";
    starorfamily = "";
    cowardorhatesoutdoors = "";
    braveoradventurous = "";
    introvert = "";
    extrovert = "";
    selfdoubt = "";
    selfesteem = "";
    normietrait1 = "";
    normietrait2 = "";

    //CALL FUNCTION of process each q
    Q1()
    Q2()
    Q3()
    Q4()
    calculatefavcolor()
    calculatefavanimal()

    //put results on page
    document.querySelector(".inputtedname").innerText = document.querySelector(".nametextbox").value + "'s Personality Evaluation"
    document.querySelector(".results").innerHTML = grumpyOrRebellious + starorfamily + cowardorhatesoutdoors + braveoradventurous + normietrait1 + introvert + extrovert + selfdoubt + selfesteem + normietrait2 + "<div><b>Favorite Color: </b>" + color + "</div><div><b>Favorite Animal: </b>" + animal + "</div><div><b>Desired Room Themes: </b>" + calculatedesiredroomthemes() + "  &  " + calculatedesiredroomthemes()+"</div>";

}

var grumpyOrRebellious;
var starorfamily;
var cowardorhatesoutdoors;
var braveoradventurous;
var introvert;
var extrovert;
var selfdoubt;
var selfesteem;
var color;
var animal;

//function for Q1
function Q1() {
    console.log("calculating Q1")
    var Q1A = document.querySelector("input[name='How much affection was toddler given?']:checked").value
    console.log(Q1A)


    //if Q1A is 1 then
    if (Q1A === "1") {
        //if random is less than 0.5
        if (Math.random() < 0.5) {
            grumpyOrRebellious = '<div><img class="traitimage" src="trait_grumpy.png"><b>Anxiety(Grumpy):</b> Inadequate care has lead to this sim having <b>Anxiety.</b> They are hard to soothe and can act out emotionally at times. This sim is a pessimist.</div>'
        }
        //else if random is greater than 0.5
        else {
            grumpyOrRebellious = '<div><img class="traitimage" src="trait_rebellious.png"><b>Rebellious:</b> Inadequare care has lead to this sim distruting authority figures. They will rebel against their parents when they\’re a child, the school when they\’re a teenager, and the government when they’re an adult. This sim is a pessimist.</div>'

        }
    }
    if (Q1A === "3") {
        if (Math.random() < 0.5) {
            starorfamily = '<div><img class="traitimage" src="trait_star_quality.png"><b>Star-Quality:</b> This sim was so loved as a toddler that they have become so optimistic and happy that other sims are drawn to them. It doesn\'t necessarily mean they want to become famous, though they could likely succeed if they tried.</div>'
        }
        else {
            starorfamily = '<div><img class="traitimage" src="trait_family_oriented.png"><b>Family-Oriented:</b> This sim was so loved as a toddler that they admire their parental figure(s) and desire to be like them when they grow up. They are well behaved children who are likely to go for a career similar to their parent(s). This sim is optimistic.</div>'
        }

    }

}

//function for Q2
function Q2() {
    var Q2A = document.querySelector("input[name='Was the toddler taken to the park and encouraged to explore?']:checked").value
    console.log(Q2A)

    //if Q2A is 1 then
    if (Q2A === "1") {
        //if random is less than 0.5
        if (Math.random() < 0.5) {
            cowardorhatesoutdoors = '<div><img class="traitimage" src="trait_coward.png"><b>Coward:</b> The avoidance of new experiences lead to this sims extreme dislikes of new situations. As a child, they check for monsters under the bed frequently.</div>'
        }
        //else if random is greater than 0.5
        else {
            cowardorhatesoutdoors = '<div><img class="traitimage" src="trait_hates_the_outdoors.png"><b>Hates Outdoors:</b> Since this sim didn\'t go outside often as a toddler, they have little desire to travel or go out in nature. They prefer electronic entertainment (Computers, Video Games), They are a homebody.</div>'


        }
    }
    if (Q2A === "2") {
        var normieroll1 = Math.random()
        if (normieroll1 < .17) {
            normietrait1 = '<div><img class="traitimage" src="trait_friendly.png"><b>Friendly:</b>This child is likely to befriend children that don\t have friends.</div>'
        }
        if (normieroll1 > .17 && normieroll1 < .34) {
            normietrait1 = '<div><img class="traitimage" src="trait_easily_impressed.png"><b>Easily Impressed:</b> This sim enjoys the little things.</div>'
        }
        if (normieroll1 > .34 && normieroll1 < .51) {
            normietrait1 = '<div><img class="traitimage" src="trait_excitable.png"><b>Excitable:</b> This sim is generally happy.</div>'
        }
        if (normieroll1 > .51 && normieroll1 < .68) {
            normietrait1 = '<div><img class="traitimage" src="trait_slob.png"><b>Slob:</b> This sim doesn\'t mind the mess.</div>'
        }
        if (normieroll1 > .68 && normieroll1 < .85) {
            normietrait1 = '<div><img class="traitimage" src="trait_absent_minded.png"><b>Absent Minded:</b> This sim needs to work a little harder to understand things, It\'s a normal trait.</div>'
        }
        if (normieroll1 > .85) {
            normietrait1 = '<div><img class="traitimage" src="trait_good.png"><b>Good:</b> This child is the type that would defend someone that\'s being bullied and tell adults smoking cigarettes that the shouldn\'t do that. They have a sense of morality at a young age. This is rare. <br></div>'
        }
    }

    if (Q2A === "3") {
        //if random is less than 0.5
        if (Math.random() < 0.5) {
            braveoradventurous = '<div><img class="traitimage" src="trait_brave.png"><b>Brave:</b> As a child, this sim isn’t scared of new situations like moving or traveling and wants to go out on their own unsupervised at an age that might worry some parents.</div>'

        }
        //else if random is greater than 0.5
        else {
            braveoradventurous = '<div><img class="traitimage" src="trait_adventurous.png"><b>Adventurous:</b> Because this toddler was given freedom to wander, this sim will yearn to leave their hometown as a teen and will likely travel or want to move to a new place when they graduate high school or college.</div>'

        }
    }
}

//function for Q3
function Q3() {
    var Q3A = document.querySelector("input[name='After learning to speak, how often was the toddler included in conversations?']:checked").value
    console.log(Q3A)
    var q3roll = Math.random()
    //if Q3A is 1 then
    if (Q3A === "1") {
        if (q3roll < 0.25) {
            introvert = '<div><img class="traitimage" src="trait_loner.png"><b>Loner:</b> This sim was not socialized enough as a toddler and became introverted, they don’t have a strong desire to be around others because it\'s what they\'re used to.</div>'
        }
        else if (q3roll > .25 && q3roll < .5) {
            introvert = '<div><img class="traitimage" src="trait_shy.png"><b>Shy:</b> This sim was not socialized enough to be comfortable in social settings. They desire friends but has trouble making them.</div>'
        }
        else if (q3roll > .5 && q3roll < .75) {
            introvert = '<div><img class="traitimage" src="trait_socially_awkward.png"><b>Socially Awkward:</b> This sim didn’t get socialized enough in general and is less likely to be accepted by peers as children and teenagers. They could be the "weird but likeable to some" kind of kid, depending on other traits.</div>'
        }
        else if (q3roll > .75) {
            introvert = '<div><img class="traitimage" src="trait_no_sense_of_humor.png"><b>No Sense of Humor:</b> This sim didn’t get socialized enough to learn the nuances of humor. They can make friends, they just tend to be more serious than others.</div>'
        }
    }
    if (Q3A === "3") {
        if (q3roll < 0.25) {
            extrovert = '<div><img class="traitimage" src="trait_social_butterfly.png"><b>Social Butterfly:</b> This sim is an extrovert. They prefer having people around them. This does not neccesarily mean they are extremely likable(star quality), they just don\'t enjoy being alone. </div>'
        }
        else if (q3roll > .25 && q3roll < .5) {
            extrovert = '<div><img class="traitimage" src="trait_charismatic.png"><b>Charismatic:</b> This sim is very good at social interaction. If extroverted, they\'re likely to be popular. If introverted, then it means they understand socialization but choose to not have many friends.</div>'
        }
        else if (q3roll > .5 && q3roll < .75) {
            extrovert = '<div><img class="traitimage" src="trait_good_sense_of_humor.png"><b>Good Sense of Humor:</b> This sim was socialized enough to become witty and funny! Pretty rare.</div>'
        }
        else if (q3roll > .75) {
            extrovert = '<div><img class="traitimage" src="trait_family_oriented.png"><b>Family Oriented:</b> This sim enjoys the company of their family.</div>'
        }
    }
}

//function for Q4
function Q4() {
    var Q4A = document.querySelector("input[name='How did the parent(s) do at potty training the toddler?']:checked").value
    console.log(Q4A)
    var q4roll = Math.random()

    //if Q4A is 1 then
    if (Q4A === "1") {
        if (q4roll < 0.33) {
            selfdoubt = '<div><img class="traitimage" src="trait_never_nude.png"><b>Never Nude:</b> This this sim had trouble getting potty trained, they learned that their private parts are frustrating. They have self-esteem issues. Never Nude will only become a real trait when they age up into a teenager, but they will have repressive ideas about sexuality and their body.</div>'
        }
        else if (q4roll > .33 && q4roll < .66) {
            selfdoubt = '<div><img class="traitimage" src="trait_loser.png"><b>Loser:</b> This sim feels has low self-esteem and feels like everything is too hard to even try. They have low self-esteem.</div>'
        }
        else if (q4roll > .66) {
            selfdoubt = '<div><img class="traitimage" src="trait_unflirty.png"><b>Unflirty:</b> This trait becomes assigned when the sim becomes a teenager. This sim will have low self-esteem and doubts they will find love.</div>'
        }
    }

    if (Q4A === "2") {
        var normieroll2 = Math.random()
        if (normieroll2 < .17) {
            normietrait2 = '<div><img class="traitimage" src="trait_friendly.png"><b>Friendly:</b>This sim is naturally nice to others.</div>'
        }
        if (normieroll2 > .17 && normieroll2 < .34) {
            normietrait2 = '<div><img class="traitimage" src="trait_easily_impressed.png"><b>Easily Impressed:</b> This sim enjoys the little things.</div>'
        }
        if (normieroll2 > .34 && normieroll2 < .51) {
            normietrait2 = '<div><img class="traitimage" src="trait_excitable.png"><b>Excitable:</b> This sim is generally happy.</div>'
        }
        if (normieroll2 > .51 && normieroll2 < .68) {
            normietrait2 = '<div><img class="traitimage" src="trait_neat.png"><b>Neat:</b> This sim prefers things clean.</div>'
        }
        if (normieroll2 > .68 && normieroll2 < .85) {
            normietrait2 = '<div><img class="traitimage" src="trait_absent_minded.png"><b>Absent Minded:</b> This sim needs to work a little harder to understand things, It\'s a normal trait.</div>'
        }
        if (normieroll2 > .85) {
            normietrait2 = '<div><img class="traitimage" src="trait_diva.png"><b>Diva:</b> This child likes to brag about what happened at school, likes to talk about themselves, is very selfish when it comes to their siblings, this is a random trait and is very rare.</div>'
        }
    }

    if (Q4A === "3") {
        if (q4roll < 0.33) {
            selfesteem = '<div><img class="traitimage" src="trait_disciplined.png"><b>Disciplined:</b> This sim feels like they have control over their life. When interested in a new topic, they are determined to learn all they can.</div>'
        }
        else if (q4roll > .33 && q4roll < .66) {
            selfesteem = '<div><img class="traitimage" src="trait_flirty.png"><b>Flirty:</b> This will only become a real trait when they age up into a teenager but as a child they will have lots of crushes. They’re the kind of kid that has the confidence to tell their crush they like them.</div>'
        }
        else if (q4roll > .66) {
            selfesteem = '<div><img class="traitimage" src="trait_party_animal.png"><b>Party Animal:</b> This will only become a real trait when they age up into a teenager but as a child, they will be highly energetic, sure of themselves, and have high self-esteem.</div>'
        }
    }
}

function calculatefavcolor() {
    var gender = document.querySelector("input[name='gender']:checked").value
    var favcolornumber = Math.random()
    if (favcolornumber < .125)
        color = "Red and Black"
    if (favcolornumber > .125 && favcolornumber < .25)
        color = "Red/Shades of Red"
    if (favcolornumber > .25 && favcolornumber < .375)
        color = "Blue & Black"
    if (favcolornumber > .375 && favcolornumber < .5)
        color = "Blue/Shades of Blue"
    if (favcolornumber > .5 && favcolornumber < .625)
        color = "Cool colors, mainly Blue and Purple"
    if (favcolornumber > .625 && favcolornumber < .75)
        color = "Cool colors, mainly Yellow and Green"
    if (favcolornumber > .75 && favcolornumber < .875)
        color = "Warm Colors, mainly Red, Orange, Scarlett"
    if (favcolornumber > .875 && gender === "female")
        color = "Pink and Purple"
    if (favcolornumber > .875 && gender === "male")
        color = "Green and Brown"
    if (favcolornumber > .875 && gender === "dontmatter")
        if (Math.random() > .5)
            color = "Pink and Purple"
        else color = "Green and Brown"
}

function calculatefavanimal() {
    var favanimalnumber = Math.random()
    if (favanimalnumber < .416)
        animal = "Dog"
    if (favanimalnumber > .416 && favanimalnumber < .49)
        animal = "Cat"
    if (favanimalnumber > .49 && favanimalnumber < .582)
        animal = "Bird"
    if (favanimalnumber > .582 && favanimalnumber < .665)
        animal = "Bugs"
    if (favanimalnumber > .665 && favanimalnumber < .748)
        animal = "Horse"
    if (favanimalnumber > .748 && favanimalnumber < .831)
        animal = "Lizard"
    if (favanimalnumber > .831)
        animal = "Hamster/Rodent"
}

function calculatedesiredroomthemes() {
    var desiredroomthemesnumber = Math.random()
    var roomtheme
    var gender = document.querySelector("input[name='gender']:checked").value

    //if male
    if (gender === "male" && desiredroomthemesnumber < .125) {
        roomtheme = "Space/Robots/Technology"
    }
    if (gender === "male" && desiredroomthemesnumber > .125 && desiredroomthemesnumber < .25) {
        roomtheme = "Nature"
    }
    if (gender === "male" && desiredroomthemesnumber > .25 && desiredroomthemesnumber < .375) {
        roomtheme = "Dinosaurs"
    }
    if (gender === "male" && desiredroomthemesnumber > .375 && desiredroomthemesnumber < .5) {
        roomtheme = "Animals"
    }
    if (gender === "male" && desiredroomthemesnumber > .5 && desiredroomthemesnumber < .625) {
        roomtheme = "Sports"
    }
    if (gender === "male" && desiredroomthemesnumber > .625 && desiredroomthemesnumber < .75) {
        roomtheme = "Racecars"
    }
    if (gender === "male" && desiredroomthemesnumber > .75 && desiredroomthemesnumber < .875) {
        roomtheme = "Army"
    }
    if (gender === "male" && desiredroomthemesnumber > .875) {
        roomtheme = "Tools/Handiness"
    }
    //if female
    if (gender === "female" && desiredroomthemesnumber < .125) {
        roomtheme = "Space/Robots/Technology"
    }
    if (gender === "female" && desiredroomthemesnumber > .125 && desiredroomthemesnumber < .25) {
        roomtheme = "Nature"
    }
    if (gender === "female" && desiredroomthemesnumber > .25 && desiredroomthemesnumber < .375) {
        roomtheme = "Dinosaurs"
    }
    if (gender === "female" && desiredroomthemesnumber > .375 && desiredroomthemesnumber < .5) {
        roomtheme = "Animals"
    }
    if (gender === "female" && desiredroomthemesnumber > .5 && desiredroomthemesnumber < .625) {
        roomtheme = "Sports"
    }
    if (gender === "female" && desiredroomthemesnumber > .625 && desiredroomthemesnumber < .75) {
        roomtheme = "Fairies/Butterflies"
    }
    if (gender === "female" && desiredroomthemesnumber > .75 && desiredroomthemesnumber < .875) {
        roomtheme = "Flowers"
    }
    if (gender === "female" && desiredroomthemesnumber > .875) {
        roomtheme = "Princesses"
    }

    //if dontmatter
    if (gender === "dontmatter" && desiredroomthemesnumber < .09) {
        roomtheme = "Space/Robots/Technology"
    }
    if (gender === "dontmatter" && desiredroomthemesnumber > .09 && desiredroomthemesnumber < .18) {
        roomtheme = "Nature"
    }
    if (gender === "dontmatter" && desiredroomthemesnumber > .18 && desiredroomthemesnumber < .27) {
        roomtheme = "Dinosaurs"
    }
    if (gender === "dontmatter" && desiredroomthemesnumber > .27 && desiredroomthemesnumber < .36) {
        roomtheme = "Animals"
    }
    if (gender === "dontmatter" && desiredroomthemesnumber > .36 && desiredroomthemesnumber < .45) {
        roomtheme = "Sports"
    }
    if (gender === "dontmatter" && desiredroomthemesnumber > .45 && desiredroomthemesnumber < .54) {
        roomtheme = "Fairies/Butterflies"
    }
    if (gender === "dontmatter" && desiredroomthemesnumber > .54 && desiredroomthemesnumber < .63) {
        roomtheme = "Flowers"
    }
    if (gender === "dontmatter" && desiredroomthemesnumber > .63 && desiredroomthemesnumber < .72) {
        roomtheme = "Army"
    }
    if (gender === "dontmatter" && desiredroomthemesnumber > .72 && desiredroomthemesnumber < .81) {
        roomtheme = "Rainbows"
    }
    if (gender === "dontmatter" && desiredroomthemesnumber > .81) {
        roomtheme = "Royalty (Princes & Princesses)"
    }

    console.log(desiredroomthemesnumber)
    //return selected room theme
    return roomtheme
}
