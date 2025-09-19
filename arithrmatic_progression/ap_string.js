let totalCount = "";
const terms = ".....";
for (let currentTerm = ""; currentTerm.length <= terms.length; currentTerm = currentTerm + "."){
    totalCount = totalCount + currentTerm;
    console.log(currentTerm, totalCount.length);    
}
