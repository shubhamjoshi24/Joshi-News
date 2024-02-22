// old code

render(); {
    return (
        <div className='container my-3'>
            <h1 className="text-center" style={{ margin: '35px 0px' }}>Joshi News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
            {/* {this.state.Gif && < Spinner />} */}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {this.state.articles.map((element, index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div >
    )
}

// chatgpt code

render(); {
    const { articles } = this.state;

    return (
        <div className='container my-3'>
            <h1 className="text-center" style={{ margin: '35px 0px' }}>Joshi News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
            {/* {this.state.Gif && < Spinner />} */}
            <InfiniteScroll
                dataLength={articles?.length || 0}
                next={this.fetchMoreData}
                hasMore={articles?.length !== this.state.totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles?.map((element, index) => (
                            <div className="col-md-4" key={index}>
                                <NewsItem
                                    title={element.title}
                                    description={element.description}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source?.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
}


