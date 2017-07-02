import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "",
            name: "Marc",
            age: 28
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    increaseAge(event) {
        this.setState({
            age: this.state.age+=1
        })
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log("CLICK");
        console.log(this.state.term);
        this.props.setTerm(this.state.term);
        this.setState({term: ""});
    }

    render() {
        console.log(this.props)

        return (

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center"><strong>Search</strong></h3>
                    <p>Name: {this.state.name}</p>
                    <p>Age: {this.state.age}</p>
                    <button onClick={this.increaseAge.bind(this)}>Time to age!</button>
                </div>
                <div className="panel-body text-center">

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <h4 className="topic">Topic</h4>

                            {/*
                             Note how each of the form elements has an id that matches the state.
                             This is not necessary but it is convenient.
                             Also note how each has an onChange event associated with our handleChange event.
                             */}
                            <input
                                type="text"
                                className="form-control text-center"
                                id="term"
                                value={this.state.term}
                                onChange={this.handleChange}
                                required
                            />
                            <br />

                            <h4 className="startYear">Start Year</h4>

                            {/*
                             Note how each of the form elements has an id that matches the state.
                             This is not necessary but it is convenient.
                             Also note how each has an onChange event associated with our handleChange event.
                             */}
                            <input
                                type="text"
                                className="form-control text-center"
                                id="term"
                                value={this.state.term}
                                onChange={this.handleChange}
                                required
                            />
                            <br />

                            <h4 className="endYear">End Year</h4>

                            {/*
                             Note how each of the form elements has an id that matches the state.
                             This is not necessary but it is convenient.
                             Also note how each has an onChange event associated with our handleChange event.
                             */}
                            <input
                                type="text"
                                className="form-control text-center"
                                id="term"
                                value={this.state.term}
                                onChange={this.handleChange}
                                required
                            />
                            <br />

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Submit
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export
default
Form;
