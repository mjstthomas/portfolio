console.log('connected')
function contacts(){
	$('.contacts').on('click', event=>{
		$('main').empty();
		$('main').append(`<address><ul><li><a href="mailto:mjstthomas0516@gmail.com" title="email">Email Me</a></li><li><a href="tel:+15205896530" title="phone number">Call Me</a></li><li><a type="text/css" href="https://github.com/mjstthomas" target="_blank" title="github">Github</a></li><li><a type="text/css" href="https://www.linkedin.com/in/mathew-st-thomas-014043147" target="_blank" title="linkedin">Linkedin</a></li></ul></address>`);
	})
};
function bio(){
	$('.bio').on("click", event=>{
		$('main').empty();
		$('main').append(`<img class ="me" src="./images/Me.jpg" alt="picture of Matt"><p>Hello, I'm Matt.  A full stack web developer in training.</p><br><p>I am curently working thru the software engineering program at Thinkful.  I started my journey into software engineering soon after the birth of my twin boys.  I took on the mentality of, <span>"When is the last time you have done something for the first time?"</span>  Which has lead me to trying something I have always been too afraid to do.  Turns out, I love it.</p><br><p>It started with a fun etch a sketch like app that my daughter loved.  A to do list with transitioning properties.  Then as I started to dive deeper, I began to see how I could take my 16 years of food service retail experience and come up with truly useful applications that will drive the future of the industry.</p>`);
	})
};
function projects(){
	$('.projects').on('click', event=>{
		$('main').empty();
		$('main').append(`<ul><li><h3>Etch-a-Sketch</h3><img src="./images/etch.png"><p class="description">a quick app designed to at like an etch a sketch using javascript to color boxes as a cursor enters each div.</p><br><a href="https://github.com/mjstthomas/etchasketch">github.com/mjstthomas/etchasketch</a><br><a href="https://mjstthomas.github.io/etchasketch/">github.io/echasketch</a><br><p class="description">HTML:CSS:JS</p></li><li><h3>Rock, Paper, Scissors</h3><img src="./images/rock.png"><p>This is a simple Rock/Paper/Scissors game I created using javascript DOM manipulation.  This was my first big jump into the DOM.</p><br><a href="https://github.com/mjstthomas/RockPaperScissors">github.com/mjstthomas/RockPaperScissors</a><br><a href="https://mjstthomas.github.io/RockPaperScissors/">github.io/RockPaperScissors</a><p>HTML:CSS:JS</p></li><li><h3>To Do List</h3><img src="./images/todo.png"><p>using HTML, CSS, and javascript DOM manipulation, I created a pretty simple but useful to do list.  This was my first time using CSS transition properties over javascript manipulation</p><br><a href="https://github.com/mjstthomas/todolist">github.com/mjstthomas/todolist</a><br><a href="https://mjstthomas.github.io/todolist/">github.io/todolist</a><br><p>HTML:CSS:JS</p></li><li><h3>PaperScript</h3><img src="./images/paper.png"><p>listens for keypresses to make sounds a multi colored circles that shrink away from you.</p><br><a href="https://github.com/mjstthomas/paperscript">github.com/mjstthomas/paperscript</a><br><a href="https://mjstthomas.github.io/paperscript/">github.io/paperscript</a><br><p>CSS:JS</p></li><li><h3>QuizApp</h3><img src="./images/quiz.png"><p>Using jQuery, I created a Javascript Quiz App using object based DOM manipulation.</p><br><a href="https://github.com/mjstthomas/QuizApp">github.com/mjstthomas/QuizApp</a><br><a href="https://mjstthomas.github.io/QuizApp/">github.io/QuizApp</a><br><p>HTML:CSS:JS</p></li></ul>`)
	})
};
contacts();
bio();
projects();