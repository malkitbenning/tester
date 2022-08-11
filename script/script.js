var images, arrayImage;


images = 
['https://raw.githubusercontent.com/malkitbenning/personal-wk3/dc83b8e046304cf85d2591402cec5aa8f0989eef/images/dancer1.jpg', 
'https://raw.githubusercontent.com/malkitbenning/personal-wk3/dc83b8e046304cf85d2591402cec5aa8f0989eef/images/dancer2.jpg', 
'https://raw.githubusercontent.com/malkitbenning/personal-wk3/dc83b8e046304cf85d2591402cec5aa8f0989eef/images/dancer3.jpg'];
let element_showing_image = document.getElementById('showing-image');
arrayImage = images.shift();
element_showing_image.setAttribute("src", arrayImage);
images.push(arrayImage);


document.getElementById('next-btn').addEventListener('click', (event) => {
  let element_showing_image2 = document.getElementById('showing-image');
  arrayImage = images.shift();
  element_showing_image2.setAttribute("src", arrayImage);
  images.push(arrayImage);

});

document.getElementById('previous-btn').addEventListener('click', (event) => {
  let element_showing_image3 = document.getElementById('showing-image');
  arrayImage = images.shift();
  element_showing_image3.setAttribute("src", arrayImage);
  images.push(arrayImage);

});

var comments, comment, newComment;

// Describe this function...
function buildCommentsList() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  comments.forEach((comment) => {
    let element_comments_list = document.getElementById('comments_list');
    let new_li = document.createElement('li');
    new_li.innerText = comment;

    element_comments_list.appendChild(new_li);
  });
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


comments = ['Good use of simple colour pallette (bob smith) ', 'action caught well in mid air (lorna)', 'dancer is very good (john brown)', 'simple background (tony)', 'not too bright (sandi)'];
buildCommentsList();


document.getElementById('comment_sub').addEventListener('click', (event) => {
  comments.pop();
  let element_ta_comment = document.getElementById('ta_comment');
  newComment = getNumberOrString(document.getElementById('ta_comment').value);
  comments.unshift(newComment);
  let element_comments_list2 = document.getElementById('comments_list');
  element_comments_list2.replaceChildren();
  buildCommentsList();

});