function findingBadData(arr) {

    
    if(typeof arr != 'object' || arr.length === 0 ){
        return 'invalid input!! insert a valid input only array';
    }
    let count = 0;
      for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element < 0) {
          count++;
        }
      }
      return count;
    }
    
    const myInput=[-4, -9, -5, -33, -55];
    console.log(findingBadData(myInput));