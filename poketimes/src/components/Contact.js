import React from 'react';

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quis ad aperiam aliquam perferendis necessitatibus dignissimos, at voluptates eligendi dolorum molestias maxime ipsum eum dicta vel nisi optio ex perspiciatis.</p>
        </div>
    )
}

export default Contact;