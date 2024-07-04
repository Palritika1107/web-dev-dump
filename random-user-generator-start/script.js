
function fetchUser(){
    fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => {
        displayUser(data.results[0]);
    });

};

function displayUser(user){

    let getUser = document.querySelector('#user');

    getUser.innerHTML = `
    <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="https://randomuser.me/api/portraits/women/45.jpg"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> (555) 555-5555
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> Boston MA
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> 30</p>
      </div>
    </div>
  </div>
    `;

    console.log(user.gender);

    if(user.gender === 'female'){
        document.body.style.backgroundColor = 'purple';
    }else {
        document.body.style.backgroundColor = 'blue';
    }
};


document.querySelector('button').addEventListener('click',fetchUser);
