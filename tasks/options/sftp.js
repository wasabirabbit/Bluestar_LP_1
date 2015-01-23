module.exports = {
  upload:{

  	   files:{"./": "**/**"} 
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



 