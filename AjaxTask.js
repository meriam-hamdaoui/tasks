// 1.	How to make AJAX call and in which component lifecycle methods should I make an AJAX call?

/* the answer :
 We can use AJAX libraries such as Axios, JQuery AJAX and browsers built-in fetch.
We fetch data in the componentDidMount() lifecycle method with class component React, or using the useEffect() method with function component React :
*/

// class component example :
class TheComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          data: result.data,
          loading: true,
          error: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: true,
          error,
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;
    if (error) return <div>Error : {error.message}</div>;
    if (!loading) return <div>Loading...</div>;
    return (
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            {el.firstName} {el.lastName}
          </li>
        ))}
      </ul>
    );
  }
}

//function component example (react hooks)
const TheComponent = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((result) => {
        setLoading(true);
        setData(result);
      })
      .catch((error) => {
        setLoading(true);
        setError(error);
      });
  }, []);

  return (
    <div>
      {error && <span>Error : {error.message}</span>}
      {loading && <span>Loading...</span>}
      {
        <ul>
          {data.map((el) => (
            <li key={el.id}>
              {el.firstName} {el.lastName}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
