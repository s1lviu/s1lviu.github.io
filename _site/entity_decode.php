<?php
$files1 = scandir(".");
foreach ($files1 as $f)
{
$content = file_get_contents($f);
$b = html_entity_decode($content);
file_put_contents($f, $b);
}


?>