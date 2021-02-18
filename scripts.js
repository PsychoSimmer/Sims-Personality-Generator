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
    document.querySelector(".results").innerHTML = grumpyOrRebellious + starorfamily + cowardorhatesoutdoors + braveoradventurous + normietrait1 + introvert + extrovert + selfdoubt + selfesteem + normietrait2 + "<b>Favorite Color: </b>" + color + "<br><b>Favorite Animal: </b>" + animal + "<br><b>Desired Room Themes: </b>" + calculatedesiredroomthemes() + "  &  " + calculatedesiredroomthemes();

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
            grumpyOrRebellious = '<b>Grumpy:</b> This sim has a general uneasy feeling that will persist throughout their life. You might call it anxiety. They are hard to soothe and can act out emotionally at times. This trait is changeable through acquisition of enough opposing traits. This sim is a pessimist though, and that will never change.<br>'
        }
        //else if random is greater than 0.5
        else {
            grumpyOrRebellious = '<b>Rebellious:</b> Since this sim got inadequate care, they don’t naturally trust authority figures. This means parents when they’re a child, School and parents when they’re a teenager, and government when they’re an adult. This sim is a pessimist.<br>'

        }
    }
    if (Q1A === "3") {
        if (Math.random() < 0.5) {
            starorfamily = '<b>Star-Quality:</b> This sim is such an optimistic and happy sim that other sims are drawn to them. It doesn\'t necessarily mean they want to become famous, though they could likely succeed if they tried.<br>'
        }
        else {
            starorfamily = '<b>Family-Oriented:</b> This sim admires their parental figures and desires to be like them. They are well behaved children who are likely to go for a career similar to their parents. This sim is optimistic.<br>'
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
            cowardorhatesoutdoors = '<b>Coward:</b> Extremely dislikes new situations throughout lifetime. As a child, checks for monsters under bed frequently.<br>'
        }
        //else if random is greater than 0.5
        else {
            cowardorhatesoutdoors = '<b>Hates Outdoors:</b> Doesn’t desire travel or going out in nature. Prefers electronic entertainment (Computers, Video Games), Homebody.<br>'


        }
    }
    if (Q2A === "2") {
        var normieroll1 = Math.random()
        if (normieroll1 < .17) {
            normietrait1 = "<b>Friendly:</b>This sim is naturally nice to others.<br>"
        }
        if (normieroll1 > .17 && normieroll1 < .34) {
            normietrait1 = "<b>Easily Impressed:</b> This sim enjoys the little things.<br>"
        }
        if (normieroll1 > .34 && normieroll1 < .51) {
            normietrait1 = "<b>Excitable:</b> This sim is generally happy.<br>"
        }
        if (normieroll1 > .51 && normieroll1 < .68) {
            normietrait1 = "<b>Slob:</b> This sim doesn't mind messes.<br>"
        }
        if (normieroll1 > .68 && normieroll1 < .85) {
            normietrait1 = "<b>Absent Minded:</b> This sim needs to work a little harder to understand things, It's a normal trait.<br>"
        }
        if (normieroll1 > .85) {
            normietrait1 = "<b>Good:</b> This sim does not wish to harm anyone.<br>"
        }
    }

    if (Q2A === "3") {
        //if random is less than 0.5
        if (Math.random() < 0.5) {
            braveoradventurous = '<b>Brave:</b> As a child, this sim isn’t scared of new situations like moving or traveling and wants to go out on their own unsupervised at an age that might worry some parents. Can keep or discard after childhood is over.<br>'

        }
        //else if random is greater than 0.5
        else {
            braveoradventurous = '<b>Adventurous:</b> Will yearn to leave their hometown as a teen and will likely become a traveler when they are a young adult.<br>'

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
            introvert = '<b>Loner:</b> This sim is introverted, they don’t desire to have many friends.<br>'
        }
        else if (q3roll > .25 && q3roll < .5) {
            introvert = '<b>Shy:</b> This Sim is introverted and desires friends but has trouble making them.<br>'
        }
        else if (q3roll > .5 && q3roll < .75) {
            introvert = '<b>Socially Awkward:</b> This sim is introverted and didn’t get socialized enough in general and is less likely to be accepted by peers as children and teenagers.<br>'
        }
        else if (q3roll > .75) {
            introvert = '<b>No Sense of Humor:</b> This sim is introverted and didn’t get socialized enough to learn the nuances of humor.<br>'
        }
    }
    if (Q3A === "3") {
        if (q3roll < 0.25) {
            extrovert = '<b>Social Butterfly:</b> This trait doesn’t necessarily mean they are good at making friends, it just means they strongly prefer having people around them rather than being alone. <br>'
        }
        else if (q3roll > .25 && q3roll < .5) {
            extrovert = '<b>Charismatic:</b> This sim is good at social interaction, it doesn\'t mean they enjoy it or need it, they could still be a loner, it just means they understand it enough to benefit from it when they want.<br>'
        }
        else if (q3roll > .5 && q3roll < .75) {
            extrovert = '<b>Good Sense of Humor:</b> This sim is actually witty and funny! Pretty rare<br>'
        }
        else if (q3roll > .75) {
            extrovert = '<b>Family Oriented:</b> This sim enjoys the company of their family. If sim already has the rebellious trait, this means they won’t fight with their parents as a child or teen any more than average but still holds distrust for other authorities. <br>'
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
            selfdoubt = '<b>Never Nude:</b> This sim has self-doubt. Never Nude will only become a real trait when they age up into a teenager. They will have restricting ideas about sexuality.<br><br>'
        }
        else if (q4roll > .33 && q4roll < .66) {
            selfdoubt = '<b>Loser:</b> This sim feels like they don’t have control over their life. They have low self-esteem.<br><br>'
        }
        else if (q4roll > .66) {
            selfdoubt = '<b>Unflirty:</b> This trait becomes assigned when the sim becomes a teenager. This sim will have low self-esteem and doubts they will find love.<br><br>'
        }
    }

    if (Q4A === "2") {
        var normieroll2 = Math.random()
        if (normieroll2 < .17) {
            normietrait2 = "<b>Friendly:</b>This sim is naturally nice to others.<br><br>"
        }
        if (normieroll2 > .17 && normieroll2 < .34) {
            normietrait2 = "<b>Easily Impressed:</b> This sim enjoys the little things.<br><br>"
        }
        if (normieroll2 > .34 && normieroll2 < .51) {
            normietrait2 = "<b>Excitable:</b> This sim is generally happy.<br><br>"
        }
        if (normieroll2 > .51 && normieroll2 < .68) {
            normietrait2 = "<b>Neat:</b> This sim prefers things clean.<br><br>"
        }
        if (normieroll2 > .68 && normieroll2 < .85) {
            normietrait2 = "<b>Absent Minded:</b> This sim needs to work a little harder to understand things, It's a normal trait.<br><br>"
        }
        if (normieroll2 > .85) {
            normietrait2 = "<b>Good:</b> This sim does not wish to harm anyone.<br><br>"
        }
    }

    if (Q4A === "3") {
        if (q4roll < 0.33) {
            selfesteem = '<b>Disciplined:</b> This sim feels like they have control over their life. When interested in a new topic, they are determined to learn all they can.<br><br>'
        }
        else if (q4roll > .33 && q4roll < .66) {
            selfesteem = '<b>Flirty:</b> This will only become a real trait when they age up into a teenager but as a child they will have lots of crushes. They’re the kind of kid that has the confidence to tell their crush they like them.<br><br>'
        }
        else if (q4roll > .66) {
            selfesteem = '<b>Party Animal:</b> This will only become a real trait when they age up into a teenager but as a child, they will be highly energetic, sure of themselves, and have high self-esteem.<br><br>'
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
