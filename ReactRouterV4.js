// 9.	How do you programmatically navigate using React Router v4?

// The primary way you programmatically navigate using React Router v4 is by using a <Redirect /> component.

// example
class Register extends React.Component {
  state = {
    toDashboard: false,
  };
  handleSubmit = (user) => {
    saveUser(user).then(() =>
      this.setState(() => ({
        toDashboard: true,
      }))
    );
  };
  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <h1>Register</h1>
        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
