function gemsToDiamond(gems1,gems2,gems3) {

    if( typeof gems1 != 'number' || gems1 == null){
        return 'invalid input!! insert 1st input as a number';
       
       }
    if( typeof gems2!= 'number' || gems2 ==null){
        return 'invalid input!! insert 2nd input as a number';
       
       }
    if( typeof gems3 != 'number' || gems3 ==null ){
        return 'invalid input!! insert 3rd input as a number';
      }

        const firstFriendsDiamond = 21 * gems1;
        const secondFriendsDiamond = 32 * gems2;
        const thirdFriendsDiamond = 43 * gems3;
        let totalDiamond = firstFriendsDiamond + secondFriendsDiamond + thirdFriendsDiamond;

        if (totalDiamond >= 1000*2){
            totalDiamond -= 2000;
        }
        else{
            totalDiamond=totalDiamond;
        }
        return totalDiamond;
    
    }
    console.log(gemsToDiamond(1,1,5));