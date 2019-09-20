var randomApp = new Vue ({
  el: '#userApp',
  data: {
    users: {
      name:"",
      dob:"",
      nat:"",
      age:"",
      picture:"",
      phone:"",
      email:""
    }
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {randomApp.users = json.results[0];})
    }
  },
  created(){
    this.fetchUser()
  },
});
