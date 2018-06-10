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
	var post = document.createElement('article')
	var divAuthor = document.createElement('div')
  var divPhoto = document.createElement('div')
  var divURL = document.createElement('div')
  var divContent = document.createElement('div')
  var iuser    = document.createElement('i')
  var iLikes   = document.createElement('i')
  var authorLink = document.createElement('a')
  /* create author */
  var author = document.createElement('p')
  var a = document.createTextNode(document.getElementById('post-attribution-input').value.trim());
  var aLink = document.getElementById('post-attribution-input').value.trim();
  /* create photo link */
  var img = document.createElement('img');
  var link = document.getElementById('post-photo-input').value.trim();

  /* create photo caption */
  var plikes = document.createElement('p')
	var description = document.createElement('p')
	var caption = document.createTextNode(document.getElementById('photo-caption-input').value)

	if (document.getElementById('post-photo-input').value)
	{
	if (document.getElementById('post-attribution-input').value)
	{
  if (document.getElementById('photo-caption-input').value)

  /* assign author */
	post.classList.add('post');
  divAuthor.classList.add('post-author-content');
  author.classList.add('post-author');
  iuser.classList.add('fas','fa-user-circle');
  authorLink.setAttribute("href", "/instogram/users/" + aLink); 
  /* assign image */
  divPhoto.classList.add('post-photo-caption');
  divURL.classList.add('post-picture');
  img.src = link;
  /* assign image content */
  divContent.classList.add('post-content');
  plikes.classList.add('post-likes');
  iLikes.classList.add('far','fa-heart');
  description.classList.add('post-caption');

 /* store author */
  author.appendChild(iuser);
  authorLink.appendChild(a);
  author.appendChild(authorLink);
  divAuthor.appendChild(author);
 /* store photo */
  divURL.appendChild(img);
  divPhoto.appendChild(divURL);
 /* stor photo caption */
  plikes.appendChild(iLikes);
  description.appendChild(caption);
  divContent.appendChild(description);
  divContent.appendChild(plikes);
  divPhoto.appendChild(divContent);
 /* add to the main post */
	post.appendChild(divAuthor);
  post.appendChild(divPhoto);

	var parent = document.getElementsByClassName('insto-container');

	parent[0].appendChild(post);

	hidden[0].style.display = "none";
	hidden[1].style.display = "none";

} else { alert("fill In the auther box");}
} else { alert("fill In all caption boxes");}
});


var elems = document.getElementsByClassName('post');
var allElems = [];
for (var i = 0; i < elems.length; i++) {
  allElems.push(elems[i]);
}
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