console.log('connected')

function bio(){
	$('.bio').on("click", event=>{
		$('main').empty();
		$('main').append(`<img class ="me" src="./images/Me.jpg" alt="picture of Matt"><p>Hello, I'm Matt.  A full stack web developer in training.</p><br><p>I am curently working thru the software engineering program at Thinkful.  I started my journey into software engineering soon after the birth of my twin boys.  I took on the mentality of, <span>"When is the last time you have done something for the first time?"</span>  Which has lead me to trying something I have always been too afraid to do.  Turns out, I love it.</p><br><p>It started with a fun etch a sketch like app that my daughter loved.  A to do list with transitioning properties.  Then as I started to dive deeper, I began to see how I could take my 16 years of food service retail experience and come up with truly useful applications that will drive the future of the industry.</p>`);
	})
};
bio()