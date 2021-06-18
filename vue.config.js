module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/lineageword_vue/' // lineageword_vue 為 repo 名稱
      : '/'
  }