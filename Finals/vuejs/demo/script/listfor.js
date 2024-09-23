const ListRendering = {
    data() {
        return {
            showList: true,
            todos: [
                { text: 'Clean the House' },
                { text: 'Prepare Breakfast' },
                { text: 'Attend WCSERVER class' }
            ]
        }
    },
    methods: {
        toggleShowList() {
            this.showList = !this.showList
        }
    }
};

Vue.createApp(ListRendering).mount('#list-rendering');