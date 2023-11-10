mainView(); 
function mainView(){
    app.innerHTML = /*HTML*/` 

    <div class="image-container">
    <img class="headerImg"src="images/ER.png">  

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
     
    
    <img class="ranni" src="images/Ranni.jpg">
    <img class="tarnishedImg"id="imgId" src="">
    <button class="checkButton"id="checkButton"onclick="selectClass()">Seek guidance</button>
    </div>

    
    `;
    levelDiv.innerHTML = "Level: " + wretch.level; 
 
    vigorDiv.innerHTML = stats.vigor + " : Vigor";
    mindDiv.innerHTML = stats.mind + " : Mind";
    enduranceDiv.innerHTML = stats.endurance + " : Endurance";
    strengthDiv.innerHTML = stats.strength + " : Strength";
    dexterityDiv.innerHTML = stats.dexterity + " : Dexterity";
    intelligenceDiv.innerHTML = stats.intelligence + " : Intelligence";
    faithDiv.innerHTML = stats.faith + " : Faith";
    arcaneDiv.innerHTML = stats.arcane + " : Arcane";
}
