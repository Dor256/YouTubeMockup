import React, { ChangeEvent, FormEvent } from "react";

type Props =  {
    onFormSubmit: (term: string) => void;
}

type State =  {
    term: string;
}

class SearchBar extends React.Component<Props, State> {
    state = {term: ""};

    onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            placeholder="Search"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;