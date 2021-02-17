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

    //CALL FUNCTION of process each q
    Q1()
    Q2()
    Q3()
    Q4()

    //put results on page
    document.querySelector(".inputtedname").innerText = document.querySelector(".nametextbox").value + "'s Personality Evaluation"
    document.querySelector(".results").innerHTML = grumpyOrRebellious + starorfamily + cowardorhatesoutdoors + braveoradventurous + introvert + extrovert + selfdoubt + selfesteem;

}

var grumpyOrRebellious;
var starorfamily;
var cowardorhatesoutdoors;
var braveoradventurous;
var introvert;
var extrovert;
var selfdoubt;
var selfesteem;

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
            selfdoubt = '<b>Never Nude:</b> This sim has self-doubt. Never Nude will only become a real trait when they age up into a teenager. They will have restricting ideas about sexuality.<br>'
        }
        else if (q4roll > .33 && q4roll < .66) {
            selfdoubt = '<b>Loser:</b> This sim feels like they don’t have control over their life. They have low self-esteem.<br>'
        }
        else if (q4roll > .66) {
            selfdoubt = '<b>Unflirty:</b> This trait becomes assigned when the sim becomes a teenager. This sim will have low self-esteem and doubts they will find love.<br>'
        }
    }
    if (Q4A === "3") {
        if (q4roll < 0.33) {
            selfesteem = '<b>Disciplined:</b> This sim feels like they have control over their life. When interested in a new topic, they are determined to learn all they can.<br>'
        }
        else if (q4roll > .33 && q4roll < .66) {
            selfesteem = '<b>Flirty:</b> This will only become a real trait when they age up into a teenager but as a child they will have lots of crushes. They’re the kind of kid that has the confidence to tell their crush they like them.<br>'
        }
        else if (q4roll > .66) {
            selfesteem = '<b>Party Animal:</b> This will only become a real trait when they age up into a teenager but as a child, they will be highly energetic, sure of themselves, and have high self-esteem.<br>'
        }
    }
}
