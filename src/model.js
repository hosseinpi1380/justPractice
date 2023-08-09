const state = {
    result: [],
    response: {}
}
const apiCall = async function (ing) {
    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${ing}`);
        const data = await res.json();
        let result = data;
        let { recipes } = data.data
        state.response = recipes.map(el => ({
            id: el.id, title: el.title, publisher: el.publisher, image: el.image_url
        }));
        
        
        
    } catch (err) {
        console.log(err);
        throw err
    }
}
apiCall('pizza');

// const renderSearchItem=function(){
//     document.querySelector('ul').insertAdjacentHTML('afterbegin',markup)
// }



