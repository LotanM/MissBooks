export default {
    name: 'book-preview',
    props: ['book'],
    template: `
    <section class="book-preview">
        <h1>{{book.title}}</h1>
        <img class="prev-img" :src="book.thumbnail" alt="">
    </section>
    `,
}

