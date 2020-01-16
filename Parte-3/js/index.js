$('#formComment').on("submit", function(e){
  e.preventDefault();
  let name = $(this).find('.userName').val();
  let comment = $(this).find('#userComment').val();

  if (name == '' || comment == '')
    alert('Please complete all fields');
  else{
    $('.seccionComments').append(`
      <div class="comment">
        <div class="commentTitle">${name}</div>
        <div class="commentContent">${comment}</div>
      </div>
    `);
  }   
})