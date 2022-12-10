<script>
	import Header from '$lib/components/HeaderHome.svelte';
</script>
<Header />

  <meta charset="UTF-8" />

    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
		

<div id="conteneur">
  <p>  <a class="link" href="/education"> Education </a> </p>
  <p> <a class="link" href="/expPro"> Expérience Professionelle </a> </p>
</div>

<div id="conteneur2">
  <p> <a class="link" href="/RoadTrip"> Mon RoadTrip </a> </p>  
	<p> <a class="link" href="/contact"> Contact </a> </p>
</div>

<!-- mettre un espace, puis une photo de moi, puis un espace encore avant de mettre le paragraphe descriptif -->



  <style>
    .link {
      color: black;
      text-decoration: none;
    }
    #conteneur {
       -webkit-columns: 4 auto;
       -moz-columns: 4 auto;
       columns: 2 auto;
    }
    #conteneur p {
       margin: 4;
       padding: 30px;
       background-color:#FEE347;
			  font-family: "Lobster";
    }
    #conteneur2 {
       -webkit-columns: 4 auto;
       -moz-columns: 4 auto;
       columns: 2 auto;
    }
    #conteneur2 p {
       margin: 4;
       padding: 30px;
       background-color:#FEE347;
			  font-family: "Lobster";
            }
  </style>
