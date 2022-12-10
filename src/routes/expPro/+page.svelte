<script>
	import Header from '$lib/components/Header.svelte';

  
  
  import { onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient";

  let table = null;
  let errorMessage = null;

  onMount(async () => {
    let { data, error } = await supabase.from("Experience Pro").select("*");
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
  <p class="title"> Mon expérience professionnelle </p>
  <div class="line"></div>
</div>

<body> 
<section>
  {#if table}
    {#each table as table}
      <div class = paragraphe> 
      <div class = date> {table.date} </div> 
      <div class = nom> {table.nom} </div>
      <div class = lieu> {table.lieu} </div> 
      <div class = fonction> {table.Fonction} </div>
      <p> </p>

      </div>
          
    {/each}
  {/if}     
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
    font-weight: bold;
    font-family: Calibri light;
  }

  .nom{
    font-weight: bold;
    font-family: Calibri light;
  }

  .lieu{
    font-style: italic;
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

</style>