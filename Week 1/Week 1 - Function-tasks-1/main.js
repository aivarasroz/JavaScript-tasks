

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{

// SPRENDIMAS 1. 


const array1 = [1, 2, 3, 4, 5, 6]; 

function returnFirstArray() {
 return array1[0] ;

}
console.log('Returning First Element:', returnFirstArray());

}

console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
 
// SPRENDIMAS 2.

const array2 = [1, 2, 3, 4, 5, 6]; 

function returnDeletedElement(array2) {
    const o = array2[0];

    for (let x = 1; x < array2.length; x++) {
        array2[x-1] = array2[x]
    }
      array2.length--;

    return o;
}

console.log(returnDeletedElement(array2));

}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{

// SPRENDIMAS 3.

const array3 = [1, 2, 3, 4, 5, 6,];
const i = array3[array3.length -1];
 function returnLastArray() {
    return i;
 }
 console.log('Returning Last Element:', returnLastArray([i]));

}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{

    //SPRENDIMAS 4.
    
    const array4 = [1, 2, 3, 4, 5, 6]; 

    function returnDeletedLastElement(array4) {
        const o = array4[array4.length -1];
    
        return o;
    }
    console.log('Returning Last Element:', returnDeletedLastElement(array4));
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{

//SPRENDIMAS 5.

const array5 = [1, 2, 3, 4, 5, 6, 7, 10]; 

function returnNumberLength() {
    const o = array5.length;
    return array5.length;
}

console.log('Returning Numbers Length:', returnNumberLength());
  
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{

//SPRENDIMAS 6.
 
const array6 = [1, 2, 39, 4, 45, 6];
const i = array6.length -1;
function printLastElementIndex() {
    let i = array6;
    for ( i = array6.length -1; i <= array6.length -1; i++) {
        console.log(i);
    }
}
printLastElementIndex();

}

console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{

//SPRENDIMAS 7.

function printIndexRow(array7) {
    for (let i = 0; i <= array7.length -1; i++) {
        console.log(i);
    }
   
}
printIndexRow([2, 5, 8, 12, 78]);


}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    // SPRENDIMAS 8.
 
    function printRow() {
        const array8 = [2, 5 , 8 , 12, 13]
for (let i = 0; i < array8.length; i++){
    console.log(array8[i])
     } 
   }
    printRow();
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė

// SPREDNIMAS 9.
{

function printIndexRowFormat() {
    const array9 = [3, 9, 18, 28, 98 ,99]
for (let i = 0; i < array9.length; i++) {
    console.log('[' + (i) + ']' + '. ' + ' ' + '=>' + ' ' + array9[i])
  }
}
printIndexRowFormat();

}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{

//  SPRENDIMAS 10.

 function printRowBackwards() {
     const array10 = [4, 12, 18, 88, 12, 9]
     for (let i = array10.length -1; i >= 0; i--) {
        console.log(array10[i]);
    }
   }
   printRowBackwards();
 }
    
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{

 function printIndexRow(array11) {
    let result = ' ';
    for (let i = 0; i <= array11.length -1; i++) {
       result += i + ', ';
   
    }
    console.log(result);
} 
 printIndexRow([-111, 2, -9, 48, 58, 98, 115, -87]);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
const array12 = [-111, 2, -9, 48];

function printValueRow(array12) {
    let result = ' ';
    for (let i = 0; i <= 0; i++) {
       const i = array12.length -1;
       result += (' ' + array12 + ', ' + ' ');
   
    }
    console.log(result);
} 
printValueRow(array12);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
    function printRowElements(array13) {
        let result = ' ';
    for (let i = 0; i < array13.length; i++) {
        result += ('[' + (i) + ']' + '. ' + ' ' + '=>' + ' ' + array13[i] + ',' + ' ')
      }
      console.log(result);
    }
    printRowElements([15, 20, 3, -9, -7, -9, 1551]);
    
}
console.groupEnd();