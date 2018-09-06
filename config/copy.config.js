module.exports = {
  copyAssets: {
      src: ['{{SRC}}/assets/**/*'],
      dest: '{{WWW}}/assets'
  },
  copyIndexContent: {
      src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
      dest: '{{WWW}}'
  },
  copyFonts: {
      src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
      dest: '{{WWW}}/assets/fonts'
  },
  copyPolyfills: {
      src: ['{{ROOT}}/node_modules/ionic-angular/polyfills/polyfills.js'],
      dest: '{{BUILD}}'
  },
  copySwToolbox: {
      src: ['{{ROOT}}/node_modules/sw-toolbox/sw-toolbox.js'],
      dest: '{{BUILD}}'
  },
  copyLeafletCss: {
      src: './node_modules/leaflet/dist/leaflet.css',
      dest: '{{BUILD}}'
  },
  copyLeafletAwesomeMarkersCss: {
      src: './node_modules/leaflet.awesome-markers/dist/leaflet.awesome-markers.css',
      dest: '{{BUILD}}'
  },
  copyLeafletMarkersImgs: {
      src: './node_modules/leaflet.awesome-markers/dist/images/**',
      dest: '{{BUILD}}/images'
  },
  copyLeafletImgs: {
      src: './node_modules/leaflet/dist/images/**',
      dest: '{{BUILD}}/images'
  },
  copyFontawesomeFonts: {
      src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
      dest: '{{WWW}}/assets/fonts'
  },
  copyFontawesomeCss: {
      src: ['{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css'],
      dest: '{{BUILD}}'
  }
}