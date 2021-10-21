'use strict';

function Homepage() {
  return (<div>
    <h1>Hello user</h1>
    <a href="/cards">Click here to view cards</a>
    <div>
      <img id="home-img" src="/static/img/balloonicorn.jpg"></img>
    </div>
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));



//A welcome message to the user
//A link to the /cards page
//A nice, large image of Balloonicorn (the image is located at /static/img/balloonicorn.jpg)