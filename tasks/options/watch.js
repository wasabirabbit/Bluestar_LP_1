module.exports = {
  options: {
    livereload: true,
  },
scripts: {
    files: ['js/*.js'],
    tasks: ['concat','uglify','gh-pages'],
    options: {
      spawn: false,
    }
  },

  styles: {
  		files: ['css/*.css', 'index.html'],
  		tasks: ['cssmin','gh-pages']
  }
}