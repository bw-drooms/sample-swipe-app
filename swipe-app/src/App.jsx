import React from 'react';
import './App.css';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class ListItem extends React.Component {
    render() {
        const classes = (this.props.item.id % 2 == 0 ? 'custom-card-rotate-right' : (this.props.item.id % 3 == 0 ? 'custom-card-rotate-left' : '')) + ' custom-card';

        return (
            <li>
                <mobiscroll.Card 
                    className={classes}
                    theme="ios"
                > 
                    <mobiscroll.CardHeader>
                        <mobiscroll.CardTitle>{this.props.item.title}</mobiscroll.CardTitle>
                        <mobiscroll.CardSubtitle>{this.props.item.desc}</mobiscroll.CardSubtitle>
                    </mobiscroll.CardHeader>
                    <mobiscroll.CardContent>
                        <img draggable="false" src={this.props.item.img} />
                    </mobiscroll.CardContent>
                </mobiscroll.Card> 
            </li>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{
                id: 1,
                title: 'Best places to seek silence',
                desc: 'The Dhamma Giri, a vipassana meditation retreat.',
                img: 'https://img.mobiscroll.com/demos/card_1.png'
            }, {
                id: 2,
                title: 'Best animal adventure',
                desc: 'A young panda tests his climbing skills at the Chengdu Research Base.',
                img: 'https://img.mobiscroll.com/demos/card_2.png'
            }, {
                id: 3,
                title: 'Best places to test your survival skills',
                desc: 'A view across the Turnagain Arm on Alaska\'s Kenai Peninsula.',
                img: 'https://img.mobiscroll.com/demos/card_3.png'
            }, {
                id: 4,
                title: 'Most accessible destinations',
                desc: 'The impressive Mayan site of Chichén Itzá.',
                img: 'https://img.mobiscroll.com/demos/card_4.png'
            }, {
                id: 5,
                title: 'The world’s most extraordinary sleepovers',
                desc: 'Explore the azure depths with a stay at the Manta Resort\'s underwater room.',
                img: 'https://img.mobiscroll.com/demos/card_5.png'
            }]
        };
    }
    
    stages = [{
        percent: -20,
        action: (event, inst) => {
            inst.remove(event.target);
            return false;
        }
    }, {
        percent: 20,
        action: (event, inst) => {
            inst.remove(event.target);
            return false;
        }
    }];

    cycleStages = [{
        percent: -20,
        action: (event, inst) => {
            inst.move(event.target, 0);
            return false;
        }
    }, {
        percent: 20,
        action: (event, inst) => {
            inst.move(event.target, 0);
            return false;
        }
    }];
    
    render() {
        return (
            <div>
                <mobiscroll.Note color="primary">Swipe cards away left or right to clear stack.</mobiscroll.Note>
                <mobiscroll.Listview
                    className="mbsc-card-list custom-card-deck"
                    theme="ios"
                    itemType={ListItem} 
                    data={this.state.items}
                    stages={this.stages}
                    actionable={false}
                />
            </div>
        );
    }
}



export default App;
