<?php
		include('PHP/config.php');
		
		$query = mysqli_query($con, "SELECT doc FROM tbl_docs WHERE id = 1");
		while($row = mysqli_fetch_assoc($query)){
			$content = $row["doc"];
		}
		
        header("content-type: application/pdf");
        echo $content;	
 ?>
