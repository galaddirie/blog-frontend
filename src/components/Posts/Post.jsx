import "./Post.css"
import React, { Component } from 'react'

import { Container, Row, Col, Card, CardImg, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";


Card.Tag = (prop) => {
    const tag = prop.data
    return (
        <Link to={`${/tag/ + tag.attributes.value}`} >
            <div className="badge bg-gradient rounded-pill mb-2 me-2" style={{ 'backgroundColor': '#FF2867', }}>{tag.attributes.name}</div>
        </Link>
    )
}

function Author({ date }) {
    var d = new Date(date)

    return (
        <div className="d-flex align-items-center">
            <Link to={`/user/galad`}><img className="rounded-circle me-3" src={`/img/naruto.jpg`} alt="user icon" width={40} height={40} /></Link>
            <div className="small">
                <Link to={`/user/galad`}><div className="fw-bold">Galad</div></Link>
                <div className="text-muted">{d.toDateString()}</div>
            </div>
        </div>
    )
}

function FeaturedPostCard(props) {
    var post = props.data
    console.log(post)
    return (
        <Col lg={4} className="mb-5 d-block">
            <Card className="h-100 shadow border-0 post-card" >
                <Link to={`/post/${post.slug}`}>
                    <div className="featured-card-img-container">
                        <CardImg className="card-img-top" src={`${post.cover.data.attributes.url}`} alt="post cover picture" />
                    </div>

                </Link>
                <Card.Body className="p-4">
                    <div className='tag-container'>
                        {post.tags.data.map((tag) => {
                            return <Card.Tag key={tag.attributes.value} data={tag} />
                        })}
                    </div>
                    <div>
                        {/* <a className="text-decoration-none link-dark stretched-link" href="#!"></a> */}
                        <Link className="link-dark text-decoration-none" to={`/post/${post.slug}`}><h5 className="card-title mb-3 ">{post.title}</h5></Link>
                    </div>

                    <p className="card-text mb-0">
                        {post.blurb}
                        <Link to={`/post/${post.slug}`} className=" text-decoration-none ms-3">
                            Read more
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </p>

                </Card.Body>

                <Card.Footer className="p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                        <Author date={post.createdAt} />

                    </div>
                </Card.Footer>
            </Card>
        </Col >
    )
}
function FeaturePostLarge(props) {
    var post = props.data.article.data.attributes
    return (
        <Card className="border-0 shadow rounded-3 overflow-hidden">
            <Card.Body className="p-0">
                <Row className="gx-0">
                    <Col lg={6} xl={5} className="py-lg-5">
                        <div className="p-4 p-md-5">
                            {post.tags.data.map((tag) => {
                                return <Card.Tag key={tag.attributes.value} data={tag} />
                            })}
                            <div>
                                <Link to={`/post/${post.slug}`} className="h2 fw-bolder text-decoration-none text-dark">{post.title}</Link>
                            </div>
                            <div>{post.blurb}</div>
                            <Link className="text-decoration-none" to={`/post/${post.slug}`}>
                                Read more
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6} xl={7}>
                        <Link to={`/post/${post.slug}`}>
                            {/* ${props.data.attributes.article.data.attributes.cover.data.attributes.url} */}
                            <div className="bg-featured-blog" style={{ backgroundImage: `url(${post.cover.data.attributes.url} )` }}></div>
                        </Link>
                    </Col>
                </Row>
            </Card.Body>
        </Card>

    )
}
function PostCardOld(props) {

    return (
        <>
            <Card className="border-1 shadow" style={{ overflow: 'hidden' }}>


                <Row className="post-preview">

                    <Col aria-modal={2} className="img-hover text-white px-lg-0">
                        <img src={'http://localhost:1337' + props.data.cover.data.attributes.url} alt="" />
                        <div className="hover-overlay"></div>
                    </Col>
                    <Col lg={9} className="">
                        <Card.Body>
                            <div className='tag-container'>
                                {props.data.tags.data.map((tag) => {
                                    return <Card.Tag key={tag.attributes.value} data={tag} />
                                })}

                            </div>
                            <Link to={`/post/${props.data.slug}`} className="link-dark text-decoration-none">
                                <h3 className="post-title">{props.data.title}</h3>
                            </Link>

                            <div>
                                {props.data.blurb}

                            </div>
                            <div className="post-meta mt-2">
                                <Author date={props.data.createdAt} />

                            </div>

                        </Card.Body>

                    </Col>



                </Row>

            </Card>
            <hr className="my-4" />
        </>


    )
}
function PostCard(props) {
    return (
        <div className="blog-card my-4">
            <div className="meta">
                <Link className="text-decoration-none" to={`/post/${props.data.slug}`}>
                    <div className="photo" style={{ backgroundImage: `url(${props.data.cover.data.attributes.url})` }}></div>
                </Link>

            </div>
            <div className="description">
                <div className='tag-container'>
                    {props.data.tags.data.map((tag) => {
                        return <Card.Tag key={tag.attributes.value} data={tag} />
                    })}

                </div>
                <Link className="text-decoration-none link-dark" to={`/post/${props.data.slug}`}><h3>{props.data.title}</h3></Link>

                <div>
                    {props.data.blurb}

                </div>
                <Link className="text-decoration-none" to={`/post/${props.data.slug}`}>
                    Read more
                    <i className="bi bi-arrow-right"></i>
                </Link>

            </div>
        </div>
    )
}

const ARTICLES = gql`
query getArticle{
  articles(filters:{feature:{eq:true}}){
        data{
            id
            attributes{
                createdAt
                slug
                title
                blurb
                feature
                author{
                    data{
                        attributes{
                            name
                            image{
                                data{
                                    attributes{
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
                tags{
                    data{
                        attributes{
                            name
                            value
                        }
                    }
                }
                cover{
                    data{
                        attributes{
                            url
                        }
                    }
                }
            }
        }  
    }
}
`
function FeaturedPosts() {
    const { loading, error, data } = useQuery(ARTICLES) // TODO FIX this
    if (loading) return (<Container><p>Loading...</p></Container>)
    if (error) return (<p>error</p>)
    console.log(data)
    return (
        <section className="pb-5">
            <Container className="px-5 my-5">
                <Row className="gx-5 justify-content-center">
                    <Col lg={8} xl={6} className="mb-4" >

                        <h2 className="fw-bolder text-center">Featured Posts</h2>

                    </Col>
                </Row>
                <Row className="gx-5">
                    {data.articles.data.map((post) => {

                        return < FeaturedPostCard key={post.id} data={post.attributes} />
                    })}

                </Row>


            </Container>
        </section>
    )
}


export default class Post extends Component {
    render() {
        return (
            <div>Post</div>
        )
    }
}

export { Post, FeaturedPosts, FeaturedPostCard, FeaturePostLarge, PostCard, Author }