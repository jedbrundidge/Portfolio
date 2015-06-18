<?php
	include('config.php');
	
	$query = mysqli_query($con, "SELECT doc FROM tbl_docs WHERE id=1");
	$row = mysqli_fetch_array($query);
	$content = $row['doc'];
	header('content-type: application/pdf');
	echo $content;
?>