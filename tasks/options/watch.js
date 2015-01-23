module.exports = {
  options: {
    livereload: true,
  },

scripts: {
    files: ['js/*.js'],
    tasks: ['concat','uglify','gh-pages'],
    options: {
      spawn: false,
      livereload: 1337
    }
  },

  styles: {
  		files: ['css/*.css', 'index.html'],
  		tasks: ['cssmin','gh-pages'],
      options: {
      livereload: 1337
    }
  }
}