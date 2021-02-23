
export default {
    name: 'book-header',
    template: `
   <header class="app-header">
       <div class="logo">
           <h1>MissBooks</h1>
       </div>
       <nav>
           <router-link active-class="active-link" to="/" exact>Home</router-link> |
           <router-link to="/book">books</router-link> |
           <router-link to="/about">About</router-link>

       </nav>
    </header>
    `,

}
