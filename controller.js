function selectClass() {
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
    