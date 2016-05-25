<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "result.agency/lead_add");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $_POST);

curl_exec($ch);
curl_close($ch);
