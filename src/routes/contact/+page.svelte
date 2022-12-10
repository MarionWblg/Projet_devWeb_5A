<Header />

<script>
	import Header from '$lib/components/Header.svelte';
  import { onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient";



 let prenompropose = undefined
 let nompropose = undefined
 let emailpropose = undefined
 let messagepropose= undefined


let contactpropose = []
const handleClick = async () => {

  
	const {data, error} = await supabase
		.from('MeContacter')
		.insert([
			{prenom: prenompropose, nom: nompropose, email: emailpropose, message: messagepropose}
		])
        console.log("test")

}
</script>

<div id="titre">
  <p class="title"> Laissez-moi vous contacter </p>
  <div class="line"></div>
</div>

<div class="formulaire">

  <label for="fname"> Prénom:</label><br>
  <input type="text" id="fname" name="fname" bind:value={prenompropose}><br>
  <p> </p>
  <label for="lname">Nom:</label><br>
  <input type="text" id="lname" name="lname" bind:value={nompropose}><br>
  <p> </p>
  <label for="fname">E-mail:</label><br>
  <input type="text" id="fname" name="fname" bind:value={emailpropose}><br>
  <p> </p>
  <label for="fname">Message:</label><br>
  <input type="text" id="fname" name="fname" bind:value={messagepropose}><br>

<p> </p>


<button on:click={handleClick} mat-raised-button> Envoyer </button>

</div>

<div id="titre">
  <p class="title"></p>
  <div class="line"></div>
</div>



<style>


  .title {
    margin: 1;
    background-image: url()
  }
  .line {
    background-color: #FEE347;
    width: 100vw;
    height: 1px;
  }
  
  label {
  color: #FEE347;
  font-size: 1.3em;
  font-weight: bold;
  font-family: Calibri light;
  padding: 20 px
  }

.formulaire {
    padding: 20px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 1px;
    margin: 1px 0px;
    text-align: center;
  }

.center {
    display: bock;
    margin-left: auto;
    margin-right: auto;
  }


</style>