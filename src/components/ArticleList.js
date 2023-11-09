import Article from "./ Article "
function ArticleList(props){
    const {post} = props
    return(
        <main>
            {post.map((article)=>{
                return(<Article key={article.id} {...post}/>)
            })
            }
        </main>
    )
}
export default ArticleList