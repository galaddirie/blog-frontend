import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FeaturePostLarge, PostCard } from '../../components/Posts/Post'
import { useQuery, gql } from "@apollo/client"
import './blog.css'
import { useParams } from 'react-router-dom'

const ARTICLES = gql`
query GetArticles{
    articles(sort:"createdAt:desc"){
  
      data{
        id
        
        attributes{
          createdAt
          title
          slug
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

const AOTD = gql`
query GetPrimaryArticle{
    primaryArticles{
      data{
        attributes{
          article{
            data{
              attributes{
                createdAt
                title
                slug
                blurb
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
      }
    }
  }
`
function PrimaryArticle() {
  const { loading, error, data } = useQuery(AOTD)
  if (loading) return (<Container><p>Loading...</p></Container>)
  if (error) return (<p>error</p>)

  return (<>
    {data.primaryArticles.data.map((post) => {
      console.log(data.primaryArticles.data)
      return <FeaturePostLarge key={`AOTD`} data={post.attributes} />
    })}
  </>)

}
const TAG_TO_ARTICLE = gql`
query getArticleFromTags($value: String!){
    tags(filters:{value:{eq:$value}}){
      data{
        attributes{
          name
          value
          articles(sort:"createdAt:desc"){
            data{
              attributes{
                title
                slug
                createdAt
                blurb
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
              }
            }
          }
        }
      }
    }
  }
`
function ArticlesFromTags() {
  const { value } = useParams()
  const { loading, error, data } = useQuery(TAG_TO_ARTICLE, {
    variables: {
      'value': value
    }
  })
  if (loading) return (<Container><p>Loading...</p></Container>)
  if (error) return (<p>error</p>)
  const articles = data.tags.data[0].attributes.articles
  console.log(data)
  return (
    <Container className='py-5'>
      <h1 className="fw-bolder fs-1 mb-4">Blender NPR Blog</h1>
      <h2 className="fw-bolder fs-1 mb-4">Tag: {data.tags.data[0].attributes.name}</h2>
      <div className='' >
        <Row>
          {articles.data.map((post) => {
            return <Col lg={6}>< PostCard key={post.id} data={post.attributes} /></Col>
          })}
        </Row>
      </div>
    </Container>

  )
}

export default function BlogList() {
  const { loading, error, data } = useQuery(ARTICLES)
  if (loading) return (<Container><p>Loading...</p></Container>)
  if (error) return (<p>error</p>)

  return (
    <main>
      <Container className=''>
        <h1 className="fw-bolder fs-1 mb-4">Blender NPR Blog</h1>
        <PrimaryArticle />
        <h3 className="font-weight-bold mb-0 mt-5">Recent Posts</h3>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className='' >
          <Row className='my-4'>
            {data.articles.data.map((post) => {

              return <Col lg={6} className="card-parent">< PostCard key={post.id} data={post.attributes} /></Col>
            })}
          </Row>
        </div>
        <div class="blog-card-container">




        </div>
      </Container>
    </main>
  )
}

export { BlogList, ArticlesFromTags }