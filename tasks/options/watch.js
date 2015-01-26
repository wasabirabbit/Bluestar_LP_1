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
  		tasks: ['cssmin'],
      options: {
      livereload: 1337
    }
  },

   html: {
      files: ['index.html'],
      options: {
      livereload: 1337
    }
  }
}