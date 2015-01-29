module.exports = {
  css:{

  	   files:{"./": "output.min.css"} 
  },

  index:{

       files:{"./": "index.html"} 
  },
    options: {
      host: '<%= sshlogininfo.host %>',
      username: '<%= sshlogininfo.username %>',
      password: '<%= sshlogininfo.password %>',
      createDirectories: true,
      showProgress: true,
      path:'/'
    }
}



 