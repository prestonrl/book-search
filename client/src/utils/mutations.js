import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
        }
    }
`;

export const SAVE_BOOK = gql`
	mutation saveBook($authors: [String]!, $bookId: Int!, $image: String!, $link: String!, $title: String!, $description: String!) {
		saveBook(authors: $authors, bookId: $bookId, image: $image, link: $link, title: $title, description: $description) {
			_id
			username
			savedBooks {
				bookId
				authors
				description
				image
				link
				title
			}
		}
	}
`;

export const REMOVE_BOOK = gql`
	mutation removeBook($bookId: ID!) {
		removeBook(bookId: $bookId) {
			_id
			username
			savedBooks {
				authors
				description
				bookId
				image
				link
				title
			}
		}
	}
`;