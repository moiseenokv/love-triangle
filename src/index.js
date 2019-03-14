/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
  module.exports = function getLoveTrianglesCount(preferences = []){
    count=0;
    for(i=0; i<=preferences.length-1; i++) {
    
    firstVal = preferences[i];
    firstInd = i;
    
    secondVal = preferences[firstVal-1];
    secondInd = firstVal-1;

    thirdVal = preferences[secondVal-1];
    thirdInd = secondVal-1;

    if((firstVal)==(secondInd+1) && (secondVal)==(thirdInd+1) && (thirdVal)==(firstInd+1) ){
        if(firstVal==secondVal && secondVal==thirdVal){
            continue;
        }else{
            count=count+1;
        }
        
    }

  }
  return (count/3);
  };