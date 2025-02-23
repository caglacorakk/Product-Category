import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";
export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!", 2);
    alertify.success(this.state.password + " added to db!", 2);
    alertify.success(this.state.city + " added to db!", 2);
    alertify.success(this.state.description + " added to db!", 2);
  };
  render() {
    return (
      <div>
        <FormGroup>
          <Form onSubmit={this.handleSubmit}>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}></Input>
          </Form>
        </FormGroup>
        <FormGroup>
          <Form onSubmit={this.handleSubmit}>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}></Input>
          </Form>
        </FormGroup>
        <FormGroup>
          <Form onSubmit={this.handleSubmit}>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}></Input>
          </Form>
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="select"
            name="city"
            id="city"
            onChange={this.handleChange}>
            <option value="ank">Ankara</option>
            <option value="ist">İstanbul</option>
            <option value="izm">İzmir</option>
            <option value="bur">Bursa</option>
            <option value="edr">Edirne</option>
          </Input>
        </FormGroup>
        <Button onClick={this.handleSubmit} type="submit">
          Save
        </Button>
      </div>
    );
  }
}
