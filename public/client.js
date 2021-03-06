/*client side java
*/
function callOnce() {
	console.log('Button clicked!');
	hidden[0].style.display = "block";
	hidden[1].style.display = "block";

  document.getElementById('post-attribution-input').value = "";
  document.getElementById('post-photo-input').value = "";
	document.getElementById('photo-caption-input').value = "";
}

function likePost(likeCount){
  var numLikes = parseInt(likeCount.getElementByClassName('likeCount')[0].textContent);
  numLikes += 1;
  stat.getElementByClassName('likeCount')[0].textContent = numLikes;

  var heart = parseInt(likeCount.getElementByClassName('fa-heart')[0].textContent);
  heart.classList.add('red');
  heart.classList.remove('far');
  heart.classList.add('fas');
}

window.addEventListener('DOMContentLoaded', function(){
/* when button is clicked */

var hidden = document.getElementsByClassName('hidden');
var button = document.getElementById('create-post-button');
button.addEventListener('click', callOnce);

/* control the input box */
var cancel = document.getElementsByClassName('modal-cancel-button');
cancel[0].addEventListener('click', function () {
	hidden[0].style.display = "none";
	hidden[1].style.display = "none";
});
var close = document.getElementsByClassName('modal-close-button');
close[0].addEventListener('click', function () {
	hidden[0].style.display = "none";
	hidden[1].style.display = "none";
});


/*set accept up to recieve input */
var accept = document.getElementsByClassName('modal-accept-button');

accept[0].addEventListener('click', function() {
  	var postTemplate = Handlebars.templates.postTemplate;
	var aLink = document.getElementById('post-attribution-input').value.trim();
	var link = document.getElementById('post-photo-input').value.trim();
  	var caption = document.getElementById('photo-caption-input').value.trim();

	// console.log("==aLink:",aLink);
	// console.log("==link:",link);
	// console.log("==caption:",caption);
	if(!aLink || !link || !caption){
		alert("Make sure to fill in all fields!");
	} else {
		if (aLink && link && caption){
			console.log("== aLink:", aLink);
			console.log("== link:", link);
			console.log("== caption:", caption);
			var postHTML = postTemplate({
				Author: aLink,
				Picture: link,
				Likes: '100',
				Caption: caption
			});
			
			var postElem = document.querySelector('main.post-container');
			postElem.insertAdjacentHTML('beforeend', postHTML);
	//		var postRequest = new XMLHttpRequest();
	//		var url = '/addPhoto';
	//		postRequest.open("POST", url);

	//		var body = {
	//			author: aLink,
	//			picture: link,
	//			likes: '2',
	//			caption: caption
	//		};

	//		var requestBody = JSON.stringify(body);

	//		console.log("==requestBody:",requestBody);
	//		postRequest.setRequestHeader('Content-Type', 'application/json');
			// console.log("== URL:", url);
	//		postRequest.addEventListener('load', function(event){
				// console.log("Event:",event);
				// console.log("Event target:", event.target);
	//			console.log("Event status:", event.target.status);
	//			if (event.target.status === 200){
	//				console.log("== entered event.target.status");
	//				var postTemplate = Handlebars.templates.postTemplate;
	//				var postHTML = postTemplate({
	//					Author: aLink,
	//					Picture: link,
	//					Likes: '2',
	//					Caption: caption
	//				});
	//				var postElem = document.querySelector('main.post-container');
	//				postElem.insertAdjacentHTML('beforeend', postHTML);
	//			} else {
	//					console.log("== Never reached first if statement");
	//					alert("Error storing photo: " + event.target.response);
	//			}
	//	});


//		postRequest.send(requestBody);

		hidden[0].style.display = "none";
		hidden[1].style.display = "none";
	}
	// if (aLink && link && caption){
	// 	console.log("== aLink:",aLink);
	// 	console.log("== link:",link);
	// 	console.log("== caption:",caption);




		// var post = document.createElement('article');
		// var divAuthor = document.createElement('div');
	 //  var divPhoto = document.createElement('div');
	 //  var divURL = document.createElement('div');
	 //  var divContent = document.createElement('div');
	 //  var iuser    = document.createElement('i');
	 //  var iLikes   = document.createElement('i');
	 //  var authorLink = document.createElement('a');
	 //  /* create author */
	 //  var author = document.createElement('p');
	 //  var a = document.createTextNode(document.getElementById('post-attribution-input').value.trim());
	 //  // var aLink = document.getElementById('post-attribution-input').value.trim();
	 //  /* create photo link */
	 //  var img = document.createElement('img');
	 //  // var link = document.getElementById('post-photo-input').value.trim();
	 //
	 //  /* create photo caption */
	 //  var plikes = document.createElement('p');
		// var description = document.createElement('p');
		// // var caption = document.createTextNode(document.getElementById('photo-caption-input').value);
	 //
		// if (document.getElementById('post-photo-input').value);
		// {
		// if (document.getElementById('post-attribution-input').value);
		// {
	 //  if (document.getElementById('photo-caption-input').value);
	 //
	 //  /* assign author */
		// post.classList.add('post');
	 //  divAuthor.classList.add('post-author-content');
	 //  author.classList.add('post-author');
	 //  iuser.classList.add('fas','fa-user-circle');
	 //  authorLink.setAttribute("href", "/instogram/users/" + aLink);
	 //  /* assign image */
	 //  divPhoto.classList.add('post-photo-caption');
	 //  divURL.classList.add('post-picture');
	 //  img.src = link;
	 //  /* assign image content */
	 //  divContent.classList.add('post-content');
	 //  plikes.classList.add('post-likes');
	 //  iLikes.classList.add('far','fa-heart');
	 //  description.classList.add('post-caption');
	 //
	 // /* store author */
	 //  author.appendChild(iuser);
	 //  authorLink.appendChild(a);
	 //  author.appendChild(authorLink);
	 //  divAuthor.appendChild(author);
	 // /* store photo */
	 //  divURL.appendChild(img);
	 //  divPhoto.appendChild(divURL);
	 // /* store photo caption */
	 //  plikes.appendChild(iLikes);
	 //  // description.appendChild(caption);
	 //  // divContent.appendChild(description);
	 //  divContent.appendChild(plikes);
		// description.appendChild(caption);
	 //  divContent.appendChild(description);
	 //  divPhoto.appendChild(divContent);
	 // /* add to the main post */
		// post.appendChild(divAuthor);
	 //  post.appendChild(divPhoto);
	 //
		// var parent = document.getElementsByClassName('insto-container');
	 //
		// parent[0].appendChild(post);

	// } else {
	// 	alert("Make sure all boxes are filled!");
	// }
	});


	var elems = document.getElementsByClassName('post');
	var allElems = [];
	for (var i = 0; i < elems.length; i++) {
  		allElems.push(elems[i]);
	}
});

/* search fuction

var search = document.getElementById('navbar-search-input');

search.addEventListener('input', function() {

	var parent = document.getElementsByClassName('post-container');
	var elems = document.getElementsByClassName('post');

	if (elems.length > allElems.length)
	{
		for( var i = allElems.length; i < elems.length; i++)
		{
			allElems.push(elems[i]);
		}
	}

	for( var i = 0; i < allElems.length; i++)
	{
		parent[0].appendChild(allElems[i]);
	}

	var navbar = document.getElementById('navbar-search-input').value;
	var caption = document.getElementsByClassName('post-caption');
	var author = document.getElementsByClassName('post-attribution');
	var post = document.getElementsByClassName('post');

	var q = post.length;

	for (var i = 0; i < q; i++) {
 	 	if (caption[i].captionContent.includes(navbar) || author[i].captionContent.includes(navbar) ){
	}
	else
	{
		console.log(caption[i].captionContent.includes(navbar) );
		post[i].remove();
		var q = post.length;
		i--;
	}
}

});
*/
