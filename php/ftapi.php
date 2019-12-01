<?php
      $url = "http://api.ft.com/content/search/v1";
      $search_term = $_POST['search_term'];
      
      $data = '{
        "queryString": "'.$search_term.'",
        "resultContext" : {
          "aspects" :["title","lifecycle","location","summary","editorial"]
        }
      }';
      $headers = array(
        "X-Api-Key: 59cbaf20e3e06d3565778e7bb49fb7eeacf0450793e60e2afbfd79ad",
        "Content-Type: application/json"
      );

      $ci = curl_init($url);
      curl_setopt($ci, CURLOPT_CUSTOMREQUEST, "POST");
      curl_setopt($ci, CURLOPT_POSTFIELDS, $data);
      curl_setopt($ci, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ci, CURLOPT_HTTPHEADER, $headers);

      $json = curl_exec($ci);
      
      file_put_contents('ft.json', $json);

      echo $json;
?>