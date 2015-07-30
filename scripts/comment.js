/**
 * Created by asus on 2015/7/30.
 */
var Comment=React.createClass({
        render:function(){
            return(
                <div className="Comment">
            <h2 className="commentAuthor">{this.props.author}</h2>
        {this.props.children}
    </div>
);
}
});
var CommentForm=React.createClass({
    render:function(){
        return(
            <form>
            <input type="text" placeholder="you name" />
        <input type="text" placeholder="say something..." />
        <input type="submit" value="submit"/>
        </form>

        );
    }
});
var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});
var CommentBox=React.createClass({
    render:function(){
        console.log(this.props.data);
        return(
            <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm/>
        </div>
        );

    }
});
React.render(
<CommentBox data={datax}/>,document.getElementById("content")
);

