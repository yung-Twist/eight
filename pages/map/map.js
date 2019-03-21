Page({
  data: {
    markers: [{
      iconPath: '../../images/map/site.png',
      id: 0,
      latitude: 24.502009,
      longitude: 117.889781,
      width: 20,
      height: 20
    }],
    polyline: [{
      points: [{
        latitude: 24.459576,
        longitude: 118.076449,
      }, {
          latitude: 24.459576,
          longitude: 118.076449,
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../images/map/site.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})