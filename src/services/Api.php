<?php
ob_start();
error_reporting(0);
header('Content-Type: application/json');
function currency()
{
    $url = file_get_contents("https://www.tgju.org/currency");
    preg_match_all('#<tr data-market-row="price_(.*?)" (.*?)[\r\n]<th><span class="(.*?)"></span>(.*?)</th>[\r\n]<td class="nf">(.*?)</td>[\r\n]<td class="nf"><span class="(.*?)">(.*?)</span></td>[\r\n]<td>(.*?)</td>[\r\n]<td>(.*?)</td>[\r\n]<td>(.*?)</td>#', $url, $result);

    for($i=0;$i< count($result[6])-1;$i++){
        switch ($result[6][$i]) {
            case "high":
                $change = "high";
                break;
    
            case "low":
                $change = "low";
                break;
    
            default:
                $change = "none";
                break;
        }
        $array = [
            'name' =>  $result[4][$i],
            'id' =>  $result[1][$i],
            'price' =>  $result[5][$i],
            'change' =>  $change,
            'changeRate' =>  $result[7][$i],
            'least' =>  $result[8][$i],
            'highest' =>  $result[9][$i],
            'time' =>  $result[10][$i],
        ];
        $results[] = $array;

    }
    return $results;
}


$res = ['creator' => 'Mahdyar Entezami', 'currency' => currency()];

echo json_encode($res, 128 | 256);
