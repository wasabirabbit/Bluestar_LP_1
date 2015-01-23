module.exports = {
  options: {
    livereload: true,
  },
scripts: {
    files: ['js/*.js'],
    tasks: ['concat','uglify'],
    options: {
      spawn: false,
    }
  },

  devWatch: {
  		files: ['js/*.js', 'css/*.css', 'index.html'],
  		tasks: ['gh-pages']
  }
}