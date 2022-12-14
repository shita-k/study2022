var map;
var vectorLayer;
var vectorSource;
var markerLayer;
var coordinates;

window.onload = function(){
  lon = 139.70338433807126;
  lat = 35.685213788374384;  
  coordinate = [lon, lat];
  map = createMap(coordinate);

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
  setPoint(coordinate);

  //クリックイベント
  map.on('click', function(e) {
    setPoint(ol.proj.transform(e.coordinate, 'EPSG:3857', 'EPSG:4326'));
  });

  $('#button_mycompany').on('click', function(e) {
    setPoint(coordinate);
  });

}

function createMap(coordinate) {
  return new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat(coordinate),
      zoom: 18
    })
  });

}
function setPoint(coordinate) {
    // ポイントオブジェクトを作成
    var feature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(coordinate))
    });

    // ポイントをいったんクリアしてから追加する
    vectorSource.clear();
    vectorSource.addFeature(feature);

    //クリック位置経緯度取得
    const lonlat = ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
    //経緯度表示    
    $('#ctrl_lon').val(coordinate[0]);
    $('#ctrl_lat').val(coordinate[1]);

}