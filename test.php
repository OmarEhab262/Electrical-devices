<?php
$firstName=$_POST['username']
$password=$_POST['password']
$conn =new mysqli('localhost','root','','test')
if($conn->connect_error){
    die('Connection Failed  :'.$conn->connect_error);

}else{
    $stmt =$conn->prepare("insert into registration(firstName ,password)
    values(?,?)")
    $stmt->bind_param("si",$firstName ,$password);
    $stmt->execute();
    echo "regisration Succesfully....."
    $stmt->close();
    $conn->close();

}?>