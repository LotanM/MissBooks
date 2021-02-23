import bookPreview from './book-preview.cmp.js'

export default {
    name: 'book-header',
    props: ['books'],
    template: `
    <ul class="book-list">
        <li v-for="book in books" :key="book.id" class="book-preview-container" >
            <book-preview :book="book" @click.native="logId(book.id)" />
            <div class="btns-container">
                <router-link :to="'/book/'+book.id">
                      <button @click="select(book)">Details</button>
                </router-link>
            </div>
        </li>
    </ul>
    `,
    methods: {
        select(book) {
            this.$emit('selected', book)
        },
        logId(bookId) {
            console.log('Id is', bookId);
        }
    },
    components: {
        bookPreview
    },
}
