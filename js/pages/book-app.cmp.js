import { bookService } from '../services/book-service.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'
import bookDetails from '../pages/book-details.cmp.js'

export default {
    name: 'book-app',
    template: `
        <section class="book-app">
            <book-filter @filtered="setFilter" />
            <book-list :books="booksToShow" @selected="selectBook"/>
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null"></book-details>  -->
        </section>
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null
        }
    },
    methods: {
        loadBooks() {
            bookService.query()
                .then(books => this.books = books)
        },
        selectBook(book) {
            this.selectedBook = book
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            const searchStr = (this.filterBy.byTitle) ? this.filterBy.byTitle.toLowerCase() : ''
            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr)
            })
            return booksToShow
        }
    },
    created() {
        this.loadBooks()
    },
    components: {
        bookFilter,
        bookList,
        bookDetails,
    }
}
