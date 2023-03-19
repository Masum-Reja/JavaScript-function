 function evenOdd(str) {

    if (typeof str!='string') {
            return 'invalid input!! insert a valid input only string';
        }
        let remainder = str.length % 2;
        let result ='';
        if ( remainder == 0) {
        result='even';
    }
    else{
        result='odd';
    }   
    return result;
   
}

console.log(evenOdd('8777'));



//1number
function mindGame(numbers) {

    if( typeof numbers != 'number' || numbers < 0)
    {
        return 'invalid input!! insert a valid input only positive number'
    }
     let result = ((((numbers * 3)+10)/2)-5);
     return result; 
    
 }
 
 console.log(mindGame(-3));
 
 