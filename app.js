//model
app = document.getElementById('app')

let stats = {
    vigor : 5,
    mind : 5,
    endurance : 5,
    strength : 5,
    dexterity : 5,
    intelligence : 5,
    faith : 5,
    arcane : 5
};

const playerClass = [
 wretch = {
    name : "Wretch",
    level : 1,
    vigor : 10,
    mind : 10,
    endurance : 10,
    strength : 10,
    dexterity : 10,
    intelligence : 10,
    faith : 10,
    arcane : 10,
    img: "ER_Class_Wretch.webp",
    quote: "Unlimited potential"
},
bandit = {
    name : "Bandit",
    level : 5,
    vigor : 10,
    mind : 11,
    endurance : 10,
    strength : 9,
    dexterity : 13,
    intelligence : 9,
    faith : 8,
    arcane : 14,
    img: "ER_Class_Bandit.webp",
    quote: "Patches says hi"
},
 astrologer = {
    name : "Astrologer",
    level : 6,
    vigor : 9,
    mind : 15,
    endurance : 9,
    strength : 8,
    dexterity : 12,
    intelligence : 16,
    faith : 7,
    arcane : 9,
    img: "ER_Class_Astrologer.webp",
    quote: "Stars lead the way"
},
warrior = {
    name : "Warrior",
    level : 8,
    vigor : 11,
    mind : 12,
    endurance : 11,
    strength : 10,
    dexterity : 16,
    intelligence : 10,
    faith : 8,
    arcane : 9,
    img: "ER_Class_Warrior.webp",
    quote: "Fight with elegance"
},
hero = {
    name : "Hero",
    level : 7,
    vigor : 14,
    mind : 9,
    endurance : 12,
    strength : 16,
    dexterity : 9,
    intelligence : 7,
    faith : 8,
    arcane : 11,
    img: "ER_Class_Hero.webp",
    quote: "Radahn is waiting"
    
},
prophet = {
    name : "Prophet",
    level : 7,
    vigor : 10,
    mind : 14,
    endurance : 8,
    strength : 11,
    dexterity : 10,
    intelligence : 7,
    faith : 16,
    arcane : 11,
    img: "ER_Class_Prophet.webp",
    quote: "Goldmask *points*"
},
samurai = {
    name : "Samurai",
    level : 9,
    vigor : 12,
    mind : 11,
    endurance : 13,
    strength : 12,
    dexterity : 15,
    intelligence : 9,
    faith : 8,
    arcane : 8,
    img: "ER_Class_Samurai.webp",
    quote: "A cultured one i see"
},
prisoner = {
    name : "Prisoner",
    level : 9,
    vigor : 11,
    mind : 12,
    endurance : 11,
    strength : 11,
    dexterity : 14,
    intelligence : 14,
    faith : 6,
    arcane : 9,
    img: "ER_Class_Prisoner.webp",
    quote: "Berserk reference"
},
confessor = {
    name : "Confessor",
    level : 10,
    vigor : 10,
    mind : 13,
    endurance : 10,
    strength : 12,
    dexterity : 12,
    intelligence : 9,
    faith : 14,
    arcane : 9,
    img: "ER_Class_Confessor.webp",
    quote: "Deliver absolution"
},
]

//view
        mainView(); 
        function mainView(){
            app.innerHTML = /*HTML*/` 

            <div class="image-container">
            <img class="headerImg"src="ER.png">  

            <div class="levelDisplay" id="levelDiv"></div> 
           
            <div id="statDiv"></div>
            
            <button id="statButton"onclick="subStat('vigor')">-</button>
            <button id="statButton"onclick="addStat('vigor')">+</button>
            <div id="vigorDiv"></div>
            <button id="statButton"onclick="subStat('mind')">-</button>
            <button id="statButton"onclick="addStat('mind')">+</button>
            <div id="mindDiv"></div>
            <button id="statButton"onclick="subStat('endurance')">-</button>
            <button id="statButton"onclick="addStat('endurance')">+</button>
            <div id="enduranceDiv"></div>
            <button id="statButton"onclick="subStat('strength')">-</button>
            <button id="statButton"onclick="addStat('strength')">+</button>
            <div id="strengthDiv"></div>
            <button id="statButton"onclick="subStat('dexterity')">-</button>
            <button id="statButton"onclick="addStat('dexterity')">+</button>
            <div id="dexterityDiv"></div>
            <button id="statButton"onclick="subStat('intelligence')">-</button>
            <button id="statButton"onclick="addStat('intelligence')">+</button>
            <div id="intelligenceDiv"></div>
            <button id="statButton"onclick="subStat('faith')">-</button>
            <button id="statButton"onclick="addStat('faith')">+</button>
            <div id="faithDiv"></div>
            <button id="statButton"onclick="subStat('arcane')">-</button>
            <button id="statButton"onclick="addStat('arcane')">+</button>
            <div id="arcaneDiv"></div>
            
            <div class="playerclassText"id="classDiv"></div>
            <div id="wretchDiv"></div>
            <div id="banditDiv"></div>
            <div id="astrologerDiv"></div>
            <div id="heroDiv"></div>
            <div id="prophetDiv"></div>
            <div id="warriorDiv"></div>
            <div id="vagabondDiv"></div>
            <div id="samuraiDiv"></div>
            <div id="prisonerDiv"></div>
            <div id="confessorDiv"></div>
             
            
            <img class="ranni" src="Ranni.jpg">
            <img class="tarnishedImg"id="imgId" src="">
            <button class="checkButton"id="checkButton"onclick="classDisplay()">Seek guidance</button>
            </div>

            
            `;
            levelDiv.innerHTML = "Level: " + wretch.level; 
          //change these to show wretch stats by default and update functions to support this
            vigorDiv.innerHTML = stats.vigor + " : Vigor";
            mindDiv.innerHTML = stats.mind + " : Mind";
            enduranceDiv.innerHTML = stats.endurance + " : Endurance";
            strengthDiv.innerHTML = stats.strength + " : Strength";
            dexterityDiv.innerHTML = stats.dexterity + " : Dexterity";
            intelligenceDiv.innerHTML = stats.intelligence + " : Intelligence";
            faithDiv.innerHTML = stats.faith + " : Faith";
            arcaneDiv.innerHTML = stats.arcane + " : Arcane";
        }

//controller

function classDisplay() {
  const mostEfficientClass = findMostEfficientClass(stats);
  document.getElementById('classDiv').innerHTML = mostEfficientClass.name;
  document.getElementById('imgId').src = mostEfficientClass.img;
  checkButton.innerHTML = mostEfficientClass.quote;
  levelDiv.innerHTML = "Level: " + mostEfficientClass.level;
}

function addStat(stat) {
    if (stats[stat] >= 99){
        stats[stat] = 99;
    } else if (stats.hasOwnProperty(stat)) {
        stats[stat]+=5;
    } 
    mainView();
}

function subStat(stat) {
    if (stats[stat] <= 1){   
        stats[stat] = 1;
    } else if (stats.hasOwnProperty(stat)) {
        stats[stat]-=5;
    } 
    mainView();
}

function findMostEfficientClass(stats) {
    let minDifference = Infinity;
    let mostEfficientClass = null;
  
    for (const classData of playerClass) {
      let difference = 0;
  
      for (const stat of Object.keys(stats)) {
        difference += Math.abs(stats[stat] - classData[stat]);
      }
  
      if (difference < minDifference) {
        minDifference = difference;
        mostEfficientClass = classData;
      }
    }
  
    return mostEfficientClass;
  }
