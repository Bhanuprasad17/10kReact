import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props); // ✅ receives props here
    console.log(this.props); // "Bittu"
  }

  render() {
    let labels = this.props.labels;
    let fields = this.props.fields;
    console.log(labels);
    console.log(fields);
    return (
      <>
        {/* <h1>{this.props}</h1> */}

        <form action="">
          {fields.map((obj, index) => {
            console.log(labels[index]);
            return (
              <>
                <label htmlFor={labels[index]}>{labels[index]} : </label>
                <input
                  type={obj.type}
                  placeholder={obj.placeholder}
                  name={obj.type}
                />
                <br />
              </>
            );
          })}
          <button>submit</button>
        </form>
      </>
    );
  }
}

export default Child;
