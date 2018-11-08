$(function() {
    console.log( "ready!" );
	


		$('.nuevos_tweets').on('click', '.like', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).addClass( 'tweet_like' );

		});


		$('.nuevos__tweets').on('click', '.like', function(event) {
		event.preventDefault();
		event.stopPropagation();
		// $(this).toggleClass( 'card__like--red' );
		var target = $(this).siblings('.contador')
							.find('.social_likes')
							.eq(1)
							.children('.numero_likes');
		var number = target.text();
		number = parseInt(number);
		if ($(this).hasClass('tweet_like')) {
		   $(this).removeClass('tweet_like');
		   target.text(number -= 1);
		} else {
			$(this).addClass('tweet_like');
			target.text(number += 1);
		}
		});

			$('#image').on('change', function (event) {
		var fileName = $(this).val();
		var fileUrl = 'assets/images/squared/' + fileName;

		$('.create__image .create__img').attr('src', fileUrl);
		});



		$('.new_tweet').on('submit', function(event) {
		event.preventDefault();
		var name 		= $('#name').val();
		var comment		= $('#comment').val();
		var image 		= $('#image').val();

	

		$('.nuevos_tweets').append(`<div class="row">
                 <h3>${ name }</h3>
                            <div class="row">
                              <div class="col-md-3">
                                <img src="./assets/images/squared/${ image }" class="img-responsive" alt="">
                              </div>
                              <div class="col-md-9">
                                <p class="texto_tweet">${ comment }</p>
                              </div>
                            </div>
                    <ul class="contador" >
                        <li>
                        <button type="button" class="btn btn-default eliminar">Borrar Tweet</button>
                        </li>
                        <li>
                          <a class="like" href="#"><i class="fas fa-heart fa-2x"></i></a>
                       </li>
                        <li class="social_likes">     
                          <div class="numero_likes">24</div>
                          <div>Likes</div>
                        </li>

                    </ul>
                <hr>
              </div> `);

	
	});





 $(".nuevos_tweets").on("click", ".eliminar",function(){ 
       $(this).parent().parent().parent().fadeOut(900); 
         
       })

	

});




