let harmlessRansomNote = (noteText,magazineText)=>{
    var notArr = noteText.split('');
    var magArr = magazineText.split('');

    var magazine= {};

    magArr.forEach(word => {  
        if(!magazine[word]) magazine[word]=0;
         magazine[word]++;  
    });
    console.log(magazine);
     
}
harmlessRansomNote('','this is all in the magazine note');