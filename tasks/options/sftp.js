module.exports = {
  upload:{

  	   files:{"./": "output.min.css"} 
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



 