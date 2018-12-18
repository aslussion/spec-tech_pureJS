document.addEventListener('DOMContentLoaded', function() {
  //slider
  var block = document.querySelector('.j-peppermint');
  var slider = Peppermint(block, {
      //dotsPrepend: true,
      dots: true,
      slidesContainer: block.querySelector('.slides-container'),
      onSetup: function(n) {
          if(n>1){
              block.querySelector('.peppermint-arrows').style.display='block';
          }
      },
  });
  nextArr = document.getElementById('js-next');
  prevArr = document.getElementById('js-prev');
  nextArr.addEventListener('click', slider.next, false);
  prevArr.addEventListener('click', slider.prev, false);
  // /slider

  //fancy
  [].forEach.call( document.querySelectorAll('.j-modalShow'), function(el) {
    showModal(el);
  });
  // /fancy

  //form 
  var formAjaxAll = document.querySelectorAll('.formAjax');
  [].forEach.call( formAjaxAll, function(formAjax) {
    formAjax.addEventListener('submit', ajaxForm.bind(null,formAjax));    
  });
  // /form 

});

function ajaxForm(form){
  //console.log(form);
      var request = new XMLHttpRequest();
      var url = form.getAttribute('action');
      var data = serialize(form);
      request.open('GET', url+'?'+data, true);

      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          var resp = this.response;
          //console.log(resp);

          if(resp == 'success'){
            form.reset();
            showModal('<div class="text-center">Сообщение успешно отправлено.</div>');
          }
          else if(resp == 'required'){
            showModal('<div class="text-center">Не заполнены обязательные поля.</div>');
          }

          else{
            showModal('<div class="text-center">Произошла ошибка, сообщение не отправлено.</div>');
          }
          
        } else {
          // We reached our target server, but it returned an error

        }
      };

      request.onerror = function() {
        // There was a connection error of some sort
      };

      request.send();

      event.preventDefault();
}
