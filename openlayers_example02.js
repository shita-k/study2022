
//import Map from 'ol/Map';
//import View from 'ol/View';
//import TileLayer from 'ol/layer/Tile';
//import XYZ from 'ol/source/XYZ';
//import { fromLonLat, transform } from 'ol/proj';

// MIERUNE MONO読み込み
//const map = new ol.Map ({
//    target: 'map',
//    layers: [
//        new ol.layer.Tile({
//            source: new ol.source.XYZ({
//                url: 'https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png',
//                attributions: 'Maptiles by <a href="http://mierune.co.jp" target="_blank">MIERUNE</a>, under CC BY. Data by <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors, under ODbL.',
//                attributionsCollapsible: false,
//                tileSize: [256, 256],
//                minZoom: 0,
//                maxZoom: 18
//            })
//        })
//    ],
//    view: new ol.View ({
//        center: ol.proj.fromLonLat([139.767, 35.681]),
//        zoom: 11,
//    })
//});
var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
//          center: ol.proj.fromLonLat([37.41, 8.82]),
          center: ol.proj.fromLonLat([139.70349, 35.68643]),
          zoom: 15
        })
      });

//クリックイベント
map.on('click', function(e) {
    //クリック位置経緯度取得
    const lonlat = ol.proj.transform(e.coordinate, 'EPSG:3857', 'EPSG:4326');
    //経緯度表示
    alert("lat: " + lonlat[1] + ", lon: " + lonlat[0]);
});
