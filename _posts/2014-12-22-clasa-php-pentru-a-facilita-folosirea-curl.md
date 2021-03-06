---
id: 327
title: Clasa PHP pentru a facilita folosirea cURL
date: 2014-12-22T19:48:17+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=327
permalink: /clasa-php-pentru-a-facilita-folosirea-curl/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Programming
tags:
  - bot login
  - clasa curl
  - clasa php curl
  - logare php curl
  - php curl class
  - simulare login php
---
Folosindu-ma destul de des de libraria cURL din PHP, am decis sa (imi) scriu o clasa care sa ma ajute de fiecare data cand ma joc cu aceasta.

Stiu ca mai exista asemenea clase, dar nu mi-a placut cum sunt scrise, nu intelegeam codul, in plus, asa imi mai dezmortesc conceptele OOP.

Am numit clasa generic, SimplCurl. Aceasta are implementate cateva metode care ajuta la simularea unui request HTTP, fie el GET sau POST. Puteti seta foarte usor refererul, cookies-urile – din fisier sau din apelul metodei, user-agent-ul, in plus putand executa foarte usor un HTTP-POST, doar prin completarea campurilor necesare.

Pe viitor am in vedere dezvoltarea acesteia si cu restul optiunilor, care sunt optionale, depinzand de situatie.

Proiectul il puteti gasi si pe <a title="php curl class" href="https://github.com/s1lviu/SimpleCurl" target="_blank">GitHub</a>. unde puteti de asemenea contribui la dezvoltarea lui. 😀

<pre class="brush: php; title: ; notranslate" title=""><?php
//Simple Curl
//Author: Silviu Bogdan Stroe
//Contact: silviu[at]silviu-s.com - www.silviu-s.com
	class SimpleCurl
	{
		public function url($url)
		{
	      $this->url = $url;
		}
		public function referer($ref)
		{
			$this->referer = $ref;
		}
	    
	    public $timeout = 0;
		public function timeout($timeout)
		{
			$this->timeout = $timeout;
		}
	    
	     public $val = false;
		public function cookies($val)
		{
	       $this->cookies = $val;
		}
	   
	     
	    public $followlocation=true;
	   
		public function followredirect($followlocation)
		{
			$this->followlocation = $followlocation;
		}
		public function useragent($useragent)
		{
			$this->useragent = $useragent;
		}
	    
	    public $fields = null;
	    public function post($fields)
	    {
	    	$this->fields = http_build_query($fields);
	    }
   
        public $mycookies = null;
	    public function setcookies($mycookies)
	    {
            $this->mycookies = $mycookies;
	    }
	    public $headers = null;
	    public function setheaders($headers)
	    {
            $this->headers = $headers;
	    }
	    public function getdata()
	    {
	    $ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $this->url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $this->timeout);
		curl_setopt($ch, CURLOPT_REFERER, $this->referer);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, $this->followlocation);
		curl_setopt($ch, CURLOPT_USERAGENT, $this->useragent);
		//check if you want the coookies enabled
		if($this->cookies == true)
		{
	    curl_setopt($ch, CURLOPT_COOKIEFILE, "cookies.txt");
	    curl_setopt($ch, CURLOPT_COOKIEJAR, "cookies.txt");
	    }
	    //check if you want to post some data
	    if($this->fields!=null)
	    {
	    curl_setopt($ch, CURLOPT_POST, true);
	    curl_setopt($ch, CURLOPT_POSTFIELDS, $this->fields);
	    }
	    //check if you set some headers or cookies
	    if($this->headers!=null)
	    curl_setopt($ch, CURLOPT_HTTPHEADER, $this->headers);
	    if($this->mycookies!=null)
        curl_setopt($ch, CURLOPT_COOKIE, $this->mycookies);
		$data = curl_exec($ch);
		curl_close($ch);
		return $data;
	    }
	}
	?>
</pre>

<pre class="brush: php; title: ; notranslate" title=""><?php
//Simple Curl
//Author: Silviu Bogdan Stroe
//Contact: silviu[at]silviu-s.com - www.silviu-s.com
include('curl.php');
$obj = new SimpleCurl;
	$obj->url("https://www.whatismybrowser.com/developers/what-http-headers-is-my-browser-sending"); //set url
	$obj->referer("http://silviu-s.com/"); //set referer
	$obj->cookies(true);  //disable or enable cookies from file
	$obj->followredirect(true);  //follow or not HTTP redirects
	$obj->timeout(10); //connection timeout
    $obj->setcookies("Cookie: cookie1=cookie; cookie2 = anothercookie"); //set your own cookies
    $obj->setheaders(array("X: Y")); //set your own headers in netscape format
	$obj->useragent('User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:34.0) Gecko/20100101 Firefox/34.0'); //set your own user-agent
	//$obj->post(array('field1' => 'value1', 'field2'=> 'value2')); //example for make HTTP-POST for fields or files. 
	echo $obj->getdata(); //get result
?>
</pre>
