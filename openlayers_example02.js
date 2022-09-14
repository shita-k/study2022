var map;
var vectorLayer;
var vectorSource;
var markerLayer;
var coordinates;

window.onload = function(){
  map = createMap();

  // ベクターレイヤーの追加
  vectorSource = new ol.source.Vector();
  vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
      image:  new ol.style.Circle({
          'radius' : 7,
          'stroke' : new ol.style.Stroke({
              'color' : 'rgba(255, 255, 255, 1)',
              'width' : 2,
          }),
          'fill' : new ol.style.Fill({
              'color' : 'rgba(0, 120, 240, 1)',
          })
      }),
    })
  });
  map.addLayer(vectorLayer);

  //クリックイベント
  map.on('click', function(e) {
    // ポイントオブジェクトを作成
    var feature = new ol.Feature({
        geometry: new ol.geom.Point(e.coordinate)
    });

    // ポイントをいったんクリアしてから追加する
    vectorSource.clear();
    vectorSource.addFeature(feature);
  });

}
function createMap() {
  return new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([139.70325, 35.68544]),
      zoom: 15
    })
  });

}
