export default {
    name: 'book-filter',
    template: `
    <section class="book-filter">
    <input type="text" @input="setFilter" placeholder="By name" v-model="filterBy.byTitle">
    </section>
    `,
    data() {
        return {
            filterBy: {
                byTitle: '',
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', {...this.filterBy})
            console.log(this.filterBy);
        }
    }
}
