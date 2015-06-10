<?php include("PHP/config.php"); ?>


<!DOCTYPE html>
<html>

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Untitled 1</title>
</head>

<body>
<?php
	$query = mysqli_query($con, "SELECT doc FROM tbl_docs WHERE id = 1");
	$row = mysqli_fetch_array($query);
	$content = $row['doc'];
	header('content-type: application/pdf');
?>
<embed type="application/pdf" src="<?php echo $content; ?>">
</body>

</html>
