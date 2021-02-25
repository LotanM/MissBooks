
export default {
    name: 'review-add',
    template: `
    <section class="review-add">
        <h1>Reviews</h1>
        <form action="">
            <label for="">Name:</label>
            <input type="text">
            <textarea @input="" placeholder="Add review" cols="30" rows="4"></textarea>
            <button>submit</button>
            <div v-for="input in 5" class="rate">
                <input type="radio" id="star-" name="rate" value="input" />
                <label for="star5">5 stars</label>
                <!-- <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1">1 star</label> -->
            </div>
        </form>
    </section>
    `,
    Data(){

    },
}