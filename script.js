const button = document.querySelector("button");
const comments = document.querySelector (".comments");
const textarea = document.querySelector("textarea");

let arr = [];

button.addEventListener("click", function() {
let text= textarea.value;
textarea.value = "";



arr.push(text);

comments.innerHTML="";
render(comments, arr);
});

function render (parentNode, data){
    for( let i=0; i<data.length; i++){
        let item = data[i];

        const filterWords = ['viagra', 'slot'];
        let filteredText = item;
        for (let word of filterWords){
            let reg =new RegExp (word, "ig");
            filteredText =  filteredText.replace(reg, "***");
        }
        

        let node = document.createElement('div');
        node.classList.add('comment');
        node.textContent=filteredText;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('comment_button');
        deleteButton.textContent ='удалить';

        deleteButton.addEventListener('click', function(){
            node.remove();
            data.splice(i, 1);
        })

        node.append(deleteButton);
        parentNode.append(node);
        
        }
}