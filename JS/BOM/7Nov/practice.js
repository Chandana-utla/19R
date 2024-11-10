// function printArray(arr)
// {
//     var a=" "
//     for(var i=0;i<arr.length;i++)
//     {  
     
//         for(var j=0;j<arr[i].length;j++)
//         {
//           //a.push(arr[i][j])
//           a+= arr[i][j]
//           // console.log(arr[i][j])
//           // console.log(a)
//         }
//     }
//     return a;
// }
// var arr=[[1,2],[3,4],[5,6]]
//  //const op=printArray(arr)
//  //console.log(op)
//  printArray(arr)
// function deleteElement(arr, ele) {
//     for (var i=0;i<arr.length;i++){
//       if(arr[i]==ele){
//         arr.splice(i,1); //Delete element from array
//       }
//     }
//     return arr;
//   }
//   var arr = [23,56,4,78,5,63,45,210,56];
//   arr = deleteElement(arr, 56)
  
//   console.log(arr);
// function printPattern(range) {
//     for(var i=1;i<=range;i++){
//       var str="";
//       for(var j=1;j<=i;j++){
//         str += j+" ";
//       }
//      console.log(str);
     
//     }
    
// return str;
//   }
//   const output=printPattern(8);
// console.log(output)
    
    
function printPattern(range) {
    for(var i=1;i<=range;i++){
      var str="";
      for(var j=1;j<=i;j++){
        str += j+" ";
      }
      console.log(str);
    }
  }
  printPattern(8);
  