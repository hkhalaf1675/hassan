<?php
	require 'connection.php';
	
	//-------------------------------------------- insert into load
	if(isset($_POST["myjaxa"])){
		$lddata=json_decode($_POST["myjaxa"][0],true);
		for($i=0; $i<count($lddata); $i++){
			$ld_target=$lddata[$i]["target"];
			$ld_type=$lddata[$i]["type"];
			$ld_date=$lddata[$i]["time"];
			$q="INSERT into eventdata values('$ld_target','$ld_type','$ld_date')";
		}
		if(mysqli_query($conn,$q))
			echo "Loading Saved!";
		else
			echo "Loading not saved!";
	}

	