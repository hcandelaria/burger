$(function(){

  //When click the submit button
  $(document).on('click','#submit',function(event){
    event.preventDefault();
    //Create burger object
    let newBurger = {
      burger_name: $('#burger_name').val().trim(),
      devoured: 0
    };
    //Ajax call to create new burger
    $.ajax('/api/burgers',{
      type: "POST",
      data: newBurger
    }).then( function () {
      location.reload();
    });
  });
  //When click the burger img
  $(document).on('click','.devoured',function() {
    event.preventDefault();

    let id = $(this).attr("data-id");
    let update = null;

    console.log($(this).attr('data-devoured'));


    if($(this).attr('data-devoured') === 'false')
      update = 1;
    else
      update = 0;

    let updateBurger = {
      devoured : update
    };

    console.log(updateBurger);
    $.ajax('/api/burgers/' + id,{
      type: 'PUT',
      data: updateBurger
    }).then (function () {
      location.reload();
    });
  });
  //When click the add burger buttom
  $(document).on('click','.addBurger',function(){
    event.preventDefault();

    let id = $(this).attr("data-id");
    let update = null;

    console.log($(this).attr('data-devoured'));

    if($(this).attr('data-devoured') === 'false')
      update = 1;
    else
      update = 0;

    let updateBurger = {
      devoured : update
    };

    console.log(updateBurger);
    $.ajax('/api/burgers/' + id,{
      type: 'PUT',
      data: updateBurger
    }).then (function () {
      location.reload();
    });
  });
});
