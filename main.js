console.log('connected')

function bio(){
	$('.bio').on("click", event=>{
		$('.bio').addClass('selected')
		$('.projects').removeClass('selected')
	})
};
function projects(){
	$('.projects').on('click', event=>{
		$('.projects').addClass('selected');
		$('.bio').removeClass('selected');
		})
};
bio();
projects();