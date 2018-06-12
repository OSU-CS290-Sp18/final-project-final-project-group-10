/*client side java
*/
/* when button is clicked */

var hidden = document.getElementsByClassName('hidden');
var button = document.getElementById('create-post-button');
button.addEventListener('click', callOnce);

function callOnce() {
	console.log('Button clicked!');
	hidden[0].style.display = "block";
	hidden[1].style.display = "block";

  document.getElementById('post-attribution-input').value = "";
  document.getElementById('post-photo-input').value = "";
	document.getElementById('photo-caption-input').value = "";
}
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
  // var postTemplate = Handlebars.templates.postTemplate;
	var aLink = document.getElementById('post-attribution-input').value.trim();
	var link = document.getElementById('post-photo-input').value.trim();
  var caption = document.getElementById('photo-caption-input').value.trim();

	if(!aLink || !link || !caption){
		alert("Make sure to fill in all fields!");
	} else {
		var request = new XMLHttpRequest();
		var url = "/addPhoto";
		request.open("POST",url);

		var requestBody = JSON.stringify({
			Author: aLink,
			Picture: link,
			Likes: '2 likes',
			Caption: caption
		});

		request.addEventListener('load', function(event){
			if (event.target.status === 200){
				var postTemplate = Handlebars.templates.postTemplate;
				var postHTML = postTemplate({
					Author: aLink,
					Picture: link,
					Likes: '2 likes',
					Caption: caption
				});
				var postElem = document.querySelector('main.post-container');
				postElem.insertAdjacentHTML('beforeend', postHTML);
			} else {
				alert("Error storing photo: " + event.target.response);
			}
		});

		request.setRequestHeader('Content-Type', 'application/json');
		request.send(requestBody);

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

/* names like stat will need to be changed
function likePost(stat){
  var likeCount = parseInt(stat.getElementByClassName('stat')[0].textContent);
  likeCount += 1;
  stat.getElementByClassName('stat')[0].textContent = likeCount;

  /* call function to add red class to the heart
}
*/

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
