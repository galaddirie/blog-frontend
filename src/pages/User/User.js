import { Container } from "react-bootstrap";
import { Author } from "../../components/Posts/Post";

export default function UserPage() {
    return (
        <Container className="d-flex align-items-center my-auto flex-column">
            <img className="rounded-circle me-3" src={`/img/naruto.jpg`} alt="user icon" width={100} height={100} />
            <div>
                <a className="nav-icon me-1" href="https://twitter.com/im_galad">
                    <i className="bi bi-twitter"></i>
                </a>
                <a className="nav-icon me-3" href="#">
                    <i className="bi bi-discord"></i>
                </a>
            </div>

        </Container>
    )
}