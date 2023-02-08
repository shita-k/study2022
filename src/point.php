<?php
// ポイント情報管理
    if($_SERVER["REQUEST_METHOD"] != "POST"){
        //POST以外ははじく
        header("HTTP/1.0 404 Not Found");
        return;
    }
    header("Content-Type: text/html; charset=UTF-8");

    // 受け取ったデータを保存
    $lon = $_POST['lon'];
    $lat = $_POST['lat'];
    if (!$lon || !$lat) {
        header("HTTP/1.0 404 Not Found");
        return;
    }
    $arr = [$lon, $lat];
    $str = implode(',', $arr);
    file_put_contents("../tmp/sample.txt", $str.PHP_EOL, FILE_APPEND);
    
    $data = array("result" => true);
    echo json_encode($data);
    exit;

