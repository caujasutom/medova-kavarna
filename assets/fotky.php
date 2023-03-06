<?php
    $name = $_GET['name'];
    $directory = "fotky/$name";
    $images = glob($directory . "/*.webp");

    $imageList = array();
    foreach ($images as $image) {
        array_push($imageList, $image);
    }

    header('Content-Type: application/json');
    echo json_encode($imageList);
?>
