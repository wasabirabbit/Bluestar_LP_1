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
  		files: ['css/*.css', 'index.html'],
  		tasks: ['cssmin'],
      options: {
      livereload: 1337
    }
  }
}