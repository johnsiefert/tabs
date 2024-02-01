const content = document.querySelectorAll('.content');
const tab = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');

//my way of building the project
// tab.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//             const tabs = e.currentTarget.dataset.id
//     content.forEach(function(item){

//         if(item.getAttribute('id') === tabs){
//             item.classList.add('active');
//         }else {
//             item.classList.remove('active');
//         }

//     });
//   });
// });


//tutorial way to build the project
about.addEventListener('click', function(e){
const id = e.target.dataset.id;
if(id){
    //remove activate from other buttons
    tab.forEach(function(btn){
        btn.classList.remove('active');
        e.target.classList.add('active');
    });
    //hide other articles
    content.forEach(function(article){
        article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
}
});
