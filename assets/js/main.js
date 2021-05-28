const root = new Vue({
    el:"#root",

    data: {
        albums:[],
    },

    methods:{},

    mounted(){
        axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(response =>{
            for (let i = 0; i < 10; i ++){
                console.log(response);
                this.albums.push(response.data.response[i])
                console.log(this.albums);
            }
        })
    }
})