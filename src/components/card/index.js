import React from 'react';


class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flipped: false
        };

        this.flip = this.flip.bind(this);
    }

    flip() {
        this.setState({
            flipped: !this.state.flipped
        });
    }

    render() {
        const flipped = this.state.flipped;
        return (
            <div onClick={this.flip} className={flipped? 'flipped Card' : 'Card'}>
                <div className="card">
                    <div className="face front jp">
                        jp
                    </div>
                    <div className="face back">
                        en
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
