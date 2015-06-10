<?php
	$hostname_db = "mysql.seis752.com";
	$database_db = "seis752jed_db";
	$username_db = "seis752jed";
	$password_db = "LddnXSyhDX";
	 
	$con = mysqli_connect($hostname_db,$username_db,$password_db); 
	  if (!$con)
	  {
	    die('Could not connect: ' . mysql_error());
	  }
		  
	$db = mysqli_select_db($con, $database_db) or die("couldnt find");

?>
