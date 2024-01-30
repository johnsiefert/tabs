const content = document.querySelectorAll('.content');
const tab = document.querySelectorAll('.tab-btn');



tab.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
            const tabs = e.currentTarget.dataset.id
    content.forEach(function(item){

        if(item.getAttribute('id') === tabs){
            item.classList.add('active');
        }else {
            item.classList.remove('active');
        }

    });
  });
});
