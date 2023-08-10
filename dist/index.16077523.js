const e={response:{}},a=async function(a){try{let i=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${a}`),t=await i.json(),{recipes:s}=t.data;e.response=s.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw console.log(e),e}};a("pizza");
//# sourceMappingURL=index.16077523.js.map
