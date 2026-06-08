<?php
header("Access-Control-Allow-Origin: *");
include 'koneksi.php';

$data = json_decode(file_get_contents("php://input"), true);

foreach ($data as $item) {
    $nama = $item['name'];
    $harga = $item['price'];

    mysqli_query($conn, "INSERT INTO pesanan (nama_menu, harga) VALUES ('$nama', '$harga')");
}

echo json_encode(["status" => "success"]);
?>