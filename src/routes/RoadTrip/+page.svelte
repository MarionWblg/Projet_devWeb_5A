<script>
	import Header from '$lib/components/Header.svelte';

  
  import { onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient";

  let table = null;
  let errorMessage = null;

  onMount(async () => {
    let { data, error } = await supabase.from("Roadtrip").select("*");
    if (error) {
      console.log("error")
      return (errorMessage = error.message);
    }
    table = data;
    console.log("data : " + data);
  });

</script>

<Header />

<div id="titre">
  <p class="title"> MonRoad Trip </p>
  <div class="line"></div>
</div>

<body> 
<section>
  {#if table}
    {#each table as table}
      <div class = paragraphe> 
      <div class = pays> {table.pays} </div> 
      <div class = date> {table.dates} </div>
      <p> </p>
      </div>
      <img id="photo" src = "https://cdn-icons-png.flaticon.com/512/2985/2985150.png" class = paragraphe >
    {/each}
  {/if}    
  <div class = paragraphe> 
    <div class= pays> Retour en france </div> 
  </div>
</section>
</body>


<style>
  #title {
    font-family: "Lobster"
  }

  .title {
    margin: 1;
    background-image: url()
  }

  .line {
    background-color: #FEE347;
    width: 100vw;
    height: 1px;
  }
  .date{
    color: #FEE347;
    font-family: Calibri light;
  }

  .pays{
    font-weight: bold;
    font-family: Calibri light;
  }

  .paragraphe {
    padding: 10px;
    box-shadow: 0px 3px 67px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    margin: 20px 0px;
    text-align: center;
  }

.center {
    display: bock;
    margin-left: auto;
    margin-right: auto;
  }


img {
  max-width : 2%;
}

</style>