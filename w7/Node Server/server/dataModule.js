class Post {
    constructor(title, lead){
        this.id = parseInt(Math.random()*100);
        this.title = title;
        this.lead = lead;
    }

}

module.exports = Post;