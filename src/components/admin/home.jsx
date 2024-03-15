import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { api } from '../../api/api';

function AdminPage() {
    const[blogError,setBlogError] = useState("")
    const [formData, setFormData] = useState({
        blogTitle: '',
        blogDetail: '',
        imageUrl: ''
    });

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(formData.blogDetail.length > 2 || formData.blogTitle > 2 || formData.imageUrl > 5){
            console.log('Form Data:', formData);
            try {
                await fetch(`${api.API_URL}/blog/add-blog`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    description: formData.blogDetail,
                    title: formData.blogTitle,
                    img: formData.imageUrl
                  }),
                })
                  .then((response) => {
                    if (!response.ok) {
                    }
                    return response.json();
                  })
                  .then((response) => {
                    if (response.status === 201) {
                      
                      setFormData({
                        blogDetail:"",
                        blogTitle: "",
                        imageUrl: ""
                        })
                        setBlogError("")
                        window.alert("Blog Posted");
                    }
                  })
                  .catch((error) => {
                    console.log("There was an error with the fetch operation:");
                  });
              } catch (error) {
                console.log("There was an error with the fetch operation:");
              
            };
            
        }
        else{
            console.log("require all")
            setBlogError("All field must have atleast 3 character")
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className='container pt-5 p-5 '>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="blogTitle">
                    <h5 style={{color:"red"}}> {blogError} </h5>
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="blogTitle"
                        placeholder="Enter blog title"
                        value={formData.blogTitle}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="blogDetail">
                    <Form.Label>Blog Detail</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="blogDetail"
                        placeholder="Enter blog detail"
                        value={formData.blogDetail}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="imageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="imageUrl"
                        placeholder="Enter image URL"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    post
                </Button>
            </Form>
        </div>
    );
}

export default AdminPage;
