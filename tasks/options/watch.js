module.exports = {
  options: {
    livereload: true,
  },

scripts: {
    files: ['js/*.js'],
    tasks: ['concat','uglify'],
    options: {
      spawn: false,
      livereload: 1337
    }
  },

  styles: {
  		files: ['css/*.css'],
  		tasks: ['cssmin','sftp:css'],
      options: {
      livereload: 1337
    }
  },

   html: {
      files: ['index.html'],
      tasks: ['sftp:index'],
      options: {
      livereload: 1337
    }
  }
}