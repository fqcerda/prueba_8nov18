$(function() {
    console.log( "ready!" );
	

		$('.cards').on('click', '.like', function() {
		$(this).toggleClass( 'tweet_like' );
		});

		$('.social').on('click', '.like', function(event) {
		event.preventDefault();
		event.stopPropagation();
		// $(this).toggleClass( 'card__like--red' );
		var target = $(this).siblings('.card__hidden')
							.find('.social__element')
							.eq(1)
							.children('.social__number');
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
                    <ul >
                        <li>
                        <button type="button" class="btn btn-default">Borrar Tweet</button>
                        </li>
                        <li>
                          <a href="#"><i class="fas fa-heart fa-2x"></i></a>
                       </li>
                        <li>     
                          <div>0</div>
                          <div>Likes</div>
                        </li>
                    </ul>
                <hr>
              </div> `);

	
	});


	

});




