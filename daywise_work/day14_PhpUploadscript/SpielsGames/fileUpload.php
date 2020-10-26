<?php

$dir = "./folder/";
$timestamp = time();
$filename = $dir.$timestamp.basename($_FILES['Upload']['name']);

var_dump($_FILES);

echo "<br><br>";

if (move_uploaded_file($_FILES['Upload']['tmp_name'], $filename)){
    echo "<p>File was uploaded --> ".$_FILES['Upload']['name'];
} else {
    echo "Upload failed".$_FILES['Upload']['name'];
}

echo "<p>Information about file from $ FILE array</p>";
echo "File Name: ".$_FILES['Upload']['name']."<br>";
echo "File Type: ".$_FILES['Upload']['type']."<br>";
echo "File Size: ".$_FILES['Upload']['size']."kB<br>";
?>