import React, { Component } from 'react';

import Pedal from './pedal';

class Pedals extends Component {

    render() {

        let pedalsStyle = {
            width: '400px'
        }
        return (
            <div style={{ position: 'relative' }}>
                <Pedal top={-10} left={40} downAmount={50} axis={1} src="/stream-racing-wheel/g920/clutch.png" />
                <Pedal top={-10} left={160} downAmount={50} axis={5} src="/stream-racing-wheel/g920/brake.png" />
                <Pedal top={-20} left={290} downAmount={50} axis={2} src="/stream-racing-wheel/g920/gas.png" />

                <img alt="" style={pedalsStyle} src="/stream-racing-wheel/g920/pedals.png" />
                {/* test */}
            </div>
        )
    }
}


export default Pedals;
