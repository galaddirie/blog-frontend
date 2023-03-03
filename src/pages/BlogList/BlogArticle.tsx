import React, { useEffect } from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap'

import { Author } from '../../components/Posts/Post';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown'
import { Tag } from '../../components/Card/Card'
const ARTICLE = gql`
query getArticle($slug: String!){
  articles(filters:{slug:{eq:$slug}}){
        data{
            id
            attributes{
                createdAt
                title
                body
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

function TableOfContent() {

    useEffect(() => {
        /* SNIPPET https://codepen.io/GeoffreyCrofte/pen/xOPdLZ
        
         */

        var toc = function () {
            var toc = "";
            var level = 0;

            var contents = document.getElementById("contents")
            if (!contents) return;
            contents.innerHTML =
                contents.innerHTML.replace(
                    /<h([\d])>([^<]+)<\/h([\d])>/gi,
                    function (str, openLevel, titleText, closeLevel) {
                        if (openLevel !== closeLevel) {

                            return str + ' - ' + openLevel;
                        }

                        if (openLevel > level) {
                            toc += (new Array(openLevel - level + 1)).join("<ol>");
                        } else if (openLevel < level) {
                            toc += (new Array(level - openLevel + 1)).join("</ol>");
                        }

                        level = parseInt(openLevel);

                        var anchor = titleText.replace(/[^0-9a-z]/gi, "-").replace(/^[^a-z\d]*|[^a-z\d]*$/gi, '');
                        toc += "<li><a href=\"#" + anchor.toLowerCase() + "\">" + titleText
                            + "</a></li>";

                        return "<h" + openLevel + ` id=${anchor.toLowerCase()} name=${anchor.toLowerCase()}>`
                            + titleText + "</h" + closeLevel + ">";
                    }
                );

            if (level) {
                toc += (new Array(level + 1)).join("</ol>");
            }
            const toc_element = document.getElementById("toc")
            if (!toc_element) return;
            toc_element.innerHTML += toc;
        };

        toc()

    });

    return (
        <div className='table-of-contents-container py-4'>
            <aside id="toc" className="sidebar table-of-contents bg-light">
                <h2>Table of Contents</h2>

            </aside>

        </div>
    )

}

export default function BlogArticle() {
    const { slug } = useParams()

    const { loading, error, data } = useQuery(ARTICLE, {
        variables: {
            'slug': slug
        }
    })
    if (loading) return (<Container><p>Loading...</p></Container>)
    if (error) return (<p>error</p>)
    console.log(data.articles.data[0].attributes)
    const post = data.articles.data[0].attributes

    return (
        <Container className='py-5'>

            <section className="">

                <Row className=''>



                    <Col xl={8} className="d-flex justify-content-center mx-auto">
                        <article className='post-content '>

                            <header className="mb-4">

                                <h1 className="fw-bolder mb-1">{post.title}</h1>
                                <div className='tag-container'>
                                    {post.tags.data.map((tag: any) => {

                                        return <Tag key={tag.attributes.value} data={tag} />
                                    })}
                                </div>
                                <Author date={post.createdAt}
                                    //@ts-ignore
                                    className="mt-lg-5 mb-4"
                                />

                            </header>

                            <figure className="mb-4"><img className="img-fluid rounded" src={`${post.cover.data.attributes.url}`} alt="..." width={'100%'} /></figure>
                            <TableOfContent />
                            <section id="contents" className="mb-5 article-content">
                                <ReactMarkdown
                                    children={`${post.body}`}

                                />
                            </section>
                        </article>
                    </Col>
                </Row>
            </section>

            <section className='article-footer'>
                <Row>
                    {/* <Col xl={1}></Col> */}
                    <Col xl={12} className='comment-section bg-light'></Col>
                </Row>
            </section>


        </Container>
    )
}
