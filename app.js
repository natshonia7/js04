// Task 1:
// გაქვთ ობიექტების მასივი. ობიექტს აქვს ორი ფროფერთი, იუზერნეიმი და ასაკი.
// ჯავასკრიპტიდან უნდა შექმნათ სია html მხარეს (ul -> li), რომელშიც ჩაემატება მხოლოდ ის იუზერნეიმები ობიექტებიდან, რომლის ასაკიც მეტია 18 ზე.


let obj = [{
    username: 'Natia',
    Age: 24
},

{
    username: 'Nika',
    Age: 25
},

{
    username: 'nikoli',
    Age: 12
},


{
    username: 'Nata',
    Age: 23
},

{
    username: 'Nita',
    Age: 35
},

{
    username: 'nia',
    Age: 10
}

]
console.log(obj);


const div = document.querySelector('.main');

const ul = document.createElement('ul');
div.appendChild(ul);


// obj.forEach((elements)=>{
//     const li = document.createElement('li');
//      li.textContent = elements.username ;
//      ul.appendChild(li);   
//      if(elements.Age<18){
//       li.remove();
//     }  
// });

obj.forEach((elements) => {
const li = document.createElement('li');

if (elements.Age > 18) {
    li.textContent = elements.username;
    ul.appendChild(li);
}
});






// Task 2:
// მოიძიეთ ინფორმაცია onclick  ზე.
// html - ის მხარეს განათავსეთ ორი ღილაკი, ერთი წაშლის პირველ დავალებაში შესრულებულ სიას, ხოლო მეორე შექმნის. თუ სია უკვე არსებობს, მაშინ შექმნის ღილაკი ან დამალული იყოს, ან დადიზეიბლებული.
// იგივე წაშლის შემთხვევაშიც(თუ სია წაშლილია, მაშინ ან დამალული, ან დადიზეიბლებული)




function removeFunc() {

ul.remove();
}


function addFunc() {

// div.appendChild(ul);
if(btn_add.getAttribute('btn_add') !== div &&div.appendChild(ul) ){
                    btn_add.setAttribute('disabled', '')
}        

}




// Task 3
// მოიძიეთ ინფორმაცია classlist ზე.
// css ში შექმენით მარტივი კლასი.(მაგალითად ფერი და ფონტსაიზი მიანიჭეთ)
// html ის მხარეს აიღეთ რამე ტეგი მარტივი ტექსტით და 1 ღილაკი. ღილაკზე დაჭერისას ამ ტეგს დაამატეთ css კლასი, ხოლო თუ  ტეგს უკვე აქვს აღნიშნული კლასი, მაშინ წაუშალეთ.
//  (ანუ ღილაკზე ყოველი დაჭერისას ეს კლასი ან დაედება, ან მოშორდება)



const classlist=document.querySelector('.classlist');




function func1(){
    classlist.remove(); 
}



